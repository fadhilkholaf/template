import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

const baseUrl = "https://template.fadhilkholaf.my.id";
const imageUrl = `${baseUrl}/images/metadata/512x512.png`;

export const metadata: Metadata = {
  metadataBase: new URL("/", baseUrl),
  title: { default: "Template | fadhilkholaf", template: "%s | fadhilkholaf" },
  description: "fadhilkholaf next.js starter template",
  authors: [
    {
      name: "Muhammad Fadhil Kholaf",
      url: "https://fadhilkholaf.my.id",
    },
  ],
  generator: "Next.js",
  keywords: "fadhilkholaf starter template, fadhil, kholaf, starter, template",
  referrer: "origin",
  creator: "Muhammad Fadhil Kholaf",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: baseUrl },
  openGraph: {
    type: "website",
    siteName: "fadhilkholaf",
    countryName: "Indonesia",
    locale: "en_US",
    url: baseUrl,
    images: [
      {
        url: imageUrl,
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fadhilkholaf",
    images: imageUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-pink-200 text-gray-800">
      <body className={`${geistMono.className} antialiased`}>{children}</body>
    </html>
  );
}
