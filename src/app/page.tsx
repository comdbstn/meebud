'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import BottomNavigation from '@/components/BottomNavigation'

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [_userEmail, _setUserEmail] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 로그인 상태 확인
    const authStatus = sessionStorage.getItem('user_authenticated')
    const email = sessionStorage.getItem('user_email')

    if (authStatus === 'true' && email) {
      setIsAuthenticated(true)
      _setUserEmail(email)
    }
    setLoading(false)
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('user_authenticated')
    sessionStorage.removeItem('user_email')
    setIsAuthenticated(false)
    _setUserEmail('')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D8D]"></div>
      </div>
    )
  }

  if (isAuthenticated) {
    // 로그인된 사용자를 위한 모바일 최적화 대시보드
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-sm mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
                </h1>
                <p className="text-sm text-gray-600">오늘도 좋은 하루 보내세요!</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🦊</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-gray-500 hover:text-gray-700 ml-2"
                >
                  로그아웃
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-sm mx-auto px-4 py-6">
          {/* Matching Status */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">매칭 현황</h2>

            {/* Today's Recommendations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">오늘의 AI 추천</h3>
                    <p className="text-sm text-gray-600">새로운 인연을 확인해보세요</p>
                  </div>
                </div>
                <div className="bg-[#FF4D8D] text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </div>
              </div>
              <Link
                href="/matching"
                className="block w-full bg-[#FF4D8D] text-white font-semibold py-3 rounded-xl hover:bg-[#ff3080] transition-colors duration-200 text-center"
              >
                추천 확인하기
              </Link>
            </div>

            {/* Matching Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
              <h3 className="font-bold text-gray-900 mb-4">진행 중인 매칭</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⏳</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">김○○님</p>
                      <p className="text-sm text-gray-600">상대방 답변 대기 중</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">2시간 전</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">💕</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">이○○님</p>
                      <p className="text-sm text-green-600">매칭 성사!</p>
                    </div>
                  </div>
                  <Link
                    href="/messages"
                    className="bg-[#FF4D8D] text-white text-xs font-medium px-3 py-1 rounded-full hover:bg-[#ff3080] transition-colors duration-200"
                  >
                    메시지
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/profile"
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center hover-lift"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">📝</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">프로필 완성</h3>
                <p className="text-xs text-gray-600">매칭률 높이기</p>
              </Link>

              <Link
                href="/profile"
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center hover-lift"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 text-xl">⭐</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">인증하기</h3>
                <p className="text-xs text-gray-600">신뢰도 증가</p>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">최근 활동</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#FF4D8D] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">💝</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">새로운 매칭이 성사되었어요!</p>
                    <p className="text-xs text-gray-600">30분 전</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">AI가 새로운 추천을 완료했어요</p>
                    <p className="text-xs text-gray-600">2시간 전</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✨</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">프로필 인증이 승인되었어요</p>
                    <p className="text-xs text-gray-600">1일 전</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BottomNavigation />
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-sm mx-auto animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-2xl flex items-center justify-center shadow-lg animate-heart-beat">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                <path d="M9 8c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 8 9 8zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S15.83 8 15 8z" className="opacity-70"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight animate-float">
              MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
            </h1>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
            AI가 매칭하는 후불제 소개팅, Meebud입니다
          </h2>
          <p className="text-base text-gray-700 font-medium mb-6">
            Meebud에 대해서 자세히 알아보세요 :)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href="/welcome"
            className="block w-full bg-white border-2 border-[#FF4D8D] text-[#FF4D8D] font-semibold py-4 px-8 rounded-xl text-base hover:bg-[#FF4D8D] hover:text-white transition-all duration-200 hover-lift"
          >
            어떤 서비스인가요?
          </a>

          <a
            href="/auth/login"
            className="block w-full bg-[#FF4D8D] text-white font-semibold py-4 px-8 rounded-xl text-base hover:bg-[#ff3080] transition-colors duration-200 animate-pulse-glow hover-lift"
          >
            로그인
          </a>

          <a
            href="/auth/signup"
            className="block w-full bg-gray-100 text-gray-700 font-medium py-4 px-8 rounded-xl text-base hover:bg-gray-200 transition-colors duration-200 hover-lift"
          >
            회원가입
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            AI가 분석한 완벽한 이상형 매칭 서비스
          </p>
        </div>
      </div>
    </div>
  )
}