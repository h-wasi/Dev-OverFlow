"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export default async function getTopInteractedTags(
  params: GetTopInteractedTagsParams
) {
  try {
    connectToDatabase();
    const { userId, limit = 3 } = params;
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    //find interactions for the users and group by tags....
    //interactions
    return [
      { name: "tag1", _id: 1 },
      { name: "tag2", _id: 2 },
      { name: "tag3", _id: 3 },
    ];
  } catch (error) {
    console.error(error);
  }
}
