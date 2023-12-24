"use server";
import User from "@/database/user.model";
import { connectionToDatabase } from "../mongoose";

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
