import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function JoinUsVacanciesWhyUse() {
  const applications = [
    {
      title: "Distributed Wearable AI",
      location: "United Arab emirates",
    },
    {
      title: "All-day AR Headset",
      location: "United Arab emirates",
    },
    {
      title: "5G Relayed Wearables",
      location: "United Arab emirates",
    },
    {
      title: "Pairing-free Electronics",
      location: "United Arab emirates",
    },
    {
      title: "Charging-free Trackers",
      location: "United Arab emirates",
    },
    {
      title: "Communicate With Touch",
      location: "United Arab emirates",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-[70vh] ">
      <div className="  flex  flex-col w-full lg:w-[calc(100%-6rem)] grow bg-contain bg-no-repeat lg:ml-24 bg-left-top py-12 gap-14 relative overflow-hidden md:px-12 justify-center">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="flex text-4xl ">In search for productive and healthy work life?</h2>
          <span className="text-xs font-light ">
            Ixana is a wearable hardware company aimed at developing high-bandwidth human-computer interfaces
          </span>
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-5 md:flex-row">
          {applications.map((application) => (
            <div
              key={application.title}
              className="flex flex-col gap-3 p-5 py-7 basis-[calc(40%-3rem)] items-start border rounded-2xl border-solid border-[rgba(210,210,218,1)]"
            >
              <span className="flex items-center gap-1.5 text-md">
                <h2 className="font-bold ">{application.title}</h2>
              </span>
              <div className=" flex gap-1.5 md:max-w-[300px] items-center">
                <Image src="/assets/location.png" alt="Search Button" width={15} height={20} priority />
                <span className="text-xs font-light">{application.location}</span>
              </div>
              <div className="flex w-full bg-[rgba(210,210,218,1)] h-[1px]"></div>
              <div className="flex items-center justify-between w-full gap-3 grow text-[rgba(210,210,218,1)]">
                <span className="flex text-xs font-light">3 days ago</span>
                <button className="primary-chip bg-[#262727] text-white">Apply now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
