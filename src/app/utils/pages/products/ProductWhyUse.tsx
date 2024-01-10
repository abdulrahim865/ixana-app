import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function ProductWhyUse() {
  return (
    <div className="flex flex-col w-full min-h-[70vh] relative px-12 md:px-0">
      <div
        className="absolute bottom-0 right-5 md:right-12 top-0 md:-top-[125px] w-[50%] h-[250px] "
        style={{
          backgroundImage: 'url("/assets/products/why-use-lines-top.svg")',
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top bottom",
        }}
      ></div>
      <div
        className="absolute bottom-[70px] right-5 top-[70px] md:right-12 w-[1px] md:top-[90px]"
        style={{
          backgroundImage: 'url("/assets/lines-top-bottom.svg")',
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundPosition: "top right",
        }}
      ></div>

      <div
        className="absolute -bottom-[100px] left-5 md:left-12 right-5 md:right-12 h-[100px] "
        style={{
          backgroundImage: 'url("/assets/products/product-line-middle.svg")',
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      ></div>

      <div className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] grow bg-contain bg-no-repeat lg:ml-24 bg-left-top py-12 gap-14 relative overflow-hidden md:px-12 justify-center">
        <div className="flex flex-col justify-center md:flex-row">
          <h2 className="flex text-4xl ">Why use Wi-R? </h2>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row">
          <div className="flex flex-col p-3 rounded-xl basis-[calc(40%-3rem)]">
            <span className="flex items-center gap-3 text-md">
              <Image
                src="/assets/products/bullet-icon.svg"
                alt="Search Button"
                width={24}
                height={24}
                priority
              />
              <span>100x Lower energy</span>
            </span>
            <span className="text-xs font-light md:max-w-[300px]">
              Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to
              long battery-life
            </span>
          </div>
          <div className="flex flex-col p-3 rounded-xl basis-[calc(40%-3rem)]">
            <span className="flex items-center gap-3 text-md">
              <Image
                src="/assets/products/bullet-icon.svg"
                alt="Search Button"
                width={24}
                height={24}
                priority
              />
              <span>100x Lower energy</span>
            </span>
            <span className="text-xs font-light md:max-w-[300px]">
              Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to
              long battery-life
            </span>
          </div>
          <div className="flex flex-col p-3 rounded-xl basis-[calc(40%-3rem)]">
            <span className="flex items-center gap-3 text-md">
              <Image
                src="/assets/products/bullet-icon.svg"
                alt="Search Button"
                width={24}
                height={24}
                priority
              />
              <span>100x Lower energy</span>
            </span>
            <span className="text-xs font-light md:max-w-[300px]">
              Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to
              long battery-life
            </span>
          </div>

          <div className="flex flex-col p-3 rounded-xl basis-[calc(40%-3rem)]">
            <span className="flex items-center gap-3 text-md">
              <Image
                src="/assets/products/bullet-icon.svg"
                alt="Search Button"
                width={24}
                height={24}
                priority
              />
              <span>100x Lower energy</span>
            </span>
            <span className="text-xs font-light md:max-w-[300px]">
              Wi-R is 100x lower energy compared to Bluetooth/Wi-Fi leading to
              long battery-life
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
