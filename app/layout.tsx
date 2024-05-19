import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API Ninja Hub | Kannu Mandora",
  description:
    "This API provides developers with fake data for use in development and testing. The data returned by this API is randomly generated and can be customized to fit the needs of the developer. This allows developers to test their applications with realistic data without the need to manually create it. The API supports multiple data types and formats, making it easy to integrate into any development workflow",
  keywords: [
    "Kannu",
    "Kannu Mandora",
    "Mandora",
    "Web Developer",
    "Full Stack",
    "MERN Stack",
    "Stack",
    "Full Stack Developer",
    "Mandora Kannu",
    "tech blogger",
    "developer",
    "web development",
    "software engineering",
    "programming languages",
    "API",
    "API Ninja",
    "API Ninja Hub",
    "API Hub",
    "Dummy Data",
    "Fake Data",
    "Random Data",
    "Random User Data",
    "Random User Generator",
    "Random User API",
    "Random User Data API",
    "Random User Generator API",
    "Random User Data Generator API",
    "Random Post Data Generator",
    "Random Post Data Generator API",
    "Random Comments Data Generator",
    "Random Comments Data Generator API",
    "Random Image Data Generator",
    "Random Image Data Generator API",
    "Random Image Generator",
    "Random Image Generator API",
    "Random Image Data",
    "Random Image Generator",
    "Random Image Generator API",
    "Random Image Data",
    "Random Image Data API",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "API Ninja Hub | Kannu Mandora",
    description:
      "This API provides developers with fake data for use in development and testing. The data returned by this API is randomly generated and can be customized to fit the needs of the developer. This allows developers to test their applications with realistic data without the need to manually create it. The API supports multiple data types and formats, making it easy to integrate into any development workflow",
    siteId: "@mandorakannu",
    creator: "@KannuMandora",
    creatorId: "1467726470533754880",
    images: ["https://api.mandorakannu.rocks/images/logo.png"],
  },
  authors: [{ name: "Kannu Mandora", url: "https://mandorakannu.tech" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://api.mandorakannu.rocks",
    title: "API Ninja Hub | Kannu Mandora",
    description:
      "This API provides developers with fake data for use in development and testing. The data returned by this API is randomly generated and can be customized to fit the needs of the developer. This allows developers to test their applications with realistic data without the need to manually create it. The API supports multiple data types and formats, making it easy to integrate into any development workflow",
    siteName: "API Ninja Hub | Kannu Mandora",
    countryName: "India",
    emails: "mandorakannu@gmail.com",
    images: [
      {
        url: "https://api.mandorakannu.rocks/images/logo.png",
        width: 512,
        height: 512,
        alt: "API Ninja Hub | Kannu Mandora",
      },
    ],
  },
  verification: {
    google: "UtDzihBgRyeg8VPV0dIzj1LEjhXWIKMoEFGmBi9XRn8",
    other: {
      me: ["mandorakannu@gmail.com"],
    },
  },
  category: "API Ninja Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
