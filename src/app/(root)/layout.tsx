import {Dosis} from "next/font/google";
import "../globals.css";
import {Metadata} from "next";
import ModeToggle from "@/components/ModeToggle";
import ThemeProvider from "@/components/ThemeProvider";

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
      <html lang="en" className={dosisSans.className} suppressHydrationWarning>
          <body >
          <ThemeProvider attribute="class"
                         defaultTheme="system"
                         enableSystem
                         disableTransitionOnChange>
          <div className="container"><ModeToggle/></div>
          {children}
          </ThemeProvider>
          </body>

</html>
  );
}
