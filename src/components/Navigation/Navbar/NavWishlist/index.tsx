import { useState } from "react";
import NavIconButton from "../NavIconButton";
import { motion } from "framer-motion";
import WishlistModal from "./WishlistModal";
type Props = {};

export default function NavWishlist({}: Props) {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const openCartModal = () => setIsModalOpen(true);
   const closeCartModal = () => setIsModalOpen(false);
   return (
      <motion.div
         onHoverStart={openCartModal}
         onHoverEnd={closeCartModal}
         className="relative cursor-pointer"
      >
         <NavIconButton icon="favorite_border" href="/wishlist" />
         <WishlistModal isOpen={isModalOpen} />
      </motion.div>
   );
}
