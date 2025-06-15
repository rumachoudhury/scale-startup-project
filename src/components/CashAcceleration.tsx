import CashAccelerationSVG from "@/app/svg/CashAcceleration/page";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CrisesToCash from "./CrisesToCash";

export default function CashAcceleration() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#FFFFFF] py-6 lg:py-32">
        <div className="myContainer mx-auto flex flex-col items-center justify-between gap-20 lg:flex-row lg:gap-10">
          <div className="z-30 w-full space-y-6 lg:w-1/2 lg:px-0 ml-6">
            <h3 className="text-2xl font-bold text-headText lg:text-4xl">
              Code + Cash Acceleration
            </h3>
            <p className="max-w-2xl">
              "We Fund Your Dev Costs — Pay 0 Until You Hit Production
              Founder-friendly terms. No licenses. No equity grabs. Just a
              signed NDA and your napkin sketch"
            </p>
            <a
              className="z-30 flex justify-center lg:justify-start"
              href="#contact"
            >
              <button className="items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-tertiary text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl hidden lg:flex bg-[#375EFB]">
                <ArrowRight className="w-4 h-4 text-white border border-b-amber-50 rounded-full" />
                Start Risk-Free
              </button>
            </a>
          </div>
          <div className="relative z-10 w-full lg:w-1/2 lg:px-20">
            <div className="relative z-30 mx-auto h-[240px] w-full max-w-2xl sm:h-[300px] lg:h-[380px] 2xl:ml-20">
              <Image
                src="/Proposal.webp"
                alt="Online Register Image"
                fill
                className="object-cover rounded-3xl"
                priority={false} // or true if important
                sizes="100vw"
              />

              <div className="absolute -right-20 -top-10 -z-30">
                <div className="relative z-10 h-[200px] w-[200px] flex-shrink-0 -rotate-[39.561deg] transform rounded-[30px] bg-[#F162A2] shadow-[0_0_72px_rgba(254,141,191,0.5)] sm:h-[250px] sm:w-[250px] lg:rounded-[46px] xl:h-[342px] xl:w-[342px]"></div>
                <div className="absolute -right-52 top-4 z-0 h-[140px] w-full max-w-2xl sm:h-[200px] lg:h-[380px]">
                  <CashAccelerationSVG />
                </div>
              </div>
            </div>
            <button className="items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-tertiary text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl mx-auto mt-6 flex lg:hidden bg-[#375EFB]">
              <ArrowRight className="w-4 h-4 text-white border border-b-amber-50 rounded-full" />
              Start Risk Free
            </button>
          </div>
        </div>
      </section>

      <CrisesToCash />
    </main>
  );
}
