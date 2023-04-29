type Props = {
   icon: string;
   onClick: () => void;
   disabled?: boolean;
};

export default function CardButton({ icon, onClick, disabled }: Props) {
   return (
      <button
         onClick={onClick}
         className={`aspect-square h-8 grid place-content-center rounded-full ${
            disabled
               ? "text-gray-400 pointer-events-none"
               : "text-black hover:bg-black hover:text-white"
         }`}
      >
         <span className="material-icons">{icon}</span>
      </button>
   );
}
