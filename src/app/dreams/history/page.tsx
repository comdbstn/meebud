'use client'

import { useState } from 'react'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

interface Transaction {
  id: number
  type: 'charge' | 'use' | 'refund'
  amount: number
  description: string
  method?: string
  date: string
  status: 'completed' | 'pending' | 'failed'
}

const transactions: Transaction[] = [
  {
    id: 1,
    type: 'use',
    amount: -9900,
    description: '매칭 성사',
    date: '2025.01.23 14:30',
    status: 'completed'
  },
  {
    id: 2,
    type: 'charge',
    amount: 50000,
    description: '포인트 충전',
    method: '카카오페이',
    date: '2025.01.22 09:15',
    status: 'completed'
  },
  {
    id: 3,
    type: 'use',
    amount: -9900,
    description: '매칭 성사',
    date: '2025.01.21 19:45',
    status: 'completed'
  },
  {
    id: 4,
    type: 'use',
    amount: -9900,
    description: '매칭 성사',
    date: '2025.01.20 11:20',
    status: 'completed'
  },
  {
    id: 5,
    type: 'charge',
    amount: 29700,
    description: '포인트 충전',
    method: '토스페이',
    date: '2025.01.19 16:30',
    status: 'completed'
  },
  {
    id: 6,
    type: 'use',
    amount: -9900,
    description: '매칭 성사',
    date: '2025.01.18 20:15',
    status: 'completed'
  },
  {
    id: 7,
    type: 'use',
    amount: -9900,
    description: '매칭 성사',
    date: '2025.01.17 13:45',
    status: 'completed'
  },
  {
    id: 8,
    type: 'charge',
    amount: 9900,
    description: '포인트 충전',
    method: '신용카드',
    date: '2025.01.15 10:00',
    status: 'completed'
  },
  {
    id: 9,
    type: 'use',
    amount: -9900,
    description: '매칭 성사',
    date: '2025.01.14 18:30',
    status: 'completed'
  },
  {
    id: 10,
    type: 'refund',
    amount: 19800,
    description: '포인트 환불',
    method: '계좌이체',
    date: '2025.01.10 14:20',
    status: 'completed'
  }
]

export default function HistoryPage() {
  const [filter, setFilter] = useState<'all' | 'charge' | 'use' | 'refund'>('all')

  const filteredTransactions = transactions.filter(transaction =>
    filter === 'all' || transaction.type === filter
  )

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'charge': return { icon: '💰', color: 'bg-green-500' }
      case 'use': return { icon: '💸', color: 'bg-red-500' }
      case 'refund': return { icon: '💵', color: 'bg-blue-500' }
      default: return { icon: '💳', color: 'bg-gray-500' }
    }
  }

  const getTransactionTitle = (type: string) => {
    switch (type) {
      case 'charge': return '충전'
      case 'use': return '사용'
      case 'refund': return '환불'
      default: return '거래'
    }
  }

  const totalCharged = transactions
    .filter(t => t.type === 'charge')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalUsed = transactions
    .filter(t => t.type === 'use')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  const totalRefunded = transactions
    .filter(t => t.type === 'refund')
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* 상단 탭 네비게이션 */}
      <TopTabNavigation />

      {/* 사용내역 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-slate-900">📄 사용내역</h1>
            <Link href="/dreams" className="text-violet-600 text-sm font-medium">
              ← 뒤로
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 요약 통계 */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-lg font-bold text-green-600 mb-1">
              ₩ {totalCharged.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">총 충전</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-lg font-bold text-red-600 mb-1">
              ₩ {totalUsed.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">총 사용</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-lg font-bold text-blue-600 mb-1">
              ₩ {totalRefunded.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">총 환불</div>
          </div>
        </div>

        {/* 필터 탭 */}
        <div className="flex bg-gray-100 rounded-2xl p-1 mb-6">
          {[
            { key: 'all', label: '전체' },
            { key: 'charge', label: '충전' },
            { key: 'use', label: '사용' },
            { key: 'refund', label: '환불' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as 'all' | 'charge' | 'use' | 'refund')}
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

        {/* 거래 내역 */}
        <div className="space-y-3">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => {
              const { icon, color } = getTransactionIcon(transaction.type)
              return (
                <div
                  key={transaction.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
                      <span className="text-white text-lg">{icon}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-900">
                          {getTransactionTitle(transaction.type)}
                        </h3>
                        <span className={`font-bold ${
                          transaction.amount > 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}₩ {Math.abs(transaction.amount).toLocaleString()}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 mb-1">
                        {transaction.description}
                        {transaction.method && (
                          <span className="text-purple-600 ml-1">
                            • {transaction.method}
                          </span>
                        )}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {transaction.date}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          transaction.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : transaction.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {transaction.status === 'completed' ? '완료' :
                           transaction.status === 'pending' ? '처리중' : '실패'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                내역이 없어요
              </h3>
              <p className="text-gray-600 mb-6">
                해당 유형의 거래 내역이 없습니다
              </p>
              <Link
                href="/dreams/purchase"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
              >
                포인트 충전하기
              </Link>
            </div>
          )}
        </div>

        {/* 더 보기 (무한 스크롤 대신 페이지네이션 버튼) */}
        {filteredTransactions.length >= 10 && (
          <div className="mt-6 text-center">
            <button className="text-purple-600 font-medium hover:text-purple-700">
              더 보기 →
            </button>
          </div>
        )}

        {/* 도움말 */}
        <div className="mt-8 bg-blue-50 rounded-xl p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">💡 알아두세요</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 매칭 성사 시에만 포인트가 차감됩니다</li>
            <li>• 매칭 실패나 취소 시에는 차감되지 않습니다</li>
            <li>• 환불은 영업일 기준 1-3일 내 처리됩니다</li>
            <li>• 문의사항은 고객센터로 연락해주세요</li>
          </ul>
        </div>
      </div>

    </div>
  )
}