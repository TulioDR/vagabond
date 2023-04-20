import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import SliderButtons from "./SliderButtons";
import { useState } from "react";

type Props = {};

export default function Slider({}: Props) {
   const [activeIndex, setActiveIndex] = useState<number>(0);
   return (
      <div className="bg-white rounded-3xl overflow-hidden aspect-square lg:aspect-auto">
         <Swiper
            direction="vertical"
            onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
            className="w-full h-full relative"
         >
            <SliderButtons activeIndex={activeIndex} />
            <SwiperSlide>
               <Slide />
            </SwiperSlide>
            <SwiperSlide>
               <Slide />
            </SwiperSlide>
            <SwiperSlide>
               <Slide />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
