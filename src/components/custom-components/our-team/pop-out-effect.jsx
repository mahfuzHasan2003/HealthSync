import Image from "next/image";

export default function PopOutEffect({ imageSrc }) {
   return (
      <div className="relative w-full max-w-md aspect-[1/1.2] rounded-b-full overflow-hidden z-10">
         <Image alt="Slide Image" className="w-full" src={imageSrc} height={300} width={300} />
         <div className="aspect-square w-full rounded-full bg-primary absolute bottom-0 -z-10"></div>
      </div>
   )
}
