"use client";
import React from "react";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { Item } from "@radix-ui/react-menubar";

function Theme() {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="bg-transparent shadow-none border-none relative">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="theme"
              className="active-theme"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="theme"
              className="active-theme"
              width={20}
              height={20}
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300 bg-slate-300">
          {
            themes.map((theme) => (
              <MenubarItem
                key={theme.value}
                onClick={() => {
                  setMode(theme.value);
                  theme.value != "system"
                    ? (localStorage.theme = theme.value)
                    : localStorage.removeItem('theme');
                }}
                className="dark:focus:bg-dark-400 flex items-center gap-4 px-2.5 py-2"
              >
                <Image
                  src={theme.icon}
                  alt={theme.label}
                  width={20}
                  height={20}
                  className={`${mode === theme.value && "active-theme"}`}
                />
                <p
                  className={`body-semibold text-light-500 ${
                    mode === theme.value
                      ? "text-primary-500"
                      : "text-dark100_light900"
                  }`}
                >
                  {theme.label}
                </p>
              </MenubarItem>
            ))
            // console.log(document.);
          }
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default Theme;
