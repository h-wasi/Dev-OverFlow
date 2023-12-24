"use server";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import Question from "@/database/question.model";
import { connectionToDatabase } from "../mongoose";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import path from "path";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectionToDatabase();
    const questions = await Question.find({})
      .populate({
        path: "tags",
        model: Tag,
      })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectionToDatabase();
    const { title, content, tags, author, path } = params;
    const question = await Question.create({
      title,
      content,
      author,
    });
    // const tagDocuments = [];
    // for (const tag of tags) {
    //   const existintTag = await Tag.findOneAndUpdate(
    //     { name: { $regex: new RegExp(`^${tag}$`, "i") } },
    //     { $setOnInsert: { name: tag }, $push: { question: question._id } },
    //     { upsert: true }
    //   );
    //   tagDocuments.push(existintTag._id);
    // }
    // await Question.findByIdAndUpdate(question._id, {
    //   $push: { tags: { $each: tagDocuments } },
    // });
    //temp solution
    const tagPromises = tags.map(async (tag: string) => {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        {
          $setOnInsert: { name: tag },
          $push: { question: question._id },
        },
        { upsert: true, new: true }
      );
      return existingTag._id;
    });
    const tagDocuments = await Promise.all(tagPromises);
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
    //Create an interaction record for ask-question action

    //Increment author's reputation by +5 for creating a question
    revalidatePath(path);
  } catch (error) {}
}
