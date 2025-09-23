'use client'

import { useState } from 'react'
import Link from 'next/link'
import BottomNavigation from '@/components/BottomNavigation'

export default function BalancePage() {
  const [showRefundModal, setShowRefundModal] = useState(false)
  const [refundAmount, setRefundAmount] = useState('')

  const currentBalance = 29700
  const availableMatches = Math.floor(currentBalance / 9900)
  const expiryDate = '2025년 12월 31일'

  const handleRefund = () => {
    if (refundAmount && Number(refundAmount) <= currentBalance) {
      // 환불 처리 로직
      alert(`₩${Number(refundAmount).toLocaleString()} 환불 요청이 접수되었습니다.`)
      setShowRefundModal(false)
      setRefundAmount('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dreams" className="text-gray-600 hover:text-gray-800">
              ← 뒤로
            </Link>
            <h1 className="text-lg font-bold text-gray-900">
              잔액 관리
            </h1>
            <div className="w-6"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 현재 잔액 카드 */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 text-white">
          <div className="text-center">
            <p className="text-purple-100 text-sm mb-2">현재 잔액</p>
            <div className="text-4xl font-bold mb-2">
              ₩ {currentBalance.toLocaleString()}
            </div>
            <p className="text-purple-100 text-sm">
              {availableMatches}회 매칭 가능
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-purple-300 border-opacity-30">
            <div className="flex justify-between items-center text-sm">
              <span className="text-purple-100">포인트 유효기간</span>
              <span className="text-white font-medium">{expiryDate}</span>
            </div>
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
            <h3 className="font-semibold text-gray-900 text-sm mb-1">추가 충전</h3>
            <p className="text-xs text-gray-600">포인트 더 충전하기</p>
          </Link>

          <button
            onClick={() => setShowRefundModal(true)}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover-lift"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 text-xl">💸</span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">환불 신청</h3>
            <p className="text-xs text-gray-600">미사용 포인트 환불</p>
          </button>
        </div>

        {/* 포인트 사용 예상 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">포인트 사용 예상</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💕</span>
                </div>
                <div>
                  <p className="font-medium text-purple-900">매칭 성사 시</p>
                  <p className="text-sm text-purple-700">1회당 차감</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-900">-₩ 9,900</p>
                <p className="text-xs text-purple-600">잔액: ₩ {(currentBalance - 9900).toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">❌</span>
                </div>
                <div>
                  <p className="font-medium text-gray-700">매칭 실패 시</p>
                  <p className="text-sm text-gray-600">무료</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-700">₩ 0</p>
                <p className="text-xs text-gray-500">잔액: ₩ {currentBalance.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 포인트 내역 요약 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">포인트 내역 요약</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">총 충전 금액</span>
              <span className="font-medium text-gray-900">₩ 89,100</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">총 사용 금액</span>
              <span className="font-medium text-red-600">₩ 59,400</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">성공한 매칭</span>
              <span className="font-medium text-green-600">6회</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">현재 잔액</span>
                <span className="font-bold text-purple-600">₩ {currentBalance.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 유의사항 */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">💡 유의사항</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 포인트는 충전일로부터 1년간 유효합니다</li>
            <li>• 환불 시 수수료는 없으며 즉시 처리됩니다</li>
            <li>• 매칭 취소 시 차감된 포인트는 자동으로 복원됩니다</li>
            <li>• 포인트 양도는 불가능합니다</li>
          </ul>
        </div>
      </div>

      {/* 환불 모달 */}
      {showRefundModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">포인트 환불</h3>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                현재 잔액: ₩ {currentBalance.toLocaleString()}
              </p>
              <input
                type="number"
                placeholder="환불받을 금액을 입력하세요"
                value={refundAmount}
                onChange={(e) => setRefundAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                max={currentBalance}
              />
            </div>

            <div className="mb-6">
              <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <span className="font-medium">환불 안내:</span><br/>
                  • 환불 처리는 영업일 기준 1-3일 소요됩니다<br/>
                  • 환불 수수료는 없습니다<br/>
                  • 환불 후 해당 금액만큼 포인트가 차감됩니다
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowRefundModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50"
              >
                취소
              </button>
              <button
                onClick={handleRefund}
                disabled={!refundAmount || Number(refundAmount) > currentBalance || Number(refundAmount) <= 0}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                환불 신청
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  )
}