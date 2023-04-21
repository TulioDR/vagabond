import quoteImg from "@/assets//img/quote.webp";
import Image from "next/image";

export default function Quote() {
   return (
      <div className="relative w-full h-96 rounded-3xl overflow-hidden">
         <Image
            src={quoteImg}
            alt="quote"
            fill
            sizes="100%"
            className="object-cover"
         />
         <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center space-y-5 px-5 lg:px-10 xl:px-20">
            <div className="uppercase text-center font-bold text-lg sm:text-lg md:text-5xl tracking-tighter font-oswald">
               <div>Fashion is what designers offer you</div>
               <div>four times a year.</div>
               <div>And style,</div>
               <div>is what you choose</div>
            </div>
            <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
               Lauren Hutton
            </div>
         </div>
      </div>
   );
}
