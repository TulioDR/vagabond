import useBackgroundColor from "@/hooks/useBackgroundColor";
import React, { useEffect, useState } from "react";

type Props = {
   children: React.ReactNode;
};

export default function NavContainer({ children }: Props) {
   const { isWhite } = useBackgroundColor();
   const [isTouchingTop, setIsTouchingTop] = useState(true);
   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 40) setIsTouchingTop(false);
         else setIsTouchingTop(true);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);
   return (
      <nav
         className={`fixed top-0 left-0 px-5 sm:px-10 w-full flex items-center justify-between z-20 duration-300 ${
            isTouchingTop
               ? `h-20 ${isWhite ? "text-black" : "text-white"}`
               : `h-14 ${
                    isWhite ? "bg-black text-white" : "bg-white text-black"
                 }`
         }`}
      >
         {children}
      </nav>
   );
}
