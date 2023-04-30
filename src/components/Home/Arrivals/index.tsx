import MainButton from "@/components/MainButton";
import ProductCard from "@/components/Products/ProductCard";
import Subtitle from "@/components/Subtitle";
import useCartContext from "@/context/CartContext";

export default function Arrivals() {
   const { products } = useCartContext();
   return (
      <div className="rounded-3xl bg-white text-black py-10 px-5 lg:px-10 xl:px-20 space-y-10">
         <div className="md:flex items-center justify-between w-full">
            <Subtitle>Last Arrivals</Subtitle>
            <MainButton>All products</MainButton>
         </div>
         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {products.slice(0, 3).map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
}
