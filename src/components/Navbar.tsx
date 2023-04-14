type Props = {};

export default function Navbar({}: Props) {
   return (
      <div className="fixed top-0 left-0 w-full h-20 flex items-center text-white px-10">
         <div className="w-1/2 flex space-x-20 text-sm">
            <span>Home</span>
            <span>Products</span>
            <span>Blog</span>
            <span>Contacts</span>
         </div>
         <div className="mx-auto font-black text-3xl">Vagabond</div>
         <div className="w-1/2 flex items-end h-full"></div>
      </div>
   );
}
