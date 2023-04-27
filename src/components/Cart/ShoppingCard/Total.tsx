import React from "react";

type Props = {
   price: number;
};

export default function Total({ price }: Props) {
   return (
      <div className="space-x-1 flex items-center">
         <span className="text-gray-500 text-xs uppercase translate-y-[1px]">
            Total
         </span>
         <span className="font-bold">${price.toFixed(2)}</span>
      </div>
   );
}
