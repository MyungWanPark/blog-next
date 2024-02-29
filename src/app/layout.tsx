import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Myungwan's Blog",
        template: "Myungwan's Blog | %s",
    },
    description: "Full Stack developer's blog",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${sans.className} flex flex-col max-w-screen-2xl mx-auto`}
            >
                <Header />
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
