import CardButton from "./CardButton";

type Props = {
   add: () => void;
   subtract: () => void;
   quantity: number;
};

export default function Quantity({ add, subtract, quantity }: Props) {
   return (
      <div className="flex items-center justify-center space-x-2 select-none">
         <CardButton
            icon="remove"
            onClick={subtract}
            disabled={quantity <= 1}
         />
         <span className="text-lg">{quantity}</span>
         <CardButton icon="add" onClick={add} disabled={quantity >= 20} />
      </div>
   );
}
