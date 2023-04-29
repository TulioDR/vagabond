type Props = {};
import { v4 as uuidv4 } from "uuid";
export default function CartFooter({}: Props) {
   const handleClick = () => {
      const index = uuidv4();
      console.log(index);
   };
   return (
      <div className="flex items-center justify-between w-full">
         <div className="flex items-center">
            <span className="material-icons">navigate_before</span>
            <span className="uppercase font-semibold">Continue Shopping</span>
         </div>
         <div className="space-x-3 flex items-end">
            <span className="text-gray-500 text-sm">Total</span>
            <span className="font-bold text-xl w-[154px]">$499</span>
         </div>
         <button onClick={handleClick} className="bg-blue-600 text-white p-5">
            Click me
         </button>
      </div>
   );
}
