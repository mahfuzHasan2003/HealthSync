import ComponentHeader from "@/components/custom-components/component-header";
import PopOutEffect from "./pop-out-effect";

export default function OurTeam() {
   return (
      <div className='max-w-[90rem] mx-auto'>
         <div>
            <ComponentHeader title='Our Team' description='Meet Our Specialists' />
         </div>
         <div className='md:flex justify-between items-center gap-4'>
            <PopOutEffect imageSrc="/1.png" />
            <PopOutEffect imageSrc="/2.png" />
            <PopOutEffect imageSrc="/3.png" />
         </div>
      </div>
   )
}
