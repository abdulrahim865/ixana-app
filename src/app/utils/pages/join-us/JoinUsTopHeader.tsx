import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function JoinUsTopHeader(props: { title: string; description: string }) {
  const { title, description } = props;
  return (
    <div className=" overflow-hidden relative flex flex-col w-full min-h-[100vh] grow bg-no-repeat bg-right-bottom ApplicationsTopHeader ">
      <div className="flex grow">
        <div
          className="flex bg-no-repeat bg-contain grow md:basis-1/2 w-[50%]"
          style={{
            backgroundImage: "url(/assets/products/pattern.svg)",
            backgroundPositionY: "25%",
            transform: "scaleY(-1)",
          }}
        ></div>
        <div
          className="flex bg-no-repeat bg-contain grow md:basis-1/2 w-[50%] transform rotate-180"
          style={{
            backgroundImage: "url(/assets/products/pattern.svg)",
            backgroundPositionY: "25%",
            transform: "scaleX(-1)",
          }}
        ></div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="flex text-6xl max-w-[600px] text-center ">{title}</h1>
          <span className="text-xs font-light">{description}</span>
        </div>
      </div>
    </div>
  );
}
