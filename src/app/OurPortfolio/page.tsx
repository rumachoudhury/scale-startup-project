// import Portfolio from "@/components/Portfolio";
import PortfolioSVG1 from "../svg/Portfolio/page1";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OurPortfolio() {
  return (
    <main className="">
      <Navbar />
      <div
        className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-5 py-10 sm:py-20 lg:flex-row 2xl:px-0 h-[400px]"
        style={{ backgroundImage: "url('/Bannar.png')" }}
      >
        <div className="absolute inset-0 bg-[#020720] opacity-0 dark:opacity-85"></div>
        <div className="absolute left-0 top-0">
          {/* 1st svg */}
          <PortfolioSVG1 />
          {/* 2nd svg */}
        </div>
        <div className="absolute bottom-10 right-4 sm:right-20">
          <Image
            src="/Circle.png"
            alt="techserve4u Hero"
            width={101}
            height={101}
            className="sm:h-[101px] sm:w-[101px]"
            priority // optional for lazy loading
          />
        </div>
        <h3 className="z-10 p-5 text-3xl font-semibold text-white lg:p-24 lg:text-7xl">
          Our Portfolio
        </h3>
      </div>

      {/* Portfolio section */}
      <section>
        <div id="portfolio" className="py-6 lg:py-14 bg-[#FCFAF2]">
          <div className="text-black text-5xl text-left ml-4 mt-6 font-bold">
            <h2>Discover Our Portfolio</h2>
          </div>
          <div
            role="tablist"
            aria-orientation="horizontal"
            tabIndex={0}
            className="my-6 inline-flex items-center gap-2 overflow-x-auto whitespace-nowrap rounded-lg bg-white p-1 shadow-md dark:bg-slate-700 text-muted-foreground ml-4"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              outline: "none",
            }}
          >
            {/* <!-- Tab: All --> */}
            <button
              role="tab"
              aria-selected="true"
              aria-controls="tab-content-all"
              id="tab-trigger-all"
              className="inline-flex items-center justify-center px-8 py-2 rounded-md text-sm font-bold text-white bg-[#375EFB] shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
              data-state="active"
            >
              All
            </button>

            {/* <!-- Tab: Web App Development --> */}
            <button
              role="tab"
              aria-selected="false"
              aria-controls="tab-content-web"
              id="tab-trigger-web"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              data-state="inactive"
            >
              Web App Development
            </button>

            {/* <!-- Tab: Mobile App Development --> */}
            <button
              role="tab"
              aria-selected="false"
              aria-controls="tab-content-mobile"
              id="tab-trigger-mobile"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              data-state="inactive"
            >
              Mobile App Development
            </button>

            {/* <!-- Tab: Desktop Development --> */}
            <button
              role="tab"
              aria-selected="false"
              aria-controls="tab-content-desktop"
              id="tab-trigger-desktop"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              data-state="inactive"
            >
              Desktop Development
            </button>

            {/* <!-- Tab: SEO --> */}
            <button
              role="tab"
              aria-selected="false"
              aria-controls="tab-content-seo"
              id="tab-trigger-seo"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              data-state="inactive"
            >
              SEO
            </button>

            {/* <!-- Tab: CloudOps Consultancy --> */}
            <button
              role="tab"
              aria-selected="false"
              aria-controls="tab-content-cloudops"
              id="tab-trigger-cloudops"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold text-[#375EFB] dark:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              data-state="inactive"
            >
              CloudOps Consultancy
            </button>
          </div>

          {/* card section */}
          <div className=" rounded-lg p-5 grid grid-cols-1 gap-x-6 gap-y-10 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* card 1 */}
            <div className=" w-[300px] h-auto">
              <div className="bg-[#E1E3F5] rounded-lg">
                <Image
                  alt="Mobile Apps Design"
                  src="/Mobile.webp"
                  width={400}
                  height={400}
                  className="object-contain bg-[#E1E3F5] w-[270px] h-[300px] ml-4"
                />
              </div>

              <h3 className="pt-4 text-xl font-bold ">Mobile Apps Design</h3>
              <p className="font-semibold opacity-70">Creative Design</p>
            </div>

            {/* card 2 */}
            <div className=" w-[300px] h-auto">
              <div className="bg-[#E1E3F5] rounded-lg">
                <Image
                  alt="Mobile Apps Design"
                  src="/iPadPro.webp"
                  width={400}
                  height={400}
                  className=" object-contain  w-[300px] h-[300px]"
                />
              </div>

              <h3 className="pt-4 text-xl font-bold text-headText">
                Landing Page
              </h3>
              <p className="font-semibold text-headText opacity-70">
                Creative Design
              </p>
            </div>

            {/* card 3 */}
            <div className=" w-[300px] h-auto">
              <div className="bg-[#E1E3F5] rounded-lg ">
                <Image
                  alt="Mobile Apps Design"
                  src="/iPad (1).webp"
                  width={300}
                  height={300}
                  className=" object-contain  w-[270px] h-[300px] ml-4"
                />
              </div>

              <h3 className="pt-4 text-xl font-bold ">Company Dashboard</h3>
              <p className="font-semibold  opacity-70">Creative Design</p>
            </div>

            {/* card 4 */}
            <div className=" w-[300px] h-auto">
              <div className="bg-[#E1E3F5] rounded-lg ">
                <Image
                  alt="Mobile Apps Design"
                  src="/iMac2.webp"
                  width={400}
                  height={400}
                  className="rounded-lg object-contain  w-[270px] h-[300px] ml-4"
                />
              </div>
              <h3 className="pt-4 text-xl font-bold ">VocalizePro Website</h3>
              <p className="font-semibold  opacity-70">Website Design</p>
            </div>
            {/* card 5 */}
            <div className=" w-[300px] h-auto">
              <div className="bg-[#E1E3F5] rounded-lg ">
                <Image
                  alt="Mobile Apps Design"
                  src="/Studio.webp"
                  width={400}
                  height={400}
                  className="rounded-lg object-contain bg-[#E1E3F5] w-[300px] h-[300px]"
                />
              </div>

              <h3 className="pt-4 text-xl font-bold ">
                Bootcamp Website Design
              </h3>
              <p className="font-bold  opacity-70">Creative Design</p>
            </div>

            {/* card 6 */}
            <div className=" w-[300px] h-auto">
              <div className="bg-[#E1E3F5] rounded-lg ">
                <Image
                  alt="Mobile Apps Design"
                  src="/iMac.webp"
                  width={400}
                  height={400}
                  className="rounded-lg object-contain  w-[270px] h-[300px] ml-4"
                />
              </div>

              <h3 className="pt-4 text-xl font-bold ">
                E-commerce Landing Page
              </h3>
              <p className="font-semibold opacity-70">Creative Design</p>
            </div>

            {/* card 7 */}
            <div className=" w-[300px] h-auto">
              <div className="bg-[#E1E3F5] rounded-lg pt-6 ">
                <Image
                  alt="Mobile Apps Design"
                  src="/Hand.webp"
                  width={400}
                  height={400}
                  className="rounded-lg object-contain  w-[270px] h-[270px] ml-6"
                />
              </div>

              <h3 className="pt-4 text-xl font-bold ">Illustration Design</h3>
              <p className="font-semibold text-headText opacity-70">
                Creative Design
              </p>
            </div>

            {/* card 8 */}
            <div className=" w-[300px] h-auto">
              <div className="bg-[#E1E3F5] rounded-lg ">
                <Image
                  alt="Mobile Apps Design"
                  src="/iPadPro2.webp"
                  width={400}
                  height={400}
                  className="rounded-lg object-contain bg-[#E1E3F5] w-[300px] h-[290px]"
                />
              </div>

              <h3 className="pt-4 text-xl font-bold ">Dashboard Designn</h3>
              <p className="font-semibold  opacity-70">Creative Design</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
