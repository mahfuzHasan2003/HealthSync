import Image from "next/image";

export default function PopOutEffect({ imageSrc }) {
   return (
      <div>
         <Image alt="Slide Image" src={imageSrc} height={300} width={300} />
      </div>
   )
}
