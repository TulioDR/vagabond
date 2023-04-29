import { Product } from "@/models/ProductModel";
import bag1 from "@/assets/img/bags/bag-1.jpg";
import bag2 from "@/assets/img/bags/bag-2.jpg";
import bag3 from "@/assets/img/bags/bag-3.jpg";
import bag4 from "@/assets/img/bags/bag-4.jpg";
import bag5 from "@/assets/img/bags/bag-5.jpg";
import bag6 from "@/assets/img/bags/bag-6.jpg";
import { v4 as uuidv4 } from "uuid";

function randomNumber(min: number, max: number) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomizeImage = () => {
   const bagNumber = randomNumber(1, 6);
   if (bagNumber === 1) return bag1;
   else if (bagNumber === 2) return bag2;
   else if (bagNumber === 3) return bag3;
   else if (bagNumber === 4) return bag4;
   else if (bagNumber === 5) return bag5;
   else return bag6;
};

const products: Product[] = [];

for (var i = 0; i < 100; i++) {
   products.push({
      id: uuidv4(),
      name: "Leather Bag",
      image: randomizeImage(),
      price: randomNumber(50, 400),
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
   });
}

export default products;
