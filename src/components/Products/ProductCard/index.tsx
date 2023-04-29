import ProductModel from "@/models/ProductModel";
import { useEffect, useState } from "react";
import CartButton from "./CartButton";
import useCartContext from "@/context/CartContext";
import Image from "next/image";

type Props = {
   product: ProductModel;
};

export default function ProductCard({ product }: Props) {
   const { name, price, id, image } = product;
   const [isOnCart, setIsOnCart] = useState<boolean>(false);
   const { cartState, addToCart, removeFromCart } = useCartContext();
   const { products } = cartState;

   useEffect(() => {
      const isSaved = products.some((p) => p.id === id);
      if (isSaved) setIsOnCart(true);
      else setIsOnCart(false);
   }, [products, id]);

   const handleClick = () => {
      if (isOnCart) removeFromCart(product.id);
      else addToCart(product);
   };

   return (
      <div className="cursor-pointer">
         <div className="aspect-square bg-gray-300 relative">
            <Image
               src={image}
               alt={id}
               fill
               sizes="100%"
               className="object-cover"
            />
         </div>
         <div className="px-5 py-2">
            <div className="flex items-center justify-between">
               <span className="text-sm text-gray-600">New Arrival</span>
               <span className="text-lg font-semibold text-orange-400">
                  ${price}
               </span>
            </div>
            <div className="flex justify-between">
               <div className="text-xl font-bold min-h-[32px] flex-1">
                  {name}
               </div>
               <CartButton onClick={handleClick} isOnCart={isOnCart} />
            </div>
         </div>
      </div>
   );
}
