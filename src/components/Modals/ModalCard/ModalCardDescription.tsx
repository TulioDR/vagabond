import useBackgroundColor from "@/hooks/useBackgroundColor";

type Props = {
   children: React.ReactNode;
};

export default function ModalCardDescription({ children }: Props) {
   const { isWhite } = useBackgroundColor();
   return (
      <div
         className={`text-sm  ${isWhite ? "text-gray-400" : "text-gray-500"}`}
      >
         {children}
      </div>
   );
}
