"use client";

export default function HeroSlider() {
   return (
      <div className="relative w-full min-h-screen overflow-hidden">
         {/* Background Image with Inverted Clipping */}
         <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1920 1080"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
         >
            <defs>
               {/* Define the Inverted Mask */}
               <mask id="inverseMask">
                  <rect width="100%" height="100%" fill="white" />
                  <path
                     d="M327.5 772L0.5 719.5V1080H1920V0L1915.5 181L1905 550.5L1900 717L1897 810.5C1897 821.7 1895.67 831.167 1895 834.5C1892.2 870.1 1871.5 905 1861.5 918C1841.9 944 1817 960.833 1807 966C1780.6 982 1750 988 1738 989C1713.2 991.8 1691.33 988.833 1683.5 987L1635.5 979.5L1269 921L799 847L327.5 772Z"
                     fill="black"
                  />
               </mask>
            </defs>

            {/* Background Image (Now with correct `href`) */}
            <image
               href="/slide-1.jpg"
               width="100%"
               height="100%"
               mask="url(#inverseMask)"
               preserveAspectRatio="xMidYMid slice" // Fixes stretching
               className="object-cover w-full h-full"
            />
         </svg>

         {/* Overlay Text */}
         <div className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4">
            Your Text Here
         </div>
      </div>
   );
}
