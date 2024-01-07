import Image from "next/image";

export default function AboutUsOurSupporters() {
  const peoples = [
    {
      id: 1,
      image: "/assets/aboutus/support/hack_vc.png",
      name: "Aniket Sharma",
    },
    {
      id: 2,
      image: "/assets/aboutus/support/samsung_next.png",
      name: "Aniket Sharma",
    },
    {
      id: 3,
      image: "/assets/aboutus/support/uncorrelated.png",
      name: "Aniket Sharma",
    },

    {
      id: 4,
      image: "/assets/aboutus/support/evonexus.png",
      name: "Aniket Sharma",
    },
  ];
  return (
    <div className="flex flex-col justify-center w-full ">
      <h2 className="flex text-4xl font-light ">
        Early supporters we are grateful to
      </h2>

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
          </div>
        ))}
      </div>
    </div>
  );
}
