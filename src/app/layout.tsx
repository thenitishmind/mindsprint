import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientAuthProvider from "../components/auth/ClientAuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MindSprint - Learn, Practice, Excel",
  description: "A comprehensive platform for aptitude, interview preparation, coding practice, and more",
  keywords: "aptitude, interview questions, coding practice, mock tests, learning resources",
  icons: {
    icon: "/mindsprint-logo.svg",
    apple: "/mindsprint-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientAuthProvider>
          {children}
        </ClientAuthProvider>
      </body>
    </html>
  );
}
