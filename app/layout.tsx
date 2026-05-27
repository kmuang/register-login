import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Register/Login Page",
  description: "A Next.js register and login page"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
