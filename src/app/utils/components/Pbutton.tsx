import * as React from "react";
import Image from "next/image";

export type IbtnType = {
  text: string;
  icon: any;
  uiType?: string;
  wrapperClass?: string;
  size?: string;
};

export const PlayIcon = () => (
  <Image src="/assets/iplay.svg" alt="Play" width={25} height={25} priority />
);
export const ToprightArrow = ({
  size,
  wrapperClass = "",
}: {
  size?: number;
  wrapperClass?: string;
}) => (
  <Image
    className={wrapperClass}
    src="/assets/top-rightarrow.svg"
    alt="Arrow"
    width={size || 25}
    height={size || 25}
    priority
  />
);

export const Pbutton = ({
  text,
  icon,
  size = "xs",
  wrapperClass = "",
  uiType = "medium",
}: IbtnType) => {
  const getWrapperClasss = () => {
    switch (size) {
      case "xl":
        return "text-xl";
      case "lg":
        return "text-lg";
      default:
        return "text-xs";
    }
  };
  return (
    <button className={`Pbutton ${getWrapperClasss()} ${wrapperClass}`}>
      <span>{text}</span>
      {icon}
    </button>
  );
};
