import { Product } from "@/models/ProductModel";
import { createContext, useContext, useState } from "react";

interface ContextInterface {
   wishList: Product[];
   saveToWishlist: (product: Product) => void;
   deleteFromWishList: (id: string) => void;
}
const WishlistContext = createContext({} as ContextInterface);
export default function useWishlistContext() {
   return useContext(WishlistContext);
}

type Props = { children: React.ReactNode };

export function WishlistProvider({ children }: Props) {
   const [wishList, setWishList] = useState<Product[]>([]);

   const saveToWishlist = (product: Product) => {
      setWishList((prev) => [...prev, product]);
   };

   const deleteFromWishList = (id: string) => {
      setWishList((prev) => prev.filter((item) => item.id !== id));
   };

   const value: ContextInterface = {
      wishList,
      saveToWishlist,
      deleteFromWishList,
   };
   return (
      <WishlistContext.Provider value={value}>
         {children}
      </WishlistContext.Provider>
   );
}
