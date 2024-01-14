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
      children: <p>{``}</p>,
    },
    {
      key: "4",
      label: "How did you solve a problem incumbents couldn't?",
      children: <p>{``}</p>,
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
      children: <p>{`100x`}</p>,
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
