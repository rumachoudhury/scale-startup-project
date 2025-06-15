"use client";

import CodeRedSVG from "@/app/svg/CodeRed/page";
// import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export default function CodeRed() {
  return (
    <section className="relative overflow-hidden py-8 lg:py-16 mx-6">
      <motion.div
        className="absolute right-3 top-6 sm:right-10 sm:top-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <CodeRedSVG />
      </motion.div>

      <div className="myContainer mx-auto flex flex-col-reverse justify-between gap-5 sm:gap-20 lg:flex-row">
        <div className="w-full space-y-4 lg:w-[55%]">
          <div className="w-full">
            {/* Accordion Item 1 */}
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="group data-[state=open]:bg-[#375EFB] data-[state=open]:rounded-lg py-4"
              >
                <AccordionTrigger className="group flex w-full justify-between items-center p-3 text-left text-xl font-medium sm:p-5 sm:text-lg group-data-[state=open]:border-none group-data-[state=open]:text-white  no-underline hover:no-underline  [&::after]:hidden [&[data-state='open']::after]:hidden ">
                  <span className="font-bold text-xl">01.</span>
                  <span className="text-md text-left sm:text-xl">
                    How Do I Skip the BS and Get a $1M Roadmap?
                  </span>
                  <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-black group-data-[state=open]:border-white text-gray-700 text-lg font-bold transition-colors group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white">
                    <span className="block group-data-[state=closed]:inline group-data-[state=open]:hidden">
                      +
                    </span>
                    <span className="hidden group-data-[state=open]:inline group-data-[state=open]:text-white">
                      x
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-gray-700 group-data-[state=open]:text-white">
                  We Launch MVPs in 7 Days Using Pre-Built AI/Telematics Modules
                  — You Own 100% of the Code. No Royalties, Ever.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 2 */}
              <AccordionItem
                value="item-2"
                className="group data-[state=open]:bg-[#375EFB] data-[state=open]:rounded-lg py-4"
              >
                <AccordionTrigger className="group flex w-full justify-between items-center p-3 text-left text-xl font-medium sm:p-5 sm:text-lg  group-data-[state=open]:border-none group-data-[state=open]:text-white no-underline hover:no-underline ">
                  <span className="font-bold text-xl">02.</span>
                  <span className="text-md text-left sm:text-xl">
                    How Do I Skip the BS and Get a $1M Roadmap?
                  </span>
                  <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-black group-data-[state=open]:border-white text-gray-700 text-lg font-bold transition-colors group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white">
                    <span className="block group-data-[state=closed]:inline group-data-[state=open]:hidden">
                      +
                    </span>
                    <span className="hidden group-data-[state=open]:inline group-data-[state=open]:text-white">
                      x
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-gray-700 group-data-[state=open]:text-white">
                  We Launch MVPs in 7 Days Using Pre-Built AI/Telematics Modules
                  — You Own 100% of the Code. No Royalties, Ever.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 3 */}
              <AccordionItem
                value="item-3"
                className="group data-[state=open]:bg-[#375EFB] data-[state=open]:rounded-lg py-4"
              >
                <AccordionTrigger className="group flex w-full justify-between items-center p-3 text-left text-xl font-medium sm:p-5 sm:text-lg  group-data-[state=open]:border-none group-data-[state=open]:text-white no-underline hover:no-underline ">
                  <span className="font-bold text-xl">03.</span>
                  <span className="text-md text-left sm:text-xl">
                    Will You Abandon Me After Launch Like Others?
                  </span>
                  <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-black group-data-[state=open]:border-white text-gray-700 text-lg font-bold transition-colors group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white">
                    <span className="block group-data-[state=closed]:inline group-data-[state=open]:hidden">
                      +
                    </span>
                    <span className="hidden group-data-[state=open]:inline group-data-[state=open]:text-white">
                      x
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-gray-700 group-data-[state=open]:text-white">
                  24/7 Crisis Support: Code Fixes in 20 minutes or We Work Free.
                  Guaranteed delivery in 90 Days — Or We Rebuild for $0.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 4 */}
              <AccordionItem
                value="item-4"
                className="group data-[state=open]:bg-[#375EFB] data-[state=open]:rounded-lg py-4"
              >
                <AccordionTrigger className="group flex w-full justify-between items-center p-3 text-left text-xl font-medium sm:p-5 sm:text-lg  group-data-[state=open]:border-none group-data-[state=open]:text-white no-underline hover:no-underline ">
                  <span className="font-bold text-xl">04.</span>
                  <span className="text-md text-left sm:text-xl">
                    What's Your Secret Sauce to Crush Competitors?
                  </span>
                  <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full border border-black group-data-[state=open]:border-white text-gray-700 text-lg font-bold transition-colors group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white">
                    <span className="block group-data-[state=closed]:inline group-data-[state=open]:hidden">
                      +
                    </span>
                    <span className="hidden group-data-[state=open]:inline group-data-[state=open]:text-white">
                      x
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-gray-700 group-data-[state=open]:text-white">
                  AI-Powered Telematics, Serverless Architecture & Explosive
                  Modules We've Built for 237 Startups.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 5 */}
              <AccordionItem
                value="item-5"
                className="group data-[state=open]:bg-[#375EFB] data-[state=open]:rounded-lg py-4 "
              >
                <AccordionTrigger className="group flex w-full justify-between items-center p-3 text-left text-xl font-medium sm:p-5 sm:text-lg border-b group-data-[state=open]:border-none group-data-[state=open]:text-white h-[86px] mb-5 no-underline hover:no-underline ">
                  <span className="font-bold text-xl">05.</span>
                  <span className="text-md text-left sm:text-xl mr-10 ">
                    Can You Beat My Nightmare Dev Timeline?
                  </span>
                  <span className="ml-10 flex h-7 w-7 items-center justify-center rounded-full border border-black group-data-[state=open]:border-white text-gray-700 text-lg font-bold transition-colors group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white">
                    <span className="block group-data-[state=closed]:inline group-data-[state=open]:hidden">
                      +
                    </span>
                    <span className="hidden group-data-[state=open]:inline group-data-[state=open]:text-white">
                      x
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-gray-700 group-data-[state=open]:text-white">
                  MVP in 7 Days. Full Scale in 30. Pre-built modules Cut Dev
                  Time by 80%. Pay $0 Until You Scale.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex w-full flex-col items-center space-y-5 text-center lg:w-[45%] lg:items-start lg:text-left">
          <motion.div
            className="h-[250px] w-[250px] rounded-full bg-[#8c7af1]/20 flex items-center justify-center"
            animate={{
              y: [0, -10, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div style={{ transform: "none" }}>
              <img
                alt="Help Image"
                width={250}
                height={250}
                className="object-contain"
                src="/Help.webp"
              />
            </div>
          </motion.div>

          <h3
            className="text-black text-5xl font-semibold "
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            Code Red? Scaling Panic? We've Got Your
            <br /> Back
          </h3>

          {/* small text */}
          <div
            className=" max-w-2xl"
            style={{ opacity: 1, willChange: "opacity" }}
          >
            <div
              className="flex items-start"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
              }}
            >
              <motion.span
                className="mr-2 z-20 text-xl"
                style={{ color: "rgb(157, 91, 249)" }}
                animate={{ scale: [1, 1.05, 1.1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✅
              </motion.span>
              <span className="text-gray-600 text-xl">
                Your Scaling SWAT Team On Speed Dial:
              </span>
            </div>

            <p
              className="flex items-start"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
              }}
            >
              <motion.span
                className="mr-2 z-20 text-xl"
                style={{ color: "rgb(157, 91, 249)" }}
                animate={{ scale: [1, 1.05, 1.1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✅
              </motion.span>
              <span className="text-gray-600 text-xl">
                Server crashes, feature fails, scaling meltdowns — solved before
                your coffee cools
              </span>
            </p>

            <p
              className="flex items-start"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
              }}
            >
              <motion.span
                className="mr-2 z-20 text-xl"
                style={{ color: "rgb(157, 91, 249)" }}
                animate={{ scale: [1, 1.05, 1.1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✅
              </motion.span>
              <span className="text-gray-600 text-xl">
                Instant access to growth hacks, pivot strategies, and
                investor-ready metrics
              </span>
            </p>

            <p
              className="flex items-start"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
              }}
            >
              <motion.span
                className="mr-2 z-20 text-xl"
                style={{ color: "rgb(157, 91, 249)" }}
                animate={{ scale: [1, 1.05, 1.1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✅
              </motion.span>
              <span className="text-gray-600 text-xl">
                2X user growth in 90 days or we rebuild your stack for free.
              </span>
            </p>

            <div className="flex  items-center justify-center lg:justify-start">
              <button className="mt-4 bg-[#375EFB] hover:bg-blue-700 text-white font-semibold py-3 px-6  shadow-lg transition duration-300  flex  items-center justify-center lg:justify-start gap-2 rounded-2xl">
                <motion.div
                  className="flex  items-center justify-center lg:justify-start gap-2"
                  animate={{
                    x: [0, 3, 0, -3, 0], //moving left and right
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-4 h-4 text-white border border-b-amber-50 rounded-full" />
                  <span>Raid the Vault</span>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
