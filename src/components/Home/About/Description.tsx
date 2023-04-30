import Subtitle from "@/components/PageTitle";

export default function Description() {
   return (
      <div className="">
         <div>
            <Subtitle>About Us</Subtitle>
         </div>
         <div
            className="text-justify text-xs sm:text-sm md:text-base xl:text-lg text-gray-300 w-full"
            // style={{ width: "clamp(45ch, 100%, 75ch)" }}
         >
            <p className="my-10 w-2/3">
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry.
            </p>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
               est laudantium nobis aut, ipsam iusto earum labore odit
               voluptatibus autem quibusdam in dolorum adipisci quis. Et, quae
               temporibus ab laudantium cupiditate, assumenda reiciendis tempore
               vero quas fuga adipisci accusamus architecto veritatis enim
               tenetur velit voluptas at eaque! Cupiditate, eveniet sint.
               <br />
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
               soluta sit, a facilis quibusdam beatae dolores voluptate et iste
               voluptatum laudantium velit incidunt voluptatibus, aperiam dolore
               veritatis in delectus autem.
            </p>
         </div>
      </div>
   );
}
