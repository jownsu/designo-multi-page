import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Designo Multi Page",
    description: "Project from frontendmentor"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={jost.className}>
                <main className="container mx-auto min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
