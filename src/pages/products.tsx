import Card from "@/components/Products/Card";
import Subtitle from "@/components/Subtitle";

export default function Products() {
   return (
      <div className="pt-20 px-10 bg-white text-black">
         <Subtitle>Products</Subtitle>
         <div className="grid grid-cols-3 gap-10 mt-10">
            <Card name="Product Name" />
            <Card name="Product Name long long long" />
            <Card name="Product Name" />
            <Card name="Product Name" />
            <Card name="Product Name" />
            <Card name="Product Name" />
         </div>
      </div>
   );
}
