// "use client";

// import { ArrowRight } from "lucide-react";
// import React from "react";
// import { motion } from "framer-motion";
// import PortfolioSVG1 from "@/app/svg/Portfolio/page1";

// function Bannar() {
//   return (
//     <section
//       className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-12 lg:px-20 lg:py-20 bg-[#020720] dark:bg-[#030E38]"
//       style={{ backgroundImage: "url('/Bannar.png')" }}
//     >
//       <div className="absolute left-0 top-0">
//         <PortfolioSVG1 />
//       </div>
//       {/* Decorative Animated Circle */}
//       <motion.img
//         alt="Animated decorative circle"
//         loading="lazy"
//         width="101"
//         height="101"
//         decoding="async"
//         src="/Circle.png"
//         style={{ color: "transparent" }}
//         className="absolute bottom-[30px] right-40 opacity-80 pointer-events-none z-0"
//         animate={{
//           y: [0, -200, 0], // subtle float
//           scale: [1, 1.05, 1],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Left Side: Text and Button */}
//       <div className="text-center lg:text-left max-w-xl space-y-6">
//         <h1 className="text-white text-4xl md:text-6xl font-bold">
//           <span className="text-[#F05B2D]">techserve4u </span> Hero
//         </h1>

//         <h2 className="text-white text-2xl md:text-6xl font-semibold">
//           Your Trusted Partner for Startup Growth Solutions
//         </h2>
//         <p className="text-gray-200 text-base md:text-lg">
//           We offer custom software development, white-label solutions, and
//           business growth support to help your startup achieve rapid,
//           sustainable growth.
//         </p>
//         <div className="flex  items-center justify-center lg:justify-start">
//           <button className="mt-4 bg-[#F05B2D] hover:bg-blue-700 text-white font-semibold py-3 px-6  shadow-lg transition duration-300  flex  items-center justify-center lg:justify-start gap-2 rounded-2xl">
//             <ArrowRight className="w-4 h-4 text-white border border-amber-50 rounded-full" />
//             <span>Scale 10X Faster</span>
//           </button>
//         </div>
//       </div>

//       <div className="relative w-full max-w-2xl h-full z-10">
//         {/* Video */}
//         <iframe
//           src="https://player.vimeo.com/video/1069751828?h=d7615b1781"
//           className="aspect-video h-full w-full rounded-md object-cover sm:h-[500px]"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </section>
//   );
// }

// export default Bannar;

// -----------------------

"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import PortfolioSVG1 from "@/app/svg/Portfolio/page1";

function Bannar() {
  return (
    <section
      className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-12 lg:px-20 lg:py-20 bg-[#020720] dark:bg-[#030E38]"
      style={{ backgroundImage: "url('/Bannar.png')" }}
    >
      {/* Decorative SVG */}
      <div className="absolute left-0 top-0 w-full max-w-[300px] sm:max-w-[400px] z-0">
        <PortfolioSVG1 />
      </div>

      {/* Decorative Animated Circle */}
      <motion.img
        alt="Animated decorative circle"
        loading="lazy"
        width="101"
        height="101"
        decoding="async"
        src="/Circle.png"
        style={{ color: "transparent" }}
        className="absolute bottom-10 right-10 sm:right-20 opacity-80 pointer-events-none z-0 w-20 sm:w-24"
        animate={{
          y: [0, -200, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left Side: Text and Button */}
      <div className="text-center lg:text-left max-w-xl space-y-6 z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          <span className="text-[#F05B2D]">techserve4u </span> Hero
        </h1>

        <h2 className="text-white text-2xl md:text-6xl font-semibold">
          Your Trusted Partner for Startup Growth Solutions
        </h2>

        <p className="text-gray-200 text-base md:text-lg">
          We offer custom software development, white-label solutions, and
          business growth support to help your startup achieve rapid,
          sustainable growth.
        </p>

        <div className="flex items-center justify-center lg:justify-start flex-wrap">
          <button className="mt-4 bg-[#F05B2D] hover:bg-blue-700 text-white font-semibold py-3 px-6 shadow-lg transition duration-300 flex items-center gap-2 rounded-2xl">
            <ArrowRight className="w-4 h-4 text-white border border-amber-50 rounded-full" />
            <span>Scale 10X Faster</span>
          </button>
        </div>
      </div>

      {/* Right Side: Video */}
      <div className="relative w-full max-w-2xl h-full z-10">
        <iframe
          src="https://player.vimeo.com/video/1069751828?h=d7615b1781"
          className="aspect-video w-full rounded-md object-cover h-[250px] sm:h-[400px] md:h-[500px]"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Bannar;
