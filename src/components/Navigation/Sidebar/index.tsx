import { motion } from "framer-motion";
import NavLink from "../Navbar/NavLink";

interface Props {
   closeSidebar: () => void;
}
export default function Sidebar({ closeSidebar }: Props) {
   return (
      <motion.aside
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         transition={{ duration: 0.4 }}
         className="fixed lg:hidden top-0 left-0 w-full sm:w-96 h-screen bg-brown z-10 shadow-xl py-20"
      >
         <ul className="w-full h-full flex flex-col items-center justify-center space-y-5 font text-xl sm:text-2xl">
            <NavLink onClick={closeSidebar} href="/">
               Home
            </NavLink>
            <NavLink onClick={closeSidebar} href="/products">
               Products
            </NavLink>
            <NavLink onClick={closeSidebar} href="/blog">
               Blog
            </NavLink>
            <NavLink onClick={closeSidebar} href="/contacts">
               Contacts
            </NavLink>
         </ul>
      </motion.aside>
   );
}
