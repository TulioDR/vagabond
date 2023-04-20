type Props = {
   children: React.ReactNode;
};

export default function Subtitle({ children }: Props) {
   return (
      <h1 className="text-3xl sm:text-6xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tighter min-w-max">
         {children}
      </h1>
   );
}
