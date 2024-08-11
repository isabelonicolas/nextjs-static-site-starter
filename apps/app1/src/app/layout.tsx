import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/index.scss"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.variable}>
				<span id="top" tabIndex={-1} />
				{children}
				<div id="modal-root" />
			</body>
		</html>
	)
}
