import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { useRouter } from "next/router";

type Props = {};

export default function Navbar({}: Props) {
   const [isWhite, setIsWhite] = useState<boolean>(true);
   const { route } = useRouter();

   useEffect(() => {
      if (route === "/products") setIsWhite(false);
      else if (route === "/blog") setIsWhite(true);
      else if (route === "/contact") setIsWhite(false);
      else setIsWhite(true);
   }, [route]);

   useEffect(() => {
      console.log();
   }, []);

   return (
      <div
         className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-10 z-20 ${
            isWhite ? "text-white" : "text-black"
         }`}
      >
         <button className="lg:hidden">
            <span className="material-icons !text-4xl">menu</span>
         </button>
         <div className="w-1/2 hidden lg:flex space-x-10 xl:space-x-20 text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contacts">Contacts</NavLink>
         </div>
         <div className="font-black text-3xl">Vagabond</div>
         <div className="w-1/2 hidden lg:flex items-end h-full"></div>
      </div>
   );
}
