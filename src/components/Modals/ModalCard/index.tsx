import ModalCardDescription from "./ModalCardDescription";
import ModalCardImage from "./ModalCardImage";
import ModalPriceAndQuantity from "./ModalPriceAndQuantity";
import { StaticImageData } from "next/image";

type Props = {
   product: {
      id: string;
      name: string;
      image: StaticImageData;
      price: number;
      description: string;
      quantity?: number;
   };
};

export default function ModalCard({ product }: Props) {
   return (
      <>
         <div className="flex space-x-3">
            <ModalCardImage src={product.image} alt={product.id} />
            <div className="flex-1 flex flex-col justify-around">
               <div className="font-bold">{product.name}</div>
               <ModalCardDescription>Lorem Ipsum</ModalCardDescription>
               <ModalPriceAndQuantity
                  price={product.price}
                  quantity={product.quantity}
               />
            </div>
         </div>
         <div className="w-full h-[1px] bg-gray-400" />
      </>
   );
}
