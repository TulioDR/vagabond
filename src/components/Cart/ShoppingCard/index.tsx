import CardButton from "./CardButton";
import CardHeader from "./CardHeader";
import RemoveButton from "./RemoveButton";
import Total from "./Total";
import Quantity from "./Quantity";
import { ProductCart } from "@/models/ProductModel";
import useCartContext from "@/context/CartContext";
import CartCardImage from "./CartCardImage";

type Props = {
   product: ProductCart;
};

export default function ShoppingCard({ product }: Props) {
   const { removeFromCart, addOne, removeOne } = useCartContext();
   const { price, id, image, quantity } = product;
   const deleteCard = () => removeFromCart(id);
   return (
      <div className="sm:flex w-full group bg-stone-800 text-white">
         <div className="w-full sm:w-1/3 aspect-square relative text-black">
            <CartCardImage src={image} alt={id} />
            <RemoveButton onClick={deleteCard} />
         </div>
         <div className="flex-1 flex flex-col space-y-2 sm:space-y-0 justify-between p-5">
            <CardHeader name="Leather Bag" price={price} />
            <div className="text-xs sm:text-sm text-gray-400">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex justify-between w-full">
               <Quantity
                  add={() => addOne(id)}
                  subtract={() => removeOne(id)}
                  quantity={quantity}
               />
               <Total price={price * quantity} />
               <div className="lg:hidden">
                  <CardButton icon="delete" onClick={deleteCard} />
               </div>
            </div>
         </div>
      </div>
   );
}
