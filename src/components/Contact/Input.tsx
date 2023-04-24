import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
   placeholder: string;
   textarea?: true;
}

export default function Input({ placeholder, textarea }: Props) {
   const [isFocused, setIsFocused] = useState<boolean>(false);
   return (
      <div className="relative">
         {textarea ? (
            <textarea
               onFocus={() => setIsFocused(true)}
               onBlur={() => setIsFocused(false)}
               className="h-32 outline-none w-full"
            />
         ) : (
            <input
               type="text"
               placeholder={placeholder}
               onFocus={() => setIsFocused(true)}
               onBlur={() => setIsFocused(false)}
               className="h-10 outline-none"
            />
         )}
         <div className="absolute w-full bottom-0 left-0 h-[1px] bg-black"></div>
         <AnimatePresence>
            {isFocused && (
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 h-1 bg-main-orange"
               />
            )}
         </AnimatePresence>
      </div>
   );
}
