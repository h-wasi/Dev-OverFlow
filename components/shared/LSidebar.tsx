"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SidebarLink } from "@/constants";
import { sidebarLinks } from "@/constants/constant";
import { usePathname } from "next/navigation";

function LSidebar() {
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-col justify-center gap-4">
        {sidebarLinks.map((item, i) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return item.label !== "Profile" ? (
            <Link
              href={item.route}
              key={i}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4 max-lg:justify-center`}
            >
              <Image
                className={`${isActive ? "" : "invert-colors"}`}
                src={item.imgURL}
                width={20}
                height={20}
                alt={item.label}
              ></Image>
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium "
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          ) : (
            <SignedIn key={i}>
              <Link
                key={crypto.randomUUID()}
                href={item.route}
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 bg-transparent p-4`}
              >
                <Image
                  className={`${isActive ? "" : "invert-colors"}`}
                  src={item.imgURL}
                  width={20}
                  height={20}
                  alt={item.label}
                ></Image>
                <p
                  className={`${
                    isActive ? "base-bold" : "base-medium "
                  } max-lg:hidden`}
                >
                  {item.label}
                </p>
              </Link>
            </SignedIn>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        <SignedOut>
          <Link href={"/sign-in"}>
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src={"/assets/icons/account.svg"}
                alt="login"
                className="invert-colors lg:hidden"
                width={20}
                height={20}
              ></Image>
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>

          <Link href={"/sign-up"}>
            <Button className="small-medium light-border-2 btn-tertiary min-h-[40px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
              <Image
                src={"/assets/icons/sign-up.svg"}
                alt="signup"
                className="invert-colors lg:hidden"
                width={20}
                height={20}
              ></Image>
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </SignedOut>
      </div>
    </section>
  );
}

export default LSidebar;
