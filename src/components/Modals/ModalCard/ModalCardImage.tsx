import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   src: StaticImageData;
   alt: string;
};

export default function ModalCardImage({ src, alt }: Props) {
   return (
      <div className="h-20 aspect-square bg-gray-200 relative">
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
