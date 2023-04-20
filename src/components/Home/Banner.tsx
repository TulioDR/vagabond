import React from "react";

type Props = {};

export default function Banner({}: Props) {
   return (
      <div className="bg-brown rounded-3xl px-5 py-5 lg:px-14 2xl:px-20 flex flex-col">
         <div className="flex-1 flex flex-col space-y-5 justify-center">
            <div className="text-3xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[90px] font-extrabold tracking-tighter min-w-max">
               <div className="">Elegant Leather</div>
               <div className="">Men's Backpacks</div>
            </div>
            <div className="text-xs lg:text-sm 2xl:text-base text-gray-300 pr-10 lg:pr-20">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Similique, architecto tempore velit distinctio esse, ducimus
               deleniti fugiat asperiores, quidem suscipit harum vel et. Quod,
               tempore!
            </div>
            <button className="rounded-full bg-orange-300 text-black px-4 py-2 w-max text-sm">
               Explore More
            </button>
         </div>
         <div className="flex space-x-3 items-center mt-5 md:mt-0 lg:pb-5">
            <div className="text-brown bg-white rounded-full aspect-square w-8 grid place-content-center">
               <span className="material-icons">place</span>
            </div>
            <span>
               Great Britain, <strong>London</strong>
            </span>
         </div>
      </div>
   );
}
