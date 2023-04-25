type Props = {
   icon: string;
   outlined?: boolean;
   onClick: () => void;
};

export default function IconButton({ icon, outlined, onClick }: Props) {
   return (
      <button onClick={onClick} className="grid place-content-center">
         <span
            className={`material-icons${outlined ? "-outlined" : ""} !text-3xl`}
         >
            {icon}
         </span>
      </button>
   );
}
