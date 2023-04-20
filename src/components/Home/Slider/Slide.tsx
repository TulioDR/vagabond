import Image from "next/image";
import bag from "@/assets/img/bag.jpg";

type Props = {};

export default function Slide({}: Props) {
   return (
      <div className="w-full h-full relative">
         <Image
            src={bag}
            alt="bag"
            fill
            sizes="100%"
            className="object-cover"
         />
      </div>
   );
}
