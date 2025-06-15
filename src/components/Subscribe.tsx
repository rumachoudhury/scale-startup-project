import SubscribeSVG from "@/app/svg/Subscribe/page";
import Image from "next/image";

export default function Subscribe() {
  return (
    <section className="lg:mx-5 lg:my-6">
      <section className="myContainer relative bg-[#0431C2] text-white lg:rounded-3xl">
        <div className="absolute left-0 top-20 w-full">
          <SubscribeSVG />
        </div>
        <div className="mx-auto flex flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:p-10">
          <div className="relative flex w-full justify-center lg:w-[40%] lg:justify-start">
            <div className="relative h-[360px] w-full">
              <Image
                src="/Newsletter.webp"
                alt="Box of electronics"
                fill // this makes the image absolutely positioned with 100% width/height
                className="object-contain"
                priority={false}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center space-y-4 py-6 lg:w-[60%] lg:items-start lg:space-y-8 lg:py-14">
            <h3 className="heading !text-white text-5xl font-bold">
              Subscribe to Newsletters
            </h3>
            <p className="max-w-2xl text-center text-sm opacity-70 lg:text-start lg:text-xl">
              Stay updated with the latest trends, exclusive deals, and special
              offers by subscribing to our newsletter. Be the first to know
              about new arrivals and exciting updates!
            </p>
            <form
              className="relative w-full min-w-[300px] max-w-[600px] "
              action=""
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl p-3 text-gray-600 outline-none  md:p-4  bg-[#FFFFFF]"
                value=""
              />

              <div className="absolute bottom-0 right-0 top-0 mr-2 flex items-center">
                <button className="inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-tertiary text-white transition-all active:scale-95 buttonHover px-4 py-2 gap-1.5 rounded-lg text-xs font-semibold lg:px-6 lg:py-3 lg:gap-1.5 lg:text-sm lg:rounded-xl bg-[#375EFB]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}

// /Newsletter.webp
