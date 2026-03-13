import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitaliy | Tech Leader & LGBTQ+ Innovation Pioneer",
  description: "Meet Vitaliy, one of tech's most influential leaders driving inclusive innovation. 500+ team members led, $2.5B+ revenue generated, 30+ startups invested.",
  keywords: "tech leader, LGBTQ+ tech, inclusive leadership, tech innovation, startup mentor, enterprise transformation, diversity in tech",
  metadataBase: new URL("https://vitaliy.tech"),
  alternates: {
    canonical: "https://vitaliy.tech",
  },
  openGraph: {
    title: "Vitaliy | Tech Leader & LGBTQ+ Innovation Pioneer",
    description: "Pioneering inclusive tech leadership. Enterprise transformation. Startup mentor. LGBTQ+ advocate reshaping tech culture.",
    url: "https://vitaliy.tech",
    siteName: "Vitaliy",
    type: "website",
    images: [
      {
        url: "https://vitaliy.tech/og-image.jpg",
        alt: "Vitaliy - Tech Leader and LGBTQ+ Innovation Pioneer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitaliy | Tech Leader & LGBTQ+ Innovation Pioneer",
    description: "Driving inclusive innovation across enterprise tech, startups, and LGBTQ+ communities.",
    images: ["https://vitaliy.tech/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}