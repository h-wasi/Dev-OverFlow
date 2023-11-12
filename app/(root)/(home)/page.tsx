import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/navbar/search/LocalSearch";
import { HomePageFilters } from "@/constants/filters";
import HomePageFilter from "@/components/shared/HomeFilters";

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
        <div className="flex justify-start gap-6">
          <Filter
            filters={HomePageFilters}
            otherClasses={"min-h-[56px] sm:min-w-[70px]"}
            containerClasses={"hidden max-md:flex"}
          />
          <HomePageFilter />
          {/* {Filters.map((f, i) => (
            <>
              <Button
                className="py-3 max-md:hidden mt-3 text-light-500 capitalize px-4 background-light800_darkgradient"
                key={f._id}
              >
                {f.name}
              </Button>
            </>
          ))}
          */}
        </div>
      </div>
    </>
  );
}
