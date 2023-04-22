interface Props {
   children: React.ReactNode;
}

export default function MainContainer({ children }: Props) {
   return <div className="px-5 lg:px-10 xl:px-20">{children}</div>;
}
