import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { Beiruti } from 'next/font/google';
import "./globals.css";

const beiruti = Beiruti({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-beiruti"
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      <body className={beiruti.variable}>{children}</body>
    </html>
  );
}
