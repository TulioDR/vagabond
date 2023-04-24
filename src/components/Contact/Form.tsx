import Input from "./Input";
import Title from "./Title";

export default function Form() {
   return (
      <div className="p-10 space-y-5 w-full">
         <Title>
            <div>Send us a</div>
            <div className="flex items-end space-x-2">
               <div>message</div>
               <div className="bg-main-orange h-2 w-2 -translate-y-[6px]"></div>
            </div>
         </Title>
         <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 w-full">
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
   );
}
