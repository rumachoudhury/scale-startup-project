"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlueBgSvg from "./BlueBgSvg";
import JavaScriptSVG from "@/app/svg/JAVASCRIPT/page";
import Python from "@/app/svg/PYTHON/page";
import NodeJS from "@/app/svg/NODEJS/page";
import ReactJS from "@/app/svg/REACTJS/page";

import Redis from "@/app/svg/REDIS/page";
import PostgreSQL from "@/app/svg/POSTGRESQL/page";
import Docker from "@/app/svg/DOCKER/page";
import Aws from "@/app/svg/AWS/page";
import Jenkins from "@/app/svg/JENKINS/page";
import MongoDB from "@/app/svg/MONGODB/page";

function GreatProducts() {
  return (
    <main className="relative w-full h-[1500px] overflow-hidden bg-[#0431C2]  ">
      {/* top section */}
      <section className="relative bg-[#0431C2] py-14">
        {/* SVG Background */}
        <div className="absolute -top-10 left-0 w-full">
          <BlueBgSvg />
        </div>
      </section>
      {/* mid section */}
      <section className="relative  py-20 text-white lg:py-20 top-30">
        <motion.div
          className="absolute left-4 top-8 sm:left-10 sm:top-10"
          animate={{
            scale: [1, 1.2, 1, 1.2, 0.8, 1, 0.8],
            rotate: [0, 10, 0, 10, -10, 0, -10],
          }}
          transition={{
            duration: 8,
            times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            willChange: "transform",
          }}
        >
          <div
            style={{
              willChange: "transform",
              transform: "scale(1.05106) rotate(5.10619deg)",
            }}
          >
            <svg
              width="70"
              height="70"
              viewBox="0 0 159 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[70px] w-[70px] lg:h-[160px] lg:w-[160px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M158.994 79.4941C158.994 79.4941 159.937 42.9639 137.986 21.0135C116.036 -0.936548 79.5059 0.00589382 79.5059 0.00589382C79.5059 0.00589382 79.5007 0.194045 79.5 0.551353C79.5 0.40045 79.4985 0.279727 79.4978 0.190584C79.4963 0.0686843 79.4941 0.00589382 79.4941 0.00589382C79.4941 0.00589382 42.9639 -0.936548 21.0135 21.0135C-0.936548 42.9639 0.00589382 79.4941 0.00589382 79.4941C0.00589382 79.4941 36.5365 80.4363 58.4862 58.4862C78.5497 38.4236 79.4875 6.17973 79.5 0.783522C79.5132 6.17973 80.451 38.4236 100.514 58.4862C122.464 80.4363 158.994 79.4941 158.994 79.4941ZM21.0135 137.986C-0.936548 116.036 0.00589382 79.5059 0.00589382 79.5059C0.00589382 79.5059 36.5365 78.5637 58.4862 100.514C78.5497 120.576 79.4875 152.82 79.5 158.217C79.5132 152.82 80.451 120.576 100.514 100.514C122.464 78.5637 158.994 79.5059 158.994 79.5059C158.994 79.5059 159.937 116.036 137.986 137.986C116.036 159.936 79.5059 158.994 79.5059 158.994C79.5059 158.994 79.5007 158.806 79.5 158.449C79.4993 158.806 79.4941 158.994 79.4941 158.994C79.4941 158.994 42.9639 159.936 21.0135 137.986Z"
                fill="#FFDB86"
                fill-opacity="0.2"
              ></path>
            </svg>
          </div>
        </motion.div>

        <div
          className="myContainer mx-auto space-y-2 sm:space-y-4 lg:space-y-10"
          style={{
            opacity: 1,
            willChange: "opacity",
          }}
        >
          <div className="space-y-6 text-center">
            <p
              className="text-md mx-auto w-max rounded-full bg-[#CFB895] px-4 py-1 font-bold text-black"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
                backgroundColor: "#CFB895",
              }}
            >
              Tech Stack
            </p>
            <h2
              className="heading mx-auto max-w-[650px] !text-white text-5xl font-bold"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
              }}
            >
              Technology We Use to Build Great Products
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2 2xl:flex-row 2xl:gap-10">
            {/* Image Section with Animation */}
            <div className="relative mx-auto w-full overflow-hidden rounded-xl p-4 pb-4 md:pb-10 lg:w-[75vw] 2xl:w-[50vw] 2xl:rounded-l-none 2xl:rounded-r-2xl 2xl:p-0 opacity-100 will-change-transform">
              <motion.div
                className="brightness-100"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
              >
                <Image
                  src="/Tech.webp"
                  alt="techserve4u Hero"
                  width={654}
                  height={481}
                  className="w-full rounded-3xl object-cover 2xl:rounded-l-none 2xl:rounded-r-[30px]"
                  style={{ color: "transparent" }}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* programming section */}
      <section className="flex flex-wrap justify-center gap-2 px-2 sm:gap-4 lg:gap-10 lg:px-5 2xl:w-[60%] pt-6">
        <div className="flex flex-wrap justify-center gap-2 px-2 sm:gap-4 lg:gap-10 lg:px-5 2xl:w-[60%] pt-6">
          <div>
            <JavaScriptSVG />
          </div>

          <div>
            <Python />
          </div>
          <div>
            <NodeJS />
          </div>
          <div>
            <ReactJS />
          </div>
          <div>
            <MongoDB />
          </div>

          <div>
            <Redis />
          </div>

          <div>
            <PostgreSQL />
          </div>

          <div>
            <Docker />
          </div>

          <div>
            <Aws />
          </div>

          <div>
            <Jenkins />
          </div>
        </div>
      </section>
    </main>
  );
}

export default GreatProducts;
