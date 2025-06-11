import Image from "next/image";

const WhyScaleStartups = () => {
  return (
    <section className="bg-[#FCFAF2] py-6 lg:py-14" id="choose max-w-[1400px]">
      <div className="mx-auto">
        <div className="mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 px-6">
          {/* Left Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-full min-h-[250px] w-full rounded-xl shadow-lg sm:min-h-[400px] md:min-h-[600px]">
              <Image
                alt="Customer holding box"
                src="/Choose.webp"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800 md:p-14">
            <h3 className="text-black text-5xl font-bold">
              Why ScaleStartups?
            </h3>
            <p className="text-md pb-2 text-headText lg:text-xl">
              Your Technical Co-Founder for Hyper-Growth: Code, Customers, and
              Scale on Autopilot
            </p>

            <div className="space-y-5 md:pl-10">
              {[
                {
                  title: "Bulletproof Code, Zero Downtime",
                  desc: "Enterprise-grade software with 99.99% uptime SLA. Launch fast, scale endlessly, and leave technical debt to amateurs",
                  badge: "✅ Used by 3 startups acquired for $100M+",
                },
                {
                  title: "Code + Growth in One Stack",
                  desc: "We build your software and fill your pipeline. Embed proven lead gen hacks, AI analytics, and conversion engines",
                  badge: "✅ Guaranteed 500 leads/month or we work free",
                },
                {
                  title: "Scale Without the Crash",
                  desc: "Infrastructure that grows as you do. Pay only for active users—no overprovisioning, no surprise bills",
                  badge: "✅ Slash ops costs by 70%",
                },
                {
                  title: "From MVP to $100M Traction",
                  desc: "12 years of scaling secrets from 237+ startups. Your success becomes our next case study.",
                  badge: "✅ Featured in TechCrunch, YC, Forbes",
                },
              ].map(({ title, desc, badge }, i) => (
                <div key={i} className="space-y-1 sm:space-y-3">
                  <h4 className="text-black text-2xl font-bold">{title}</h4>
                  <p className="subPara">{desc}</p>
                  <p className="mt-2 text-sm font-semibold">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mx-auto mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3  px-6">
          {[
            {
              title: "Innovative Design",
              desc: "Innovative design focuses on creating new, creative, and practical solutions that enhance functionality and appeal, setting products apart from the competition.",
            },
            {
              title: "Advanced Technology",
              desc: "Advanced technology refers to cutting-edge tools and innovations that improve efficiency, performance, and user experience in products or services.",
            },
            {
              title: "Exceptional Quality",
              desc: "Exceptional quality means products are made to the highest standards, offering superior performance, durability, and reliability",
            },
          ].map(({ title, desc }, i) => (
            <div
              key={i}
              className="group flex h-full flex-col justify-between space-y-4 rounded-xl bg-tertiary/15 p-8 shadow-lg hover:text-white sm:p-10  bg-[#DFE3F5]  hover:bg-[#375EFB]"
            >
              <div>
                <h2 className=" group-hover:text-white text-blak text-5xl font-bold">
                  {title.split(" ").join("\n")}
                </h2>
                <p className="text-lg py-4 ">{desc}</p>
              </div>
              <div className="mt-auto">
                <a
                  className="flex items-center space-x-2 font-bold text-tertiary group-hover:text-white"
                  href=""
                >
                  <span>See More</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0257 4.94141L17.084 9.99974L12.0257 15.0581M2.91732 9.99974H16.9423"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <a
            className="inline-flex items-center justify-center bg-[#375EFB] px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl text-white"
            href="#contact"
          >
            Code + Cash Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyScaleStartups;
