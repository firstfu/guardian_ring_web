import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

// 保持原有字體作為後備字體
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 加入繁體中文字體支援
const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "守護鈴 - 一鍵脫身，守護你的安全感",
  description: "告別尷尬社交，應對不安全情境。守護鈴用最真實的模擬來電，為你創造完美的脫身時機。",
  keywords: "守護鈴, 模擬來電, 社交脫身, 安全保護, Guardian Ring",
  openGraph: {
    title: "守護鈴 - 一鍵脫身，守護你的安全感",
    description: "告別尷尬社交，應對不安全情境。守護鈴用最真實的模擬來電，為你創造完美的脫身時機。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
