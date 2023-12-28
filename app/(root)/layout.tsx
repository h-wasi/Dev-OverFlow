import RSidebar from "@/components/shared/RSidebar";
import LSidebar from "@/components/shared/LSidebar";
import Navbar from "@/components/shared/navbar/navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light-850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pt-36 pb-6 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RSidebar />
      </div>
    </main>
  );
}

export default layout;
