type Props = {
   name: string;
};

export default function Card({ name }: Props) {
   return (
      <div>
         <div className="aspect-square bg-gray-300"></div>
         <div className="px-5 py-2">
            <div className="flex items-center justify-between">
               <span className="text-sm text-gray-600">New Arrival</span>
               <span className="text-lg font-semibold text-orange-400">
                  $300
               </span>
            </div>
            <div className="flex justify-between">
               <div className="text-xl font-bold min-h-[32px] flex-1">
                  {name}
               </div>
               <button className="w-8 h-8 grid place-content-center">
                  <span className="material-icons !text-2xl">
                     shopping_cart
                  </span>
               </button>
            </div>
         </div>
      </div>
   );
}
