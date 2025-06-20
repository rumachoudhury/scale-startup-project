"use client";

import RoadmapSVG from "@/app/svg/RoadMap/page";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-[#0431C2] py-6 pb-16 lg:py-20">
      <motion.div
        className="absolute bottom-10 left-5 "
        initial={{ rotate: 71.712 }}
        animate={{ rotate: 431.712 }} // 360deg more
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        // style={{
        //   willChange: "transform",
        //   transform: "rotate(71.712deg)",
        // }}
      >
        <RoadmapSVG />
      </motion.div>
      <div className="myContainer mx-auto flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        <div className="relative mx-auto w-full max-w-xl pl-10 lg:w-1/2 lg:px-14">
          <div className="absolute -bottom-8 left-0 h-3/4 w-3/4 rounded-xl bg-[#F05B2D] lg:-bottom-14"></div>
          <div className="relative h-[200px] w-full overflow-hidden rounded-3xl border-2 border-secondary shadow-lg sm:h-[300px] lg:h-[340px]">
            <Image
              src="/Know.webp"
              alt="Meeting Image"
              fill
              className="object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full max-w-xl space-y-6 text-white lg:w-1/2 lg:py-10">
          <h3 className="text-2xl font-bold lg:text-4xl">
            Your $1M Roadmap Call
          </h3>
          <div className="para space-y-1 !text-white">
            Free 15-Minute &#39;Profit Explosion&#39; Session: We&#39;ll Map
            Your 12-Month Path to 7 Figures. Leave with:&quot;
            <p>✅ 3 competitor weaknesses to exploit</p>
            <p>✅ A proven tech stack blueprint</p>
            <p>✅ 500 guaranteed leads/month strategy</p>
          </div>

          <a href="#contact">
            {" "}
            <button className="items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-tertiary text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl hidden lg:flex bg-[#F05B2D] cursor-pointer">
              <ArrowRight className="w-4 h-4 text-white border border-b-amber-50 rounded-full" />
              Unleash Your Tech
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
