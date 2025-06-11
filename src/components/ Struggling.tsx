"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import BlueImage from "./BlueImage";

const Struggling = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-20 bg-gradient-to-r from-[#FCEAF2] to-[#FEFAF2]">
      {/* LEFT SIDE with images */}
      <div className="relative flex justify-center items-center h-[600px] w-full">
        {/* Left Top Image behind the middle image */}
        <motion.div
          className="absolute left-[15%] top-[-10%] z-0  "
          animate={{
            y: [0, -5, 0, 5, 0],
            // y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-[35vw] max-h-[246px] w-[40vw] max-w-[211px] rounded-[248px] border-2 border-tertiary border-blue-500 p-2 lg:border-4 lg:p-3 bg-white shadow-lg  transition-transform duration-700 hover:scale-110">
            <div className="relative h-full w-full overflow-hidden rounded-[248px]">
              <img
                alt="Left Top"
                loading="lazy"
                decoding="async"
                className="object-cover  "
                src="/left-top.webp"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Left Bottom Image appear above the middle image*/}
        <motion.div
          className="absolute bottom-[10%] left-[10%] z-40  "
          //   initial={{ y: 0 }}
          animate={{
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-[30vw] max-h-[210px] w-[35vw] max-w-[180px] rounded-[248px] border-4 border-blue-500 bg-white p-3 shadow-lg transition-transform duration-700 hover:scale-110">
            <div className="relative h-full w-full overflow-hidden ">
              <img
                alt="Left Bottom"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-[248px] "
                src="/left-bottom.webp"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right Bottom Image appear above the middle image */}
        <motion.div
          className="absolute bottom-[10%] right-[10%] z-40  "
          animate={{
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-[30vw] max-h-[210px] w-[35vw] max-w-[180px] rounded-[248px] border-4 border-black bg-white p-3 shadow-md transition-transform duration-700 hover:scale-110">
            <div className="relative h-full w-full overflow-hidden rounded-[248px]">
              <img
                alt="Right Bottom"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-[248px]  "
                src="/right-bottom.webp"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                }}
              />
            </div>
          </div>
        </motion.div>

        <div className="relative flex items-center justify-center gap-[150px]">
          {/* Middle Image (Front and Center) */}
          <motion.div
            className="relative z-10 "
            animate={{ y: [0, -10, 0, 10, 0], scale: [1, 1.01, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative z-10 overflow-hidden h-[50vw] max-h-[500px] w-[80vw] max-w-[400px] rounded-[348px] border-4 border-red-500 bg-white p-3 transition-transform duration-700 hover:scale-110">
              <div className="relative h-full w-full overflow-hidden rounded-[300px] ">
                <img
                  alt="techserve4u Hero"
                  className="object-cover rounded-[300px] "
                  src="/global-cart.webp"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>

          {/* blue image with 2 sharp svg */}
          <div>
            {/* Sharp SVG #1 — Top Right near Middle Image (above it slightly)  */}
            <motion.div
              className="absolute top-[-25%] left-[66%] z-20 h-[30vw] max-h-[180px] w-[15vw] max-w-[55px] translate-x-[-50%]"
              animate={{
                y: [0, -2, 2, 0], // Up and down only
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 65 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.5852 179C63.5188 51.957 25.8344 16.3364 6.00049 14.4065L32.4457 2C72.7746 37.0692 64.6758 134.612 55.5852 179Z"
                  stroke="url(#paint0_linear_44_193)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_44_193"
                    x1="38.8439"
                    y1="44.688"
                    x2="61.447"
                    y2="193.849"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#355BFB" />
                    <stop offset="1" stopColor="#F15A2D" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <BlueImage />

            {/* Sharp SVG #2 — Slightly Below  One */}
            <motion.div
              // className="absolute bottom-[0%] left-[90%] top-[5%] h-[30vw] max-h-[180px] w-[15vw] max-w-[55px] translate-x-[-50%] z-0"

              className="absolute -right-[0%] top-[8%] h-[30vw] max-h-[180px] w-[15vw] max-w-[55px] z-0"
              animate={{
                y: [0, -2, 2, 0],
                //   rotate: [-5, 5, -5], // optional
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 65 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.5852 179C63.5188 51.957 25.8344 16.3364 6.00049 14.4065L32.4457 2C72.7746 37.0692 64.6758 134.612 55.5852 179Z"
                  stroke="url(#paint0_linear_44_193)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_44_193"
                    x1="38.8439"
                    y1="44.688"
                    x2="61.447"
                    y2="193.849"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#355BFB" />
                    <stop offset="1" stopColor="#F15A2D" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - TEXT CONTENT */}
      <div className="max-w-xl text-black space-y-6 z-10">
        <button className="text-sm font-bold border-0 py-2 px-4 bg-[#FEE19B] rounded-full">
          About Company
        </button>
        <p className="text-5xl font-semibold">
          From Struggling Business
          <br /> to $10M+ Revenue
        </p>
        <p>
          ScaleStartups isn't just a vendor - we're your growth engineering
          team. While others build stores, we architect revenue machines.
        </p>
        <ul className="list-none list-inside text-md text-gray-700  space-y-2">
          <li>✅ 8.7X average revenue growth in 6 months</li>
          <li>✅ Slash cart abandonment by 67% with battle-tested UX</li>
          <li>
            ✅ Cut operational chaos with AI-driven order & inventory systems
          </li>
        </ul>

        <div className="flex gap-6" style={{ opacity: 1, transform: "none" }}>
          <div className="relative h-[44px] w-[44px]">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap size-9 stroke-[#A054FA]"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </motion.div>
          </div>
          <div>
            <h5 className="subHeading text-2xl font-samibold">
              The 20-Second Support Lifeline
            </h5>
            <p className="subPara py-2">
              Your emergency is our priority. Get code fixes, strategy pivots,{" "}
              <br /> or crisis management from our 20+ experts in under 20
              seconds
            </p>
          </div>
        </div>

        <div className="flex gap-6 relative items-start">
          {/* Icon */}
          <div className="relative h-[44px] w-[44px] z-10">
            <motion.div
              animate={{
                y: [0, -4, 0, 4, 0], // up, down, up (wave)
                rotate: [0, 2, -2, 0], // slight rotation
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-crown size-9 stroke-[#A054FA]"
              >
                <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                <path d="M5 21h14" />
              </svg>
            </motion.div>
          </div>

          {/* Text + Image */}
          <div className="relative z-10">
            <h5 className="subHeading text-2xl font-semibold">
              Your 'Unfair' Growth Advantage
            </h5>
            <p className="subPara py-2">
              We don't just code - we embed our 12 years of scaling secrets into{" "}
              <br />
              your tech stack. Steal playbooks from $100M+ brands.
            </p>
          </div>

          {/* Animated Image Floatting */}
          <motion.img
            alt="techserve4u Hero"
            loading="lazy"
            width={241}
            height={241}
            decoding="async"
            className="h-[250px] w-[250px] absolute top-[-50px] left-[250px] object-contain z-0 opacity-100"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            src="/Circle2.webp"
          />
        </div>
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
              <span>Steal Our Codebase</span>
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Struggling;

// transition-transform duration-700 hover:scale-110
