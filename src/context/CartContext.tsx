import { Product } from "@/models/ProductModel";
import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";
import { CartState } from "@/models/CartModel";

interface ContextInterface {
   cartState: CartState;
   addToCart: (product: Product) => void;
   removeFromCart: (id: string) => void;
   addOne: (id: string) => void;
   removeOne: (id: string) => void;
}
const defaultCartState: CartState = {
   products: [],
   totalAmount: 0,
   totalQuantity: 0,
};

const CartContext = createContext({} as ContextInterface);
export default function useCartContext() {
   return useContext(CartContext);
}
export function CartProvider({ children }: { children: React.ReactNode }) {
   const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

   const addToCart = (productCart: Product) => {
      dispatch({ type: "ADD", product: { ...productCart, quantity: 1 } });
   };
   const removeFromCart = (id: string) => {
      dispatch({ type: "REMOVE", id });
   };
   const addOne = (id: string) => {
      dispatch({ type: "ADD_ONE", id });
   };
   const removeOne = (id: string) => {
      dispatch({ type: "REMOVE_ONE", id });
   };

   const value: ContextInterface = {
      cartState,
      addToCart,
      removeFromCart,
      addOne,
      removeOne,
   };
   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
