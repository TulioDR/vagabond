import NavLink from "./NavLink";
import useBackgroundColor from "@/hooks/useBackgroundColor";

type Props = {
   toggleSidebar: () => void;
   isSidebarOpen: boolean;
};

export default function Navbar({ toggleSidebar, isSidebarOpen }: Props) {
   const { isWhite } = useBackgroundColor();

   return (
      <nav
         className={`sticky top-0 w-full h-20 flex items-center justify-between z-20 ${
            isWhite ? "text-black" : "text-white"
         }`}
      >
         <button
            onClick={toggleSidebar}
            className={`lg:hidden duration-300 ${
               isSidebarOpen ? "text-white" : ""
            }`}
         >
            <span className="material-icons !text-4xl">menu</span>
         </button>
         <div className="w-1/2 hidden lg:flex space-x-10 xl:space-x-20 text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contacts</NavLink>
         </div>
         <div
            className={`font-black text-3xl font-oswald uppercase duration-300 ${
               isSidebarOpen ? "text-white sm:text-inherit" : ""
            }`}
         >
            Vagabond
         </div>
         <div className="w-1/2 hidden lg:flex items-end h-full"></div>
      </nav>
   );
}
