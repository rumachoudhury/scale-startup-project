import FooterSVG1 from "@/app/svg/Footer/page1";
import FooterSVG2 from "@/app/svg/Footer/page2";
import FooterSVG3 from "@/app/svg/Footer/page3";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#040F2A]   min-h-[450px]  "
    >
      <div className="absolute -bottom-4 -left-8 opacity-50">
        <FooterSVG1 />
      </div>

      <div className="absolute left-1/2 top-1/3 opacity-50">
        <FooterSVG2 />
      </div>
      <div className="absolute right-10 top-14">
        <FooterSVG3 />
      </div>

      <div className="myContainer relative">
        <div>
          <div className=" text-white px-4">
            <div className="mx-auto grid grid-cols-2 space-y-10 py-8 text-left md:grid-cols-4 lg:py-14 lg:pb-28 ">
              <div className="col-span-2 mr-8 md:col-span-1">
                <div className="mx-auto mt-8 w-full space-y-6">
                  {/* <a href="/" className="block">
                    <Image
                      alt="scalestartup Logo"
                      src="logo.svg"
                      width={300}
                      height={300}
                      className="h-auto w-full object-cover"
                      priority
                    />
                    
                  </a> */}
                  <Link href="/" className="block">
                    <Image
                      alt="scalestartup Logo"
                      src="/logo.svg"
                      width={300}
                      height={300}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </Link>
                  <p className="font-light leading-7 tracking-wider text-white opacity-80">
                    Delivering innovative tech solutions to empower businesses
                    worldwide.
                  </p>
                </div>
              </div>
              <div className="mx-0 md:col-span-1 md:mx-auto">
                <div className="space-y-6">
                  <h4 className="pb-2 text-xl font-bold text-white py-8">
                    Company
                  </h4>
                  <ul className="space-y-2 text-sm text-white opacity-80">
                    <li>
                      <a className="hover:underline" href="#about-us">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#contact">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#how-we-work">
                        How it works
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mx-0 md:col-span-1 md:mx-auto">
                <div className="space-y-6">
                  <h4 className="pb-2 text-xl font-bold text-white py-8">
                    Support
                  </h4>
                  <ul className="space-y-2 text-sm text-white opacity-80">
                    <li>
                      <a className="hover:underline" href="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:underline"
                        href="/terms-and-conditions"
                      >
                        Term and Conditions
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#faq">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mx-0 md:col-span-1 md:mx-auto">
                <div className="space-y-6">
                  <h4 className="pb-2 text-xl font-bold text-white py-8">
                    Contact Info
                  </h4>
                  <ul className="space-y-2 text-sm text-white opacity-80">
                    <li>hello@scalestartup.ai</li>
                    <div className="flex items-center space-x-6 py-4">
                      <a className="hover:underline" href="">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.6875 10.5C19.6875 15.3438 16.1328 19.3672 11.4844 20.0703V13.3125H13.75L14.1797 10.5H11.4844V8.70312C11.4844 7.92188 11.875 7.17969 13.0859 7.17969H14.2969V4.79688C14.2969 4.79688 13.2031 4.60156 12.1094 4.60156C9.92188 4.60156 8.47656 5.96875 8.47656 8.39062V10.5H6.01562V13.3125H8.47656V20.0703C3.82812 19.3672 0.3125 15.3438 0.3125 10.5C0.3125 5.14844 4.64844 0.8125 10 0.8125C15.3516 0.8125 19.6875 5.14844 19.6875 10.5Z"
                            fill="white"
                            fill-opacity="0.8"
                          ></path>
                        </svg>
                      </a>
                      <a className="hover:underline" href="">
                        <svg
                          width="20"
                          height="17"
                          viewBox="0 0 20 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.9297 4.4375C17.9297 4.63281 17.9297 4.78906 17.9297 4.98438C17.9297 10.4141 13.8281 16.625 6.28906 16.625C3.94531 16.625 1.79688 15.9609 0 14.7891C0.3125 14.8281 0.625 14.8672 0.976562 14.8672C2.89062 14.8672 4.64844 14.2031 6.05469 13.1094C4.25781 13.0703 2.73438 11.8984 2.22656 10.2578C2.5 10.2969 2.73438 10.3359 3.00781 10.3359C3.35938 10.3359 3.75 10.2578 4.0625 10.1797C2.1875 9.78906 0.78125 8.14844 0.78125 6.15625V6.11719C1.32812 6.42969 1.99219 6.58594 2.65625 6.625C1.52344 5.88281 0.820312 4.63281 0.820312 3.22656C0.820312 2.44531 1.01562 1.74219 1.36719 1.15625C3.39844 3.61719 6.44531 5.25781 9.84375 5.45312C9.76562 5.14062 9.72656 4.82812 9.72656 4.51562C9.72656 2.25 11.5625 0.414062 13.8281 0.414062C15 0.414062 16.0547 0.882812 16.8359 1.70312C17.7344 1.50781 18.6328 1.15625 19.4141 0.6875C19.1016 1.66406 18.4766 2.44531 17.6172 2.95312C18.4375 2.875 19.2578 2.64062 19.9609 2.32812C19.4141 3.14844 18.7109 3.85156 17.9297 4.4375Z"
                            fill="white"
                            fill-opacity="0.8"
                          ></path>
                        </svg>
                      </a>
                      <a className="hover:underline" href="">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.6875 0.8125C15.0391 0.8125 19.375 5.14844 19.375 10.5C19.375 15.8516 15.0391 20.1875 9.6875 20.1875C4.33594 20.1875 0 15.8516 0 10.5C0 5.14844 4.33594 0.8125 9.6875 0.8125ZM14.4141 7.45312C14.5703 6.82812 14.1797 6.55469 13.75 6.71094L4.41406 10.3047C3.78906 10.5391 3.78906 10.9297 4.29688 11.0859L6.67969 11.8281L12.2266 8.3125C12.5 8.15625 12.7344 8.27344 12.5391 8.42969L8.04688 12.4922L7.89062 14.9531C8.125 14.9531 8.24219 14.8359 8.35938 14.7188L9.53125 13.5859L11.9531 15.3828C12.4219 15.6172 12.7344 15.5 12.8516 14.9531L14.4141 7.45312Z"
                            fill="white"
                            fill-opacity="0.8"
                          ></path>
                        </svg>
                      </a>
                      <a className="hover:underline" href="">
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.25 0.75C16.9141 0.75 17.5 1.33594 17.5 2.03906V17C17.5 17.7031 16.9141 18.25 16.25 18.25H1.21094C0.546875 18.25 0 17.7031 0 17V2.03906C0 1.33594 0.546875 0.75 1.21094 0.75H16.25ZM5.27344 15.75V7.42969H2.69531V15.75H5.27344ZM3.98438 6.25781C4.80469 6.25781 5.46875 5.59375 5.46875 4.77344C5.46875 3.95312 4.80469 3.25 3.98438 3.25C3.125 3.25 2.46094 3.95312 2.46094 4.77344C2.46094 5.59375 3.125 6.25781 3.98438 6.25781ZM15 15.75V11.1797C15 8.95312 14.4922 7.19531 11.875 7.19531C10.625 7.19531 9.76562 7.89844 9.41406 8.5625H9.375V7.42969H6.91406V15.75H9.49219V11.6484C9.49219 10.5547 9.6875 9.5 11.0547 9.5C12.3828 9.5 12.3828 10.75 12.3828 11.6875V15.75H15Z"
                            fill="white"
                            fillOpacity="0.8"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t-1 border-white opacity-15" />
          <div className="pt-4 text-center text-white opacity-70">
            <p>©2025 All rights reserved by ScaleStartup</p>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* public/logo (1).svg */
}
