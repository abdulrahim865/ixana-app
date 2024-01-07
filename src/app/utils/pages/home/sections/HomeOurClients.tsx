import { Pbutton, ToprightArrow } from "@/app/utils/components/Pbutton";
import Image from "next/image";

export default function HomeOurClients() {
  const testimonials = [
    {
      icon: "google.png",
      name: "Google",
      role: "Director of Innovation and Technology",
      content: `"In the healthcare sector, precision and reliability are paramount. Ixana's Wi-R has transformed the way we communicate between medical devices, ensuring real-time data transfer without interference. A game-changer in patient-centric connectivity."`,
    },
    {
      icon: "ibm.png",
      name: "IBM",
      role: "Director of IT Solutions",
      content: `"Our collaboration with Ixana has not only enhanced our internal communication but has also set new standards for reliability. The touch selectivity feature ensures precise interactions, empowering our teams to work seamlessly across departments. Ixana's commitment to innovation aligns perfectly with our vision for the future of technology."`,
    },
    {
      icon: "sony.png",
      name: "Google",
      role: "Head of Product Development",
      content: `"Efficient data transfer is critical for our business operations. Ixana's Wi-R technology has proven to be a reliable solution, overcoming the limitations of traditional wireless communication. We highly recommend Ixana for businesses seeking enhanced connectivity."`,
    },
  ];
  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center my-12  px-12 lg:px-0">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <h2 className="flex text-4xl font-light max-w-[800px] text-center">
            Our clients
          </h2>
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {testimonials.map((item) => (
            <div
              className="flex flex-col items-center gap-5 basis-1/3"
              key={item.name}
            >
              <Image
                src={`/assets/home/${item.icon}`}
                alt="Booth Button"
                width={62}
                height={62}
                priority
              />
              <div className="flex flex-col items-start gap-3 p-10 border border-solid border-[rgba(204, 204, 204, 1)] rounded-2xl ">
                <h3 className="text-xl font-light ">{item.name}</h3>
                <span className="text-sm font-light ">{item.role}</span>
                <span className="text-sm font-light ">{item.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
