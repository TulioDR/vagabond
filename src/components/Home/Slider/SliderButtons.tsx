import NavigationButton from "./NavigationButton";
import { useSwiper } from "swiper/react";
import PaginationButton from "./PaginationButton";

type Props = { activeIndex: number };

export default function SliderButtons({ activeIndex }: Props) {
   const slider = useSwiper();
   const next = () => slider.slideNext();
   const back = () => slider.slidePrev();

   return (
      <div className="bg-gradient-to-l from-black/60 to-transparent flex flex-col items-center justify-end absolute w-20 top-0 right-0 h-full z-10">
         <div className="flex flex-col space-y-3 mb-5">
            <PaginationButton index={0} activeIndex={activeIndex} />
            <PaginationButton index={1} activeIndex={activeIndex} />
            <PaginationButton index={2} activeIndex={activeIndex} />
         </div>
         <div className="space-y-2 py-5 flex flex-col items-center">
            <NavigationButton onClick={back} up />
            <NavigationButton onClick={next} />
         </div>
      </div>
   );
}
