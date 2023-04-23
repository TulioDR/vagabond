import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { useRouter } from "next/router";

type Props = {
   toggleSidebar: () => void;
   isSidebarOpen: boolean;
};

export default function Navbar({ toggleSidebar, isSidebarOpen }: Props) {
   const [isWhite, setIsWhite] = useState<boolean>(true);
   const { route } = useRouter();

   useEffect(() => {
      if (route === "/products") setIsWhite(false);
      else if (route === "/blog") setIsWhite(true);
      else if (route === "/contact") setIsWhite(false);
      else setIsWhite(true);
   }, [route]);

   return (
      <nav
         className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-5 sm:px-10 z-20 ${
            isWhite ? "text-white" : "text-black"
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
            <NavLink href="/contacts">Contacts</NavLink>
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
