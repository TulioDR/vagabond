import Card from "@/components/Products/Card";
import Subtitle from "@/components/Subtitle";

export default function Products() {
   return (
      <div className="text-black">
         <div className="flex items-end justify-between">
            <Subtitle>Products</Subtitle>
            <button className="grid place-content-center aspect-square">
               <span className="material-icons !text-5xl">filter_alt</span>
            </button>
         </div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
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
