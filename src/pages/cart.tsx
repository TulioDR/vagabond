import CartFooter from "@/components/Cart/CartFooter";
import ShoppingCard from "@/components/Cart/ShoppingCard";
import Subtitle from "@/components/Subtitle";

type Props = {};

export default function Cart({}: Props) {
   return (
      <div className="space-y-10">
         <Subtitle>Shopping Cart</Subtitle>
         <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
         </div>
         <CartFooter />
      </div>
   );
}
