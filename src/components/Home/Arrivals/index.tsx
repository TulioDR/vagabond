import MainButton from "@/components/MainButton";
import Card from "@/components/Products/ProductCard";
import Subtitle from "@/components/Subtitle";

export default function Arrivals() {
   return (
      <div className="rounded-3xl bg-white text-black py-10 px-5 lg:px-10 xl:px-20 space-y-10">
         <div className="md:flex items-center justify-between w-full">
            <Subtitle>Last Arrivals</Subtitle>
            <MainButton>All products</MainButton>
         </div>
         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            <Card name="Lorem Ipsum" />
            <Card name="Lorem Ipsum" />
            <Card name="Lorem Ipsum" />
         </div>
      </div>
   );
}
