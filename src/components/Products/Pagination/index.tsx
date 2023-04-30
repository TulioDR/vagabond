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
   if (pagination.length <= 1) return <></>;
   return (
      <div className="flex w-max mx-auto">
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
