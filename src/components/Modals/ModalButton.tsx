import useBackgroundColor from "@/hooks/useBackgroundColor";
import { useRouter } from "next/router";
import React from "react";

type Props = {
   href: string;
   children: React.ReactNode;
};

export default function ModalButton({ href, children }: Props) {
   const { isWhite } = useBackgroundColor();

   const { push } = useRouter();
   return (
      <button
         onClick={() => push(href)}
         className={`w-full py-3 font-bold ${
            isWhite ? "bg-white text-black" : "bg-stone-800 text-white "
         }`}
      >
         {children}
      </button>
   );
}
