import { Metadata } from 'next'
import Link from 'next/link'
import BottomNavigation from '@/components/BottomNavigation'

export const metadata: Metadata = {
  title: "꿈결제 - MEE'BUD",
  description: "MEE'BUD 꿈결제 시스템으로 안전하고 편리하게 결제하세요",
}

export default function DreamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
              ← 홈으로
            </Link>
            <h1 className="text-lg font-bold text-gray-900">
              꿈결제
            </h1>
            <Link href="/dreams/history" className="text-purple-600 font-medium text-sm">
              내역
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 꿈결제 소개 카드 */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">☁️</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">꿈결제란?</h2>
              <p className="text-purple-100 text-sm">성사 후 결제하는 안심 시스템</p>
            </div>
          </div>
          <p className="text-sm text-purple-100 leading-relaxed">
            매칭이 성사되기 전까지는 결제하지 않아도 됩니다.
            진짜 연결이 이루어질 때만 결제하는 신뢰할 수 있는 시스템이에요.
          </p>
        </div>

        {/* 현재 잔액 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">현재 잔액</h3>
            <Link href="/dreams/balance" className="text-purple-600 text-sm font-medium">
              자세히 보기 →
            </Link>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">₩ 29,700</div>
            <p className="text-sm text-gray-600">3회 매칭 가능</p>
          </div>
        </div>

        {/* 빠른 액션 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link
            href="/dreams/purchase"
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover-lift"
          >
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 text-xl">💰</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">충전하기</h3>
            <p className="text-xs text-gray-600">꿈결제 포인트 충전</p>
          </Link>

          <Link
            href="/dreams/history"
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover-lift"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl">📊</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">사용 내역</h3>
            <p className="text-xs text-gray-600">결제 및 충전 기록</p>
          </Link>
        </div>

        {/* 요금제 안내 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">요금제 안내</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
              <div>
                <p className="font-medium text-purple-900">매칭 성사</p>
                <p className="text-sm text-purple-700">상대방과 매칭될 때</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-900">₩ 9,900</p>
                <p className="text-xs text-purple-600">1회당</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-700">매칭 실패</p>
                <p className="text-sm text-gray-600">상대방이 거절할 때</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">₩ 0</p>
                <p className="text-xs text-gray-600">무료</p>
              </div>
            </div>
          </div>
        </div>

        {/* 최근 거래 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">최근 거래</h3>
            <Link href="/dreams/history" className="text-purple-600 text-sm font-medium">
              전체 보기 →
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs">💔</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">매칭 성사</p>
                  <p className="text-xs text-gray-600">김○○님과 매칭</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-red-600">-₩ 9,900</p>
                <p className="text-xs text-gray-500">2시간 전</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs">💰</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">포인트 충전</p>
                  <p className="text-xs text-gray-600">카카오페이</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">+₩ 50,000</p>
                <p className="text-xs text-gray-500">어제</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs">❌</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">매칭 실패</p>
                  <p className="text-xs text-gray-600">상대방 거절</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-600">₩ 0</p>
                <p className="text-xs text-gray-500">2일 전</p>
              </div>
            </div>
          </div>
        </div>

        {/* 안내 메시지 */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">💡 꿈결제 이용 팁</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 매칭이 성사될 때만 결제됩니다</li>
            <li>• 충전한 포인트는 1년간 유효합니다</li>
            <li>• 미사용 포인트는 언제든지 환불 가능합니다</li>
          </ul>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}