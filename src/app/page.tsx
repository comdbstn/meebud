'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 로그인 상태 확인
    const authStatus = sessionStorage.getItem('user_authenticated')
    const email = sessionStorage.getItem('user_email')

    if (authStatus === 'true' && email) {
      setIsAuthenticated(true)
      setUserEmail(email)
    }
    setLoading(false)
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('user_authenticated')
    sessionStorage.removeItem('user_email')
    setIsAuthenticated(false)
    setUserEmail('')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D8D]"></div>
      </div>
    )
  }

  if (isAuthenticated) {
    // 로그인된 사용자를 위한 대시보드
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-900">MEE&apos;BUD</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{userEmail}</span>
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  로그아웃
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              환영합니다! 🎉
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              AI가 분석한 완벽한 이상형을 만나보세요
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/matching"
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">매칭</h3>
                <p className="text-sm text-gray-600">AI 추천 이상형을 만나보세요</p>
              </div>
            </Link>

            <Link
              href="/messages"
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">메시지</h3>
                <p className="text-sm text-gray-600">매칭된 상대와 대화하기</p>
              </div>
            </Link>

            <Link
              href="/profile"
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">프로필</h3>
                <p className="text-sm text-gray-600">내 정보 관리하기</p>
              </div>
            </Link>

            <Link
              href="/dreams"
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">꿈</h3>
                <p className="text-sm text-gray-600">포인트 및 결제 관리</p>
              </div>
            </Link>
          </div>

          {/* Recent Activity */}
          <div className="mt-12 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 활동</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">새로운 매칭 후보가 도착했습니다</span>
                <span className="text-xs text-gray-500 ml-auto">5분 전</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">프로필 인증이 완료되었습니다</span>
                <span className="text-xs text-gray-500 ml-auto">1시간 전</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700">MEE&apos;BUD에 가입해주셔서 감사합니다!</span>
                <span className="text-xs text-gray-500 ml-auto">1일 전</span>
              </div>
            </div>
          </div>
        </div>
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
          <p className="text-base text-gray-600 font-medium mb-6">
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