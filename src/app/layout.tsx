import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "practice frontend",
  description: "All of frontend skills which I want to learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
