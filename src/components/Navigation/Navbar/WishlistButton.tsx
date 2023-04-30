import Link from "next/link";
import IconButton from "./IconButton";

type Props = {};

export default function WishlistButton({}: Props) {
   return (
      <Link href="/wishlist">
         <IconButton icon="favorite_border" onClick={() => {}} />
      </Link>
   );
}
