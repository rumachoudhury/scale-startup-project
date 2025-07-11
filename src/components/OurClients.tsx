"use client";

export default function OurClient() {
  return (
    <section className="bg-[#FBFAF2] py-12 px-4 relative">
      <h1 className="mb-10 text-center text-black text-4xl md:text-6xl font-semibold">
        What Our Clients Have to Say
      </h1>

      {/* Carousel Container */}
      <div className="relative max-w-[1400px] mx-auto">
        {/*  Left Button */}
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full bg-[#A89E8F] -left-4 top-1/2 -translate-y-1/2 sm:-left-4 z-20"
          disabled
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>

        {/* Right Button */}
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full bg-[#A89E8F] -right-4 top-1/2 -translate-y-1/2 sm:-right-4 z-20"
          disabled
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Next slide</span>
        </button>

        {/* Slide Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex flex-row justify-center gap-6"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {/* Slide 1 */}
            <div className="min-w-[300px] md:min-w-[450px]">
              <iframe
                src="https://player.vimeo.com/video/1069755594?h=c674655111"
                className="aspect-[9/16] w-full rounded-lg border-none"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo Video 1"
              />
            </div>

            {/* Slide 2 */}
            <div className="min-w-[300px] md:min-w-[450px]">
              <iframe
                src="https://player.vimeo.com/video/1069755416?h=634824fa38"
                className="aspect-[9/16] w-full rounded-lg border-none"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo Video 2"
              />
            </div>

            {/* Slide 3 */}
            <div className="min-w-[300px] md:min-w-[450px]">
              <iframe
                src="https://player.vimeo.com/video/1069755686?h=96ee81b8db"
                className="aspect-[9/16] w-full rounded-lg border-none"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo Video 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
