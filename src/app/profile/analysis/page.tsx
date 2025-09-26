'use client'

import Link from 'next/link'

export default function ProfileAnalysisPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
          {/* 준비중 아이콘 */}
          <div className="text-6xl mb-6">🛠️</div>

          <h1 className="text-2xl font-bold text-[#0D1B2A] mb-4">
            AI 분석 기능 준비중
          </h1>

          <p className="text-[#0D1B2A] opacity-70 mb-8 leading-relaxed">
            더욱 정확하고 개인화된 AI 매력 분석을<br />
            준비하고 있습니다
          </p>

          {/* 기대 기능들 */}
          <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-xl p-6 mb-8 text-white">
            <h3 className="text-lg font-bold mb-4">🎯 곧 만나볼 기능들</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-lg opacity-80">📸</span>
                <span className="text-sm">고급 얼굴형 & 매력 분석</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg opacity-80">🧠</span>
                <span className="text-sm">MBTI 기반 성격 유형 매칭</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg opacity-80">💕</span>
                <span className="text-sm">이상형 궁합도 정밀 측정</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg opacity-80">✨</span>
                <span className="text-sm">개인 맞춤 매칭 추천</span>
              </div>
            </div>
          </div>

          {/* 현재 이용 가능한 서비스 */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">💡 지금 이용 가능한 서비스</h4>
            <ul className="text-sm text-blue-700 space-y-1 text-left">
              <li>• 기본 프로필 매칭 시스템</li>
              <li>• 성사형 후불제 안전 결제</li>
              <li>• 실시간 메시지 시스템</li>
              <li>• 매칭 성공률 통계 확인</li>
            </ul>
          </div>

          {/* 알림 신청 */}
          <div className="mb-6">
            <p className="text-sm text-[#0D1B2A] opacity-70 mb-3">
              AI 분석 기능 출시 알림을 받고 싶으시다면
            </p>
            <button className="w-full bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all">
              📧 출시 알림 신청하기
            </button>
          </div>

          {/* 액션 버튼들 */}
          <div className="space-y-3">
            <Link
              href="/matching"
              className="block w-full bg-white border border-[#FF4D8D] text-[#FF4D8D] py-3 px-6 rounded-xl font-semibold text-center hover:bg-pink-50 transition-colors"
            >
              🚀 지금 바로 매칭 시작하기
            </Link>

            <Link
              href="/profile/edit"
              className="block w-full bg-gray-100 text-[#0D1B2A] py-3 px-6 rounded-xl font-medium text-center hover:bg-gray-200 transition-colors"
            >
              프로필 수정하기
            </Link>

            <Link
              href="/"
              className="block w-full text-[#0D1B2A] opacity-70 py-2 text-center text-sm hover:opacity-90 transition-opacity"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}