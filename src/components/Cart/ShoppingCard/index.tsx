import { useState } from "react";
import Price from "./Price";
import CardButton from "./CardButton";

type Props = {};

export default function ShoppingCard({}: Props) {
   const [quantity, setQuantity] = useState<number>(1);
   const add = () => {
      setQuantity((prev) => prev + 1);
   };
   const subtract = () => setQuantity((prev) => prev - 1);

   return (
      <tr className="h-48">
         <td>
            <div className="h-40 bg-gray-500 aspect-[5/4]"></div>
         </td>
         <td>
            <div className="font-bold">Dell</div>
            <div className="text-gray-500">Lorem Ipsum Dolor</div>
         </td>
         <td className="border-t border-gray-300">
            <Price number={99.99} />
         </td>
         <td className="border-t border-gray-300">
            <div className="flex items-center justify-center space-x-3">
               <CardButton icon="remove" onClick={subtract} />
               <span className="text-xl">{quantity}</span>
               <CardButton icon="add" onClick={add} />
            </div>
         </td>
         <td className="border-t border-gray-300">
            <Price number={quantity * 99.99} />
         </td>
         <td className="border-t border-gray-300">
            <CardButton icon="close" onClick={() => {}} />
         </td>
      </tr>
   );
}
