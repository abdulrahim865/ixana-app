import Image from "next/image";

export default function AboutUsPeople() {
  const peoples = [
    {
      id: 1,
      image: "/assets/aboutus/angik.png",
      name: "Angik Sarkar",
      position: "CEO",
      linkX: "https://twitter.com/kyunbit",
      linkLinkedIn: "https://www.linkedin.com/in/angiksarkar/",
    },
    {
      id: 2,
      image: "/assets/aboutus/shreyas.png",
      name: "Shreyas Sen",
      position: "CTO",
      linkX: "",
      linkLinkedIn: "https://www.linkedin.com/in/shreyassen/",
    },
    {
      id: 3,
      image: "/assets/aboutus/shovan.png",
      name: "Shovan Maity",
      position: "Head of Research",
      linkX: "",
      linkLinkedIn: "https://www.linkedin.com/in/shovan-maity-b4121a48/",
    },
  ];
  return (
    <div className="flex min-h-[80vh] w-full flex-col gap-12  container justify-center">
      <div className="flex items-center w-full gap-5">
        <h2 className="flex text-4xl font-light ">Ixana team.</h2>
        <div className="flex h-[1px] bg-black grow"></div>
      </div>
      <div className="flex flex-col justify-between w-full gap-12 md:flex-row">
        {peoples.map((item) => (
          <div key={item.id} className="flex flex-col gap-5">
            <Image
              src={item.image}
              alt={item.name}
              className=" w-full max-h-full lg:max-w-[100%]"
              width={300}
              height={300}
              priority
            />
            <div className="flex items-center justify-between p-3 border-b border-black border-solid">
              <h3>{item.name}</h3>
              <span className="text-xs text-itextgrey ">{item.position}</span>
            </div>
            <div className="flex items-center gap-3 ">
              {item.linkX && (
                <a
                  href={item.linkX}
                  className="text-sm font-light text-black border-b-2 border-black border-solid "
                  target="_blank"
                >
                  X
                </a>
              )}
              <a
                href={item.linkLinkedIn}
                className="text-sm font-light text-black border-b-2 border-black border-solid "
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
