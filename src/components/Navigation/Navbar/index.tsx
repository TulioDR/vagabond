import HamburgerButton from "./HamburgerButton";
import NavLink from "./NavLink";
import useBackgroundColor from "@/hooks/useBackgroundColor";
import Vagabond from "./Vagabond";
import FavoriteButton from "./FavoriteButton";
import CartButton from "./CartButton";

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
         <HamburgerButton
            onClick={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
         />
         <div className="w-1/2 hidden lg:flex space-x-10 xl:space-x-20 text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contacts</NavLink>
         </div>
         <Vagabond isSidebarOpen={isSidebarOpen} />
         <div className="w-1/2 hidden lg:flex space-x-3 items-center justify-end h-full">
            <FavoriteButton />
            <CartButton />
         </div>
      </nav>
   );
}
