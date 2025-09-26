import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from '../contexts/AppContext';
import NotificationToast from '../components/NotificationToast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MEE'BUD - AI가 매칭하는 후불제 소개팅",
    template: "%s | MEE'BUD"
  },
  description: "AI가 분석한 완벽한 이상형 매칭. 성사 후 결제하는 신뢰할 수 있는 소개팅 서비스. 외모, 성격, 사주까지 종합 분석으로 찾아드리는 운명의 인연.",
  keywords: [
    "소개팅", "매칭", "AI매칭", "후불제", "성사후결제", "이상형", "운명", "인연",
    "외모매칭", "성격매칭", "사주매칭", "종합분석", "신뢰", "프리미엄소개팅",
    "MEE'BUD", "미버드", "데이팅앱", "소개팅앱", "매칭앱"
  ],
  authors: [{ name: "MEE'BUD Team" }],
  creator: "MEE'BUD",
  publisher: "MEE'BUD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meebud.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://meebud.com",
    siteName: "MEE'BUD",
    title: "MEE'BUD - AI가 매칭하는 후불제 소개팅",
    description: "AI가 분석한 완벽한 이상형 매칭. 외모, 성격, 사주까지 종합 분석으로 찾아드리는 운명의 인연. 성사 후 결제하는 신뢰할 수 있는 소개팅 서비스.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "MEE'BUD - AI 매칭 소개팅 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEE'BUD - AI가 매칭하는 후불제 소개팅",
    description: "AI가 분석한 완벽한 이상형 매칭. 성사 후 결제하는 신뢰할 수 있는 소개팅 서비스.",
    images: ['/og-image.png'],
    creator: "@meebud_official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#FF4D8D' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          {children}
          <NotificationToast />
        </AppProvider>
      </body>
    </html>
  );
}
