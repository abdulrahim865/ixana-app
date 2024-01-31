"use client";
import Image from "next/image";
import { Pbutton, ToprightArrow } from "./Pbutton";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export const PNavBar = ({ isHomeView, isProductView }: { isHomeView?: boolean; isProductView?: boolean }) => {
  const path = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = (event: any) => {
    const tabScrolled = (document.documentElement.scrollTop || document.body.scrollTop) > 50;
    setScrolled(tabScrolled);
  };
  const isScrolled = useMemo(() => scrolled, [scrolled]);
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about-us" },
    { name: "Technology", route: "/our-technology" },
    { name: "Products", route: "/products" },
    { name: "Applications", route: "/applications" },
    { name: "Contact", route: "/contact" },
    /* { name: "Blog", route: "/blog" }, */
  ];

  return (
    <>
      <div className="items-center justify-center hidden w-full lg:flex container mx-auto">
        <div className="relative flex-col w-full ">
          {/* {isHomeView && (
            <div className="flex justify-between p-1.5 px-14 bg-iblack ">
              <div className="flex items-center gap-3 lg:gap-14">
                <a className="flex items-center gap-3 text-xs">
                  <Image src="/assets/mail.svg" alt="Mail Button" width={22} height={22} priority />
                  <span className="text-white ">Meet us at CES</span>
                </a>
                <a className="flex items-center gap-3 text-xs">
                  <Image src="/assets/user.svg" alt="Booth Button" width={22} height={22} priority />
                  <span className="text-white ">Booth 61249</span>
                </a>
              </div>

              <Pbutton text="Book Meeting" icon={<ToprightArrow />} />
            </div>
          )} */}

          <div className="relative flex w-full">
            <div className="absolute top-0 z-10 flex justify-between w-full p-3 px-14">
              <Link href="/">
                <Image
                  src={`/assets/ixana-${isHomeView || isProductView ? "logo" : "white"}.svg`}
                  alt="Ixana logo"
                  width={100}
                  height={31}
                  priority
                />
              </Link>

              <div className="flex items-center gap-5">
                {path !== "/" && (
                  <a
                    className={`text-xs ${isHomeView || isProductView ? "text-[rgba(16, 15, 15, 1)]" : "text-white"}  `}
                    href="/"
                  >
                    Home
                  </a>
                )}

                <a
                  className={`text-xs ${isHomeView || isProductView ? "text-[rgba(16, 15, 15, 1)]" : "text-white"}  `}
                  href="/about-us"
                >
                  About us
                </a>
                <a
                  className={`text-xs ${isHomeView || isProductView ? "text-[rgba(16, 15, 15, 1)]" : "text-white"}  `}
                  href="/our-technology"
                >
                  Our Technology
                </a>
                <a
                  className={`text-xs ${isHomeView || isProductView ? "text-[rgba(16, 15, 15, 1)]" : "text-white"}  `}
                  href="/blog/wi-r-technology-white-paper"
                >
                  Tech Insight
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 z-20 flex w-full bg-white ${isScrolled ? "bg-opacity-100" : ""}`}>
        <div className="relative flex items-center justify-center w-full p-5 lg:hidden">
          <a href="/">
            <Image src="/assets/ixana-logo.svg" alt="Ixana logo" width={100} height={31} priority />
          </a>

          <button className="absolute top-0 bottom-0 right-0 flex items-center" onClick={(e) => setMobileDrawer(true)}>
            <Image src="/assets/menu.svg" alt="Ixana menu" width={50} height={50} priority />
          </button>
        </div>
      </div>
      <Drawer
        placement="right"
        onClose={() => {
          setMobileDrawer(false);
        }}
        open={mobileDrawer}
      >
        <div className="flex flex-col gap-5">
          <Link href="/">
            <Image
              src={`/assets/ixana-${isHomeView || isProductView ? "logo" : "white"}.svg`}
              alt="Ixana logo"
              width={100}
              height={31}
              priority
            />
          </Link>
          <div className="flex flex-col gap-3 p-3">
            {navItems.map((nav) => (
              <a key={nav.name} href={nav.route}>
                {nav.name}
              </a>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};
