import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Script from "next/script";
import dynamic from "next/dynamic";

const AspektaVF = localFont({
  src: [
    {
      path: "./utils/fonts/AspektaVF.woff2",
      weight: "200",
      style: "light",
    },
    {
      path: "./utils/fonts/AspektaVF.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./utils/fonts/AspektaVF.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./utils/fonts/AspektaVF.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: null,
  title: "Ixana: High-speed Human Computer Interaction",
  description: "Augmenting humans with all-day, real-time, distributed AI on what you see,hear and sense",
  keywords:
    "Augmented Reality, Virtual Reality, Metaverse, AI, Artificial Intelligence, Low Power Wireless, IoT, Semiconductor, Communication, Wireless",
  robots: "index, follow",
  openGraph: {
    url: "https://ixana.ai",
    type: "website",
    title: "Ixana: High-speed Human Computer Interaction",
    description: "Augmenting humans with all-day, real-time, distributed AI on what you see,hear and sense",
    images: ["https://ixana-blog.s3.us-east-1.amazonaws.com/2024/02/ixana-front-med.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ixana: High-speed Human Computer Interaction",
    description: "Augmenting humans with all-day, real-time, distributed AI on what you see,hear and sense",
    images: ["https://ixana-blog.s3.us-east-1.amazonaws.com/2024/02/ixana-front-med.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const CrispWithNoSSR = dynamic(() => import("./utils/components/CrispChat"));
  return (
    <html lang="en">
      {/* External Scripts */}
      <Script type="text/javascript" src="https://www.clarity.ms/s/0.7.20/clarity.js" async />
      <Script type="text/javascript" src="https://app.posthog.com/static/array.js" async />
      <Script type="text/javascript" src="https://www.clarity.ms/tag/ermnjbk1lg" async />
      <Script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=G-KX71MVT6XV" async />
      <Script type="text/javascript" src="https://web3forms.com/client/script.js" async />
      <CrispWithNoSSR />
      <body className={AspektaVF.className}>{children}</body>
    </html>
  );
}
