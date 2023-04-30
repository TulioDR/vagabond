import FilterButton from "@/components/Filter/FilterButton";
import BlogPost from "@/components/Home/Blog/BlogPost";
import PageHead from "@/components/PageHead";
import Subtitle from "@/components/PageTitle";

export default function Blog() {
   return (
      <>
         <PageHead
            title="Blog - Vagabond"
            description="Check our latest posts"
         />
         <div className="space-y-10">
            <div className="flex items-end justify-between">
               <Subtitle>Blog</Subtitle>
               <FilterButton />
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
               <BlogPost />
               <BlogPost />
               <BlogPost />
               <BlogPost />
               <BlogPost />
               <BlogPost />
               <BlogPost />
               <BlogPost />
            </div>
         </div>
      </>
   );
}
