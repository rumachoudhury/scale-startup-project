import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import AutopilotModeSVG from "@/app/svg/AutopilotMode/page";

function AutopilotMode() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-6 md:py-16  mt-6">
      <div className=" mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="z-30 w-full space-y-6 lg:w-1/2 lg:px-0 mx-4">
          <h3 className="max-w-xl text-2xl font-bold lg:text-4xl">
            Profit Autopilot Mode
          </h3>

          <p className="max-w-2xl">
            Get Live Market Intel: AI-Powered Leaks on Competitors Moves, VC
            Trends &amp; Exploitable Gaps.” Weekly playbooks to out-innovate,
            out-price, and out-scale rivals. Your empire grows while you sleep.
          </p>

          <a
            className="z-30 flex justify-center lg:justify-start"
            href="#BusinessConsultation"
          >
            {" "}
            <button className="items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-tertiary text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl hidden lg:flex bg-[#375EFB] cursor-pointer">
              <ArrowRight className="w-4 h-4 text-white border border-b-amber-50 rounded-full" />
              Steal Our Secrets
            </button>
          </a>
        </div>

        <div className="relative z-40 w-full max-w-2xl pr-10 lg:w-1/2 lg:px-16">
          <div className="relative z-40 h-[180px] w-full sm:h-[300px] lg:h-[380px]">
            <Image
              src="/Feedback.webp"
              alt="Payment Data Image"
              fill // Makes the image fill the parent container
              className="object-cover rounded-3xl "
              sizes="100vw"
            />

            <div className="absolute -right-10 top-1/2 -z-10 -translate-y-1/2 transform">
              <div className="relative z-10 h-[250px] w-[170px] flex-shrink-0 rounded-[50px] bg-[#375EFB] shadow-[0_0_72px_rgba(96,124,246,0.1)] sm:h-[400px] sm:w-[280px] lg:-right-20 lg:h-[520px] lg:w-[350px] "></div>

              <div className="absolute -right-52 top-0 z-0">
                <AutopilotModeSVG />
              </div>
            </div>
          </div>
        </div>

        {/* <button className="items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl z-40 mt-5 flex lg: bg-[#375EFB]">
          <ArrowRight className="w-4 h-4 text-white border border-b-amber-50 rounded-full" />
          Steal Our Secrets
        </button> */}
      </div>
    </section>
  );
}

export default AutopilotMode;
