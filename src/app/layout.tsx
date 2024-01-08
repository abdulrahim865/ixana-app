import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

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
  title: "Ixana",
  description:
    "Augmenting humans with all-day, real-time, distributed AI on what you see,hear and sense",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={AspektaVF.className}>{children}</body>
    </html>
  );
}
