"use client";
import Image from "next/image";
import { Pbutton, ToprightArrow } from "./Pbutton";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export const PNavBar = ({ isHomeView }: { isHomeView?: boolean }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = (event: any) => {
    const tabScrolled =
      (document.documentElement.scrollTop || document.body.scrollTop) > 50;
    setScrolled(tabScrolled);
  };
  const isScrolled = useMemo(() => scrolled, [scrolled]);
  return (
    <>
      <div className="items-center justify-center hidden w-full lg:flex">
        <div className="relative flex-col w-full ">
          {isHomeView && (
            <div className="flex justify-between p-3 px-14 bg-iblack ">
              <div className="flex items-center gap-3 lg:gap-14">
                <a className="flex items-center gap-3 text-xs">
                  <Image
                    src="/assets/mail.svg"
                    alt="Mail Button"
                    width={22}
                    height={22}
                    priority
                  />
                  <span className="text-white ">Meet us at CES</span>
                </a>
                <a className="flex items-center gap-3 text-xs">
                  <Image
                    src="/assets/user.svg"
                    alt="Booth Button"
                    width={22}
                    height={22}
                    priority
                  />
                  <span className="text-white ">Booth 61249</span>
                </a>
              </div>

              <Pbutton text="Book Meeting" icon={<ToprightArrow />} />
            </div>
          )}

          <div className="relative flex w-full">
            <div className="absolute top-0 z-10 flex justify-between w-full p-3 px-14">
              <div className="flex items-center gap-3 lg:gap-14">
                <a className="flex items-center gap-3 text-xs">
                  Meet us at CES
                </a>
                <a className="flex items-center gap-3 text-xs">Booth 61249</a>
              </div>

              <Link href="/">
                <Image
                  src="/assets/ixana-logo.svg"
                  alt="Ixana logo"
                  width={167}
                  height={31}
                  priority
                />
              </Link>

              <div className="flex items-center gap-6">
                <Pbutton text="Try Ixana" icon={<ToprightArrow />} />
                <Pbutton text="Contact us" icon={<ToprightArrow />} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 z-10 flex w-full bg-white ${
          isScrolled ? "bg-opacity-100" : ""
        }`}
      >
        <div className="relative flex items-center justify-center w-full p-5 lg:hidden">
          <a href="#">
            <Image
              src="/assets/ixana-logo.svg"
              alt="Ixana logo"
              width={100}
              height={31}
              priority
            />
          </a>
          <button className="absolute top-0 bottom-0 right-0 flex items-center">
            <Image
              src="/assets/menu.svg"
              alt="Ixana menu"
              width={50}
              height={50}
              priority
            />
          </button>
        </div>
      </div>
    </>
  );
};
