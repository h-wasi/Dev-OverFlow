"use client";
import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

function HomePageFilter() {
  const active = "frequent";
  return (
    <div className="mt-10 flex-wrap gap-3 md:flex hidden">
      {HomePageFilters.map((f, i) => (
        <Button
          key={f.value}
          className={`body-medium rounded-lg px-6 py-3 shadow-none capitalize ${
            active === f.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-400 hover:bg-light-850 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          }`}
        >
          {f.name}
        </Button>
      ))}
    </div>
  );
}

export default HomePageFilter;
