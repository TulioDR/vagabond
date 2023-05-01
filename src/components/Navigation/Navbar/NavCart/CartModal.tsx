import ModalButton from "@/components/Modals/ModalButton";
import ModalCard from "@/components/Modals/ModalCard";
import ModalContainer from "@/components/Modals/ModalContainer";
import ModalTotalAmount from "@/components/Modals/ModalTotalAmount";
import useCartContext from "@/context/CartContext";
import React from "react";

type Props = {
   isOpen: boolean;
};

export default function CartModal({ isOpen }: Props) {
   const { cartState } = useCartContext();
   const { totalAmount, products } = cartState;

   const isCartEmpty = products.length <= 0;
   return (
      <ModalContainer isOpen={isOpen}>
         {isCartEmpty ? (
            <div className="text-center text-sm">No items in Cart</div>
         ) : (
            products
               .slice(0, 3)
               .map((product) => (
                  <ModalCard key={product.id} product={product} />
               ))
         )}
         {products.length > 3 && (
            <div className="text-center text-sm">More at cart</div>
         )}
         <ModalTotalAmount total={totalAmount} />
         <ModalButton href="/cart">Go to cart</ModalButton>
      </ModalContainer>
   );
}
