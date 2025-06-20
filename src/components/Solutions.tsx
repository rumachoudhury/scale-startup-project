import React from "react";

const Solutions = () => {
  return (
    <section
      id="Solutions"
      className="bg-[#0431C2] text-white py-20 px-6 sm:py-0"
    >
      <div className="lg:-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">Our Core Solutions</h2>
      </div>

      {/* Top Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-6 lg:mb-8">
        {/* 1st Card */}
        <div className="bg-[#2345C7] rounded-2xl p-5 text-center md:p-10 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out hover:scale-105  border border-white/20">
          <h3 className="mx-auto text-xl font-semibold text-white sm:text-2xl lg:text-4xl">
            White-Label Software
          </h3>
          <p className="sm:text-md mx-auto my-4 max-w-2xl text-sm font-light text-white opacity-90 sm:my-6 lg:mx-0 lg:text-lg">
            <span className="font-semibold text-white opacity-100">
              Launch Your &#39;Own&#39; Software in 30 Days, 100% Your Brand.
            </span>
            <br />
            Skip the 2-year dev cycle. We build, you brand. Own scalable SaaS,
            CRM, or Edtech tools instantly
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "Prebuilt Templates",
              "100% White-Label",
              "In-House Tech Stack",
              "Scalable Infrastructure",
              "Claim Your Template",
            ].map((item, i) => (
              <span
                key={i}
                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm transition duration-200 hover:scale-105 hover:bg-white/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 2nd Card */}
        <div className="bg-[#2345C7] rounded-2xl p-5 text-center md:p-10 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out hover:scale-105  border border-white/20">
          <h3 className="mx-auto text-xl font-semibold text-white sm:text-2xl lg:text-4xl">
            Custom Software Development
          </h3>
          <p className="sm:text-md mx-auto my-4 max-w-2xl text-sm font-light text-white opacity-90 sm:my-6 lg:mx-0 lg:text-lg">
            <span className="font-semibold text-white opacity-100">
              From MVP to $10M ARR: Code that Scales as Fast as Your Ambition
            </span>
            <br />
            Bespoke web/mobile/desktop apps built for startups who refuse to
            plateau
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 ">
            {[
              "Ownership Guarantee",
              "Growth-Ready Architecture",
              "Speed-to-Market",
              "Unlimited Support",
              "Start Building",
            ].map((item, i) => (
              <span
                key={i}
                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px- sm:py-2 sm:text-sm  transition duration-200 hover:scale-105 hover:bg-white/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - 3rd Card */}
      <div
        className="bg-[#2345C7]  transform transition-transform duration-300 ease-in-out
      hover:scale-105  border border-white/20 rounded-2xl mt-4 lg:mt-6 "
      >
        <div className=" flex flex-col  p-10 text-center lg:flex-row lg:gap-20 lg:text-start">
          {/* left side */}
          <div
            className="lg:text-start    "
            style={{
              opacity: 1,
              willChange: "opacity, transform",
              transform: "none",
            }}
          >
            <h3 className="mx-auto text-xl font-semibold text-white sm:text-2xl lg:text-4xl">
              Business Growth Engine
            </h3>
            <p
              className="sm:text-md mx-auto my-4 max-w-2xl text-sm font-light text-white/90 sm:my-6 lg:mx-0 lg:max-w-full lg:text-lg"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
              }}
            >
              We Code. You Sell. We Fill Your Pipeline — or We Don&#39;t Get
              Paid. Your growth team: Lead gen, conversion funnels, and
              automation baked into your software.
            </p>
          </div>

          {/* right side */}
          <div
            className="flex flex-wrap content-center justify-center gap-2 sm:gap-3"
            // className=" mt-4 flex flex-col p-10 text-center md:mt-8 lg:flex-row lg:gap-20"
            style={{ opacity: 1, willChange: "opacity" }}
          >
            <span
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm transition duration-200 hover:scale-105 hover:bg-white/20"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              CRM + Lead Gen
            </span>
            <span
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm transition duration-200 hover:scale-105 hover:bg-white/20"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              Conversion Playbooks
            </span>
            <span
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm transition duration-200 hover:scale-105 hover:bg-white/20"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              AI-Powered Analytics
            </span>
            <span
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm  transition duration-200 hover:scale-105 hover:bg-white/20"
              style={{
                opacity: 1,
                willChange: "opacity, transform ",
                transform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              Edtech Automation
            </span>
            <span
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm transition duration-200 hover:scale-105 hover:bg-white/20"
              style={{
                opacity: 1,
                willChange: "opacity, transform",
                transform: "none",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              Get Guaranteed Leads
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
