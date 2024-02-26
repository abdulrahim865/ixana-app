import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";

export default function Home() {
  const content = [
    {
      title: "Information We Collect:",
      list: [
        "Personal Information: We may collect personal information such as names, contact details, and other identifiers when provided by users voluntarily.",
      ],
    },
    {
      title: "How We Use Your Information:",
      list: [
        "Product Improvement: Collected data may be used to enhance and personalize our products and services, providing a better user experience.",
        "Communication: We may use your contact information to send important updates, newsletters, or respond to inquiries.",
        "Analytics: We gather non-personal information for analytical purposes, helping us understand how users interact with our technology.",
      ],
    },
    {
      title: "Data Security:",
      list: [
        "We employ industry-standard security measures to protect your information from unauthorized access, disclosure, or alteration.",
        "Your data is stored on secure servers, and access is restricted to authorized personnel only.",
      ],
    },
    {
      title: "Third-Party Disclosure:",
      list: [
        "We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your explicit consent.",
        "Trusted third-party service providers may assist in delivering our products or services, and they are obligated to maintain the confidentiality of your information.",
      ],
    },
    {
      title: "Cookies and Tracking Technologies:",
      list: [
        "Our website may use cookies to enhance user experience and collect information about website usage. You have the option to disable cookies in your browser settings.",
      ],
    },
    {
      title: "Your Rights:",
      list: [
        "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at contact@ixana.com.",
        "You may opt-out of receiving promotional communications from us by following the instructions in our emails.",
      ],
    },
    {
      title: "Changes to the Privacy Policy:",
      list: [
        "We reserve the right to update our Privacy Policy. Any changes will be posted on this page, and the effective date will be updated accordingly.",
      ],
    },
    {
      title: "Contact Us:",
      list: [
        "If you have any questions or concerns regarding our Privacy Policy, please contact us at contact@ixana.com.",
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />

      <div className="container mx-auto pt-14 md:pt-28">
        <div className="flex justify-center">
          <div className="flex flex-col w-full lg:max-w-xl gap-10 py-10 px-5 privacy-policy-wrapper">
            <div>
              <h1>Privacy Policy</h1>
              <p>
                Thank you for choosing Ixana. This Privacy Policy outlines how we collect, use, and safeguard your
                personal information when you use our products, services, or visit our website.
              </p>
            </div>
            {content.map(({ title, list }, index) => (
              <div key={index}>
                <h3>{title}</h3>
                <ul>
                  {list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p>{`By using Ixana's products or services, you agree to the terms outlined in this Privacy Policy.`}</p>
            </div>
          </div>
        </div>
      </div>

      <PFooter />
    </main>
  );
}
