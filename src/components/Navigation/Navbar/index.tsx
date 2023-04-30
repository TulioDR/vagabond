import HamburgerButton from "./HamburgerButton";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavCart from "./NavCart";
import NavWishlist from "./NavWishlist";
import NavContainer from "./NavContainer";

type Props = {
   toggleSidebar: () => void;
   isSidebarOpen: boolean;
};

export default function Navbar({ toggleSidebar, isSidebarOpen }: Props) {
   return (
      <NavContainer>
         <div className="lg:hidden">
            <HamburgerButton
               onClick={toggleSidebar}
               isSidebarOpen={isSidebarOpen}
            />
         </div>
         <div className="w-1/2 hidden lg:flex space-x-10 xl:space-x-20 text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contacts</NavLink>
         </div>
         <NavLogo isSidebarOpen={isSidebarOpen} />
         <div className="w-1/2 hidden lg:flex space-x-3 items-center justify-end h-full">
            <NavWishlist />
            <NavCart />
         </div>
      </NavContainer>
   );
}
