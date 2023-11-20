"use server";

import { connectionToDatabase } from "../mongoose";

export async function createQuestion(params:any) {
  try {
    connectionToDatabase();
  } catch (error) {}
}
