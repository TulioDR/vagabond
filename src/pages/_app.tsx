import Navigation from "@/components/Navigation/";
import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import useBackgroundColor from "@/hooks/useBackgroundColor";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export default function App({ Component, pageProps }: AppProps) {
   const { isWhite } = useBackgroundColor();

   return (
      <CartProvider>
         <WishlistProvider>
            <main
               className={`px-5 sm:px-10 pt-20 ${
                  isWhite ? "bg-white text-black" : "bg-stone-800 text-white"
               }`}
            >
               <Navigation />
               <Component {...pageProps} />
               <Footer />
            </main>
            <div id="modals">
               {/* Here goes all the modals through React Portal (I love Glados and Chell)*/}
            </div>
         </WishlistProvider>
      </CartProvider>
   );
}
