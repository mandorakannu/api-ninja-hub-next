import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API Ninja Hub",
  description:
    "This API provides developers with fake data for use in development and testing. The data returned by this API is randomly generated and can be customized to fit the needs of the developer. This allows developers to test their applications with realistic data without the need to manually create it. The API supports multiple data types and formats, making it easy to integrate into any development workflow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
