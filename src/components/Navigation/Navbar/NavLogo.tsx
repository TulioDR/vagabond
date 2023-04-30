import Link from "next/link";
import React from "react";

type Props = {
   isSidebarOpen: boolean;
};

export default function NavLogo({ isSidebarOpen }: Props) {
   return (
      <Link
         href="/"
         className={`font-black text-3xl font-oswald uppercase ${
            isSidebarOpen ? "text-white sm:text-inherit" : ""
         }`}
      >
         Vagabond
      </Link>
   );
}
