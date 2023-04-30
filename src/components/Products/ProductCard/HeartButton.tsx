import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
   onClick: () => void;
   isOnWishlist: boolean;
};

export default function HeartButton({ onClick, isOnWishlist }: Props) {
   const { route } = useRouter();
   const [useDeleteIcon, setUseDeleteIcon] = useState<boolean>(false);

   useEffect(() => {
      if (route === "/wishlist") setUseDeleteIcon(true);
      else setUseDeleteIcon(false);
   }, [route]);

   return (
      <button
         onClick={onClick}
         className={`absolute top-0 right-0 w-10 aspect-square grid place-content-center z-10 text-white rounded-bl-xl ${
            useDeleteIcon
               ? "hover:bg-red-800"
               : "hover:bg-white hover:text-black"
         }`}
      >
         <span className="material-icons !text-3xl">
            {useDeleteIcon
               ? "delete"
               : isOnWishlist
               ? "favorite"
               : "favorite_border"}
         </span>
      </button>
   );
}
