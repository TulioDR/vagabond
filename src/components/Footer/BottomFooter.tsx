import useBackgroundColor from "@/hooks/useBackgroundColor";
import React from "react";
import MainContainer from "../MainContainer";

export default function BottomFooter() {
   const { isWhite } = useBackgroundColor();
   return (
      <MainContainer>
         <div
            className={`py-5 lg:flex space-y-5 lg:space-y-0 justify-between text-xs sm:text-sm ${
               isWhite ? "text-black" : "text-white"
            }`}
         >
            <div className="sm:flex items-center">
               <div className="flex items-center">
                  <span>Copyright</span>
                  <span className="material-icons !mx-1">copyright</span>
                  <span>2022, Vagabond.</span>
               </div>
               <span>All Rights Reserved.</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-5 w-max">
               <span>Privacy & Cookies</span>
               <span>|</span>
               <span>TS&Cs</span>
               <span>|</span>
               <span>Accessibility</span>
            </div>
         </div>
      </MainContainer>
   );
}
