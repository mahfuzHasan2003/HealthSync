"use client";

import Image from "next/image";

export default function HeroSlider() {
   return (
      <div className="w-full">
         <Image src="/slide-1.jpg" alt="Slide image-1" height={1387.4} width={2688} className="object-cover lg:mask-[url(/hero-section-mask.svg)]" />
      </div>
   );
}
