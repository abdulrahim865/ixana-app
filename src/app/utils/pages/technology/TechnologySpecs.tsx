import Image from "next/image";

const ArrowUp = ({ style = "" }: { style: string }) => {
  return (
    <div className={`flex p-1 transform ${style}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 36 31" fill="none">
        <path d="M18.1758 30.2469L35.4963 0.246885H0.855273L18.1758 30.2469Z" fill="#FF6320" />
      </svg>
    </div>
  );
};
export default function TechnologySpecs() {
  const features = [
    {
      name: "ENERGY",
      desc: "100x",
      up: false,
      feat: ["Charging-free wearables", "Real-time dashboard of health"],
    },
    {
      name: "DATA RATE",
      desc: "10x",
      up: true,
      feat: ["Multiple wearables on-body", "All-day AR smartglass"],
    },
    {
      name: "LATENCY",
      desc: "10x",
      up: false,
      feat: ["Offload compute from wearables to phone"],
    },
    {
      name: "SECURITY",
      desc: "Physically secure",
      feat: ["Touch to securely pay, unlock doors, systems"],
    },
  ];
  return (
    <div>
      <div className="flex min-h-[80vh] w-full flex-col  container justify-center py-12 mb-24 gap-12 border border-ibtnorange rounded-3xl px-6 md:px-24">
        <h2 className="text-2xl font-light text-center md:text-left ">
          Wi-R Enables 100x Better, <br /> Previously Unimaginable Experiences
        </h2>

        <div className="flex flex-col">
          {features.map((feature, index) => (
            <div key={feature.name} className="flex flex-col">
              <div className="flex flex-col items-center gap-3 py-5 md:gap-12 md:flex-row grow">
                <h2 className="text-xl font-light md:basis-[200px] ">{feature.name}</h2>
                <div className="flex items-end grow text-ibtnorange ">
                  <span className="text-5xl font-medium text-center md:text-left">{feature.desc}</span>
                  {feature.up !== undefined && <ArrowUp style={`${feature.up == true ? "rotate-180" : ""} `} />}
                </div>
                <ul className="basis-2/5">
                  {feature.feat.map((item) => (
                    <li
                      key={item}
                      className={`text-sm font-light  list-item ${feature.feat.length > 1 ? "list-disc" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {index !== features.length - 1 && (
                <div className="flex w-full border-b border-[rgba(212,211,210,1)]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl md:text-3xl font-light text max-w-[650px] py-24 text-center">
          Traditional wireless signal&nbsp;
          <span className=" text-itextgrey">
            is available everywhere within a radius. Near-field communications simply reduce the radius. Such direction
            agnostic transmission is inherently inefficient. Designed for communications between wearables, Wi-R behaves
            as a wire by confining the signal in a bubble around you. This allows Wi-R to offer superior robustness,
            efficiency and touch selectivity.
          </span>
        </h1>
      </div>
    </div>
  );
}
