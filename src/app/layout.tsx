import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Fontu çağırdım
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Font ayarı
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Özay ÖZKAN | Full-Stack Dev",
  description: "Kişisel Geliştirici Portfolyosu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      {/* Font sınıfını body'e veriyoruz */}
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
