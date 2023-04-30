import React from "react";

type Props = {};

export default function FilterButton({}: Props) {
   return (
      <button className="grid place-content-center aspect-square">
         <span className="material-icons !text-4xl 2xl:!text-5xl">
            filter_alt
         </span>
      </button>
   );
}
