import React from "react";

type Props = {
   number: number;
   currentPage: number;
   onClick: () => void;
};

export default function Page({ number, currentPage, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className={`aspect-square w-7 sm:w-10 grid place-content-center rounded-lg ${
            currentPage === number ? "bg-main-orange" : ""
         }`}
      >
         <span className="text-xs sm:text-sm">{number}</span>
      </button>
   );
}
