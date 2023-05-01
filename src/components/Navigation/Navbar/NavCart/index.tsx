import { useState } from "react";
import NavIconButton from "../NavIconButton";
import useCartContext from "@/context/CartContext";
import { motion } from "framer-motion";
import CartModal from "./CartModal";

export default function NavCart() {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const openCartModal = () => setIsModalOpen(true);
   const closeCartModal = () => setIsModalOpen(false);

   const { cartState } = useCartContext();
   const { totalQuantity } = cartState;
   return (
      <motion.div
         onHoverStart={openCartModal}
         onHoverEnd={closeCartModal}
         className="relative"
      >
         <NavIconButton icon="shopping_cart" outlined href="/cart" />
         {totalQuantity > 0 && (
            <div className="absolute pointer-events-none -top-1 -right-3 rounded-full bg-main-orange grid place-content-center w-6 aspect-square">
               <span className="text-xs font-medium text-black">
                  {totalQuantity}
               </span>
            </div>
         )}
         <CartModal isOpen={isModalOpen} />
      </motion.div>
   );
}
