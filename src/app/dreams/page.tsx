import { Metadata } from 'next'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

export const metadata: Metadata = {
  title: "성사형 후불제 - MEE'BUD",
  description: "MEE'BUD 성사형 후불제로 안전하고 확실한 매칭을 경험하세요",
}

export default function DreamsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* 상단 탭 네비게이션 */}
      <TopTabNavigation />

      {/* 성사형 후불제 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#0D1B2A]">💳 성사형 후불제</h1>
            <Link href="/dreams/history" className="text-[#FF4D8D] font-medium text-sm">
              📋 결제내역
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 성사형 후불제 소개 카드 */}
        <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">성사형 후불제란?</h2>
              <p className="text-white opacity-80 text-sm">매칭 성사 후 결제하는 확실한 시스템</p>
            </div>
          </div>
          <p className="text-sm text-white opacity-90 leading-relaxed">
            매칭이 실제로 성사될 때만 결제가 진행됩니다.
            미리 충전할 필요 없이, 진짜 연결이 이루어질 때 안전하게 결제하세요.
          </p>
        </div>

        {/* 서비스 플로우 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4 text-center">🔄 매칭 프로세스</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#FF4D8D] font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">AI가 최적의 매칭 생성</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">당신에게 맞는 상대를 찾아드려요</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#FF4D8D] font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">양쪽 모두 수락 시 매칭 성사</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">서로가 관심을 보일 때만 진행</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#FF4D8D] font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">결제 후 메시지 시작</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">성사가 확정된 후에만 결제 진행</p>
              </div>
            </div>
          </div>
        </div>

        {/* 요금 안내 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4">💰 요금 안내</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-[#FF4D8D] bg-opacity-10 rounded-xl border border-[#FF4D8D] border-opacity-20">
              <div>
                <p className="font-bold text-[#0D1B2A] text-lg">매칭 성사 시</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">상대방과 대화 시작 시</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#FF4D8D] text-xl">₩ 9,900</p>
                <p className="text-xs text-[#0D1B2A] opacity-60">1회당</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-700">매칭 실패 시</p>
                <p className="text-sm text-gray-600">상대방이 거절하거나 미응답</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600 text-lg">₩ 0</p>
                <p className="text-xs text-gray-600">완전 무료</p>
              </div>
            </div>
          </div>
        </div>

        {/* 최근 결제 내역 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#0D1B2A]">최근 결제 내역</h3>
            <Link href="/dreams/history" className="text-[#FF4D8D] text-sm font-medium">
              전체 보기 →
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs">💕</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0D1B2A]">매칭 성사</p>
                  <p className="text-xs text-[#0D1B2A] opacity-70">김○○님과 연결</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#FF4D8D]">₩ 9,900</p>
                <p className="text-xs text-gray-700">2시간 전</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs">💝</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0D1B2A]">매칭 성사</p>
                  <p className="text-xs text-[#0D1B2A] opacity-70">이○○님과 연결</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#FF4D8D]">₩ 9,900</p>
                <p className="text-xs text-gray-700">어제</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs">❌</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">매칭 시도</p>
                  <p className="text-xs text-gray-600">상대방 미응답</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">무료</p>
                <p className="text-xs text-gray-700">2일 전</p>
              </div>
            </div>
          </div>
        </div>

        {/* 장점 안내 */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200 mb-6">
          <h4 className="font-semibold text-green-800 mb-2">✅ 성사형 후불제의 장점</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• 성사되지 않으면 절대 결제되지 않음</li>
            <li>• 미리 충전할 필요 없이 필요할 때만 결제</li>
            <li>• 확실한 매칭에만 투자하는 효율적 시스템</li>
            <li>• 환불 걱정 없는 안전한 결제 방식</li>
          </ul>
        </div>

        {/* 매칭 시작 CTA */}
        <div className="text-center">
          <Link
            href="/matching"
            className="inline-block w-full bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all"
          >
            🚀 지금 매칭 시작하기
          </Link>
          <p className="text-xs text-[#0D1B2A] opacity-60 mt-2">
            매칭이 성사될 때만 결제됩니다
          </p>
        </div>
      </div>

    </div>
  )
}