type Props = {
   onClick: () => void;
   isOnCart: boolean;
};

export default function CartButton({ onClick, isOnCart }: Props) {
   return (
      <button onClick={onClick} className="w-8 h-8 grid place-content-center">
         <span
            className={`material-icons${isOnCart ? "" : "-outlined"} !text-2xl`}
         >
            shopping_cart
         </span>
      </button>
   );
}
