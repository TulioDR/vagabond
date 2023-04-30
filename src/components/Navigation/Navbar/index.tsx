import HamburgerButton from "./HamburgerButton";
import NavLink from "./NavLink";
import useBackgroundColor from "@/hooks/useBackgroundColor";
import Vagabond from "./Vagabond";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import { useEffect, useState } from "react";

type Props = {
   toggleSidebar: () => void;
   isSidebarOpen: boolean;
};

export default function Navbar({ toggleSidebar, isSidebarOpen }: Props) {
   const { isWhite } = useBackgroundColor();

   const [isTouchingTop, setIsTouchingTop] = useState(true);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 40) setIsTouchingTop(false);
         else setIsTouchingTop(true);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return (
      <nav
         className={`fixed top-0 left-0 px-5 sm:px-10 w-full flex items-center justify-between z-20 duration-300 ${
            isTouchingTop
               ? `h-20 ${isWhite ? "text-black" : "text-white"}`
               : `h-14 ${
                    isWhite ? "bg-black text-white" : "bg-white text-black"
                 }`
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
            <WishlistButton />
            <CartButton />
         </div>
      </nav>
   );
}
