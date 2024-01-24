"use client";
import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";
import { useState } from "react";
import { Modal } from "antd";
import Link from "next/link";

export default function TechnologyInnovation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12">
      <div className="flex flex-col items-center w-full gap-16">
        <div className="flex flex-col items-center gap-5">
          <span className="primary-chip bg-[#6A6665] text-white w-fit">The Innovation</span>
          <h2 className="flex text-4xl font-light max-w-[800px] text-center">
            {`Security and performance of wired connectivity for Body Area Networks.`}
          </h2>
        </div>

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
        <div className="flex flex-col items-center justify-between w-full gap-12 py-5 md:flex-row grow">
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
              A fundamentally new wireless technology designed from the ground-up for Body Area Network Security and
              performance of wired communication with the convenience of wireless
            </p>
            <Link href="/blog/123">
              <Pbutton text="How is it different" icon={<ToprightArrow />} />
            </Link>
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} width="100%" footer={null} onCancel={(e) => setIsModalOpen(false)}>
        <iframe
          width="100%"
          className="min-h-[50vh] lg:min-h-[70vh]"
          src="https://player.vimeo.com/video/786424550?"
        ></iframe>
      </Modal>
    </div>
  );
}
