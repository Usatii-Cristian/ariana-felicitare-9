import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { couple, milestoneLabel } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${milestoneLabel} — ${couple.partnerA} & ${couple.partnerB}`,
  description: `O felicitare digitală pentru ${milestoneLabel.toLowerCase()}, ${couple.partnerA} & ${couple.partnerB}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
