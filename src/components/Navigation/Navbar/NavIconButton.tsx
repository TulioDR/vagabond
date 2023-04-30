import Link from "next/link";

type Props = {
   icon: string;
   outlined?: boolean;
   href: string;
};

export default function NavIconButton({ icon, outlined, href }: Props) {
   return (
      <Link href={href} className="grid place-content-center">
         <span
            className={`material-icons${outlined ? "-outlined" : ""} !text-3xl`}
         >
            {icon}
         </span>
      </Link>
   );
}
