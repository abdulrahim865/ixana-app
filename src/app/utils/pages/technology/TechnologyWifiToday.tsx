import Image from "next/image";

export default function TechnologyWifiToday() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12 mt-12">
      <div className="flex flex-col items-center w-full gap-10">
        <div className="flex flex-col items-center justify-between w-full gap-12 py-5 md:flex-row grow">
          <Image
            src="/assets/technology/chip-preview.png"
            alt="Wearable Ixana"
            className="flex flex-col basis-[50%] lg:basis-[50%] h-auto "
            width={500}
            height={300}
            priority
          />
          <div className="flex flex-col items-start basis-[50%] lg:basis-[45%] justify-center gap-3">
            <span className="primary-chip">Wi-R today</span>

            <h2 className="pt-12 text-4xl font-light ">
              Partners integrating Wi-R into smartphones, wearables and AR/VR
              headsets
            </h2>
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/technology/check.svg"
                  alt="Checkbox"
                  width={20}
                  height={20}
                  priority
                />
                <span className="font-light ">5Mbs production ready chip</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/technology/check.svg"
                  alt="Checkbox"
                  width={20}
                  height={20}
                  priority
                />
                <span className="font-light ">12 major device partners</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/technology/check.svg"
                  alt="Checkbox"
                  width={20}
                  height={20}
                  priority
                />
                <span className="font-light ">
                  Defense contracts for Wi-R integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
