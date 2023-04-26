import CartModal from "@/components/Modals/CartModal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import IconButton from "./IconButton";
import { useRouter } from "next/router";

export default function CartButton() {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const openCartModal = () => setIsModalOpen(true);
   const closeCartModal = () => setIsModalOpen(false);

   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      // This is done so the document is rendered when the document is loaded
      setIsMounted(true);
   }, []);

   const router = useRouter();
   const goToCart = () => {
      router.push("/cart");
   };
   return (
      <>
         <IconButton icon="shopping_bag" outlined onClick={goToCart} />
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
