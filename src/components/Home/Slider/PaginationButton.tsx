import { useSwiper } from "swiper/react";

type Props = {
   index: number;
   activeIndex: number;
};

export default function PaginationButton({ index, activeIndex }: Props) {
   const swiper = useSwiper();

   const handleClick = () => {
      swiper.slideTo(index);
   };

   return (
      <button
         onClick={handleClick}
         className={`w-2 duration-500 rounded-full ${
            activeIndex === index ? "h-10 bg-white" : "h-6 bg-gray-400"
         }`}
      ></button>
   );
}
