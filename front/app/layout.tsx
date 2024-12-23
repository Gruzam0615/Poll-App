import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PingPong, PingPong2 } from "@/app/api/poll_server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poll-App",
  description: "",
};

async function getPingPongData() {
  const checkPingPong = await PingPong2();
  return checkPingPong;
}

export default async function RootLayout({
  children, ablebackend
}: Readonly<{
  children: React.ReactNode;
  ablebackend: React.ReactNode;
}>) {
  const checkPingPong = await getPingPongData();
  console.log(checkPingPong);
  
  return (    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}
        {/* {TestStatus() === true ? test1 : test2} */}
        {
          checkPingPong?.data === "true" ?
            ablebackend:
            children
        }
      </body>
    </html>
  );
}
