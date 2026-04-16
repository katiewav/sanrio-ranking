import type { Metadata } from "next";
import SparkleCanvas from "@/components/SparkleCanvas";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanrio Character Ranking | 1986-2025",
  description:
    "Every winner of the annual Sanrio Character Ranking poll (サンリオキャラクター大賞) since 1986. 40 years of rankings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SparkleCanvas />
        {children}
      </body>
    </html>
  );
}
