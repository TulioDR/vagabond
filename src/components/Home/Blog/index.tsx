import MainButton from "@/components/MainButton";
import Subtitle from "@/components/Subtitle";
import BlogPost from "./BlogPost";

export default function Blog() {
   return (
      <div className="px-5 lg:px-10 xl:px-20 sm:pt-10">
         <div className="md:flex items-center justify-between w-full">
            <Subtitle>Our Blog</Subtitle>
            <MainButton>Open Blog</MainButton>
         </div>
         <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 pt-10 sm:py-20">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
         </div>
      </div>
   );
}
