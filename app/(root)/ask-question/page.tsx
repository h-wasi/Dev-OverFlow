import Questions from "@/components/shared/forms/Questions";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

async function page() {
  // const { userId } = auth();
  const userId = "123456789";
  // if (!userId) redirect("/sign-in");
  const mongoUser = await getUserById({ userId });
  console.log(mongoUser);

  return (
    <div className="mt-9">
      <Questions />
    </div>
  );
}

export default page;
