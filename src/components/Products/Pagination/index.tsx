import Page from "./Page";

type Props = {
   pagination: number[];
   currentPage: number;
   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
   currentPage,
   setCurrentPage,
   pagination,
}: Props) {
   return (
      <div className="flex">
         {pagination.map((number) => (
            <Page
               key={number}
               number={number}
               currentPage={currentPage}
               onClick={() => setCurrentPage(number)}
            />
         ))}
      </div>
   );
}
