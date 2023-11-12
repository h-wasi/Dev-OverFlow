import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";

const hotQuests = [
  { _id: 1, title: "how to earn money without doing anything ?" },
  { _id: 2, title: "how to earn money without doing anything ?" },
  { _id: 3, title: "how to earn money without doing anything ?" },
  { _id: 4, title: "how to earn money without doing anything ?" },
  { _id: 5, title: "how to earn money without doing anything ?" },
];
const popularTags = [
  { _id: 1, name: "typescript", totalQuestions: 5 },
  { _id: 2, name: "javascript", totalQuestions: 5 },
  { _id: 3, name: "react", totalQuestions: 5 },
  { _id: 4, name: "angular", totalQuestions: 5 },
  { _id: 5, name: "vue", totalQuestions: 5 },
  { _id: 6, name: "Next", totalQuestions: 5 },
];
function RSidebar() {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden w-[350px] max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuests.map((q) => (
            <Link
              href={`/questions/${q._id}`}
              key={q._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{q.title}</p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                width={20}
                height={20}
                className="invert-colors"
                alt="chevron"
              ></Image>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((t) => (
            <RenderTag
              key={t._id}
              _id={t._id}
              name={t.name}
              nums={t.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RSidebar;
