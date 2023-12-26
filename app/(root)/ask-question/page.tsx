import Questions from "@/components/shared/forms/Questions";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { json } from "node:stream/consumers";
import React from "react";

async function page() {
  const userId = "123456789";
  // const { userId } = auth(); replace above line with it when using MongoDB real data
  if (!userId) redirect("/sign-in");
  const mongoUser = await getUserById({ userId });
  return (
    <div className="mt-9">
      <h1 className="h1-bold text-dark100_light900 mb-6">Ask a Question</h1>
      <Questions mongoUserId={JSON.stringify(mongoUser._id)} />
    </div>
  );
}

export default page;
