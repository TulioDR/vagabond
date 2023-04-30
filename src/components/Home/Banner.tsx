import Subtitle from "../PageTitle";

export default function Banner() {
   return (
      <div className="bg-brown rounded-3xl py-10 px-5 lg:px-10 xl:px-20 flex flex-col">
         <div className="flex-1 flex flex-col space-y-5 xl:space-y-10 justify-center">
            <Subtitle>
               <div className="">Elegant Leather</div>
               <div className="">{"Men's Backpacks"}</div>
            </Subtitle>
            <div className="text-xs lg:text-sm 2xl:text-base text-gray-300 pr-10 lg:pr-20">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Similique, architecto tempore velit distinctio esse, ducimus
               deleniti fugiat asperiores, quidem suscipit harum vel et. Quod,
               tempore!
            </div>
            <button className="rounded-full bg-main-orange text-black px-4 py-2 w-max text-sm">
               Explore More
            </button>
         </div>
         <div className="flex space-x-3 items-center mt-5 md:mt-0">
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
