type Props = {
   total: number;
};

export default function ModalTotalAmount({ total }: Props) {
   return (
      <div className="flex items-end justify-between w-full">
         <span>Total:</span>
         <span className="font-bold text-2xl">${total}</span>
      </div>
   );
}
