import useCartContext from "@/context/CartContext";

export default function CartFooter() {
   const { cartState } = useCartContext();
   return (
      <div className="flex items-center justify-between w-full">
         <div className="flex items-center">
            <span className="material-icons">navigate_before</span>
            <span className="uppercase font-semibold">Continue Shopping</span>
         </div>
         <div className="space-x-3 flex items-end">
            <span className="text-gray-500 text-sm">Total</span>
            <span className="font-bold text-xl w-[154px]">
               ${cartState.totalAmount}
            </span>
         </div>
      </div>
   );
}
