import { ProductCart } from "./ProductModel";

export interface CartAction {
   type: "ADD" | "REMOVE" | "ADD_ONE" | "REMOVE_ONE";
   id?: string;
   product?: ProductCart;
}
export interface CartState {
   products: ProductCart[];
   totalAmount: number;
   totalQuantity: number;
}
