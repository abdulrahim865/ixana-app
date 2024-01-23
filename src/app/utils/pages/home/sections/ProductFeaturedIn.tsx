import Image from "next/image";

export default function ProductFeaturedIn() {
  const features = [
    {
      icon: "city-paper.svg",
    },
    {
      icon: "wall-street.svg",
    },
    {
      icon: "google.svg",
    },
    {
      icon: "washington-post.svg",
    },
  ];
  return (
    <div className="  flex  flex-col w-full min-h-[50vh] grow justify-center items-center">
      <div className="flex flex-col items-center gap-12 px-12 py-20 ">
        <h2 className="text-3xl font-light text-center ">Featured in</h2>
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          {features.map((item) => (
            <div
              key={item.icon}
              className="flex flex-col items-center gap-5 p-10 border border-solid border-[#D4D3D2] rounded-2xl min-w-[300px] "
            >
              <Image
                src={`/assets/home/news/${item.icon}`}
                alt="Clients"
                className="h-12 "
                width={100}
                height={33}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
