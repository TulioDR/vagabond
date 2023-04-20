import Subtitle from "@/components/Subtitle";

type Props = {};

export default function About({}: Props) {
   return (
      <div className="grid md:grid-cols-2 gap-10 mt-10">
         <div>
            <div>
               <Subtitle>About Us</Subtitle>
            </div>
            <div className="grid place-content-center text-justify">
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry.
            </div>
         </div>
      </div>
   );
}
