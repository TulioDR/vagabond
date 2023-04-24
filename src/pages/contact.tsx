import DirectionCard from "@/components/Contact/DirectionCard";
import Form from "@/components/Contact/Form";

export default function Contact() {
   return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
         <div className="rounded-lg bg-white w-full sm:w-auto text-black shadow-xl flex items-stretch lg:-translate-x-20">
            <Form />
            <div className="hidden lg:block w-80 -mr-40 translate-y-10">
               <DirectionCard />
            </div>
         </div>
         <div className="lg:hidden mt-10 w-full sm:w-80">
            <DirectionCard />
         </div>
      </div>
   );
}
