"use client";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import { Modal } from "antd";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player/vimeo";

export default function HomeWatchDemo() {
  const params = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(false);

  useEffect(() => {
    if (window.location.hash == "#demo") {
      setIsModalOpen(true);
    }
  }, [params]);

  const closeModal = () => {
    setPlayingVideo(false);
    console.log("On Cancel Triggered");
    console.log({ playingVideo });
    setTimeout(() => {
      setIsModalOpen(false);
    }, 50);
  };

  return (
    <div className="flex min-h-[60vh] w-full relative flex-col lg:flex-row" id="demo">
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
      <Modal open={isModalOpen} width="100%" footer={null} onCancel={closeModal} className="bg-white w-full" centered>
        <ReactPlayer
          url="https://player.vimeo.com/video/786424550"
          controls
          width="100%"
          onPlay={() => setPlayingVideo(true)}
          onPause={() => setPlayingVideo(false)}
          pip={false}
          /* pip={true}
          stopOnUnmount={false} */
          playing={playingVideo}
        />
      </Modal>
    </div>
  );
}
