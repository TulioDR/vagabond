import React from "react";
import Trait from "./Trait";

type Props = {};

export default function Guarantees({}: Props) {
   return (
      <div className="bg-zinc-600 w-full py-10 2xl:py-14 rounded-3xl flex items-center">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full px-10">
            <Trait icon="local_shipping" message="Free Shipping and Returns" />
            <Trait icon="paid" message="100% Money Back Guarantee" />
            <Trait icon="grade" message="High quality material" />
            <Trait icon="verified_user" message="Safe and Secure Checkout" />
         </div>
      </div>
   );
}
