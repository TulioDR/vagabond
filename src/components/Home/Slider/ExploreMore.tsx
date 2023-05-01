import { useEffect, useState } from "react";

type Props = { onClick: () => void };

export default function ExploreMore({ onClick }: Props) {
   const [stringArray, setStringArray] = useState<string[]>([]);
   useEffect(() => {
      const string = "Explore More • Explore More • ";
      setStringArray(string.split(""));
   }, []);

   return (
      <div className="relative rounded-full aspect-square w-28 p-5">
         <button
            onClick={onClick}
            className="rounded-full w-full h-full grid place-content-center bg-white"
         >
            <span className="material-icons !text-4xl !text-black">east</span>
         </button>
         <div className="absolute w-full h-full text-white top-0 left-0 text-xs uppercase -z-10 animate-[spin_15s_linear_infinite]">
            {stringArray.map((char, i) => (
               <span
                  key={i}
                  style={{
                     rotate: `${i * 12}deg`,
                  }}
                  className="absolute left-1/2 h-1/2 origin-bottom-left "
               >
                  {char}
               </span>
            ))}
         </div>
      </div>
   );
}
