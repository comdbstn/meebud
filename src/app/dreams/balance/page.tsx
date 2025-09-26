'use client'

import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

export default function PaymentMethodsPage() {
  const paymentMethods = [
    { id: 'kakao', name: '카카오페이', icon: '💬', color: 'bg-yellow-400', description: '간편하고 빠른 결제' },
    { id: 'toss', name: '토스페이', icon: '💙', color: 'bg-blue-500', description: '안전한 금융 서비스' },
    { id: 'card', name: '신용/체크카드', icon: '💳', color: 'bg-gray-600', description: '다양한 카드사 지원' },
    { id: 'bank', name: '계좌이체', icon: '🏦', color: 'bg-green-600', description: '직접 이체 결제' },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* 상단 탭 네비게이션 */}
      <TopTabNavigation />

      {/* 결제 방법 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#0D1B2A]">💳 결제 방법</h1>
            <Link href="/dreams" className="text-[#FF4D8D] text-sm font-medium">
              ← 뒤로
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 후불제 안내 카드 */}
        <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-2xl p-6 mb-6 text-white">
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h2 className="text-xl font-bold mb-2">매칭 성사 시 자동 결제</h2>
            <p className="text-white opacity-90 text-sm leading-relaxed">
              매칭이 성사되면 아래 결제 방법 중 하나를 선택하여
              안전하게 결제할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 결제 방법 선택 */}
        <div className="mb-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4">사용 가능한 결제 방법</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 hover:border-[#FF4D8D] transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${method.color}`}>
                    <span className="text-white text-xl">{method.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0D1B2A]">{method.name}</h4>
                    <p className="text-sm text-[#0D1B2A] opacity-70">{method.description}</p>
                  </div>
                  <div className="text-[#FF4D8D] text-sm font-medium">
                    ✓ 지원
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 결제 프로세스 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4">🔄 결제 프로세스</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#FF4D8D] font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">매칭 성사 확인</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">양쪽 모두 수락 시</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#FF4D8D] font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">결제 방법 선택</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">원하는 결제 수단 선택</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#FF4D8D] font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-[#0D1B2A]">결제 완료 후 대화 시작</p>
                <p className="text-sm text-[#0D1B2A] opacity-70">₩ 9,900 결제 후 메시지 활성화</p>
              </div>
            </div>
          </div>
        </div>

        {/* 요금 정보 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-[#0D1B2A] mb-4">💰 요금 안내</h3>
          <div className="flex items-center justify-between p-4 bg-[#FF4D8D] bg-opacity-10 rounded-xl border border-[#FF4D8D] border-opacity-20">
            <div>
              <p className="font-bold text-[#0D1B2A] text-lg">매칭 성사당</p>
              <p className="text-sm text-[#0D1B2A] opacity-70">대화 시작 시 1회 결제</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-[#FF4D8D] text-2xl">₩ 9,900</p>
              <p className="text-xs text-[#0D1B2A] opacity-60">부가세 포함</p>
            </div>
          </div>
        </div>

        {/* 보안 및 환불 정책 */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-6">
          <h4 className="font-semibold text-blue-800 mb-2">🛡️ 안전한 결제 시스템</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• SSL 암호화로 결제 정보 안전 보호</li>
            <li>• PG사 인증을 통한 안전한 거래</li>
            <li>• 매칭 실패 시 결제되지 않음</li>
            <li>• 서비스 불만족 시 환불 정책 적용</li>
          </ul>
        </div>

        {/* 매칭 시작 CTA */}
        <div className="text-center">
          <Link
            href="/matching"
            className="inline-block w-full bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all"
          >
            🚀 매칭 시작하기
          </Link>
          <p className="text-xs text-[#0D1B2A] opacity-60 mt-2">
            성사될 때만 결제됩니다
          </p>
        </div>
      </div>

    </div>
  )
}