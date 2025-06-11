"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Launch Your Branded Empire",
    description:
      "Own 100% of enterprise-grade SaaS, CRM, or Edtech platforms — we code, you keep the profits",
    icon: "/services/icon1.png",
    image: "/services/s1.png",
    topOffset: "top-20",
  },
  {
    title: "Hyper-Grade Custom Dev",
    description:
      "10M ARR Bespoke Digital products for explosive growth, we won't quit until you hit $100K revenue.",
    icon: "/services/icon2.png",
    image: "/services/s2.png",
    topOffset: "",
  },
  {
    title: "Startup Growth Engine",
    description:
      "We build your tech AND fill your pipeline. Guaranteed 500 leads/month or we work free.",
    icon: "/services/icon3.png",
    image: "/services/s3.png",
    topOffset: "top-20",
  },
  {
    title: "Telematics Powerhouse",
    description:
      "Embed our battle-tested chat, scheduling & analytics modules — no 6-month dev cycles.",
    icon: "/services/icon4.png",
    image: "/services/s4.png",
    topOffset: "top-14",
  },
  {
    title: "Equity-Free Scale Stack",
    description:
      "Enterprise infrastructure that grows with you. No licenses, no equity grabs, no BS.",
    icon: "/services/icon5.png",
    image: "/services/s5.png",
    topOffset: "",
  },
  {
    title: "Unlimited Scale Support",
    description:
      "World-class support, training & growth optimization tailored to your product.",
    icon: "/services/icon6.png",
    image: "/services/s6.png",
    topOffset: "top-14",
  },
];

const OurServices = () => {
  return (
    <div className="relative bg-[#0431C2] py-6 lg:py-14" style={{ opacity: 1 }}>
      {/* top svg  */}
      <motion.div
        className="absolute  left-50 top-6 sm:left-10 sm:top-10"
        animate={{
          //   y: [0, -15, 0], // move up and down
          x: [0, -10, 0], // moves left and right
          scale: [1, 1.41, 1], // zoom in and out
          rotate: [0, 180, 360], // rotate 0° → 180° → 360°
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 159 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[70px] w-[70px] lg:h-[160px] lg:w-[160px] mb-6 mr-8 "
        >
          <path
            fillRrule="evenodd"
            clipRule="evenodd"
            d="M158.994 79.4941C158.994 79.4941 159.937 42.9639 137.986 21.0135C116.036 -0.936548 79.5059 0.00589382 79.5059 0.00589382C79.5059 0.00589382 79.5007 0.194045 79.5 0.551353C79.5 0.40045 79.4985 0.279727 79.4978 0.190584C79.4963 0.0686843 79.4941 0.00589382 79.4941 0.00589382C79.4941 0.00589382 42.9639 -0.936548 21.0135 21.0135C-0.936548 42.9639 0.00589382 79.4941 0.00589382 79.4941C0.00589382 79.4941 36.5365 80.4363 58.4862 58.4862C78.5497 38.4236 79.4875 6.17973 79.5 0.783522C79.5132 6.17973 80.451 38.4236 100.514 58.4862C122.464 80.4363 158.994 79.4941 158.994 79.4941ZM21.0135 137.986C-0.936548 116.036 0.00589382 79.5059 0.00589382 79.5059C0.00589382 79.5059 36.5365 78.5637 58.4862 100.514C78.5497 120.576 79.4875 152.82 79.5 158.217C79.5132 152.82 80.451 120.576 100.514 100.514C122.464 78.5637 158.994 79.5059 158.994 79.5059C158.994 79.5059 159.937 116.036 137.986 137.986C116.036 159.936 79.5059 158.994 79.5059 158.994C79.5059 158.994 79.5007 158.806 79.5 158.449C79.4993 158.806 79.4941 158.994 79.4941 158.994C79.4941 158.994 42.9639 159.936 21.0135 137.986Z"
            fill="#FFDB86"
            fill-opacity="0.2"
          />
        </svg>
      </motion.div>
      <div className="flex items-center justify-between space-y-4 text-center sm:space-y-6 mt-6 ">
        <div className="absolute left-100">
          <button className="bg-[#CFB994] text-black text-sm font-bold mx-auto py-2 px-4 rounded-full mt-16">
            Our Services
          </button>
          <h2 className=" mx-auto text-white text-5xl font-bold mt-6 ">
            White-Label Dominance
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 py-12 mt-20">
        <div className="hidden lg:flex flex-wrap gap-y-10">
          {/* <!-- Service Card 1 --> */}
          <div className="w-1/3 p-4 relative top-20 ">
            <div className="flex flex-col space-y-4 rounded-3xl border border-white border-opacity-70  bg-opacity-10 p-6 text-white sm:p-8 bg-[#2246C8]">
              <Image
                src="/service-icon1.webp"
                alt="Launch Your Branded Empire"
                width={71} // Provide width/height for optimization
                height={71}
                className="h-[41px] w-[41px] lg:h-[71px] lg:w-[71px] object-cover"
              />
              <h3 className="text-xl font-semibold">
                Launch Your Branded Empire
              </h3>
              <p>
                Own 100% of enterprise-grade SaaS, CRM, or Edtech platforms — we
                code, you keep the profits.
              </p>
              <Image
                src="/service-image1.webp"
                width={300} // Provide width/height for optimization
                height={300}
                alt="Launch Your Branded Empire"
                className="h-[160px] sm:h-[192px] w-full rounded-3xl object-cover"
                // className="h-[160px] w-full rounded-3xl object-cover sm:h-[192px]"
              />
            </div>
          </div>

          {/* <!-- Service Card 2 --> */}
          <div className="w-1/3 p-4 relative top-0">
            <div className="flex flex-col space-y-4 rounded-3xl border border-white border-opacity-70  bg-opacity-10 p-6 text-white sm:p-8 bg-[#2246C8]">
              <Image
                src="/service-icon2.webp"
                width={71} // Provide width/height for optimization
                height={71}
                alt="Hyper-Grade Custom Dev"
                className="h-[41px] w-[41px] lg:h-[71px] lg:w-[71px] object-cover"
              />
              <h3 className="text-xl font-semibold">Hyper-Grade Custom Dev</h3>
              <p>
                10M ARR Bespoke Digital products for explosive growth, we won't
                quit until you hit $100K revenue.
              </p>
              <Image
                src="/service-image2.webp"
                width={300} // Provide width/height for optimization
                height={300}
                alt="Hyper-Grade Custom Dev"
                className="h-[160px] sm:h-[192px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* <!-- Service Card 3 --> */}
          <div className="w-1/3 p-4 relative top-20">
            <div className="flex flex-col space-y-4 rounded-3xl border border-white border-opacity-70  bg-opacity-10 p-6 text-white sm:p-8 bg-[#2246C8]">
              <Image
                src="/service-icon3.webp"
                width={71} // Provide width/height for optimization
                height={71}
                alt="Startup Growth Engine"
                className="h-[41px] w-[41px] lg:h-[71px] lg:w-[71px] object-cover"
              />
              <h3 className="text-xl font-semibold">Startup Growth Engine</h3>
              <p>
                We build your tech AND fill your pipeline. Guaranteed 500
                leads/month or we work free.
              </p>
              <Image
                src="/service-image3.webp"
                width={300} // Provide width/height for optimization
                height={300}
                alt="Startup Growth Engine"
                className="h-[160px] sm:h-[192px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* <!-- Service Card 4 --> */}
          <div className="w-1/3 p-4 relative top-8">
            <div className="flex flex-col space-y-4 rounded-3xl border border-white border-opacity-70  bg-opacity-10 p-6 text-white sm:p-8 bg-[#2246C8]">
              <Image
                src="/service-icon4.webp"
                width={71} // Provide width/height for optimization
                height={71}
                alt="Telematics Powerhouse"
                className="h-[41px] w-[41px] lg:h-[71px] lg:w-[71px] object-cover"
              />
              <h3 className="text-xl font-semibold">Telematics Powerhouse</h3>
              <p>
                Embed our battle-tested chat, scheduling & analytics modules —
                no 6-month dev cycles.
              </p>
              <Image
                src="/service-image4.webp"
                width={300} // Provide width/height for optimization
                height={300}
                alt="Telematics Powerhouse"
                className="h-[160px] sm:h-[192px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* <!-- Service Card 5 --> */}
          <div className="w-1/3 p-4">
            <div className="flex flex-col space-y-4 rounded-3xl border border-white border-opacity-70  bg-opacity-10 p-6 text-white sm:p-8 bg-[#2246C8]">
              <Image
                src="/service-icon5.webp"
                width={71} // Provide width/height for optimization
                height={71}
                alt="Equity-Free Scale Stack"
                className="h-[41px] w-[41px] lg:h-[71px] lg:w-[71px] object-cover"
              />
              <h3 className="text-xl font-semibold">Equity-Free Scale Stack</h3>
              <p>
                Enterprise infrastructure that grows with you. No licenses, no
                equity grabs, no BS.
              </p>
              <Image
                src="/service-image5.webp"
                width={300} // Provide width/height for optimization
                height={300}
                alt="Equity-Free Scale Stack"
                className="h-[160px] sm:h-[192px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* <!-- Service Card 6 --> */}
          <div className="w-1/3 p-4 relative top-14">
            <div className="flex flex-col space-y-4 rounded-3xl border border-white border-opacity-70  bg-opacity-10 p-6 text-white sm:p-8 bg-[#2246C8]">
              <Image
                src="/service-icon6.webp"
                width={71} // Provide width/height for optimization
                height={71}
                alt="Unlimited Scale Support"
                className="h-[41px] w-[41px] lg:h-[71px] lg:w-[71px] object-cover"
              />
              <h3 className="text-xl font-semibold">Unlimited Scale Support</h3>
              <p>
                Keep your business running at scale with our lifetime support
                and upgrade assurance.
              </p>
              <Image
                src="/service-image6webp.webp"
                width={300}
                height={300}
                alt="Unlimited Scale Support"
                className="h-[160px] sm:h-[192px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a href="#contact">
            <button className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary px-4 py-2 text-xs font-semibold text-white transition-all active:scale-95 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 lg:gap-1.5 lg:rounded-xl lg:px-6 lg:py-3 lg:text-sm bg-[#F05B2D]">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5.6665 8L9.6665 8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.3335 10L10.3335 8L8.3335 6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Own 100% Equity
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
