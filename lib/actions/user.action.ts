"use server";
import User from "@/database/user.model";
import Question from "@/database/question.model";
import { connectionToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getUserById(params: any) {
  try {
    connectionToDatabase();
    const { userId } = params;
    const user = await User.findOne({
      clerkId: userId,
    });
    if (!user) {
      throw new Error(`No user found`);
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectionToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function updateUser(params: UpdateUserParams) {
  try {
    connectionToDatabase();
    const { clerkId, updateData, path } = params;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function deleteUser(params: DeleteUserParams) {
  try {
    connectionToDatabase();
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });
    if (!User) {
      throw new Error("user not found");
    }
    //Delete user from database
    //and questions, answers, comments, etc..
    //get user question ids
    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    );
    const deletedUser = await Question.deleteMany({ author: user._id });
    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
