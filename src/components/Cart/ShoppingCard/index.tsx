import { useState } from "react";
import CardButton from "./CardButton";
import CardHeader from "./CardHeader";
import RemoveButton from "./RemoveButton";
import Total from "./Total";
import Quantity from "./Quantity";

type Props = {};

export default function ShoppingCard({}: Props) {
   const [quantity, setQuantity] = useState<number>(1);
   const add = () => setQuantity((prev) => prev + 1);
   const subtract = () => setQuantity((prev) => prev - 1);

   return (
      <div className="sm:flex space-y-5 sm:space-y-0 sm:space-x-5 w-full group">
         <div className="w-full sm:w-1/3 aspect-square relative">
            <RemoveButton onClick={() => {}} />
            <div className="bg-gray-400 w-full h-full"></div>
         </div>
         <div className="flex-1 flex flex-col space-y-2 sm:space-y-0 justify-around">
            <CardHeader name="Leather Bag" price={99.99} />
            <div className="text-xs sm:text-sm text-gray-400">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex justify-between w-full">
               <Quantity add={add} subtract={subtract} quantity={quantity} />
               <Total price={99.99 * quantity} />
               <div className="lg:hidden">
                  <CardButton icon="delete" onClick={() => {}} />
               </div>
            </div>
         </div>
      </div>
   );
}
