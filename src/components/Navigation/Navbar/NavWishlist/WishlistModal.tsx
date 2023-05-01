import ModalButton from "@/components/Modals/ModalButton";
import ModalCard from "@/components/Modals/ModalCard";
import ModalContainer from "@/components/Modals/ModalContainer";
import useWishlistContext from "@/context/WishlistContext";

type Props = {
   isOpen: boolean;
};

export default function WishlistModal({ isOpen }: Props) {
   const { wishlist } = useWishlistContext();

   const isWishlistEmpty = wishlist.length <= 0;
   return (
      <ModalContainer isOpen={isOpen}>
         {isWishlistEmpty ? (
            <div className="text-center text-sm">Wishlist is empty</div>
         ) : (
            wishlist
               .slice(0, 3)
               .map((product) => (
                  <ModalCard key={product.id} product={product} />
               ))
         )}
         {wishlist.length > 3 && (
            <div className="text-center text-sm">More at wishlist</div>
         )}
         <ModalButton href="/wishlist">Go to wishlist</ModalButton>
      </ModalContainer>
   );
}
