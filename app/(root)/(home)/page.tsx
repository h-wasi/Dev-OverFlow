import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/navbar/search/LocalSearch";
import { HomePageFilters } from "@/constants/filters";
import HomePageFilter from "@/components/shared/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCards from "@/components/shared/cards/QuestionCards";

const questions = [
  {
    title: "How to Use React Hooks?",
    tags: [
      { _id: "tag1", name: "React" },
      { _id: "tag2", name: "Hooks" },
    ],
    _id: "question1",
    author: {
      _id: "author1",
      name: "John Doe",
    },
    upvotes: 4200324,
    views: 153444,
    answers: [],
    createdAt: new Date("2016-01-01T12:00:00"),
  },
  {
    title: "Exploring the depths of Neural Networks",
    tags: [
      { _id: "tag7", name: "AI" },
      { _id: "tag12", name: "Neural Networks" },
    ],
    _id: "question5",
    author: {
      _id: "author9",
      name: "Michael Rodriguez",
    },
    upvotes: 42,
    views: 120,
    answers: [],
    createdAt: new Date("2021-01-01T12:00:00"),
  },
  {
    title: "What is Python's Flask framework?",
    tags: [
      { _id: "tag3", name: "Python" },
      { _id: "tag4", name: "Flask" },
    ],
    _id: "question2",
    author: {
      _id: "author4",
      name: "Emily Brown",
    },
    upvotes: 28,
    views: 97,
    answers: [],
    createdAt: new Date("2023-01-01T12:00:00"),
  },
  {
    title: "What is Python's Flask framework?",
    tags: [
      { _id: "tag3", name: "Python" },
      { _id: "tag4", name: "Flask" },
    ],
    _id: "answer3",
    author: {
      _id: "author1",
      name: "John Doe",
    },
    content: "Flask is a micro web framework for Python...",
    upvotes: 20,
    views: 120,
    answers: [],
    createdAt: new Date("2022-01-01T12:00:00"),
  },
  {
    title: "What is Python's Flask framework?",
    tags: [
      { _id: "tag3", name: "Python" },
      { _id: "tag4", name: "Flask" },
    ],
    _id: "answer4",
    author: {
      _id: "author5",
      name: "Sophia Lee",
    },
    content: "It's great for building web applications...",
    upvotes: 12,
    views: 99,
    answers: [],
    createdAt: new Date("2019-01-01T12:00:00"),
  },
];

export default function Home() {
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
          questions.map((q) => (
            <QuestionCards
              key={q._id}
              title={q.title}
              tags={q.tags}
              _id={q._id}
              author={q.author}
              upvotes={q.upvotes}
              views={q.views}
              answers={q.answers}
              createdAt={q.createdAt}
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
