"use client";
import BlogTopHeader from "@/app/utils/pages/blog/BlogTopHeader";
import Image from "next/image";
import { PFooter } from "../../utils/components/PFooter";
import { PNavBar } from "../../utils/components/PNavBar";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";

export default function BlogDetail() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      <BlogTopHeader />
      <div className="flex flex-col w-full px-6 md:px-0">
        <div className="flex flex-col gap-24 py-5 md:py-24">
          <div className="container flex flex-col gap-3 grow max-w-[700px]">
            <div className="flex flex-wrap items-center gap-3">
              <h5 className="text-white primary-chip">Nov 1, 2022</h5>
              <h5 className="primary-chip bg-[rgba(241,241,241,1)]">Shreyas Sen, Angik Sarkar</h5>
              <h5 className="primary-chip bg-[rgba(241,241,241,1)]">23 comments</h5>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h2 className="flex items-start pt-12 text-4xl font-light md:text-6xl">Wi-R Technology White Paper</h2>
                <p className="text-sm font-light ">
                  Wi-R is a new non-radiative near-field communication technology that uses Electro-Quasistatic (EQS)
                  Fields for communication. The key differentiations that make Wi-R unique are as follows:
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-start pt-12 text-4xl font-light">WNon-radiative Wire-like wireless</h2>
                <p className="text-sm font-light ">
                  {`Traditional electromagnetic (EM) field-based wireless (e.g.,
                  Bluetooth, Wi-Fi, UltraWideBand (UWB)) radiates signals in
                  every direction. For example, Bluetooth signals can be
                  accessed by anyone in a 5-10m radius. Wi-R, on the other hand,
                  confines the signal around the surface, similar to Wired
                  Communication. Hence, Wire-like Wireless or Wi-R. Someone
                  sitting at your next table doesn't even have access to the
                  physical signal, leading to energy efficiency and additional
                  physical security on top of the mathematical security that
                  comes from encryption.`}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-start pt-12 text-4xl font-light">
                  100x more Energy-Efficient than Traditional Wireless
                </h2>
                <p className="text-sm font-light ">
                  {`The use of EQS fields, combined with proprietary techniques developed by Ixana, enable communication at 100x lower energy than Wi-Fi or Bluetooth (~10nJ/b) and over 10X lower energy than UWB (>1nJ/b). The inspiration for Wi-R comes from Wired Communication (e.g., USB-C) where ultra-low energy (~1pJ/b) is commonplace. However, the Personal Area Network (PAN) channels utilizing EM waves, such as Bluetooth, and Wi-Fi do not at all look like broadband channels. The key patented invention enabling Wi-R is to develop a broadband channel for the personal area network, enabling wire-like energy efficiencies.`}
                </p>
              </div>

              <Image
                src="/assets/technology/why-graph.png"
                alt="Wearable Ixana"
                className="flex flex-col basis-[50%] lg:basis-[50%] h-auto "
                width={500}
                height={300}
                priority
              />
              <div className="flex flex-col gap-3">
                <h2 className="flex items-start pt-12 text-4xl font-light">
                  {`Wi-R is your Personal Secure Broadband solving the “last-meter problem” in Body Area Network (BAN)`}
                </h2>
                <p className="text-sm font-light ">
                  {`For Human-Computer Interaction (HCI), and many other applications of augmented humans, there is a need to connect one or many devices on the human to a central hub on the human. Connecting each device with an off-human router individually is extremely energy-inefficient and reduces channel capacity due to co-existence issues among devices on the same human as well as interactions among devices on multiple humans. Moreover, there is a privacy issue as sensitive data can be snooped from up to 10m away. Wi-R solves these problems by creating an EQS-bubble near the surface (<10cm) which is private, and high-speed. Current prototypes work up to 1Mb/s (good enough for music and images) and up to 20 Mbps prototypes (for video) are under development.`}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-start pt-12 text-4xl font-light">
                  How does Wi-R compare with other Near-field communication techniques?
                </h2>
                <p className="text-sm font-light ">
                  {`The prominent near-field communication products available in the market are NFC and NFMI. Near-Field Communication (NFC) is an extremely short-range communication, typically used for payment, etc. Near-Field Magnetic Induction (NFMI) is a longer-range version of NFC and has been commonly used for connecting one earbud to another for relaying audio for synchronous playback in both ears.`}
                </p>
                <p className="text-sm font-light ">
                  {`Both NFC and NFMI use Magneto-Quasistatic (MQS) Fields, creating a magnetic bubble for communication. They circulate current in an inductor or coil to create magnetic fields that are picked up by another coupled inductor or coil nearby. Humans being transparent to magnetic fields does not provide any particular advantage limiting the range to a few cm for NFC and creates high channel loss for longer distances for NFMI. Moreover, the range is similar between the human as well as away from the human. Finally, to obtain low channel loss often these MQS techniques need to use resonance, which leads to narrowband channels and hence low data rates (~600 Kbps in NFMI) and higher energy (~5 nJ/b).`}
                </p>
                <p className="text-sm font-light ">
                  {`Conversely, Wi-R can be thought of as the dual of NFMI, which utilizes tiny amount of EQS fields and benefits from moderate conductivity and high permittivity of a structure to confine signal on the conducting structure, i.e., the signals are present throughout the structure but not away from it. This also leads to the ability to create broadband or wideband channels, leading to high data rates (up to 20 Mbps) and extreme energy efficiency (<0.1 nJ/b).`}
                </p>
                <h2 className="flex items-start pt-12 text-4xl font-light">
                  Wi-R tech specs in comparison to other Wireless
                </h2>
                {/* asdf */}

                <p className="text-sm font-light ">
                  Comparison between different wireless technologies including Wi-R. The numbers for other technologies
                  such as NFMI have been reported from: LINK
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-start pt-12 text-4xl font-light">
                  What does Wi-R enable that is not possible today?
                </h2>
                <p className="text-sm font-light ">
                  {`Wi-R's transformative capabilities enable applications that
                  are limited by designer imagination (and physics). Some of the
                  prominent features are:`}
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <ul className="pl-3">
                  <li className="list-disc">
                    <p>Combine touch, intent and communication in a single seamless action</p>
                  </li>
                  <li className="list-disc">
                    <p>{`Pairing-free smart devices: No more hassle of pairing. It's ready as soon as you put it on`}</p>
                  </li>
                  <li className="list-disc">
                    <p>Touch Selectivity: Transfer contacts with a fist bump</p>
                  </li>
                  <li className="list-disc">
                    <p>Multiple time-synchronized wearables: Imagine up to 25 body motion trackers</p>
                  </li>
                  <li className="list-disc">
                    <p>Ultra-Low-Energy: All-day, real-time, distributed AI</p>
                  </li>
                  <li className="list-disc">
                    <p>High-speed: Stream video from AR headset to Smartphone</p>
                  </li>
                  <li className="list-disc">
                    <p>Physically secure: Additional layer of Security for sensitive data or action</p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Negligible Inter-Human Interference: Increases capacity of communication in a space with multiple
                      humans with each having multiple wearables
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Charging-free Patches: Sensing energy is typically low for many applications. Communication energy
                      and peak power requirements are typically the bottleneck. Wi-R opens the door for long-lasting and
                      even charging-free patches for many low-speed applications by lowering the communication energy by
                      100x
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>Distributed Computing in BAN: Augmenting humans with real-time AI</p>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <h2 className="flex items-start pt-12 text-4xl font-light">
                    Why has similar technology not been used before?
                  </h2>
                  <p className="text-sm font-light ">
                    While there have been BAN and PAN working groups and much research on Human Body Communication,
                    most, if not all, approaches tried to bring traditional wireless radio techniques to solve this
                    problem, limiting the benefits attainable from these approaches. Especially, using radio-like
                    techniques with EQS fields, the channel loss used to be prohibitively high.
                  </p>
                  <p className="text-sm font-light ">
                    Radios were invented to communicate in a vacuum and over the air. However, they are not the most
                    efficient when trying to conduct over a conducting high permittivity structure such as the human
                    body, suffering from RF signal absorption, and heating in some cases.
                  </p>

                  <p className="text-sm font-light ">
                    {`Realizing this unique nature of communication required over a
                  conducting structure with high permittivity and given Dr.
                  Shreyas Sen's unique background in both the Wireless and
                  Wireline IO industry, he and his team brought a fresh take to
                  solving the problem by utilizing EQS fields and creating a
                  wire-like wireless channel that is fundamental to all the
                  achievable benefits.`}
                  </p>
                  <p className="text-sm font-light ">
                    {`The first concept came out in 2016 and the first detailed
                  demonstration of the technology happened in 2019. Ixana is the
                  first and only company to bring this transformative technology
                  to market. We believe, Wi-R is a pivotal moment for BAN and
                  PAN.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-12">
              {["Application", "AI", "Distributed computing", "Wereables", "Augumented reality"].map((item) => (
                <h5 className="primary-chip bg-[rgba(241,241,241,1)]" key={item}>
                  {item}
                </h5>
              ))}
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex items-center w-full gap-3 grow">
                <Image
                  src="/assets/blog/profile.png"
                  className="flex w-16 h-16 rounded-full "
                  alt="Wearable Ixana"
                  width={100}
                  height={100}
                  priority
                />
                <div className="flex grow">
                  <div className="flex flex-col gap-3 max-w-[300px] ">
                    <h2 className="text-2xl ">Shreyas Sen</h2>
                    <span className="text-xs font-light ">
                      Elmore Associate Professor of ECE & BME at Purdue, Founder & CTO of Ixana, MIT TR35, TEDx, GT
                      40U40
                    </span>
                  </div>
                </div>
                <a className="text-sm " href="#">
                  Instagram
                </a>
              </div>
              <div className="flex w-full h-[1px] bg-black  grow"></div>
              <div className="flex flex-col items-start w-full gap-3">
                <h2 className="text-4xl font-light ">Leave a reply</h2>
                <span className="text-xs font-light ">
                  Your email address will not be published. Required fields are marked *
                </span>
                <div className="flex flex-col items-start w-full gap-3 pt-5">
                  <div className="flex w-full gap-5 grow">
                    <div className="flex flex-col gap-1 grow lg:basis-1/2">
                      <span className="pt-5 text-sm">Your email address</span>

                      <input
                        type="text"
                        className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs"
                        placeholder="Your email address"
                      />
                    </div>
                    {/* <div className="flex flex-col gap-1 grow lg:basis-1/2">
                      <span className="pt-5 text-sm">Your email address</span>

                      <input
                        type="text"
                        className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs"
                        placeholder="Your email address"
                      />
                    </div> */}
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <span className="pt-5 text-sm">Your name</span>

                    <input
                      type="text"
                      className="p-1.5 px-4 rounded-full border-[#BFBDBD] border font-light text-xs"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1">
                    <span className="pt-5 text-sm">Your comment</span>

                    <textarea
                      className="p-1.5 px-4 rounded-2xl border-[#BFBDBD] border font-light text-xs"
                      placeholder="Your comment"
                      rows={10}
                    />
                  </div>
                </div>

                <button className="px-2 ml-auto text-xs Pbutton">Post comment</button>
              </div>
              <div className="flex w-full h-[1px] bg-black  grow"></div>
              <div className="flex flex-col items-start gap-12">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h5 className="text-xs font-bold ">Jenny Wiliams</h5>
                    <span className="text-xs font-light ">3h</span>
                  </div>
                  <span className="text-xs ">neuralink.com</span>
                  <p className="text-xs font-light ">
                    We are happy to announce that we’ve received approval from the reviewing independent institutional
                    review board and our first hospital site to begin recruitment for our first-in-human clinical trial.
                    The PRIME Study (short for Precise Robotically Implanted Brain-Computer Interface) – a
                    groundbreaking investigational medical device trial for our fully-implantable, wireless
                    brain-computer interface (BCI) – aims to evaluate the safety of our implant (N1) and surgical robot
                    (R1) and assess the initial functionality of our BCI for enabling people with paralysis to control
                    external devices with their thoughts.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h5 className="text-xs font-bold ">Jenny Wiliams</h5>
                    <span className="text-xs font-light ">3h</span>
                  </div>
                  <span className="text-xs ">neuralink.com</span>
                  <p className="text-xs font-light ">
                    We are happy to announce that we’ve received approval from the reviewing independent institutional
                    review board and our first hospital site to begin recruitment for our first-in-human clinical trial.
                    The PRIME Study (short for Precise Robotically Implanted Brain-Computer Interface) – a
                    groundbreaking investigational medical device trial for our fully-implantable, wireless
                    brain-computer interface (BCI) – aims to evaluate the safety of our implant (N1) and surgical robot
                    (R1) and assess the initial functionality of our BCI for enabling people with paralysis to control
                    external devices with their thoughts.
                  </p>
                </div>
                <Pbutton
                  text="Read More"
                  wrapperClass=" bg-white text-black"
                  icon={
                    <div className="flex transform rotate-[135deg] ">
                      <ToprightArrow />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PFooter />
    </main>
  );
}
