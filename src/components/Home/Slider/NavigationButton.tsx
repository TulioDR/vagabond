type Props = {
   up?: boolean;
   onClick: () => void;
};

export default function NavigationButton({ onClick, up }: Props) {
   return (
      <button
         onClick={onClick}
         className="rounded-full w-7 py-3 border border-white hover:bg-white hover:text-black grid place-content-center"
      >
         <span className="material-icons">{up ? "north" : "south"}</span>
      </button>
   );
}
