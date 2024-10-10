import type { Metadata } from "next";
import { rubik } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Bento",
  description: "Landing page for Simplelist app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
