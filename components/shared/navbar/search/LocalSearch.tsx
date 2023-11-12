"use client";
import React from "react";
import { Input } from "../../../ui/input";
import Image from "next/image";

interface Props {
  placeholder: string;
  imgSrc: string;
  route: string;
  iconPosition: string;
  otherClasses?: string;
}

function LocalSearch({
  placeholder,
  imgSrc,
  route,
  iconPosition,
  otherClasses,
}: Props) {
  return (
    <div
      className={`background-light800_darkgradient w-full flex items-center gap-4  rounded-xl px-4 grow min-h-[56px] ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        ></Image>
      )}
      <Input
        type="text"
        placeholder={placeholder}
        // value={""}
        // onChange={() => {}}
        className="paragraph-regular no-focus placeholder border-none shadow-none outline-none background-light800_darkgradient"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        ></Image>
      )}
    </div>
  );
}

export default LocalSearch;
