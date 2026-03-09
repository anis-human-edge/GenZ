import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenZ Protect — Stop Wholesaling Retail-Worthy Profit",
  description:
    "GenZ is a surgical risk buffer that lets you say yes to the cars your current provider won't touch — so you keep the deal, protect the customer, and capture backend gross.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
