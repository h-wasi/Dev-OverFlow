import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  title: string;
  desc: string;
  link: string;
  linkQuest: string;
}

////need to enter title, desc, link, linkQuest as props

function NoResult({ title, desc, link, linkQuest }: Props) {
  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center">
      <Image
        width={270}
        height={200}
        alt="No Results"
        src={"/assets/images/light-illustration.png"}
        className="block object-contain dark:hidden"
      />
      <Image
        width={270}
        height={200}
        alt="No Results"
        src={"/assets/images/dark-illustration.png"}
        className="dark:flex object-contain hidden"
      />
      <h2 className="h2-bold text-dark200_light900">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {desc}
      </p>
      <Link href={link}>
        <Button className="bg-primary-500 min-h-[46px] px-4 py-3 text-light-900 rounded-lg paragraph-medium hover:bg-primary-500 dark:bg-primary-500 dark:to-light-900">
          {linkQuest}
        </Button>
      </Link>
    </div>
  );
}

export default NoResult;
