import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const arialNova = localFont({
  src: [
    {
      path: "./fonts/arial-nova/Arial-Nova-W07-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/arial-nova/Arial-Nova-W07-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/arial-nova/Arial-Nova-W07-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/arial-nova/Arial-Nova-Bold-Italic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-arial-nova",
  display: "swap",
  fallback: ["Arial", "Helvetica Neue", "Helvetica", "ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

const industry = localFont({
  src: [
    { path: "./fonts/industry/Industry-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/industry/Industry-LightItalic.woff", weight: "300", style: "italic" },
    { path: "./fonts/industry/Industry-Book.woff", weight: "400", style: "normal" },
    { path: "./fonts/industry/Industry-BookItalic.woff", weight: "400", style: "italic" },
    { path: "./fonts/industry/Industry-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/industry/Industry-MediumItalic.woff", weight: "500", style: "italic" },
    { path: "./fonts/industry/Industry-Demi.woff", weight: "600", style: "normal" },
    { path: "./fonts/industry/Industry-DemiItalic.woff", weight: "600", style: "italic" },
    { path: "./fonts/industry/Industry-Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/industry/Industry-BoldItalic.woff", weight: "700", style: "italic" },
    { path: "./fonts/industry/Industry-Black.woff", weight: "900", style: "normal" },
    { path: "./fonts/industry/Industry-BlackItalic.woff", weight: "900", style: "italic" },
  ],
  variable: "--font-industry",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

const microgramma = localFont({
  src: [
    {
      path: "./fonts/microgramma/Microgramma-W04-Medium-Extended.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/microgramma/Microgramma-W04-Bold-Extended.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-microgramma",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evocoreconcrete.com"),
  title: {
    default: "EVOCORE CONCRETE | Built Strong. Built to Last.",
    template: "%s | EVOCORE CONCRETE",
  },
  description:
    "Denver concrete contractors for driveways, patios, sidewalks, repair, and fencing. Quality work, honest service, licensed and insured.",
  openGraph: {
    title: "EVOCORE CONCRETE",
    description:
      "Quality concrete work across Denver, Colorado. Licensed & insured. Direct communication — no middlemen.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${arialNova.variable} ${industry.variable} ${microgramma.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
