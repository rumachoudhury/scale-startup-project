import CrisesToCashSVG from "@/app/svg/CrisesToCash/page";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CrisesToCash() {
  return (
    <section className="relative bg-[#0431C2] py-6 lg:py-24">
      <div className="absolute left-0 top-0 w-full">
        <CrisesToCashSVG />
      </div>

      <div className="myContainer flex flex-col items-center justify-between gap-14 lg:flex-row lg:gap-10 mx-5">
        <div className="relative w-full lg:w-1/2">
          <div className="xs:pl-10 relative flex items-center justify-start pl-5 sm:justify-center sm:pl-0 lg:absolute lg:-top-72 lg:left-0 xl:justify-start">
            <div className="relative h-[180px] w-[240px] flex-shrink-0 rounded-lg shadow-lg sm:h-[250px] sm:w-[300px] xl:h-[360px] xl:w-[500px]">
              <Image
                src="/Agreement1.webp"
                alt="Agreement Image"
                fill
                className="object-cover rounded-3xl border-2 border-[#F162A2]"
                sizes="100vw"
                priority={false}
              />

              <div className="absolute -bottom-8 -right-12 -mt-10 h-[120px] w-[160px] flex-shrink-0 rounded-lg shadow-lg sm:-bottom-20 sm:-right-32 sm:h-[200px] sm:w-[260px] xl:h-[260px] xl:w-[360px]">
                <Image
                  src="/Agreement2.webp"
                  alt="Payment Data Image"
                  fill // Makes the image fill the parent container
                  className="object-cover rounded-3xl border-2 border-[#F162A2]"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
          {/* <div className="absolute left-0 top-0 -z-10 h-[300px] w-[320px] flex-shrink-0 rounded-xl bg-[#F162A2] bg-opacity-20 shadow-[0_0_72px_rgba(254,141,191,0.5)] lg:h-[400px] lg:w-[420px]"></div> */}
        </div>

        {/* text and button area */}
        <div className="w-full space-y-6 lg:w-1/2 lg:px-0">
          <h3 className="text-2xl font-bold text-white lg:text-4xl">
            Crisis-to-Cash Engineering
          </h3>
          <p className="max-w-2xl !text-white">
            our Scaling SWAT Team: Code Fixes + Pivot Strategies in 20 Minutes.”
            Our 20+ engineers become your 24/7 crisis crew. Server crashed?
            Feature flop? Consider it handled.
          </p>

          <a href="#contact">
            <button className="inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl  bg-[#F05B2D] cursor-pointer">
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
              </svg>{" "}
              Hire Our Squad
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
