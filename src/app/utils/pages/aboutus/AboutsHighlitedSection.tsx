export default function AboutsHighlitedSection() {
  return (
    <div
      className=" relative flex justify-center w-full px-3 overflow-hidden grow bg-iblack h-fit md:px-12 lg:min-h-[90vh]"
      style={{
        backgroundImage: 'url("/assets/aboutus/about-cover.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="z-10 flex flex-col items-center justify-between w-full gap-5 my-24 text-center text-white">
        <div className="flex flex-col items-center gap-5 w-full lg:w-[50%]">
          <span className="primary-chip white">Technology</span>
          <h1 className="text-4xl font-light">
            Ushering high-speed human computer interfaces with distributed computing
          </h1>
          <span className="text-xs font-extralight text-[#BFBDBD] max-w-[400px]">
            Solving the problems of power, data rate, latency, and signal reliability that limit today&apos;s wearables
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between w-full gap-3 ">
          <div className="flex flex-col items-start basis-[calc(50%-0.75rem)] md:basis-[calc(25%-3rem)] items-center">
            <h3 className="text-md ">Touch selectivity</h3>
            <span className="text-xs font-light ">Touch selectivity</span>
          </div>
          <div className="flex flex-col items-start basis-[calc(50%-0.75rem)] md:basis-[calc(25%-3rem)] items-center">
            <h3 className="text-md ">Touch selectivity</h3>
            <span className="text-xs font-light ">Touch selectivity</span>
          </div>
          <div className="flex flex-col items-start basis-[calc(50%-0.75rem)] md:basis-[calc(25%-3rem)] items-center">
            <h3 className="text-md ">Touch selectivity</h3>
            <span className="text-xs font-light ">Touch selectivity</span>
          </div>
          <div className="flex flex-col items-start basis-[calc(50%-0.75rem)] md:basis-[calc(25%-3rem)] items-center">
            <h3 className="text-md ">Touch selectivity</h3>
            <span className="text-xs font-light ">Touch selectivity</span>
          </div>
        </div>
      </div>
    </div>
  );
}
