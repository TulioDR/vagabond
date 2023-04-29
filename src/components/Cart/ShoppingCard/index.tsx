import { useState } from "react";
import CardButton from "./CardButton";
import CardHeader from "./CardHeader";
import RemoveButton from "./RemoveButton";
import Total from "./Total";
import Quantity from "./Quantity";
import { CartProductModel } from "@/models/ProductModel";
import useCartContext from "@/context/CartContext";

type Props = {
   product: CartProductModel;
};

export default function ShoppingCard({ product }: Props) {
   const { price } = product;

   const [quantity, setQuantity] = useState<number>(1);
   const add = () => setQuantity((prev) => prev + 1);
   const subtract = () => setQuantity((prev) => prev - 1);

   const { removeFromCart } = useCartContext();
   const deleteCard = () => removeFromCart(product.id);
   return (
      <div className="sm:flex space-y-5 sm:space-y-0 sm:space-x-5 w-full group">
         <div className="w-full sm:w-1/3 aspect-square relative">
            <RemoveButton onClick={deleteCard} />
            <div className="bg-gray-400 w-full h-full"></div>
         </div>
         <div className="flex-1 flex flex-col space-y-2 sm:space-y-0 justify-around">
            <CardHeader name="Leather Bag" price={price} />
            <div className="text-xs sm:text-sm text-gray-400">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex justify-between w-full">
               <Quantity add={add} subtract={subtract} quantity={quantity} />
               <Total price={price * quantity} />
               <div className="lg:hidden">
                  <CardButton icon="delete" onClick={deleteCard} />
               </div>
            </div>
         </div>
      </div>
   );
}
