import { StaticImageData } from "next/image";

export interface Product {
   id: string;
   name: string;
   image: StaticImageData;
   price: number;
   description: string;
}

export interface ProductCart extends Product {
   quantity: number;
}
