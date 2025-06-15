import React from "react";
// import _classNameTDZError from "../../node_modules/next/dist/compiled/babel/bundle";
import Image from "next/image";
import WhatWeDeliverSVG from "@/app/svg/WhatWeDeliver/page";
import WhatWeDeliverSVG2 from "@/app/svg/WhatWeDeliver/page2";
import WhatWeDeliverSVG3 from "@/app/svg/WhatWeDeliver/page3";
import WhatWeDeliverSVG4 from "@/app/svg/WhatWeDeliver/page4";
import { ArrowRight } from "lucide-react";

export default function WhatWeDeliver() {
  return (
    <section className="relative bg-[#FFFFFF] py-6 md:py-14 flex lg:flex-row ">
      <div className=" mx-auto flex flex-col-reverse items-center lg:flex-row">
        <button className="items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-tertiary text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl flex lg:hidden">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white"
          >
            <path
              d="M14.6668 7.99996C14.6668 4.31806 11.6821 1.33329 8.00016 1.33329C4.31826 1.33329 1.3335 4.31806 1.3335 7.99996C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99996Z"
              strokeWidth="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5.6665 8L9.6665 8"
              strokeWidth="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.3335 10L10.3335 8L8.3335 6"
              strokeWidth="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      {/* Left side: Images */}
      <div className="relative flex items-center justify-center p-5 pl-24 lg:w-1/2 lg:pl-20">
        <div className="relative">
          <div className="relative h-[320px] max-h-full w-[230px] max-w-full sm:h-[400px] sm:w-[280px] lg:h-[520px] lg:w-[370px]">
            <div className="relative h-full w-full">
              <Image
                alt="Image 1"
                src="/group-deliver.webp"
                fill
                className="rounded-full border-2 border-blue-500 object-cover md:border-8"
                sizes="100vw"
                priority={false}
              />
            </div>
          </div>

          <div className="absolute -left-20 bottom-0 h-[190px] max-h-full w-[140px] max-w-full sm:-left-28 sm:h-[260px] sm:w-[200px] lg:-left-40 lg:h-[340px] lg:w-[250px]">
            <div className="relative h-full w-full">
              <div className="">
                <Image
                  alt="Image 2"
                  src="/group-deliver2.webp"
                  fill
                  sizes="100vw"
                  loading="lazy"
                  className=" scale-x-[-1] rounded-full border-2 border-[#F05B2D] object-cover md:border-8"
                  style={{
                    color: "transparent",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="absolute -left-24 top-0 overflow-hidden lg:-left-44">
            <svg
              width="100"
              height="100"
              viewBox="0 0 187 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[100px] w-[100px] lg:h-[180px] lg:w-[180px]"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M166.637 93.6166C166.637 130.278 136.915 160 100.253 160C63.5913 160 31.2627 128.992 31.2627 92.3302C31.2627 55.6685 67.4843 24.457 104.146 24.457C140.808 24.457 166.637 56.9549 166.637 93.6166Z"
                  fill="blue"
                  fill-opacity="0.2"
                ></path>
                <path
                  id="Vector_2"
                  d="M149.339 15.4687C149.339 15.4687 95.5146 60.1026 94.1944 73.2371C92.8741 86.3717 143.297 71.663 172.359 33.9181C207.514 -11.7652 170.344 -4.2331 149.339 15.4687Z"
                  fill="blue"
                  fill-opacity="0.2"
                ></path>
                <path
                  id="Vector_3"
                  d="M165.656 65.7893C165.656 65.7893 137.643 91.026 137.22 98.118C136.797 105.227 166.147 98.0841 178.452 75.2171C193.195 47.8647 176.539 54.7197 165.656 65.7893Z"
                  fill="blue"
                  fill-opacity="0.2"
                ></path>
                <path
                  id="Vector_4"
                  d="M55.8402 152.467C86.1276 152.467 110.68 127.915 110.68 97.6272C110.68 67.3398 86.1276 42.787 55.8402 42.787C25.5528 42.787 1 67.3398 1 97.6272C1 127.915 25.5528 152.467 55.8402 152.467Z"
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* right side text */}
      <div className="relative z-10 max-w-xl space-y-4 sm:space-y-5 lg:w-1/2 lg:pl-6">
        <p className="bg-[#FFE29E] text-black font-bold inline-block px-5 py-2 rounded-full">
          Scale. Surge. Dominate.
        </p>
        <h2 className="text-black text-bold-700 text-6xl">
          What We Actually Deliver
        </h2>
        <p className="text-md font-semibold text-headText lg:text-xl">
          Startup-Grade 'Unfair Advantages'
        </p>
        <div className="max-w-[600px] space-y-1">
          <p>
            "✅ 7-Day Launch Protocol “Steal our pre-built AI/telematics modules
            — launch enterprise-grade apps 3X faster than competitors.”
          </p>
          <br />
          <p>
            "✅ 100% IP Ownership “We code, you keep every line. No licenses, no
            equity grabs, no vendor lock-in.”
          </p>
          <br />
          <p>
            "✅ Code + Customers “We don't stop at dev. Get 500 pre-qualified
            leads in your CRM before launch day.”
          </p>
          <br />
          <p>
            "✅ Scale or We Sprint Again “Guaranteed 2X user growth in 90 days —
            or we rebuild your stack for free.”
          </p>
        </div>

        {/* circle svg  */}
        <div className="flex gap-4 pb-2">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-amber-200 bg-[#FEF7D9]">
            <div
              className="relative flex items-center justify-center"
              style={{ width: "20px", height: "24px" }}
            >
              <WhatWeDeliverSVG />
            </div>
          </div>

          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-amber-200 bg-[#FEF7D9]">
            <div
              className="relative flex items-center justify-center"
              style={{ width: "22px", height: "26px" }}
            >
              <WhatWeDeliverSVG2 />
            </div>
          </div>

          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full  border-2 border-amber-200 bg-[#FEF7D9]">
            <div
              className="relative flex items-center justify-center"
              style={{ width: "22px", height: "26px" }}
            >
              <WhatWeDeliverSVG3 />
            </div>
          </div>

          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-amber-200 bg-[#FEF7D9]">
            <div
              className="relative flex items-center justify-center"
              style={{ width: "30px", height: "30px" }}
            >
              <WhatWeDeliverSVG4 />
            </div>
          </div>
        </div>
        {/* <a href=""></a> */}
        <a href="#contact">
          {" "}
          <button className="items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-tertiary text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl hidden lg:flex bg-[#375EFB] cursor-pointer">
            <ArrowRight className="w-4 h-4 text-white border border-b-amber-50 rounded-full" />
            Unleash Your Tech
          </button>
        </a>
      </div>
    </section>
  );
}
