import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useBackgroundColor() {
   const [isWhite, setIsWhite] = useState<boolean>(true);
   const { route } = useRouter();

   useEffect(() => {
      if (route === "/products") setIsWhite(true);
      else if (route === "/blog") setIsWhite(false);
      else if (route === "/contact") setIsWhite(false);
      else setIsWhite(false);
   }, [route]);

   return { isWhite };
}
