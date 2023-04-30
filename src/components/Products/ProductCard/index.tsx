import { Product } from "@/models/ProductModel";
import { useEffect, useState } from "react";
import CartButton from "./CartButton";
import useCartContext from "@/context/CartContext";
import ProductImage from "./ProductImage";
import HeartButton from "./HeartButton";
import useWishlistContext from "@/context/WishlistContext";
import useBackgroundColor from "@/hooks/useBackgroundColor";

type Props = {
   product: Product;
};

export default function ProductCard({ product }: Props) {
   const { name, price, id, image } = product;
   const { cartState, addToCart, removeFromCart } = useCartContext();
   const { products } = cartState;

   const { wishList, saveToWishlist, deleteFromWishList } =
      useWishlistContext();

   const [isOnCart, setIsOnCart] = useState<boolean>(false);
   useEffect(() => {
      const isSavedOnCart = products.some((p) => p.id === id);
      if (isSavedOnCart) setIsOnCart(true);
      else setIsOnCart(false);
   }, [products, id]);

   const [isOnWishlist, setIsOnWishlist] = useState<boolean>(false);
   useEffect(() => {
      const isSavedOnCart = wishList.some((p) => p.id === id);
      if (isSavedOnCart) setIsOnWishlist(true);
      else setIsOnWishlist(false);
   }, [wishList, id]);

   const handleWishlistClick = () => {
      if (isOnWishlist) deleteFromWishList(product.id);
      else saveToWishlist(product);
   };

   const handleCartClick = () => {
      if (isOnCart) removeFromCart(product.id);
      else addToCart(product);
   };

   const { isWhite } = useBackgroundColor();
   return (
      <div className="cursor-pointer relative group">
         <HeartButton
            onClick={handleWishlistClick}
            isOnWishlist={isOnWishlist}
         />
         <ProductImage src={image} alt={id} />
         <div className="px-5 pt-2">
            <div className="flex items-center justify-between">
               <span
                  className={`text-sm  ${
                     isWhite ? "text-gray-600" : "text-gray-400"
                  }`}
               >
                  New Arrival
               </span>
               <span className="text-lg font-semibold text-orange-400">
                  ${price}
               </span>
            </div>
            <div className={`flex justify-between items-center`}>
               <div className="text-xl font-bold">{name}</div>
               <CartButton onClick={handleCartClick} isOnCart={isOnCart} />
            </div>
         </div>
      </div>
   );
}
