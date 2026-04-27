import type { Metadata } from "next";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";

export const metadata: Metadata = {
  title: "Optruvian · AI products for everyday work",
  description:
    "Optruvian makes AI-powered products for everyday people. Each one solves a real problem. No learning curve. No complexity. No fluff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClickSpark
          sparkColor="#09090b"
          sparkSize={10}
          sparkRadius={18}
          sparkCount={10}
          duration={450}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
