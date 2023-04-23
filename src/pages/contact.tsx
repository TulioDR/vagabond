import ContactInfo from "@/components/Contact/ContactInfo";
import Input from "@/components/Contact/Input";
import Title from "@/components/Contact/Title";
import React from "react";

export default function Contact() {
   return (
      <div className="min-h-screen flex items-center justify-center">
         <div className="rounded-lg bg-white text-black shadow-xl flex items-stretch -translate-x-20">
            <div className="p-10 space-y-5">
               <Title>
                  <div>Send us a</div>
                  <div>message</div>
               </Title>
               <div className="grid lg:grid-cols-2 gap-x-10 gap-y-10">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                  <Input placeholder="Email" />
                  <Input placeholder="Phone No." />
               </div>
               <Input placeholder="Message" textarea />
               <div className="flex justify-end">
                  <button className="bg-orange-400 rounded-lg px-10 py-2 uppercase font-bold">
                     Send
                  </button>
               </div>
            </div>
            <div className="bg-brown rounded-lg shadow-xl p-10 w-80 -mr-40 translate-y-10 text-white space-y-5">
               <Title>
                  <div>Drop in our</div>
                  <div>Store</div>
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
            </div>
         </div>
      </div>
   );
}
