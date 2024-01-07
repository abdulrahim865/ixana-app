import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";

export default function HomeWatchDemo() {
  return (
    <div className="flex min-h-[60vh] w-full relative flex-col lg:flex-row">
      <div
        className="flex bg-no-repeat bg-contain grow md:basis-1/2"
        style={{
          backgroundImage: "url(/assets/home/ixana-waves.svg)",
          backgroundPositionY: "50%",
        }}
      ></div>
      <div
        className="flex rotate-180 bg-no-repeat bg-contain grow md:basis-1/2"
        style={{
          backgroundImage: "url(/assets/home/ixana-waves.svg)",
          backgroundPositionY: "50%",
        }}
      ></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center min-h-[50px]">
          <div className="flex px-3 py-1.5 border border-solid rounded-full border-[#D4D3D2] hover:p-1 transition1">
            <div className="flex px-5 py-1.5 border border-solid rounded-full border-[#A29F9F] hover:p-1 transition1">
              <Pbutton
                text="Watch Demo"
                icon={<ToprightArrow wrapperClass=" text-black" size={32} />}
                size="xl"
              />
            </div>
          </div>
        </div>

        {/* <span>Transfer contacts, files and data with a handshake</span> */}
        <span>Communicate with Touch</span>
      </div>
    </div>
  );
}
