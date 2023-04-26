import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function ModalTitle({ children }: Props) {
   return <div className="text-3xl font-bold font-oswald">{children}</div>;
}
