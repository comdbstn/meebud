import { Metadata } from 'next'
import Header from '@/components/Header'
import Calendar from '@/components/Calendar'
import RecentMatches from '@/components/RecentMatches'

export const metadata: Metadata = {
  title: "MEE'BUD - AI가 매칭하는 후불제 소개팅",
  description: "AI가 외모까지 분석해서 찾아주는 완벽한 이상형. 성사 시에만 결제하는 안전한 후불제 매칭 서비스",
  keywords: "소개팅, 매칭, AI, 얼굴상, 후불제, 데이팅앱, 이상형",
  openGraph: {
    title: "MEE'BUD - AI가 매칭하는 후불제 소개팅",
    description: "AI가 외모까지 분석해서 찾아주는 완벽한 이상형. 성사 시에만 결제하는 안전한 후불제 매칭 서비스",
    type: "website",
    url: "https://meebud.com",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-20">
        <Calendar />
        <RecentMatches />
      </main>
    </div>
  )
}