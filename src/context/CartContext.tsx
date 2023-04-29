import ProductModel, { CartProductModel } from "@/models/ProductModel";
import { createContext, useContext, useReducer } from "react";
interface Props {
   children: React.ReactNode;
}
interface ContextInterface {
   cartState: CartStateModel;
   addToCart: (product: ProductModel) => void;
   removeFromCart: (id: string) => void;
   addOne: (id: string) => void;
   removeOne: (id: string) => void;
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
   type: "ADD" | "REMOVE" | "ADD_ONE" | "REMOVE_ONE";
   [key: string]: any;
}

const updateTotalAmount = (products: CartProductModel[]) => {
   const newArray = products.map((p) => p.price * p.quantity);
   const sum = newArray.reduce((accumulator, value) => {
      return accumulator + value;
   }, 0);
   return sum;
};

export function CartProvider({ children }: Props) {
   const cartReducer = (state: CartStateModel, action: CartAction) => {
      switch (action.type) {
         case "ADD":
            action.product.quantity = 1;
            var newArray: CartProductModel[] = [
               ...state.products,
               action.product,
            ];
            return {
               products: newArray,
               subtotal: updateTotalAmount(newArray),
            };

         case "REMOVE":
            var newArray = state.products.filter((p) => p.id !== action.id);
            return {
               products: newArray,
               subtotal: updateTotalAmount(newArray),
            };
         case "ADD_ONE":
            var newArray = [...state.products];
            const productIndex = newArray.findIndex(
               (obj) => obj.id === action.id
            );
            newArray[productIndex].quantity++;
            return {
               products: newArray,
               subtotal: updateTotalAmount(newArray),
            };
         case "REMOVE_ONE":
            var newArray = [...state.products];
            const productIndex1 = newArray.findIndex(
               (obj) => obj.id === action.id
            );
            newArray[productIndex1].quantity--;
            return {
               products: newArray,
               subtotal: updateTotalAmount(newArray),
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

   const addOne = (id: string) => {
      dispatchCartAction({ type: "ADD_ONE", id });
   };
   const removeOne = (id: string) => {
      dispatchCartAction({ type: "REMOVE_ONE", id });
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
