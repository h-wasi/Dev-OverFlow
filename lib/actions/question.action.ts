"use server";

import Question from "@/database/question.model";
import { connectionToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";

export async function createQuestion(params: any) {
  try {
    connectionToDatabase();
    const { title, content, tags, author, path } = params;
    const question = await Question.create({
      title,
      content,
      author,
    });
    const tagDocuments = [];
    for (const tag of tags) {
      const existintTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true }
      );
      tagDocuments.push(existintTag._id);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
    //Create an intersection record for ask-question action

    //Increment author's reputation by +5 for creating a question
  } catch (error) {}
}

const dummyUser = {
  clerkId: "1234567890",
  name: "Dummy Name",
  userName: "dummyUserName",
  email: "dummy@email.com",
  password: "dummyPassword",
  bio: "Dummy bio",
  picture: "dummyPicture.jpg",
  location: "Dummy Location",
  portfolioWebsite: "http://dummywebsite.com",
  reputation: 100,
  saved: [],
  joinedAt: new Date(),
};
