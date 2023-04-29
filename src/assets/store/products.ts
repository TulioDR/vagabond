import ProductModel from "@/models/ProductModel";
import { v4 as uuidv4 } from "uuid";

function randomPrice(min: number, max: number) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const products: ProductModel[] = [];

for (var i = 0; i < 100; i++) {
   products.push({
      id: uuidv4(),
      name: "Leather Bag",
      price: randomPrice(50, 400) + 0.99,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
   });
}

export default products;
