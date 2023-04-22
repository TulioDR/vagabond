import Image from "next/image";
import bag from "@/assets/img/bag.jpg";

type Props = {};

export default function BlogPost({}: Props) {
   return (
      <div className="w-full grid sm:grid-cols-2 gap-5 sm:gap-10 2xl:gap-20">
         <div className="aspect-[5/4] overflow-hidden rounded-2xl w-full">
            <Image src={bag} alt="bag" className="object-cover w-full h-full" />
         </div>
         <div className="w-full flex flex-col justify-between space-y-5 sm:space-y-0">
            <p className="text-base sm:text-lg md:text-xl 2xl:text-3xl !leading-tight line-clamp-2 xl:line-clamp-3">
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry.
            </p>
            <p className="text-xs md:text-sm 2xl:text-lg line-clamp-3 md:line-clamp-5 lg:line-clamp-2 text-gray-300">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
               itaque maxime soluta cumque aperiam ullam perferendis ipsum
               eligendi corporis, quos quaerat asperiores fugiat quod similique
               officia ut earum tempore ex incidunt optio? Rerum ipsa, ipsam
               tempora expedita ratione consequatur minus error similique
               nesciunt sunt nulla vero totam sed voluptate delectus?
            </p>
            <button className="py-2 px-5 w-max rounded-full border border-white text-white hover:text-black hover:bg-white">
               Read More
            </button>
         </div>
      </div>
   );
}
