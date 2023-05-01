import NavigationButton from "./NavigationButton";
import { useSwiper } from "swiper/react";
import PaginationButton from "./PaginationButton";
import ExploreMore from "./ExploreMore";

type Props = { activeIndex: number };

export default function SliderButtons({ activeIndex }: Props) {
   const slider = useSwiper();
   const next = () => slider.slideNext();
   const back = () => slider.slidePrev();

   return (
      <div className="bg-gradient-to-l from-black/60 to-transparent flex flex-col items-end justify-between absolute top-0 right-0 h-full z-10 p-5">
         <ExploreMore />
         <div className="space-y-10">
            <div className="flex flex-col items-center space-y-3">
               <PaginationButton index={0} activeIndex={activeIndex} />
               <PaginationButton index={1} activeIndex={activeIndex} />
               <PaginationButton index={2} activeIndex={activeIndex} />
            </div>
            <div className="hidden lg:flex flex-col items-center space-y-2">
               <NavigationButton onClick={back} up />
               <NavigationButton onClick={next} />
            </div>
         </div>
      </div>
   );
}
