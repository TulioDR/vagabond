import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = { src: StaticImageData; alt: string };

export default function CartCardImage({ src, alt }: Props) {
   return (
      <div className="bg-gray-400 w-full h-full">
         <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="object-cover"
         />
      </div>
   );
}
