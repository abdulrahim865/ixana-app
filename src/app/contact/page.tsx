"use client";
import Image from "next/image";
import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import { Crisp } from "crisp-sdk-web";

export default function ContactUsPage() {
  const showLiveChat = () => {
    if (Crisp.chat.isChatOpened()) {
      Crisp.chat.open();
    } else {
      Crisp.chat.show();
      Crisp.chat.open();
    }
  };

  const contacts = [
    {
      icon: "/assets/location.png",
      title: "Our Offices",
      description: "West Lafayette, IN, USA Seattle, WA, USA Bangalore, India",
    },
    {
      icon: "/assets/contact/message.svg",
      title: "Email",
      description: "hello@ixana.ai",
    },
    {
      icon: "/assets/contact/live-chat.svg",
      title: (
        <div className="flex items-start gap-3">
          <div className="h-[5px] w-[5px] flex rounded-full bg-ibtnorange gap-3 my-1"></div>
          <span>Live Chat</span>
        </div>
      ),
      description: (
        <button className="px-2 ml-3 text-xs Pbutton" onClick={showLiveChat}>
          Tap to chat
        </button>
      ),
    },
  ];
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      <div className="container flex flex-col items-center px-12 md:px-0 lg:min-h-[700px] justify-center gap-12 lg:max-w-[800px] pt-24 pb-12 md:py-12 ">
        <h1 className="text-4xl">Have a question? Drop us a line.</h1>
        <div className="flex flex-col w-full gap-12 md:flex-row ">
          <div className="flex flex-col items-start gap-3 md:basis-1/2 ">
            <form action="https://api.web3forms.com/submit" method="POST" className="w-full">
              <input type="hidden" name="access_key" value="9ac131f9-fe73-4a60-bdfd-e6588490f558" />
              <input type="checkbox" name="botcheck" className="hidden" />
              <div className="flex flex-col w-full gap-4">
                <span className="text-sm ">Your Name</span>

                <input
                  type="text"
                  className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs w-full"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span className="text-sm ">Your email address</span>

                <input
                  type="email"
                  className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs w-full"
                  placeholder="Your email address"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span className="text-sm ">Subject</span>

                <input
                  type="text"
                  className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs w-full"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <span className="text-sm ">Your message</span>

                <textarea
                  className="p-4 rounded-3xl border-[#BFBDBD] border font-light text-xs w-full"
                  placeholder="Your message"
                  rows={10}
                  name="message"
                  required
                />
              </div>
              <input className="w-full Pbutton bg-black text-center mt-5" type="submit" value="Send" />
            </form>
          </div>
          <div className="flex  md:basis-1/2 border border-solid border-[rgba(191,189,189,1)] p-7 justify-between   rounded-3xl  items-center">
            <div className="flex flex-col justify-around h-full gap-7">
              {contacts.map((item, index) => (
                <div key={index} className="flex gap-9">
                  <Image src={item.icon} className="flex w-8 h-8 " alt={"Image icon"} width={30} height={30} priority />
                  <div className="flex flex-col w-full gap-2">
                    <h5 className="text-xs ">{item.title}</h5>
                    <span className="text-xs font-light ">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PFooter />
    </main>
  );
}
