import React from "react";

type Props = {
   name: string;
   price: number;
};

export default function CardHeader({ name, price }: Props) {
   return (
      <div className="w-full flex font-bold items-start justify-between">
         <h4>{name}</h4>
         <span>${price}</span>
      </div>
   );
}
