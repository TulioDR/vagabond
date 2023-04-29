import { CartAction, CartState } from "@/models/CartModel";
import { ProductCart } from "@/models/ProductModel";

const updateTotalAmount = (products: ProductCart[]) => {
   const newArray = products.map((p) => p.price * p.quantity);
   const sum = newArray.reduce((accumulator, value) => {
      return accumulator + value;
   }, 0);
   return sum;
};

export default function cartReducer(state: CartState, action: CartAction) {
   switch (action.type) {
      case "ADD": {
         const newProduct = action.product!;
         const newArray = [...state.products, newProduct];
         return {
            products: newArray,
            totalAmount: updateTotalAmount(newArray),
            totalQuantity: ++state.totalQuantity,
         };
      }
      case "REMOVE": {
         const id = action.id;
         const { products } = state;
         const productToRemove = products.find((p) => p.id === id)!;
         const newArray = products.filter((p) => p.id !== id);
         return {
            products: newArray,
            totalAmount: updateTotalAmount(newArray),
            totalQuantity: state.totalQuantity - productToRemove.quantity,
         };
      }
      case "ADD_ONE": {
         const newArray = [...state.products];
         const productIndex = newArray.findIndex((obj) => obj.id === action.id);
         newArray[productIndex].quantity++;
         return {
            products: newArray,
            totalAmount: updateTotalAmount(newArray),
            totalQuantity: ++state.totalQuantity,
         };
      }
      case "REMOVE_ONE": {
         const newArray = [...state.products];
         const productIndex = newArray.findIndex((obj) => obj.id === action.id);
         newArray[productIndex].quantity--;
         return {
            products: newArray,
            totalAmount: updateTotalAmount(newArray),
            totalQuantity: --state.totalQuantity,
         };
      }
   }
}
