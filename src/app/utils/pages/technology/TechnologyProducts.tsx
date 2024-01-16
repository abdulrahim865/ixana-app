import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";
import Link from "next/link";

export const TechnologyProducts = () => {
  const products = [
    {
      name: "Wi-R Chip",
      href: "/products",
      image: "chip.png",
      desc: "YR22 (4Mbit/s)",
      spec: [
        {
          icon: "location.svg",
          text: "2mm x 2mm die",
        },
        {
          icon: "extra.svg",
          text: "Ships worldwide",
        },
      ],
      content: "If you want to integrate Wi-R on a large scale",
    },
    {
      name: "Wi-R Module",
      href: "/products",
      image: "board.png",
      desc: "YR22 (4Mbit/s) based",
      spec: [
        {
          icon: "location.svg",
          text: "1.5cm x 2cm",
        },
        {
          icon: "extra.svg",
          text: "Ships worldwide",
        },
      ],
      content: "If you want to make small volume Wi-R products",
    },
    {
      name: "YR21 Evaluation Kit",
      href: "/products",
      image: "headset.png",
      desc: "Test YR22 (4Mbit/s) Wi-R",
      spec: [
        {
          icon: "location.svg",
          text: "Wi-R USB-C Smartphone Plugin",
        },
        {
          icon: "extra.svg",
          text: "Ships worldwide",
        },
      ],
      content: "If you want to test the performance and utility of Wi-R",
    },
  ];
  return (
    <div
      className="relative container flex w-full min-h-[60vh] text-black bg-contain bg-no-repeat py-12 justify-center rounded-t-3xl  px-12 lg:px-0 mb-12"
      style={{
        background:
          "url(/assets/technology/product-bg-1.svg) no-repeat left bottom, url(/assets/technology/product-bg-2.svg) no-repeat top right, linear-gradient(180deg, #E4E5E7 -45.62%, #FFF 100%)",
        backgroundSize: "500px, 500px",
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <h2 className="flex text-4xl text-center max-w-[500px] ">Explore Our Cutting-Edge Product Lineup</h2>
        <span className="text-md text-itextgrey max-w-[500px] text-center">
          Ixana’s products solve the problems of power, data rate, and link robustness that limit today’s wearables
        </span>

        <div className="primary-chip bg-[#262727] text-white py-2">Learn more</div>

        <div className="flex flex-col gap-3 mt-9 md:flex-row">
          {products.map((product) => (
            <Link href={product.href} key={product.name} className="flex flex-col items-center gap-5">
              <Image
                src={`/assets/technology/products/${product.image}`}
                className="flex h-[150px] w-auto"
                alt="Headset"
                width={200}
                height={200}
                priority
              />
              <h3 className="text-xl text-center">Wi-R Evaluation Board</h3>
              <span className="text-sm ">YR11 (1Mbit/s) based</span>
              <div className="flex flex-col">
                {product.spec.map((spec) => (
                  <span key={spec.text} className="text-xs flex items-center gap-3 text=[rgba(0, 0, 0, 0.67)]">
                    <Image src={`/assets/home/icons/${spec.icon}`} alt={spec.text} width={20} height={20} priority />
                    {spec.text}
                  </span>
                ))}
              </div>
              <Pbutton text="Find out more" icon={<ToprightArrow />} />
              <span className="text-sm max-w-[230px] text-center ">{product.content}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
