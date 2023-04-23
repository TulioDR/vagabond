import Link from "next/link";

type Props = {
   children: React.ReactNode;
   href: string;
   onClick?: () => void;
};

export default function NavLink({ children, href, onClick }: Props) {
   return (
      <Link
         onClick={onClick}
         className="font-bold lg:font-normal text-xl sm:text-2xl lg:text-base"
         href={href}
      >
         {children}
      </Link>
   );
}
