import * as React from "react";
import Image from "next/image";
import { Pbutton, ToprightArrow } from "./Pbutton";
import Link from "next/link";

export const PNavBar = ({ isHomeView }: { isHomeView?: boolean }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex-col hidden w-full lg:flex">
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
              <a className="flex items-center gap-3 text-xs">Meet us at CES</a>
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

      <div
        className="relative flex items-center justify-center w-full p-5 lg:hidden"
        style={{
          background:
            "rgba(255, 255, 255, 0.49) 56.97%, rgba(212, 211, 210, 0.38) 104.41%)",
        }}
      >
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
  );
};
