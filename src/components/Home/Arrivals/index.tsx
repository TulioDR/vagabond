import Card from "@/components/Products/Card";
import Subtitle from "@/components/Subtitle";

type Props = {};

export default function Arrivals({}: Props) {
   return (
      <div className="rounded-3xl bg-white text-black py-10 px-5 lg:px-10 xl:px-20 space-y-10">
         <div className="md:flex items-center justify-between w-full">
            <Subtitle>Last Arrivals</Subtitle>
            <button className="rounded-full bg-orange-300 flex items-center space-x-2 px-5 py-2 ml-auto">
               <span>All products</span>
               <span className="material-icons">arrow_right_alt</span>
            </button>
         </div>
         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            <Card name="Lorem Ipsum" />
            <Card name="Lorem Ipsum" />
            <Card name="Lorem Ipsum" />
         </div>
      </div>
   );
}
