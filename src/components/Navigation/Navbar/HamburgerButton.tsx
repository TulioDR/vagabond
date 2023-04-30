type Props = {
   onClick: () => void;
   isSidebarOpen: boolean;
};

export default function HamburgerButton({ onClick, isSidebarOpen }: Props) {
   return (
      <button
         onClick={onClick}
         className={`duration-300 ${isSidebarOpen ? "text-white" : ""}`}
      >
         <span className="material-icons !text-4xl">menu</span>
      </button>
   );
}
