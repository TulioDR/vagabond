import React from "react";

type Props = {
   isSidebarOpen: boolean;
};

export default function Vagabond({ isSidebarOpen }: Props) {
   return (
      <div
         className={`font-black text-3xl font-oswald uppercase ${
            isSidebarOpen ? "text-white sm:text-inherit" : ""
         }`}
      >
         Vagabond
      </div>
   );
}
