import useBackgroundColor from "@/hooks/useBackgroundColor";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
};

export default function ModalContainer({ children, isOpen }: Props) {
   const { isWhite } = useBackgroundColor();
   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ duration: 0.1 }}
               className={`absolute top-full right-0 w-80 overflow-auto space-y-3 shadow-xl p-5 ${
                  isWhite ? "bg-stone-800 text-white" : "bg-white text-black"
               }`}
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
