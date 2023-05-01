type Props = {
   up?: boolean;
   onClick: () => void;
   disabled: boolean;
};

export default function NavigationButton({ onClick, up, disabled }: Props) {
   return (
      <button
         onClick={onClick}
         className={`rounded-full w-7 py-3 border grid place-content-center ${
            disabled
               ? "border-gray-400 text-gray-400 pointer-events-none"
               : "border-white text-white hover:bg-white hover:text-black"
         }`}
      >
         <span className="material-icons">{up ? "north" : "south"}</span>
      </button>
   );
}
