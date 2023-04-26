type Props = {
   icon: string;
   onClick: () => void;
};

export default function CardButton({ icon, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="aspect-square h-10 hover:bg-black hover:text-white text-4xl grid place-content-center rounded-full"
      >
         <span className="material-icons">{icon}</span>
      </button>
   );
}
