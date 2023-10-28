import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import icon from "./favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "سایت بیلبورد",
  description: "خانه دلخواه خود را پیدا کنید!",
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
