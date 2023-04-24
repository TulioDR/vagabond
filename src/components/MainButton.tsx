type Props = {
   children: React.ReactNode;
};

export default function MainButton({ children }: Props) {
   return (
      <button className="rounded-full bg-main-orange flex items-center space-x-2 px-6 py-3 ml-auto text-black">
         <span>{children}</span>
         <span className="material-icons">arrow_right_alt</span>
      </button>
   );
}
