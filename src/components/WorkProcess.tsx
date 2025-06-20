"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperInstance } from "swiper";

interface WorkPhase {
  title: string;
  subtitle: string;
  points: string[];
}

const phases: WorkPhase[] = [
  {
    title: "Phase 1: Profit Blueprint (48 Hours)",
    subtitle: "We Reverse-Engineer Your $10M Future",
    points: [
      "✅ Steal 237 proven tactics from your niche's top players",
      "✅ Pinpoint where 95% of startups bleed cash (and plug it)",
      "✅ Get a custom roadmap to crush CAC, LTV, and churn",
    ],
  },
  {
    title: "Phase 2: Code Sprints, Not Marathons (7-14 Days)",
    subtitle: "Your Branded Software, Built at Warp Speed",
    points: [
      "✅ Embed chatbots, analytics, or CRM in 72 hours",
      "✅ Serverless architecture scales to 10M users without DevOps nightmares",
      "✅ Watch your empire rise — no 'black box' development",
    ],
  },
  {
    title: "Phase 3: Pipeline Preload (Day 15-21)",
    subtitle: "We Code by Day, Hack Growth by Night",
    points: [
      "✅ Pre-qualified prospects in YOUR CRM before launch",
      "✅ Battle-tested flows that turn 25% of trials into paying users",
      "✅ Automated emails that get 63% opens (we'll show you the receipts)",
    ],
  },
  {
    title: "Phase 4: Hyper-Growth Launch (Day 22)",
    subtitle: "Your 'Category King' Moment",
    points: [
      "✅ Real-time user analytics to exploit hidden demand",
      "✅ Our 20+ engineers on standby for scaling panics (fixes in <20 mins)",
      "✅ Track 'escape velocity' metrics investors salivate over",
    ],
  },
  {
    title: "Phase 5: Profit Reinvestment (Day 30-90)",
    subtitle: "Turn Revenue into Rocket Fuel",
    points: [
      "✅ Auto-pilot features that boost ARPU by 35%",
      "✅ Position for acquisition with our $100M+ startup playbook",
      "✅ Secure your first $1M payout while we handle scale",
    ],
  },
  {
    title: "Phase 6: Legacy Mode (Ongoing)",
    subtitle: "Become the Amazon of Your Niche",
    points: [
      "✅ Spot trends 6 months early — own them before competitors wake up",
      "✅ One-click localization for 50+ countries",
      "✅ Operate hands-off while we auto-pilot updates, security, and growth",
    ],
  },
];

const WorkProcess: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const swiperRef = useRef<SwiperInstance | null>(null);

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const onPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const onNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const onSwiperInit = (swiper: SwiperInstance) => {
    // swiperRef.current = swiper;
    // swiper.params.navigation.prevEl = prevRef.current;
    // swiper.params.navigation.nextEl = nextRef.current;
    // swiper.navigation.init();
    // swiper.navigation.update();

    // setPrevDisabled(swiper.isBeginning);
    // setNextDisabled(swiper.isEnd);

    // swiper.on("slideChange", () => {
    //   setPrevDisabled(swiper.isBeginning);
    //   setNextDisabled(swiper.isEnd);
    // });
    swiperRef.current = swiper;

    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }

    setPrevDisabled(swiper.isBeginning);
    setNextDisabled(swiper.isEnd);

    swiper.on("slideChange", () => {
      setPrevDisabled(swiper.isBeginning);
      setNextDisabled(swiper.isEnd);
    });
  };

  return (
    <section className="py-12">
      <h2 className="mb-10 text-center text-4xl lg:text-5xl text-black font-bold">
        Our Work Process Framework
      </h2>
      <div className="relative overflow-hidden px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={onSwiperInit}
        >
          {phases.map((phase, index) => (
            <SwiperSlide key={index} className="p-2">
              <div className="bg-white rounded-xl border border-gray-300 shadow min-h-[310px] p-6">
                <h3 className="text-center text-xl font-bold mb-2">
                  {phase.title}
                </h3>
                <p className="text-[16px] font-semibold mb-3">
                  {phase.subtitle}
                </p>
                <ul className="space-y-2 text-sm">
                  {phase.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons  */}
        <button
          ref={prevRef}
          onClick={onPrev}
          disabled={prevDisabled}
          aria-label="Previous slide"
          className="
            inline-flex items-center justify-center
            absolute top-1/2 left-3 -translate-y-1/2
            h-10 w-10 rounded-full  bg-[#FFFFFF] text-2xl font-medium
            shadow-lg transition-colors hover:bg-gray-100 hover:text-black
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
            disabled:pointer-events-none disabled:opacity-50
            -translate-x-1/6
            z-20
          "
        >
          &laquo;
        </button>

        <button
          ref={nextRef}
          onClick={onNext}
          disabled={nextDisabled}
          aria-label="Next slide"
          className="
            inline-flex items-center justify-center
            absolute top-1/2 right-3 -translate-y-1/2
            h-10 w-10 rounded-full  bg-[#FFFFFF] text-2xl font-medium
            shadow-lg transition-colors hover:bg-gray-100 hover:text-black
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
            disabled:pointer-events-none disabled:opacity-50
            translate-x-1/6
            z-20 
          "
        >
          &raquo;
        </button>
      </div>
    </section>
  );
};

export default WorkProcess;
