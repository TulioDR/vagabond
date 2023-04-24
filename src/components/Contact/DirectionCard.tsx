import SocialIcon from "../Footer/SocialIcon";
import ContactInfo from "./ContactInfo";
import Title from "./Title";
import instagram from "@/assets/img/social-icons/instagram.svg";
import twitter from "@/assets/img/social-icons/twitter.svg";
import youtube from "@/assets/img/social-icons/youtube.svg";

export default function DirectionCard() {
   return (
      <div className="bg-brown rounded-lg shadow-xl p-10 h-full w-full text-white space-y-5">
         <Title>
            <div>Drop in our</div>
            <div className="flex items-end space-x-2">
               <div>Store</div>
               <div className="bg-main-orange h-2 w-2 -translate-y-[6px]"></div>
            </div>
         </Title>
         <p className="text-xs sm:text-sm">
            Our office is located in a beautiful building inside the busiest
            city ni the UK
         </p>
         <ContactInfo icon="place">
            <div className="text-lg font-bold">London, England</div>
            <div>21A Lorem Ipsum Str. District 1, HCMC, Britain</div>
         </ContactInfo>
         <ContactInfo icon="email">vagabond@loremipsum.com</ContactInfo>
         <ContactInfo icon="phone">(+84) 12-345-6789</ContactInfo>
         <div className="flex space-x-3 ml-8">
            <SocialIcon src={instagram} alt="instagram" />
            <SocialIcon src={twitter} alt="twitter" />
            <SocialIcon src={youtube} alt="youtube" />
         </div>
      </div>
   );
}
