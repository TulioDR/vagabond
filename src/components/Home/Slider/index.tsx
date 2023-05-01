import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import SliderButtons from "./SliderButtons";
import { useEffect, useState } from "react";
import { Product } from "@/models/ProductModel";
import useCartContext from "@/context/CartContext";

type Props = {};

export default function Slider({}: Props) {
   const { products } = useCartContext();

   const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const [showcase, setShowcase] = useState<Product[]>([]);

   useEffect(() => {
      setShowcase(products.slice(0, 3));
   }, [products]);

   useEffect(() => {
      setCurrentProduct(showcase[activeIndex]);
   }, [showcase, activeIndex]);

   return (
      <div className="bg-white rounded-3xl overflow-hidden aspect-square lg:aspect-auto">
         <Swiper
            direction="vertical"
            onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
            className="w-full h-full relative"
         >
            <SliderButtons
               activeIndex={activeIndex}
               showcase={showcase}
               currentProduct={currentProduct}
            />
            {showcase.map((product) => (
               <SwiperSlide key={product.id}>
                  <Slide product={product} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
