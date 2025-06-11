import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className=" py-6 lg:py-14 bg-[#FCFAF2]">
      <div className="flex items-center justify-between">
        <p className="bg-[#FEE19B] text-md text-black text-cecter font-bold mx-4 px-6 py-1 rounded-full">
          Our Project
        </p>
      </div>
      <div className="text-black text-5xl text-left ml-4 mt-6 font-bold">
        <h2>Discover Our Portfolio</h2>
      </div>
      <div
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={0}
        className="my-6 inline-flex items-center gap-2 overflow-x-auto whitespace-nowrap rounded-lg bg-white p-1 shadow-md dark:bg-slate-700 text-muted-foreground ml-4"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          outline: "none",
        }}
      >
        {/* <!-- Tab: All --> */}
        <button
          role="tab"
          aria-selected="true"
          aria-controls="tab-content-all"
          id="tab-trigger-all"
          className="inline-flex items-center justify-center px-8 py-2 rounded-md text-sm font-bold text-white bg-[#375EFB] shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
          data-state="active"
        >
          All
        </button>

        {/* <!-- Tab: Web App Development --> */}
        <button
          role="tab"
          aria-selected="false"
          aria-controls="tab-content-web"
          id="tab-trigger-web"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-state="inactive"
        >
          Web App Development
        </button>

        {/* <!-- Tab: Mobile App Development --> */}
        <button
          role="tab"
          aria-selected="false"
          aria-controls="tab-content-mobile"
          id="tab-trigger-mobile"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-state="inactive"
        >
          Mobile App Development
        </button>

        {/* <!-- Tab: Desktop Development --> */}
        <button
          role="tab"
          aria-selected="false"
          aria-controls="tab-content-desktop"
          id="tab-trigger-desktop"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-state="inactive"
        >
          Desktop Development
        </button>

        {/* <!-- Tab: SEO --> */}
        <button
          role="tab"
          aria-selected="false"
          aria-controls="tab-content-seo"
          id="tab-trigger-seo"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-state="inactive"
        >
          SEO
        </button>

        {/* <!-- Tab: CloudOps Consultancy --> */}
        <button
          role="tab"
          aria-selected="false"
          aria-controls="tab-content-cloudops"
          id="tab-trigger-cloudops"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-state="inactive"
        >
          CloudOps Consultancy
        </button>
      </div>

      <a
        href="/portfolio"
        className="inline-flex items-center justify-end gap-2 rounded-lg bg-[#F05B2D] px-6 py-2 text-white text-base font-semibold hover:bg-[#d14f25] transition-colors ml-60"
      >
        <ArrowRight className="w-4 h-4 rounded-full border  " />
        See More
      </a>

      {/* card section */}
      <div className=" rounded-lg p-5 grid grid-cols-1 gap-x-6 gap-y-10 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* card 1 */}
        <div className=" w-[300px] h-auto">
          <div className="bg-[#E1E3F5] rounded-lg">
            <Image
              alt="Mobile Apps Design"
              src="/Mobile.webp"
              width={400}
              height={400}
              className="object-contain bg-[#E1E3F5] w-[270px] h-[300px] ml-4"
            />
          </div>

          <h3 className="pt-4 text-xl font-bold ">Mobile Apps Design</h3>
          <p className="font-semibold opacity-70">Creative Design</p>
        </div>

        {/* card 2 */}
        <div className=" w-[300px] h-auto">
          <div className="bg-[#E1E3F5] rounded-lg">
            <Image
              alt="Mobile Apps Design"
              src="/iPadPro.webp"
              width={400}
              height={400}
              className=" object-contain  w-[300px] h-[300px]"
            />
          </div>

          <h3 className="pt-4 text-xl font-bold text-headText">Landing Page</h3>
          <p className="font-semibold text-headText opacity-70">
            Creative Design
          </p>
        </div>

        {/* card 3 */}
        <div className=" w-[300px] h-auto">
          <div className="bg-[#E1E3F5] rounded-lg ">
            <Image
              alt="Mobile Apps Design"
              src="/iPad (1).webp"
              width={300}
              height={300}
              className=" object-contain  w-[270px] h-[300px] ml-4"
            />
          </div>

          <h3 className="pt-4 text-xl font-bold ">Company Dashboard</h3>
          <p className="font-semibold  opacity-70">Creative Design</p>
        </div>

        {/* card 4 */}
        <div className=" w-[300px] h-auto">
          <div className="bg-[#E1E3F5] rounded-lg ">
            <Image
              alt="Mobile Apps Design"
              src="/iMac2.webp"
              width={400}
              height={400}
              className="rounded-lg object-contain  w-[270px] h-[300px] ml-4"
            />
          </div>
          <h3 className="pt-4 text-xl font-bold ">VocalizePro Website</h3>
          <p className="font-semibold  opacity-70">Website Design</p>
        </div>
        {/* card 5 */}
        <div className=" w-[300px] h-auto">
          <div className="bg-[#E1E3F5] rounded-lg ">
            <Image
              alt="Mobile Apps Design"
              src="/Studio.webp"
              width={400}
              height={400}
              className="rounded-lg object-contain bg-[#E1E3F5] w-[300px] h-[300px]"
            />
          </div>

          <h3 className="pt-4 text-xl font-bold ">Bootcamp Website Design</h3>
          <p className="font-bold  opacity-70">Creative Design</p>
        </div>

        {/* card 6 */}
        <div className=" w-[300px] h-auto">
          <div className="bg-[#E1E3F5] rounded-lg ">
            <Image
              alt="Mobile Apps Design"
              src="/iMac.webp"
              width={400}
              height={400}
              className="rounded-lg object-contain  w-[270px] h-[300px] ml-4"
            />
          </div>

          <h3 className="pt-4 text-xl font-bold ">E-commerce Landing Page</h3>
          <p className="font-semibold opacity-70">Creative Design</p>
        </div>

        {/* card 7 */}
        <div className=" w-[300px] h-auto">
          <div className="bg-[#E1E3F5] rounded-lg pt-6 ">
            <Image
              alt="Mobile Apps Design"
              src="/Hand.webp"
              width={400}
              height={400}
              className="rounded-lg object-contain  w-[270px] h-[270px] ml-6"
            />
          </div>

          <h3 className="pt-4 text-xl font-bold ">Illustration Design</h3>
          <p className="font-semibold text-headText opacity-70">
            Creative Design
          </p>
        </div>

        {/* card 8 */}
        <div className=" w-[300px] h-auto">
          <div className="bg-[#E1E3F5] rounded-lg ">
            <Image
              alt="Mobile Apps Design"
              src="/iPadPro2.webp"
              width={400}
              height={400}
              className="rounded-lg object-contain bg-[#E1E3F5] w-[300px] h-[290px]"
            />
          </div>

          <h3 className="pt-4 text-xl font-bold ">Dashboard Designn</h3>
          <p className="font-semibold  opacity-70">Creative Design</p>
        </div>
      </div>
    </div>
  );
}
