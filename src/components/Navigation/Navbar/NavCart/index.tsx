// import CartModal from "@/components/Modals/CartModal";
// import { AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
import NavIconButton from "../NavIconButton";
import useCartContext from "@/context/CartContext";

export default function NavCart() {
   // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   // const openCartModal = () => setIsModalOpen(true);
   // const closeCartModal = () => setIsModalOpen(false);

   // const [isMounted, setIsMounted] = useState(false);
   // useEffect(() => {
   //    // This is done so the document is rendered when the document is loaded
   //    setIsMounted(true);
   // }, []);

   const { cartState } = useCartContext();
   const { totalQuantity } = cartState;
   return (
      <>
         <div className="relative cursor-pointer">
            <NavIconButton icon="shopping_cart" outlined href="/cart" />
            {totalQuantity > 0 && (
               <div className="absolute -top-1 -right-3 rounded-full bg-main-orange grid place-content-center w-6 aspect-square">
                  <span className="text-xs font-medium text-black">
                     {totalQuantity}
                  </span>
               </div>
            )}
         </div>
         {/* {isMounted &&
            createPortal(
               <AnimatePresence>
                  {isModalOpen && <CartModal close={closeCartModal} />}
               </AnimatePresence>,
               document.getElementById("modals")!
            )} */}
      </>
   );
}
