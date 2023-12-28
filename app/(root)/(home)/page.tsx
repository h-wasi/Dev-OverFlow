import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/navbar/search/LocalSearch";
import { HomePageFilters } from "@/constants/filters";
import HomePageFilter from "@/components/shared/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCards from "@/components/shared/cards/QuestionCards";
import { getQuestions } from "@/lib/actions/question.action";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",
    },
    upvotes: 101506,
    views: 1000007,
    answers: [],
    createdAt: new Date("2022-12-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "3", name: "html" },
      { _id: "4", name: "css" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",
    },
    upvotes: 35001,
    views: 150000002,
    answers: [],
    createdAt: new Date("2023-09-02T10:30:00.000Z"),
  },
];

export default async function Home() {
  // const result = await getQuestions({});

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex gap-5 max-sm:flex-col sm:items-center md:items-start md:flex-col">
        <LocalSearch
          imgSrc={"/assets/icons/search.svg"}
          placeholder="Search for questions"
          route="/"
          iconPosition="left"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses={"min-h-[56px] sm:min-w-[70px]"}
          containerClasses={"hidden max-md:flex"}
        />
        <HomePageFilter />
      </div>
      <div className="mt-10 flex flex-col w-full">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCards
              key={question._id}
              title={question.title}
              tags={question.tags}
              _id={question._id}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            desc="Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involved! 💡"
            link="/ask-question"
            linkQuest="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
