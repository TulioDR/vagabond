import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function Title({ children }: Props) {
   return (
      <h1 className="uppercase font-bold text-xl xl:text-2xl">{children}</h1>
   );
}
