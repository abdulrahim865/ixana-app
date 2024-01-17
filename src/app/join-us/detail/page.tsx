import Image from "next/image";
import { PFooter } from "../../utils/components/PFooter";
import { PNavBar } from "../../utils/components/PNavBar";
import JoinUsTopHeader from "../../utils/pages/join-us/JoinUsTopHeader";
import Link from "next/link";
import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";

export default function JoinUsPage() {
  const jobs = [
    {
      name: "Industry",
      desc: "Hardware",
    },
    {
      name: "Work experience",
      desc: "1-3 years",
    },
    {
      name: "State/Counrty",
      desc: "Indiana, US",
    },
    {
      name: "City",
      desc: "West Lafayette",
    },
  ];
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      <JoinUsTopHeader
        title="Hardware Engineer, PCB Design"
        description="West Lafayette, United States | Posted on 11/01/2022"
      />
      <div className="flex flex-col gap-12 px-12 pb-24 md:px-24 grow md:flex-row">
        <div className="flex flex-col grow">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="flex items-start pt-12 text-2xl font-light">About us</h2>
              <p className="text-sm font-light ">
                Ixana is a wearable hardware company aimed at developing high-bandwidth human-computer interfaces
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="flex items-start pt-12 text-2xl font-light">Job descriprion</h2>
              <p className="text-sm font-light ">
                Ixana is a Purdue University spin-off, developing breakthrough high-speed human computer interface. We
                have assembled a team of leading experts in the field of IC/system design with an appetite for taking on
                the next big thing. Come join us in the journey of transforming the future. <br />
                We are seeking a Hardware Design Engineer to join the team. In this role, you will be responsible for
                primarily designing and testing Printed Circuit Boards using our Custom ICs as well as commercially
                available components.This position is for those either based in or frequently commuting to our office in
                West Lafayette, Indiana.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="flex items-start pt-12 text-2xl font-light">Required Qualifications:</h2>
              <p className="text-sm font-light ">
                <ul className="pl-3">
                  <li className="list-disc">
                    <p>
                      Bachelor's degree in Electrical Engineering with a focus on Circuit Design, or equivalent
                      practical experience
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>2 years of experience designing circuit solutions for consumer electronics</p>
                  </li>
                  <li className="list-disc">
                    <p>Experience with board design, board bring-up, firmware development</p>
                  </li>
                  <li className="list-disc">
                    <p>Hands-on experience with package PCB Housing/ Package design is a plus</p>
                  </li>
                </ul>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="flex items-start pt-12 text-2xl font-light">Preferred Qualifications:</h2>
              <p className="text-sm font-light ">
                <ul className="pl-3">
                  <li className="list-disc">
                    <p>
                      Bachelor's degree in Electrical Engineering with a focus on Circuit Design, or equivalent
                      practical experience
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>2 years of experience designing circuit solutions for consumer electronics</p>
                  </li>
                  <li className="list-disc">
                    <p>Experience with board design, board bring-up, firmware development</p>
                  </li>
                  <li className="list-disc">
                    <p>Hands-on experience with package PCB Housing/ Package design is a plus</p>
                  </li>
                </ul>
              </p>
            </div>

            <Link href="/contact">
              <Pbutton text="Apply now" icon={<ToprightArrow />} />
            </Link>
          </div>
        </div>
        <div className=" bg-[rgba(102,102,102,0.5)] w-[1px] hidden md:flex"></div>
        <div className="flex flex-col gap-5 md:px-24 ">
          <h2 className="text-2xl font-light md:text-center ">Job information</h2>
          <div className="flex flex-col justify-center gap-3 md:items-center">
            {jobs.map((job) => (
              <div
                key={job.name}
                className="flex flex-col p-5 border border-ibtnorange border-solid rounded-2xl grow items-center min-w-[180px]"
              >
                <h5 className="font-light text-md">{job.name}</h5>
                <span className="font-light text-md">{job.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PFooter />
    </main>
  );
}
