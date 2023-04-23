type Props = {
   icon: string;
   children: React.ReactNode;
};

export default function ContactInfo({ icon, children }: Props) {
   return (
      <div className="w-full flex items-start space-x-3">
         <div className="grid place-content-center text-orange-400">
            <span className="material-icons !text-xl">{icon}</span>
         </div>
         <div>{children}</div>
      </div>
   );
}
