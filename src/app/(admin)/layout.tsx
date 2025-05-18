import "../globals.css";
import {ReactNode} from "react";
import {ThemeProvider} from "next-themes";
import ModeToggle from "@/components/ModeToggle";


const AdminLayout = ({children,}: { children: ReactNode; }) => {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex flex-col min-h-screen">
                <div className="relative h-36 bg-teal-950">
                    <div className="sticky">Header<ModeToggle/></div>
                </div>
                <main className="flex-1">{children}</main>
                <div className="sticky bottom-0 h-20 bg-teal-950">Footer</div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}

export default AdminLayout;
