import Navigation from "@/components/Navigation/";
import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import useBackgroundColor from "@/hooks/useBackgroundColor";

export default function App({ Component, pageProps }: AppProps) {
   const { isWhite } = useBackgroundColor();

   return (
      <>
         <main
            className={`px-5 sm:px-10 ${
               isWhite ? "bg-white text-black" : "bg-stone-800 text-white"
            }`}
         >
            <Navigation />
            <Component {...pageProps} />
            <Footer />
         </main>
      </>
   );
}
