import CartFooter from "@/components/Cart/CartFooter";
import ShoppingCard from "@/components/Cart/ShoppingCard";
import Subtitle from "@/components/Subtitle";

type Props = {};

export default function Cart({}: Props) {
   return (
      <div>
         <Subtitle>Shopping Cart</Subtitle>
         <table className="w-full mt-10">
            <tr className="uppercase text-gray-400 text-sm h-32">
               <th className="w-72"></th>
               <th className="text-left">Product</th>
               <th className="text-left w-28">Price</th>
               <th className="w-48">Qty</th>
               <th className="text-left w-28">Total</th>
               <th className="w-10"></th>
            </tr>
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
         </table>
         <CartFooter />
      </div>
   );
}
