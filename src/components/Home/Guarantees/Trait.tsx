import React from "react";

interface Props {
   icon: string;
   message: string;
}

export default function Trait({ icon, message }: Props) {
   return (
      <div className="flex flex-col items-center">
         <span className="material-icons-outlined !text-6xl">{icon}</span>
         <span className="text-xs sm:text-sm text-center">{message}</span>
      </div>
   );
}
