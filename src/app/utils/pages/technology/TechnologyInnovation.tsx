import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";

export default function TechnologyInnovation() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12">
      <div className="flex flex-col items-center w-full gap-12">
        <span className="primary-chip">The Innovation</span>
        <h2 className="flex text-4xl font-light max-w-[800px] text-center">
          {`Security and performance of wired connectivity for Body Area Networks.`}
        </h2>
        {/* <div className="flex flex-col items-center justify-between w-full gap-12 py-5 md:flex-row grow">
          <Image
            src="/assets/technology/wearable-headset.png"
            alt="Wearable Ixana"
            className="flex flex-col basis-[50%] lg:basis-[60%] h-auto "
            width={500}
            height={300}
            priority
          />
          <div className="flex flex-col items-start basis-[50%] lg:basis-[30%] justify-center gap-3">
            <h2 className="text-4xl font-light ">Introducing Wi-R</h2>
            <p className="text-xs font-light max-w-64">
              {/* A fundamentally new wireless technology designed from the
              ground-up for Body Area Network 
              Security and performance of wired communication with the convenience of wireless
            </p>
            <Pbutton text="How is it different" icon={<ToprightArrow />} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
