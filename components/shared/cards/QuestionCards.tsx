import React from "react";
import Link from "next/link";
import RenderTag from "../RenderTag";
import Metric from "../metric";
import { getTimeStamps } from "@/lib/utils";
import { divideNumber } from "@/lib/utils";
interface QProps {
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  _id: string;
  author: {
    _id: string;
    name: string;
  };
  createdAt: Date;
  upvotes: number;
  views: number;
  answers: Array<object>;
}

function QuestionCards({
  title,
  _id,
  answers,
  author,
  tags,
  upvotes,
  views,
  createdAt,
}: QProps) {
  return (
    <div className="card-wrapper p-9 sm:px-11 rounded-[10px] mt-5">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row ">
        <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
          {getTimeStamps(createdAt)}
        </span>
        <Link href={""}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
            {title}
          </h3>
          {/* if signed in add delete,edit actions */}
        </Link>
      </div>
      <div className="mt-3 5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <RenderTag key={t._id} _id={t._id} name={t.name} />
        ))}
      </div>
      <div className="flex flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt={"user"}
          title={`asked ${getTimeStamps(createdAt)}`}
          value={author.name}
          textStyles={"body-medium text-dark400_light700"}
          href={`/profile/${author._id}`}
          isAuthor
        />
        <Metric
          imgUrl={"/assets/icons/like.svg"}
          alt={"Upvotes"}
          title="Votes"
          value={divideNumber(upvotes)}
          textStyles={"small-medium text-dark400_light800"}
        />
        <Metric
          imgUrl={"/assets/icons/message.svg"}
          alt={"message"}
          title="Message"
          value={divideNumber(answers.length)}
          textStyles={"small-medium text-dark400_light800"}
        />
        <Metric
          imgUrl={"/assets/icons/eye.svg"}
          alt={"eye"}
          title="Views"
          value={divideNumber(views)}
          textStyles={"small-medium text-dark400_light800"}
        />
      </div>
    </div>
  );
}

export default QuestionCards;
