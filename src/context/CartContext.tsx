import ProductModel, { CartProductModel } from "@/models/ProductModel";
import { createContext, useContext, useReducer } from "react";
interface Props {
   children: React.ReactNode;
}
interface ContextInterface {
   cartState: CartStateModel;
   addToCart: (product: ProductModel) => void;
   removeFromCart: (id: string) => void;
}

const CartContext = createContext({} as ContextInterface);
export default function useCartContext() {
   return useContext(CartContext);
}

interface CartStateModel {
   products: CartProductModel[];
   subtotal: number;
}

const defaultCartState: CartStateModel = {
   products: [],
   subtotal: 0,
};

interface CartAction {
   type: "ADD" | "REMOVE";
   [key: string]: any;
}

export function CartProvider({ children }: Props) {
   const cartReducer = (state: CartStateModel, action: CartAction) => {
      switch (action.type) {
         case "ADD":
            return {
               ...state,
               products: [...state.products, action.product],
            };
         case "REMOVE":
            return {
               ...state,
               products: state.products.filter((p) => p.id !== action.id),
            };
      }
   };

   const [cartState, dispatchCartAction] = useReducer(
      cartReducer,
      defaultCartState
   );

   const addToCart = (product: ProductModel) => {
      dispatchCartAction({ type: "ADD", product });
   };
   const removeFromCart = (id: string) => {
      dispatchCartAction({ type: "REMOVE", id });
   };

   const value: ContextInterface = {
      cartState,
      addToCart,
      removeFromCart,
   };
   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
