import Link from "next/link";
import { Pbutton, ToprightArrow } from "../../components/Pbutton";
import Image from "next/image";

export default function AboutUsExperience() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col  container items-center justify-center py-12">
      <div className="flex flex-col w-full gap-12 lg:flex-row">
        <div className="flex lg:items-center lg:justify-center basis-1/2">
          <Image src={"/assets/aboutus/7years.png"} width={600} height={300} alt="Image" />
        </div>
        <div className="flex flex-col items-start gap-5 basis-1/2 pt-5">
          <h2 className="flex text-4xl font-light lg:max-w-[350px] ">7 years of Research and Development</h2>
          <p className="text-xs font-light ">
            We are often glued to our smartphones. Yet, we mostly interact with the smartphone &quot;computer&quot; by
            looking at a tiny 6-inch screen. The speed of today&apos;s human-computer interaction (HCI) is slow, similar
            to modems of the early 90s. This has bothered Ixana&apos;s co-founders for more than a decade. They have
            worked independently as well as together to make HCI faster, more effective, and more efficient.
          </p>
          <p className="text-xs font-light ">
            The what and why of faster HCI have been clear for years. Faster modems led to Web1.0, fast cellular data
            led to Web 2.0. Faster HCI would herald new markets. But, how to significantly speed up human-computer
            interfaces eluded us until recently. Ixana&apos;s founder and CTO, Shreyas had the insight that distributed
            computing could transform HCI and high communication energy is the bottleneck to it. Realizing this, Shreyas
            and his research team invented Wi-R, an orders of magnitude energy-efficient and secure communication with
            transformative impact on HCI. Building on the insight and the inventions, the team at Ixana has already made
            significant strides towards making faster, more efficient HCI a reality.
          </p>
          <Link href="/join-us">
            <Pbutton text="Join us" icon={<ToprightArrow />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
