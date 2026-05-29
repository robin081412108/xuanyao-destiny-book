import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XuanYao Destiny Book",
  description: "A premium BaZi and Four Pillars destiny archive."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
