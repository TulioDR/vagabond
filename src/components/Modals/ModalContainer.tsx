import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   close: () => void;
};

export default function ModalContainer({ children, close }: Props) {
   return (
      <div className="fixed top-0 left-0 w-full z-30 h-screen">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full bg-black/50 "
            onClick={close}
         />
         <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-4/5 bg-white rounded-3xl p-10 ">
            {children}
         </div>
      </div>
   );
}
