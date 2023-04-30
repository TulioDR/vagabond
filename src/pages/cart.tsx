import CartFooter from "@/components/Cart/CartFooter";
import ShoppingCard from "@/components/Cart/ShoppingCard";
import PageHead from "@/components/PageHead";
import Subtitle from "@/components/Subtitle";
import useCartContext from "@/context/CartContext";

export default function Cart() {
   const { cartState } = useCartContext();
   return (
      <>
         <PageHead title="Cart - Vagabond" description="" />
         <div className="space-y-10">
            <Subtitle>Shopping Cart</Subtitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
               {cartState.products.map((product) => (
                  <ShoppingCard key={product.id} product={product} />
               ))}
            </div>
            <CartFooter />
         </div>
      </>
   );
}
