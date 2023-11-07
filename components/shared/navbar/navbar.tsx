import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={"/assets/image/site-logo.svg"}
          width={23}
          height={23}
          alt="dev-flow"
        />
      </Link>
    </nav>
  );
}
export default Navbar;
