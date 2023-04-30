import Pagination from "@/components/Products/Pagination";
import ProductCard from "@/components/Products/ProductCard";
import Subtitle from "@/components/Subtitle";
import useCartContext from "@/context/CartContext";
import usePagination from "@/hooks/usePagination";

export default function Products() {
   const { products } = useCartContext();

   const paginationHook = usePagination({
      arrayOfItems: products,
      itemsPerPage: 12,
   });
   const { displayed, currentPage, setCurrentPage, pagination } =
      paginationHook;
   return (
      <div className="text-black space-y-10">
         <div className="md:flex items-end justify-between space-y-5 md:space-y-0">
            <Subtitle>Products</Subtitle>
            <div className="flex items-center space-x-1 sm:space-x-3 ml-auto w-max">
               <Pagination
                  pagination={pagination}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
               />
               <button className="grid place-content-center aspect-square">
                  <span className="material-icons !text-4xl">filter_alt</span>
               </button>
            </div>
         </div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {displayed.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
         <div className="flex justify-center">
            <Pagination
               pagination={pagination}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
            />
         </div>
      </div>
   );
}
