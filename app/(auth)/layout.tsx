import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
}

export default layout;
