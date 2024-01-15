import Image from "next/image";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";
import Link from "next/link";

export default function ApplicationsWhitePaperSection() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-col items-center justify-between w-full gap-12 py-5 md:flex-row grow">
          <div className="flex basis-[50%] lg:basis-[50%] justify-start">
            <Image
              src="/assets/technology/body-wearable-headset.png"
              alt="Wearable Ixana"
              className="flex  max-h-[500px] w-auto "
              width={300}
              height={300}
              priority
            />
          </div>
          <div className="flex flex-col items-start basis-[50%] lg:basis-[60%] justify-center gap-3">
            <h2 className="text-4xl font-light ">Wi-R Technology White Paper</h2>
            <p className="text-xs font-light max-w-[400px]">
              Wi-R is a new non-radiative near-field communication technology that uses Electro-Quasistatic (EQS) Fields
              for communication. The key differentiations that make Wi-R unique are as follows:
            </p>
            <Link href="/blog/123">
              <Pbutton text="Learn more" icon={<ToprightArrow />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
