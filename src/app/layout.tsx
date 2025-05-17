import type { Metadata } from "next";
import {Dosis} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";


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
      <body className={`${dosisSans.variable} ${dosisSans.variable} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
