import { useEffect, useState } from "react";
interface Props {
   arrayOfItems: any[];
   itemsPerPage: number;
}
export default function usePagination({ arrayOfItems, itemsPerPage }: Props) {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [displayed, setDisplayed] = useState<any[]>([]);

   const [pagination, setPagination] = useState<number[]>([]);

   useEffect(() => {
      const paginationLength = Math.ceil(arrayOfItems.length / itemsPerPage);
      const paginationArray = [];
      for (var i = 1; i <= paginationLength; i++) {
         paginationArray.push(i);
      }
      setPagination(paginationArray);
   }, [itemsPerPage, arrayOfItems.length]);

   useEffect(() => {
      const n = currentPage - 1;
      const i = itemsPerPage;
      setDisplayed(arrayOfItems.slice(n * i, n * i + i));
      window.scrollTo({ top: 0 });
   }, [arrayOfItems, itemsPerPage, currentPage]);

   return {
      displayed,
      currentPage,
      setCurrentPage,
      pagination,
   };
}
