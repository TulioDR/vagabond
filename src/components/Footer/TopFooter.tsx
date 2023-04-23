import MainContainer from "../MainContainer";
import FooterInfo from "./FooterInfo";
import SocialIcon from "./SocialIcon";
import instagram from "@/assets/img/social-icons/instagram.svg";
import twitter from "@/assets/img/social-icons/twitter.svg";
import youtube from "@/assets/img/social-icons/youtube.svg";

export default function TopFooter() {
   return (
      <div className="py-10 bg-main-gray rounded-3xl text-white">
         <MainContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
               <div>
                  <div className="sm:mx-auto">
                     <div className="font-oswald uppercase text-3xl">
                        Vagabond
                     </div>
                     <div className="mt-5 flex items-center space-x-5">
                        <SocialIcon src={instagram} alt="instagram" />
                        <SocialIcon src={twitter} alt="twitter" />
                        <SocialIcon src={youtube} alt="youtube" />
                     </div>
                  </div>
               </div>
               <FooterInfo
                  title="Help & Information"
                  list={["Help", "Track Order", "Delivery & returns"]}
               />
               <FooterInfo
                  title="About Vagabond"
                  list={["About Us", "Careers of Etalon", "Investor's site"]}
               />
               <FooterInfo
                  title="More from Vagabond"
                  list={[
                     "Mobile from Vagabond Apps",
                     "Gift vouchers",
                     "Black Friday",
                  ]}
               />
            </div>
         </MainContainer>
      </div>
   );
}
