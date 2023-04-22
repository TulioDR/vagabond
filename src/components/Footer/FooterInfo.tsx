import React from "react";

type Props = {
   title: string;
   list: any[];
};

export default function FooterInfo({ title, list }: Props) {
   return (
      <div>
         <div className="sm:mx-auto">
            <h4 className="font-bold text-base sm:text-lg md:text-xl">
               {title}
            </h4>
            <ul className="mt-5 space-y-1">
               {list.map((info, index) => (
                  <li
                     key={index}
                     className="text-xs sm:text-sm md:text-md cursor-pointer text-gray-400 font-semibold hover:underline"
                  >
                     {info}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
