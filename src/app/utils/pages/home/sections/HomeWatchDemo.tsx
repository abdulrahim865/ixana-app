"use client";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import { Modal } from "antd";
import { useState } from "react";

export default function HomeWatchDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="flex min-h-[60vh] w-full relative flex-col lg:flex-row"
      id="demo"
    >
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
      <div
        id="#demo"
        className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-5"
      >
        <div className="flex flex-col items-center min-h-[50px]">
          <div className="flex px-3 py-1.5 border border-solid rounded-full border-[#D4D3D2] hover:p-1 transition1">
            <div className="flex px-5 py-1.5 border border-solid rounded-full border-[#A29F9F] hover:p-1 transition1">
              <Pbutton
                text="Watch Demo"
                icon={<ToprightArrow wrapperClass=" text-black" size={32} />}
                size="xl"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* <span>Transfer contacts, files and data with a handshake</span> */}
        <span>Communicate with Touch</span>
      </div>
      <Modal
        open={isModalOpen}
        width="100%"
        footer={null}
        onCancel={(e) => setIsModalOpen(false)}
      >
        <iframe
          width="100%"
          height="600px"
          src="https://player.vimeo.com/video/786424550?"
        ></iframe>
      </Modal>
    </div>
  );
}
