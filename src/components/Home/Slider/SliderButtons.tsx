import NavigationButton from "./NavigationButton";
import { useSwiper } from "swiper/react";
import PaginationButton from "./PaginationButton";
import ExploreMore from "./ExploreMore";
import { Product } from "@/models/ProductModel";

type Props = {
   activeIndex: number;
   showcase: Product[];
   currentProduct: Product | null;
};

export default function SliderButtons({
   activeIndex,
   showcase,
   currentProduct,
}: Props) {
   const slider = useSwiper();
   const next = () => slider.slideNext();
   const back = () => slider.slidePrev();

   const exploreMoreClick = () => {
      console.log(currentProduct?.id);
   };

   return (
      <div className="bg-gradient-to-l from-black/60 to-transparent flex flex-col items-end justify-between absolute top-0 right-0 h-full z-10 p-5">
         <ExploreMore onClick={exploreMoreClick} />
         <div className="space-y-10">
            <div className="flex flex-col items-center space-y-3">
               {showcase.map((_pag, index) => (
                  <PaginationButton index={index} activeIndex={activeIndex} />
               ))}
            </div>
            <div className="hidden lg:flex flex-col items-center space-y-2">
               <NavigationButton
                  up
                  onClick={back}
                  disabled={activeIndex === 0}
               />
               <NavigationButton
                  onClick={next}
                  disabled={activeIndex === showcase.length - 1}
               />
            </div>
         </div>
      </div>
   );
}
