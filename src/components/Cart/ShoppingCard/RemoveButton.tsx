type Props = {
   onClick: () => void;
};

export default function RemoveButton({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="absolute top-0 left-0 w-9 h-9 bg-white hidden group-hover:grid place-content-center hover:text-white hover:bg-red-800"
      >
         <span className="material-icons">delete</span>
      </button>
   );
}
