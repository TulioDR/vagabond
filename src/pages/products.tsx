import products from "@/assets/store/products";
import ProductCard from "@/components/Products/ProductCard";
import Subtitle from "@/components/Subtitle";
import { Product } from "@/models/ProductModel";
import { useEffect, useState } from "react";

export default function Products() {
   const [displayed, setDisplayed] = useState<Product[]>([]);
   useEffect(() => {
      setDisplayed(products);
   }, []);
   return (
      <div className="text-black">
         <div className="flex items-end justify-between">
            <Subtitle>Products</Subtitle>
            <button className="grid place-content-center aspect-square">
               <span className="material-icons !text-5xl">filter_alt</span>
            </button>
         </div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-10">
            {displayed.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
}
