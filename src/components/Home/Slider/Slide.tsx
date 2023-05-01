import Image from "next/image";
import { Product } from "@/models/ProductModel";

type Props = {
   product: Product;
};

export default function Slide({ product }: Props) {
   return (
      <div className="w-full h-full relative">
         <Image
            src={product.image}
            alt={product.id}
            fill
            sizes="100%"
            className="object-cover"
            priority
         />
      </div>
   );
}
