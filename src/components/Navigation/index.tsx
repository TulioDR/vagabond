import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";

export default function Navigation() {
   const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
   const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
   const closeSidebar = () => setIsSidebarOpen(false);
   return (
      <>
         <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
         <AnimatePresence>
            {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
         </AnimatePresence>
      </>
   );
}
