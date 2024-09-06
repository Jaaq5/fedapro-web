import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// *METADATA ###################################################################
export const metadata: Metadata = {
  /* Html */
  title: "Fedapro - Costa Rica",
  description: "Página web de Fedapro Costa Rica.",
  creator: "@jaaq5",
  metadataBase: new URL("https://fedapro-web.pages.dev"),
  alternates: {
    canonical: "/",
  },
  keywords: ["Asada", "Fedapro", "Costa Rica"],

  /* Facebook */
  openGraph: {
    title: "Fedapro - Costa Rica",
    description: "Página web de Fedapro Costa Rica.",
    siteName: "Fedapro - Costa Rica",
    url: "https://fedapro-web.pages.dev",
    countryName: "Costa Rica",
    locale: "es_CR",
    type: "website",
    images: "./opengraph-image.png",
  },

  /* Twitter */
  twitter: {
    title: "Fedapro - Costa Rica",
    description: "Página web de Fedapro Costa Rica.",
    creator: "@jaaq5",
    site: "@fedapro-web.pages.dev",
    card: "summary_large_image",
    images: "./twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
