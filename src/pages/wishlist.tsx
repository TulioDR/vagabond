import FilterButton from "@/components/Filter/FilterButton";
import PageHead from "@/components/PageHead";
import PageTitle from "@/components/PageTitle";
import Pagination from "@/components/Products/Pagination";
import ProductCard from "@/components/Products/ProductCard";
import useWishlistContext from "@/context/WishlistContext";
import usePagination from "@/hooks/usePagination";

export default function Wishlist() {
   const { wishlist } = useWishlistContext();
   const paginationHook = usePagination({
      arrayOfItems: wishlist,
      itemsPerPage: 12,
   });
   const { displayed, currentPage, setCurrentPage, pagination } =
      paginationHook;
   return (
      <>
         <PageHead
            title="Wishlist - Vagabond"
            description="Check our products in store"
         />
         <div className="space-y-10 min-h-screen">
            <div className="md:flex items-end justify-between space-y-5 md:space-y-0">
               <PageTitle>Wishlist</PageTitle>
               <div className="flex items-center space-x-1 sm:space-x-3 ml-auto w-max">
                  <Pagination
                     pagination={pagination}
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
                  />
                  <FilterButton />
               </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
               {displayed.map((wished) => (
                  <ProductCard key={wished.id} product={wished} />
               ))}
            </div>
            <Pagination
               pagination={pagination}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
            />
         </div>
      </>
   );
}
