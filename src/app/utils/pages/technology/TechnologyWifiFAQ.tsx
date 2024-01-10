import { Collapse, CollapseProps } from "antd";

export default function TechnologyWifiFAQ() {
  const text =
    "Wireless such as Bluetooth/Wi-Fi radiates signals in every direction making it inefficient. Wi-R does not radiate. Signal is confined in a bubble around the surface making it efficient like a wire.";

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "What is non-radiative  wireless?",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Does it need to touch for Wi-R communication? If my phone/laptop is on the table, will it work?",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Can I use Wi-R for authentication on touch?",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "How did you solve a problem incumbents couldn't?",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "How defensible is the Wi-R tech?",
      children: <p>{text}</p>,
    },
    {
      key: "6",
      label: "What are the competing techs to Wi-R?",
      children: <p>{text}</p>,
    },
    {
      key: "7",
      label: "What can Wi-R do that Bluetooth can’t?",
      children: <p>{text}</p>,
    },
    {
      key: "8",
      label: "How can I get datasheets for the chip or the Evaluation Kits?",
      children: <p>{text}</p>,
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
