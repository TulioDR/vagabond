import { Product } from "@/models/ProductModel";
import { createContext, useContext, useState } from "react";

interface ContextInterface {
   wishlist: Product[];
   saveToWishlist: (product: Product) => void;
   deleteFromWishList: (id: string) => void;
}
const WishlistContext = createContext({} as ContextInterface);
export default function useWishlistContext() {
   return useContext(WishlistContext);
}

type Props = { children: React.ReactNode };

export function WishlistProvider({ children }: Props) {
   const [wishlist, setWishlist] = useState<Product[]>([]);

   const saveToWishlist = (product: Product) => {
      setWishlist((prev) => [...prev, product]);
   };

   const deleteFromWishList = (id: string) => {
      setWishlist((prev) => prev.filter((item) => item.id !== id));
   };

   const value: ContextInterface = {
      wishlist,
      saveToWishlist,
      deleteFromWishList,
   };
   return (
      <WishlistContext.Provider value={value}>
         {children}
      </WishlistContext.Provider>
   );
}
