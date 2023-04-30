import Banner from "@/components/Home/Banner";
import Slider from "@/components/Home/Slider";
import Guarantees from "@/components/Home/Guarantees";
import About from "@/components/Home/About";
import Arrivals from "@/components/Home/Arrivals";
import Quote from "@/components/Home/Quote";
import Blog from "@/components/Home/Blog";
import PageHead from "@/components/PageHead";

export default function Home() {
   return (
      <>
         <PageHead
            title="Vagabond"
            description="ELEGANT LEATHER MEN'S BACKPACKS"
         />
         <div className="space-y-10">
            <div className="lg:h-[calc(100vh-120px)] w-full grid md:grid-cols-2 gap-10">
               <Banner />
               <Slider />
            </div>
            <Guarantees />
            <About />
            <Arrivals />
            <Quote />
            <Blog />
         </div>
      </>
   );
}
