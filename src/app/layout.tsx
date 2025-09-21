import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mee'bud - 진짜 연결을 위한 프리미엄 소개팅",
  description: "가벼운 스와이프는 잊으세요. 서로 수락한 연결에만 결제하는 신뢰할 수 있는 소개팅 서비스",
  keywords: "소개팅, 매칭, AI, 인증, 프리미엄, 후불제",
  openGraph: {
    title: "Mee'bud - 진짜 연결을 위한 프리미엄 소개팅",
    description: "AI가 추천하는 이상형과 만나보세요. 성사형 후불제로 안심하고 시작하세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
