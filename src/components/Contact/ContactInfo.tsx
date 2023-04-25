type Props = {
   icon: string;
   text: string;
   children?: React.ReactNode;
   big?: true;
};

export default function ContactInfo({ icon, text, children, big }: Props) {
   return (
      <div>
         <div className="w-full flex items-center space-x-3">
            <div className="grid place-content-center text-orange-400 h-4">
               <span className="material-icons !text-xl">{icon}</span>
            </div>
            <div
               className={`${big ? "text-lg font-bold" : "text-xs sm:text-sm"}`}
            >
               {text}
            </div>
         </div>
         {children}
      </div>
   );
}
