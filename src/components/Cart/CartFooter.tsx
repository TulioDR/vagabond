import useCartContext from "@/context/CartContext";
import Link from "next/link";

export default function CartFooter() {
   const { cartState } = useCartContext();
   return (
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between w-full">
         <div className="mt-5 sm:mt-0">
            <Link href="/products" className="flex items-center">
               <span className="material-icons">navigate_before</span>
               <span className="uppercase font-semibold">
                  Continue Shopping
               </span>
            </Link>
         </div>
         <div className="space-y-5 w-full sm:w-72">
            <div className="space-x-3 flex items-end justify-between w-full">
               <span className="text-gray-500">Total</span>
               <span className="font-bold text-4xl">
                  ${cartState.totalAmount}
               </span>
            </div>
            <button className="bg-main-orange uppercase w-full text-xl font-semibold py-2">
               Checkout
            </button>
         </div>
      </div>
   );
}
