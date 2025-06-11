"use client";

import HyperGrowthSVG from "@/app/svg/HyperGrowth/page";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HyperGrowth() {
  return (
    <section className="relative overflow-hidden bg-[#0431C2] py-6 lg:py-14 w-full h-[800px]">
      <div className="absolute right-2 top-10 lg:right-10">
        <div>
          <HyperGrowthSVG />
        </div>
      </div>

      <div
        className="myContainer mx-auto flex flex-col items-center justify-between gap-10 xl:flex-row ml-8"
        style={{
          opacity: 1,
          willChange: "opacity;",
        }}
      >
        <div className="space-y-4 text-center xl:w-1/2 xl:space-y-8 xl:text-left">
          <p
            className="mx-auto xl:mx-0 bg-[#CFB994] px-6 py-2 text-black font-bold inline-block rounded-full"
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            Professional Solution
          </p>

          <h2
            className="!text-white text-6xl font-bold"
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            ScaleStartups' Hyper-Growth Arsenal
          </h2>

          <p
            className="mx-auto max-w-[670px] !text-white lg:mx-0"
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            Embed VC-Grade Financial Firepower — Auto-Sync Payments, Equity
            Rounds, and Revenue in Real Time
          </p>

          <div
            className="relative mx-auto h-[200px] w-[320px] flex-shrink-0 sm:h-[300px] sm:w-[500px] lg:h-[381px] lg:w-[618px] xl:mx-0"
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                // x: [-2, 2, -2, 2, 0],
                // rotate: [0, -2, 2, -2, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="h"
              style={{ filter: "brightness(1)" }}
            >
              <Image
                src="/SolutionHero.webp"
                alt="Solution Image"
                width={670}
                height={500}
                className="h-full w-full rounded-full border-2 border-blue-500 object-cover md:border-8"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Scale Engineering, Telematics Power, and Equity-Free Code card section */}
        <div
          className="max-w-3xl space-y-4 xl:w-1/2 xl:space-y-8"
          style={{
            opacity: 1,
            willChange: "opacity",
          }}
        >
          {/* Scale Engineering Squad */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mr-10 rounded-3xl bg-[#FFFFFF] p-4  shadow-lg sm:p-6 md:mr-40"
          >
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-tertiary/10 p-1 lg:h-[50px] lg:w-[50px] lg:p-2"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                  backgroundColor: "rgba(55, 94, 251, 0.1)",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    // x: [-2, 2, -2, 2, 0],
                    rotate: [0, -2, 2, -2, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{ transform: "none" }}
                >
                  <Image
                    src="/si1.webp"
                    alt="Icon 1"
                    width={48}
                    height={48}
                    className="h-[18px] w-[18px] lg:h-[30px] lg:w-[30px] object-contain hover:animate-shake"
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <h3
                className="text-md font-semibold lg:text-xl"
                style={{ opacity: 1, willChange: "opacity" }}
              >
                Scale Engineering Squad
              </h3>
            </div>
            <p
              className="mt-4 text-xs font-semibold opacity-70 lg:text-base"
              style={{ opacity: 0.7, willChange: "opacity" }}
            >
              Your In-House Tech Team Without the $2M Burn Rate. We code, you
              own 100%. 24/7 crisis support + growth hacks baked into your
              stack. Launch 3X faster, scale without panic.
            </p>
          </motion.div>

          {/* Telematics Power Modules */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-5 rounded-3xl bg-backWhite p-4 text-headText shadow-lg sm:p-6 md:mx-20 bg-[#FFFFFF]"
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-tertiary/10 p-1 lg:h-[50px] lg:w-[50px] lg:p-2"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                  backgroundColor: "rgba(55, 94, 251, 0.1)",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    // x: [-2, 2, -2, 2, 0],
                    rotate: [0, -2, 2, -2, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{ transform: "none" }}
                >
                  <Image
                    src="/si2.webp"
                    alt="Icon 1"
                    width={48}
                    height={48}
                    className="h-[18px] w-[18px] lg:h-[30px] lg:w-[30px] object-contain  "
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <h3
                className="text-md font-semibold lg:text-xl"
                style={{ opacity: 1, willChange: "opacity" }}
              >
                Telematics Power Modules
              </h3>
            </div>
            <p
              className="mt-4 text-xs font-semibold opacity-70 lg:text-base"
              style={{ opacity: 0.7, willChange: "opacity;" }}
            >
              Out-Innovate Giants with Pre-Built AI Chat, CRM &amp; Analytics.
              Plug our battle-tested modules into your app. Launch enterprise
              features in 48 hours — no dev cycles, no equity loss
            </p>
          </motion.div>

          {/* Equity-Free Code Vault */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mr-10 rounded-3xl bg-[#FFFFFF] p-4 text-headText shadow-lg sm:p-6 md:ml-40 "
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-tertiary/10 p-1 lg:h-[50px] lg:w-[50px] lg:p-2"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                  backgroundColor: "rgba(55, 94, 251, 0.1)",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    // x: [-2, 2, -2, 2, 0],
                    rotate: [0, -2, 2, -2, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{ transform: "none" }}
                >
                  <Image
                    src="/si1.webp"
                    alt="Icon 1"
                    width={48}
                    height={48}
                    className="h-[18px] w-[18px] lg:h-[30px] lg:w-[30px] object-contain"
                    priority // or use loading="lazy" if you want lazy load instead
                  />
                </motion.div>
              </div>
              <h3
                className="text-md font-semibold lg:text-xl"
                style={{ opacity: 1, willChange: "opacity" }}
              >
                Equity-Free Code Vault
              </h3>
            </div>
            <p
              className="mt-4 text-xs font-semibold opacity-70 lg:text-base"
              style={{ opacity: 0.7, willChange: "opacity;" }}
            >
              "Own Your Empire — Zero Royalties, Forever. 100% owned SaaS/CRM
              platforms. We build, you scale. Pay 0 until you hit 1M ARR"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
