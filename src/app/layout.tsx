import type { Metadata, Viewport } from "next";
import { Inclusive_Sans, Stack_Sans_Text } from "next/font/google";
import { preload } from "react-dom";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const display = Stack_Sans_Text({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display",
  display: "swap",
});

const ui = Inclusive_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abhay Villa — Modular & Tiny Home Builder",
    template: "%s — Abhay Villa",
  },
  description:
    "Thoughtfully designed modular and tiny homes built around your lifestyle.",
  applicationName: "Abhay Villa",
  openGraph: {
    title: "Abhay Villa — Modular & Tiny Home Builder",
    description:
      "Thoughtfully designed modular and tiny homes built around your lifestyle.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Abhay Villa — Modular & Tiny Home Builder",
    description:
      "Thoughtfully designed modular and tiny homes built around your lifestyle.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  preload("/frames/00-start.jpg", { as: "image" });

  return (
    <html
      lang="en"
      className={`${display.variable} ${ui.variable} h-full antialiased`}
    >
      <body className={`${ui.className} min-h-full bg-white text-black`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
