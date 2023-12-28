"use server";

import User from "@/database/user.model";
import { connectionToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export default async function getTopInteractedTags(
  params: GetTopInteractedTagsParams
) {
  try {
    connectionToDatabase();
    const { userId, limit = 3 } = params;
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    //find interactions for the users and group by tags....
    //interactions
    return ["tag1", "tag2", "tag3"];
  } catch (error) {
    console.error(error);
  }
}
