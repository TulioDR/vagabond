type Props = {
   price: number;
   quantity?: number;
};

export default function ModalPriceAndQuantity({ price, quantity }: Props) {
   return (
      <div className="flex items-end justify-between">
         <span className="font-bold">${price}</span>
         {quantity !== undefined && (
            <div className="flex items-end space-x-1">
               <span className="text-xs text-gray-400 uppercase -translate-y-1">
                  Qty:
               </span>
               <span className="font-bold">{quantity}</span>
            </div>
         )}
      </div>
   );
}
