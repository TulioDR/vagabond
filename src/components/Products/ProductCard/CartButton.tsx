import useBackgroundColor from "@/hooks/useBackgroundColor";

type Props = {
   onClick: () => void;
   isOnCart: boolean;
};

export default function CartButton({ onClick, isOnCart }: Props) {
   const { isWhite } = useBackgroundColor();
   return (
      <button
         onClick={onClick}
         className={`w-10 aspect-square grid place-content-center rounded-full translate-x-2 ${
            isWhite
               ? "hover:bg-black hover:text-white"
               : "hover:bg-white hover:text-black"
         }`}
      >
         <span
            className={`material-icons${isOnCart ? "" : "-outlined"} !text-2xl`}
         >
            shopping_cart
         </span>
      </button>
   );
}
