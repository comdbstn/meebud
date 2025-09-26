'use client'

import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

export default function PurchasePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* 상단 탭 네비게이션 */}
      <TopTabNavigation />

      {/* 알림 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#0D1B2A]">💳 결제 안내</h1>
            <Link href="/dreams" className="text-[#FF4D8D] text-sm font-medium">
              ← 뒤로
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 시스템 변경 안내 */}
        <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-2xl p-6 mb-6 text-white text-center">
          <div className="text-4xl mb-3">🎯</div>
          <h2 className="text-xl font-bold mb-2">성사형 후불제로 변경되었어요</h2>
          <p className="text-white opacity-90 text-sm leading-relaxed">
            더 이상 미리 충전할 필요가 없어요!<br />
            매칭이 성사될 때만 안전하게 결제하세요.
          </p>
        </div>

        {/* 새로운 시스템 안내 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4">🔄 새로운 결제 방식</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">충전 불필요</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">미리 포인트를 충전할 필요가 없어요</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">성사 시에만 결제</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">양쪽 모두 수락할 때만 ₩9,900 결제</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#FF4D8D] font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">환불 걱정 없음</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">실패하면 결제되지 않으니 환불도 필요 없어요</p>
              </div>
            </div>
          </div>
        </div>

        {/* 결제 방법 안내 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4">💳 결제 방법 확인</h3>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-3">
            매칭 성사 시 사용할 결제 방법을 미리 확인해보세요
          </p>
          <Link
            href="/dreams/balance"
            className="w-full inline-block text-center bg-gray-50 hover:bg-gray-100 text-[#0D1B2A] py-3 px-4 rounded-xl font-medium transition-colors border border-gray-200"
          >
            결제 방법 보기 →
          </Link>
        </div>

        {/* 결제 히스토리 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4">📋 결제 내역</h3>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-3">
            성사된 매칭의 결제 내역을 확인할 수 있어요
          </p>
          <Link
            href="/dreams/history"
            className="w-full inline-block text-center bg-gray-50 hover:bg-gray-100 text-[#0D1B2A] py-3 px-4 rounded-xl font-medium transition-colors border border-gray-200"
          >
            결제 내역 보기 →
          </Link>
        </div>

        {/* 매칭 시작 안내 */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200 mb-6">
          <h4 className="font-semibold text-green-800 mb-2">✨ 지금 바로 매칭 시작</h4>
          <p className="text-sm text-green-700 mb-3">
            충전 없이 바로 AI 매칭을 시작할 수 있어요. 성사될 때만 결제됩니다.
          </p>
        </div>

        {/* CTA 버튼 */}
        <Link
          href="/matching"
          className="w-full inline-block text-center bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all"
        >
          🚀 지금 매칭 시작하기
        </Link>
        <p className="text-xs text-[#0D1B2A] opacity-60 mt-2 text-center">
          성사될 때만 ₩9,900가 결제됩니다
        </p>
      </div>
    </div>
  )
}