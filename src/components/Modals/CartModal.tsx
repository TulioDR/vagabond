import CartFooter from "../Cart/CartFooter";
import ModalContainer from "./ModalContainer";
import ModalTitle from "./ModalTitle";

interface Props {
   close: () => void;
}

export default function CartModal({ close }: Props) {
   return (
      <ModalContainer close={close}>
         <ModalTitle>Shopping Cart</ModalTitle>
         <div className="mt-10 ">
            <table className="w-full">
               <tr className="uppercase text-gray-400 text-sm">
                  <th></th>
                  <th className="text-left">Product</th>
                  <th className="text-left">Price</th>
                  <th>Qty</th>
                  <th className="text-left">Total</th>
               </tr>
               {/* <ShoppingCard />
               <ShoppingCard />
               <ShoppingCard />
               <ShoppingCard /> */}
            </table>
         </div>
         <CartFooter />
      </ModalContainer>
   );
}
