import { Collapse, CollapseProps } from "antd";

export default function TechnologyWifiFAQ() {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "What is non-radiative wireless?",
      children: (
        <p>{`Wireless such as Bluetooth/Wi-Fi radiates signals in every direction making it inefficient. Wi-R(tm) does not radiate. Signal is confined in a bubble around the e-field surface making it as efficient as wired connectivity.`}</p>
      ),
    },
    {
      key: "2",
      label: "Is skin contact required for Wi-R communication? If my phone/laptop is on the table, will it work?",
      children: (
        <p>{`Devices or phones don't need to be in contact with the wearer but they need to be not more than a few centimeters away.  `}</p>
      ),
    },
    {
      key: "3",
      label: "Can I use Wi-R for authentication on touch?",
      children: (
        <p>{`Yes, you can. Infact, seamless authentication might be one of the first usecases that our partners bring to market.`}</p>
      ),
    },
    {
      key: "4",
      label: "How did you solve a problem incumbents couldn't?",
      children: (
        <p>{`Our information processing architecture is very different from what AR headsets have typically pursued. Few even believed a 100X improvement in energy efficiency is possible until we demonstrated it. Multiple major discoveries, exploiting novel physics enabled the 100X advantage.`}</p>
      ),
    },
    {
      key: "5",
      label: "How defensible is the Wi-R tech?",
      children: (
        <p>{`Ixana technology has been in development for nearly 10 years.  The innovations are protected by a portfolio of granted and pending patent applications and years of know-how.`}</p>
      ),
    },
    {
      key: "6",
      label: "What are the competing techs to Wi-R?",
      children: (
        <p>{`Wi-Fi, Cellular, NFC and BTLE are the commonly used connectivity standards used today.  Wi-R(tm) offers an the most advanced and optimized option for Body-Worn Computing connectivity. `}</p>
      ),
    },
    {
      key: "7",
      label: "What can Wi-R do that Bluetooth can't?",
      children: (
        <div className="pl-10">
          <ul className="list-disc leading-6">
            <li>
              {`Wi-R can transmit 10X higher data rate than Bluetooth (up to 30Mbps demonstrated). This is important to
              transfer video and multi-sensor data.`}
            </li>
            <li>
              {`Wi-R can be battery-free without severe duty cycling. There are charging-free Bluetooth tags
              available(Wiliot, Atmosic). However, they achieve it by severely reducing the data rate(<1kbps). Even
              in the charging-free regime (10uW power consumption), Wi-R can enable ~10-100kbps data rate. This is
              important for continuous monitoring of health data e.g. ECG waveform and motion capture data.`}
            </li>
            <li>
              {`Wi-R can transmit data by touch. Bluetooth can't select a device based on touch. This would be important
              for public screens that behave differently based on who is touching them. In the future, this would also
              be used for payments, replacing/augmenting NFC.`}
            </li>
            <li>
              {`One-to-many connections: This year, our firmware would be able to support one-to-25 device connections.
              Bluetooth is limited to 8, and that too with a lot of limitations and interference.`}
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "8",
      label: "How can I get datasheets for the chip or the Evaluation Kits?",
      children: <p>{`Contact us at support@ixana.ai.com or with the chatbot below`}</p>,
    },
  ];

  return (
    <div className="flex min-h-[80vh] w-full flex-col  items-center container justify-center py-12">
      <div id="faqs" className="flex flex-col w-full gap-12 lg:flex-row">
        <h2 className="flex text-4xl font-light max-w-[800px] text-center">Wi-R technology question answered.</h2>
        <div className="flex flex-col items-center justify-between w-full gap-12 py-5 md:flex-row grow">
          <Collapse className="w-full " items={items} defaultActiveKey={["1"]} expandIconPosition="end" />
        </div>
      </div>
    </div>
  );
}
