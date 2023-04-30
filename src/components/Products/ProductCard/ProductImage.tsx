import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   src: StaticImageData;
   alt: string;
};

export default function ProductImage({ src, alt }: Props) {
   return (
      <div className="aspect-square bg-gray-300 relative group-hover:brightness-50 duration-200">
         <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="object-cover"
            priority
         />
      </div>
   );
}
