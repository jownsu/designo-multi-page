import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

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
				<Navbar/>
				<main className="container mx-auto">
					{children}
				</main>
			</body>
		</html>
	);
}
