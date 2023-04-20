import Link from "next/link";

type Props = {
   children: React.ReactNode;
   href: string;
};

export default function NavLink({ children, href }: Props) {
   return <Link href={href}>{children}</Link>;
}
