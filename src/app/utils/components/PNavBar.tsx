import * as React from "react";
import Image from "next/image";
import { Pbutton, ToprightArrow } from "./Pbutton";

export const PNavBar = ({ isHomeView }: { isHomeView?: boolean }) => {
  return (
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

          <a href="#">
            <Image
              src="/assets/ixana-logo.svg"
              alt="Ixana logo"
              width={167}
              height={31}
              priority
            />
          </a>

          <div className="flex items-center gap-6">
            <Pbutton text="Try Ixana" icon={<ToprightArrow />} />
            <Pbutton text="Contact us" icon={<ToprightArrow />} />
          </div>
        </div>
      </div>
    </div>
  );
};
