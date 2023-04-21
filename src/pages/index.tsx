import Banner from "@/components/Home/Banner";
import Slider from "@/components/Home/Slider";
import Guarantees from "@/components/Home/Guarantees";
import About from "@/components/Home/About";
import Arrivals from "@/components/Home/Arrivals";
import Quote from "@/components/Home/Quote";

export default function Home() {
   return (
      <main className="px-10">
         <div className="lg:h-screen w-full grid md:grid-cols-2 gap-10 pt-20 pb-10">
            <Banner />
            <Slider />
         </div>
         <div className="space-y-10">
            <Guarantees />
            <About />
            <Arrivals />
            <Quote />
         </div>
      </main>
   );
}
