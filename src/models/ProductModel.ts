import { StaticImageData } from "next/image";

export default interface ProductModel {
   id: string;
   name: string;
   image: StaticImageData;
   price: number;
   description: string;
}

export interface CartProductModel extends ProductModel {
   quantity: number;
}
