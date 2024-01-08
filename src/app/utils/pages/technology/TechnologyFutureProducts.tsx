import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";

export const TechnologyFutureProducts = () => {
  const features = [
    {
      name: "Real-time, wearable AI",
      spec: "20Mbit/s Wi-R Chip",
    },
    {
      name: "All-day battery Smartglass",
      spec: "20Mbit/s Wi-R Chip",
    },
    {
      name: "Charging-free wearables",
      spec: "20Mbit/s Wi-R Chip",
    },
  ];
  return (
    <div className="relative container flex w-full min-h-[60vh] text-black bg-contain bg-no-repeat py-12 justify-center rounded-t-3xl  px-12 lg:px-0 mb-12">
      <div className="flex flex-col items-center w-full gap-3">
        <h2 className="flex text-4xl text-center max-w-[500px] font-light ">
          Future Wi-R products
        </h2>
        <span className="text-xs text-center text-itextgrey">
          Contact us at hello@ixana.ai for volume pricing on silicon chips and
          modules
        </span>

        <div className="flex flex-col flex-wrap justify-center gap-5 md:flex-row bg-[rgba(241,241,241,1)] w-full p-3 rounded-2xl mt-5 ">
          {features.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-1.5 p-10 bg-white border border-transparent border-solid rounded-2xl grow hover:border-ibtnorange "
            >
              <span className="text-sm font-medium ">{item.spec}</span>
              <span className="mb-5 text-xs font-light ">{item.name}</span>
              <Pbutton text="Contact us" icon={<ToprightArrow />} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
