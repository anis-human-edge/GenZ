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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
