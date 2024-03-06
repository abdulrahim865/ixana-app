import Image from "next/image";
import Link from "next/link";

export const PFooter = () => {
  return (
    <div
      className="relative flex w-full min-h-[60vh] text-black bg-contain bg-no-repeat py-12 rounded-t-3xl px-12 flex-col justify-between gap-3 md:gap-0 pb-28"
      style={{
        background:
          "url(/assets/home/footer-pattern.svg) no-repeat left bottom, linear-gradient(180deg, #E4E5E7 -45.62%, #FFF 100%)",
        backgroundSize: "500px",
        backgroundPositionX: "100px",
        backgroundPositionY: "80%",
      }}
    >
      <div className="container mx-auto flex flex-col justify-between gap-5 lg:flex-row lg:px-0 lg:gap-0 grow">
        <div className="flex justify-between gap-5 basis-[50%]">
          <div className="flex flex-col justify-between w-full lg:flex-row gap-5 lg;gap-0">
            <div className="flex flex-col">
              <Link href="/">
                <h5 className="font-medium text-md">Home</h5>
              </Link>
            </div>

            <div className="flex flex-col">
              <Link href="/about-us">
                <h5 className="font-medium text-md">About us</h5>
              </Link>
              <Link className="text-sm font-light" href="/contact">
                Contact
              </Link>
              <Link className="text-sm font-light" href="/join-us">
                Join Us
              </Link>
            </div>
            <div className="flex flex-col ">
              <h5 className="font-medium text-md">Our Technology</h5>
              <div className="flex flex-col">
                <Link className="text-sm font-light" href="/our-technology">
                  Wi-R Technology
                </Link>
                <Link className="text-sm font-light " href="/products">
                  Ixana Products
                </Link>
                <Link className="text-sm font-light " href="/applications">
                  Ixana Applications
                </Link>
              </div>
            </div>
            <div className="flex flex-col ">
              <h5 className="font-medium text-md">Tech Insights</h5>
              <div className="flex flex-col">
                <a className="text-sm font-light" href="/blog">
                  Blog/Case Studies
                </a>
                <a className="text-sm font-light" href="/news">
                  News
                </a>
                <a className="text-sm font-light" href="/faq">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 basis-[30%] items-center justify-center">
          {/* <div className="flex flex-col">
            <h2 className="text-3xl font-light ">
              Stay updated about the <br /> latest from Ixana.
            </h2>
            <span className="pt-5 text-sm">Your email address</span>

            <div className="flex gap-1">
              <input
                type="text"
                className="p-1.5 px-4 rounded-full basis-2/3 border-[#BFBDBD] border font-light text-xs"
                placeholder="Your email address"
              />
              <button className="px-2 text-xs Pbutton">Subscribe</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-start justify-between w-full md:items-center lg:flex-row ">
        <div className="flex flex-col items-start gap-3 md:items-end basis-1/3 lg:flex-row">
          <Image src="/assets/ixana-light.svg" alt="Ixana logo" width={150} height={50} priority />
          <span className="text-xs font-light ">Ixana @ All Rights Reserved 2023</span>
        </div>
        <span className="text-xs font-light text-center basis-1/3 ">designed by akeo</span>
        <div className="flex items-center justify-end gap-3 basis-1/3">
          <Link href="/contact" className="text-sm font-light text-black border-b-2 border-black border-solid">
            Contact Us
          </Link>
          <Link href="/privacy-policy" className="text-sm font-light text-black border-b-2 border-black border-solid">
            Privacy Policy
          </Link>
          <Link href="/tos" className="text-sm font-light text-black border-b-2 border-black border-solid">
            T&C
          </Link>
          <a
            href="https://www.linkedin.com/company/ixanahq"
            className="text-sm font-light text-black border-b-2 border-black border-solid"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/ixanahq"
            className="text-sm font-light text-black border-b-2 border-black border-solid"
            target="_blank"
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
};
