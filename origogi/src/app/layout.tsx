import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Origogi",
  description: "정직한 리뷰, 당신을 위한 맛집 가이드",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{overflowX: "hidden"}}>
      <body className={openSans.className} style={{backgroundColor: "white"}}>
        {children}
      </body>
    </html>
  );
}
