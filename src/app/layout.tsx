import type { Metadata } from "next";
import {Dosis, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const dosisSans = Dosis({
    variable: "--font-dosis-sans",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Hisys PWA",
    description: "Hisys Progressive Web App",
    manifest: '/manifest.webmanifest',
    icons: {
        icon: '/favicon.ico'
    }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dosisSans.variable} ${dosisSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
