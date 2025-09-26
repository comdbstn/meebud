'use client'

import { useState } from 'react'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

interface MatchPayment {
  id: number
  matchedUser: string
  userAvatar: string
  amount: number
  paymentMethod: string
  date: string
  status: 'completed' | 'pending' | 'failed'
}

const matchPayments: MatchPayment[] = [
  {
    id: 1,
    matchedUser: '하은님',
    userAvatar: '👩🏻‍🦰',
    amount: 9900,
    paymentMethod: '카카오페이',
    date: '2025.01.23 14:30',
    status: 'completed'
  },
  {
    id: 2,
    matchedUser: '준호님',
    userAvatar: '👨🏻‍🦱',
    amount: 9900,
    paymentMethod: '토스페이',
    date: '2025.01.21 19:45',
    status: 'completed'
  },
  {
    id: 3,
    matchedUser: '민지님',
    userAvatar: '👩🏻',
    amount: 9900,
    paymentMethod: '신용카드',
    date: '2025.01.20 11:20',
    status: 'completed'
  },
  {
    id: 4,
    matchedUser: '성민님',
    userAvatar: '👨🏻',
    amount: 9900,
    paymentMethod: '카카오페이',
    date: '2025.01.18 20:15',
    status: 'completed'
  },
  {
    id: 5,
    matchedUser: '수진님',
    userAvatar: '👩🏻‍🦱',
    amount: 9900,
    paymentMethod: '토스페이',
    date: '2025.01.17 13:45',
    status: 'completed'
  },
  {
    id: 6,
    matchedUser: '지훈님',
    userAvatar: '👨🏻‍🦳',
    amount: 9900,
    paymentMethod: '신용카드',
    date: '2025.01.14 18:30',
    status: 'completed'
  }
]

export default function HistoryPage() {
  const [filter, setFilter] = useState<'all' | 'recent' | 'this-month'>('all')

  const filteredPayments = matchPayments.filter(_payment => {
    if (filter === 'all') return true
    if (filter === 'recent') return true // 최근 7일
    if (filter === 'this-month') return true // 이번 달
    return true
  })

  const totalPaid = matchPayments
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0)

  const successfulMatches = matchPayments
    .filter(p => p.status === 'completed').length

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* 상단 탭 네비게이션 */}
      <TopTabNavigation />

      {/* 결제내역 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#0D1B2A]">📋 결제내역</h1>
            <Link href="/dreams" className="text-[#FF4D8D] text-sm font-medium">
              ← 뒤로
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 매칭 성과 요약 */}
        <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-2xl p-6 mb-6 text-white">
          <div className="text-center">
            <div className="text-3xl mb-2">💕</div>
            <h2 className="text-xl font-bold mb-2">매칭 성과</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-2xl font-bold">{successfulMatches}</div>
                <div className="text-white opacity-80 text-sm">성공한 매칭</div>
              </div>
              <div>
                <div className="text-2xl font-bold">₩ {totalPaid.toLocaleString()}</div>
                <div className="text-white opacity-80 text-sm">총 결제금액</div>
              </div>
            </div>
          </div>
        </div>

        {/* 필터 탭 */}
        <div className="flex bg-gray-100 rounded-2xl p-1 mb-6">
          {[
            { key: 'all', label: '전체' },
            { key: 'recent', label: '최근' },
            { key: 'this-month', label: '이번 달' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as 'all' | 'recent' | 'this-month')}
              className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                filter === tab.key
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 결제 내역 */}
        <div className="space-y-3">
          {filteredPayments.length > 0 ? (
            filteredPayments.map((payment) => (
              <div
                key={payment.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] flex items-center justify-center text-lg">
                    {payment.userAvatar}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-[#0D1B2A]">
                        매칭 성사 결제
                      </h3>
                      <span className="font-bold text-[#FF4D8D]">
                        ₩ {payment.amount.toLocaleString()}
                      </span>
                    </div>

                    <p className="text-sm text-[#0D1B2A] opacity-70 mb-1">
                      {payment.matchedUser}과의 매칭
                      <span className="text-[#FF4D8D] ml-1">
                        • {payment.paymentMethod}
                      </span>
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#0D1B2A] opacity-60">
                        {payment.date}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        payment.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : payment.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {payment.status === 'completed' ? '완료' :
                         payment.status === 'pending' ? '처리중' : '실패'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                아직 성사된 매칭이 없어요
              </h3>
              <p className="text-gray-600 mb-6">
                첫 번째 매칭을 성사시켜보세요!
              </p>
              <Link
                href="/matching"
                className="inline-block bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                매칭 시작하기
              </Link>
            </div>
          )}
        </div>

        {/* 더 보기 버튼 */}
        {filteredPayments.length >= 6 && (
          <div className="mt-6 text-center">
            <button className="text-[#FF4D8D] font-medium hover:text-[#ff3080]">
              더 보기 →
            </button>
          </div>
        )}

        {/* 후불제 안내 */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">🎯 성사형 후불제 안내</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• 매칭이 성사될 때만 자동 결제됩니다</li>
            <li>• 매칭 실패나 거절 시에는 결제되지 않습니다</li>
            <li>• 모든 결제는 안전하게 암호화 처리됩니다</li>
            <li>• 문의사항은 고객센터로 연락해주세요</li>
          </ul>
        </div>
      </div>

    </div>
  )
}