import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   src: StaticImageData;
   alt: string;
};

export default function SocialIcon({ src, alt }: Props) {
   return (
      <div className="cursor-pointer">
         <Image src={src} alt={alt} />
      </div>
   );
}
