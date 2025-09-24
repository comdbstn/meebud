'use client'

import { useState } from 'react'
import Link from 'next/link'
import BottomNavigation from '@/components/BottomNavigation'

// 충전 옵션 데이터
const chargeOptions = [
  {
    id: 1,
    amount: 9900,
    matches: 1,
    bonus: 0,
    popular: false,
  },
  {
    id: 2,
    amount: 29700,
    matches: 3,
    bonus: 0,
    popular: true,
  },
  {
    id: 3,
    amount: 49500,
    matches: 5,
    bonus: 0,
    popular: false,
  },
  {
    id: 4,
    amount: 89100,
    matches: 9,
    bonus: 9900,
    popular: false,
  },
  {
    id: 5,
    amount: 148500,
    matches: 15,
    bonus: 29700,
    popular: false,
  },
]

const paymentMethods = [
  { id: 'kakao', name: '카카오페이', icon: '💬', color: 'bg-yellow-400' },
  { id: 'toss', name: '토스페이', icon: '💙', color: 'bg-blue-500' },
  { id: 'card', name: '신용/체크카드', icon: '💳', color: 'bg-gray-600' },
  { id: 'bank', name: '계좌이체', icon: '🏦', color: 'bg-green-600' },
]

export default function PurchasePage() {
  const [selectedOption, setSelectedOption] = useState<number>(2)
  const [selectedPayment, setSelectedPayment] = useState<string>('kakao')
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePurchase = () => {
    setIsProcessing(true)
    // 실제 결제 처리 로직
    setTimeout(() => {
      setIsProcessing(false)
      alert('충전이 완료되었습니다!')
    }, 2000)
  }

  const selectedCharge = chargeOptions.find(option => option.id === selectedOption)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-center relative">
            <Link href="/dreams" className="absolute left-0 text-gray-600 hover:text-gray-800 text-xl">
              ←
            </Link>
            <h1 className="text-lg font-bold text-black">
              💰 충전하기
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 충전 금액 선택 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">충전 금액 선택</h2>
          <div className="space-y-3">
            {chargeOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedOption === option.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-2 left-4 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    인기
                  </div>
                )}
                {option.bonus > 0 && (
                  <div className="absolute -top-2 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    보너스 +{(option.bonus / 9900).toFixed(0)}회
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      ₩ {option.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      {option.matches}회 매칭 가능
                      {option.bonus > 0 && (
                        <span className="text-red-600 font-medium">
                          {' '}+ 보너스 {(option.bonus / 9900).toFixed(0)}회
                        </span>
                      )}
                    </p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    selectedOption === option.id
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedOption === option.id && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 결제 방법 선택 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">결제 방법 선택</h2>
          <div className="grid grid-cols-2 gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all text-center ${
                  selectedPayment === method.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 ${method.color}`}>
                  <span className="text-white text-xl">{method.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{method.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 결제 정보 요약 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">결제 정보</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">충전 금액</span>
              <span className="font-medium text-gray-900">
                ₩ {selectedCharge?.amount.toLocaleString()}
              </span>
            </div>
            {selectedCharge?.bonus && selectedCharge.bonus > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">보너스</span>
                <span className="font-medium text-red-600">
                  +₩ {selectedCharge.bonus.toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">결제 방법</span>
              <span className="font-medium text-gray-900">
                {paymentMethods.find(p => p.id === selectedPayment)?.name}
              </span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">총 결제 금액</span>
                <span className="font-bold text-purple-600 text-lg">
                  ₩ {selectedCharge?.amount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 이용 약관 */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">꿈결제 이용 약관</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 충전된 포인트는 1년간 유효합니다</li>
              <li>• 매칭 성사 시에만 포인트가 차감됩니다</li>
              <li>• 미사용 포인트는 언제든지 환불 가능합니다</li>
              <li>• 환불 시 수수료는 없습니다</li>
            </ul>
          </div>
        </div>

        {/* 결제 버튼 */}
        <button
          onClick={handlePurchase}
          disabled={isProcessing}
          className="w-full bg-purple-600 text-white font-semibold py-4 rounded-2xl hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>결제 처리 중...</span>
            </div>
          ) : (
            `₩ ${selectedCharge?.amount.toLocaleString()} 결제하기`
          )}
        </button>

        {/* 안전한 결제 안내 */}
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>🔒</span>
            <span>SSL 암호화로 안전하게 보호됩니다</span>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}