import Image from "next/image";

export default function AboutUsPeople() {
  const peoples = [
    {
      id: 1,
      image: "/assets/aboutus/people.png",
      name: "Ankit Sarkar",
    },
    {
      id: 2,
      image: "/assets/aboutus/people.png",
      name: "Ankit Sarkar",
    },
    {
      id: 3,
      image: "/assets/aboutus/people.png",
      name: "Ankit Sarkar",
    },
  ];
  return (
    <div className="flex min-h-[80vh] w-full flex-col  container justify-center">
      <div className="flex items-center w-full gap-5">
        <h2 className="flex text-4xl font-light ">Ixana team.</h2>
        <div className="flex h-[1px] bg-black grow"></div>
      </div>
      <div className="flex justify-between w-full gap-12">
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
              <h3>Angik Sarkar</h3>
              <span className="text-xs text-itextgrey ">CEO</span>
            </div>
            <div className="flex items-center gap-3 ">
              <a
                href=""
                className="text-sm font-light text-black border-b-2 border-black border-solid "
              >
                X
              </a>
              <a
                href=""
                className="text-sm font-light text-black border-b-2 border-black border-solid "
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
