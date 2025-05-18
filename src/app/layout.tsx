import {Dosis} from "next/font/google";
import "./globals.css";
import {Metadata} from "next";



const dosisSans = Dosis({
    variable: "--font-dosis-sans",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Hisys",
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
      <body className={`${dosisSans.variable} ${dosisSans.variable} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
