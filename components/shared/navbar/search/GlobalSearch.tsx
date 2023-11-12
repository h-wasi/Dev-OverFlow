// "use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

function GlobalSearch() {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="relative background-light800_darkgradient flex items-center gap-1 rounded-xl px-4 grow min-h-[56px]">
        <Image
          src={"/assets/icons/search.svg"}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer "
        ></Image>
        <Input
          type="text"
          placeholder="Search Globally"
          // value={""}
          // onChange={() => {}}
          className="paragraph-regular no-focus placeholder border-none shadow-none outline-none background-light800_darkgradient"
        />
      </div>
    </div>
  );
}

export default GlobalSearch;
