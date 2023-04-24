import ContactInfo from "@/components/Contact/ContactInfo";
import Input from "@/components/Contact/Input";
import Title from "@/components/Contact/Title";
import SocialIcon from "@/components/Footer/SocialIcon";
import instagram from "@/assets/img/social-icons/instagram.svg";
import twitter from "@/assets/img/social-icons/twitter.svg";
import youtube from "@/assets/img/social-icons/youtube.svg";

export default function Contact() {
   return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
         <div className="rounded-lg bg-white text-black shadow-xl flex items-stretch -translate-x-20">
            <div className="p-10 space-y-5">
               <Title>
                  <div>Send us a</div>
                  <div className="flex items-end space-x-2">
                     <div>message</div>
                     <div className="bg-main-orange h-2 w-2 -translate-y-[6px]"></div>
                  </div>
               </Title>
               <div className="grid lg:grid-cols-2 gap-x-10 gap-y-10">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                  <Input placeholder="Email" />
                  <Input placeholder="Phone No." />
               </div>
               <Input placeholder="Message" textarea />
               <div className="flex justify-end">
                  <button className="bg-main-orange rounded-lg px-10 py-2 uppercase font-bold">
                     Send
                  </button>
               </div>
            </div>
            <div className="bg-brown rounded-lg shadow-xl p-10 w-80 -mr-40 translate-y-10 text-white space-y-5">
               <Title>
                  <div>Drop in our</div>
                  <div className="flex items-end space-x-2">
                     <div>Store</div>
                     <div className="bg-main-orange h-2 w-2 -translate-y-[6px]"></div>
                  </div>
               </Title>
               <p className="text-xs sm:text-sm">
                  Our office is located in a beautiful building inside the
                  busiest city ni the UK
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
         </div>
      </div>
   );
}
