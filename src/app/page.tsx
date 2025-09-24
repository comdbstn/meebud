'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

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
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div>
      </div>
    )
  }

  if (isAuthenticated) {
    // yeonpick 스타일 메인 대시보드
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
        {/* 상단 탭 네비게이션 */}
        <TopTabNavigation />

        {/* 브랜드 헤더 */}
        <div className="bg-white shadow-sm">
          <div className="max-w-sm mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">💜</span>
                </div>
                <h1 className="text-lg font-bold text-slate-900">
                  MEE<span className="text-violet-600">&apos;</span>BUD
                </h1>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200 transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="max-w-sm mx-auto px-4 py-6">
          {/* 히어로 섹션 */}
          <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-8 text-center text-white mb-6">
            <div className="text-3xl mb-2">✨</div>
            <h2 className="text-xl font-bold mb-2">진짜 매칭의 시작</h2>
            <p className="text-sm text-violet-100 mb-4">
              10,245명의 인증회원과 함께하고 있어요!
            </p>
            <Link
              href="/matching"
              className="bg-white text-violet-600 font-semibold py-2 px-6 rounded-full hover:bg-violet-50 transition-colors inline-block"
            >
              매칭 시작하기
            </Link>
          </div>

          {/* 오늘의 매칭 카드 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">💝</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">오늘 새로운 3명이</h3>
              <p className="text-sm text-slate-600">당신에게 관심을 보였어요!</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-violet-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">👩🏻</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">지연님이 좋아요를 보냈어요</div>
                  <div className="text-xs text-slate-500">ENFP • 24세 • 디자이너</div>
                </div>
                <div className="bg-violet-100 text-violet-700 px-2 py-1 rounded-full text-xs font-medium">
                  95%
                </div>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/messages"
                  className="text-violet-600 font-medium text-sm hover:text-violet-700 transition-colors"
                >
                  모든 관심 보기 →
                </Link>
              </div>
            </div>
          </div>

          {/* 통계 카드 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
            <div className="text-center mb-4">
              <h3 className="font-bold text-slate-900 mb-1">지금까지
                <span className="text-violet-600"> 1,247개</span>의
              </h3>
              <p className="text-sm text-slate-600">성공적인 매칭이 이루어졌어요.</p>
            </div>

            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">🏠</span>
              </div>
            </div>
          </div>

          {/* 퀵 액션 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link
              href="/dreams"
              className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">☁️</div>
              <div className="font-medium text-slate-900 text-sm">꿈결제</div>
              <div className="text-xs text-slate-500">포인트 관리</div>
            </Link>

            <Link
              href="/profile"
              className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">👤</div>
              <div className="font-medium text-slate-900 text-sm">프로필</div>
              <div className="text-xs text-slate-500">내 정보 관리</div>
            </Link>
          </div>

          {/* 이벤트 배너 */}
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-4 text-white text-center">
            <div className="text-lg mb-1">🎁</div>
            <div className="font-bold text-sm mb-1">신규 가입 이벤트</div>
            <div className="text-xs opacity-90">첫 매칭 무료! 지금 바로 시작하세요</div>
          </div>
        </div>
      </div>
    )
  }

  // 비로그인 사용자용 yeonpick 스타일 랜딩
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-sm mx-auto">
        {/* 브랜드 로고 */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">💜</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">
              MEE<span className="text-violet-600">&apos;</span>BUD
            </h1>
          </div>
        </div>

        {/* 히어로 섹션 */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-8 text-white mb-6">
          <div className="text-3xl mb-2">✨</div>
          <h2 className="text-xl font-bold mb-2">진짜 매칭의 시작</h2>
          <p className="text-sm text-violet-100 mb-4">
            10,245명의 대학생과 함께하고 있어요!
          </p>
          <Link
            href="/auth/signup"
            className="bg-white text-violet-600 font-semibold py-2 px-6 rounded-full hover:bg-violet-50 transition-colors inline-block"
          >
            1분만에 무료 가입하기
          </Link>
        </div>

        {/* 로그인 링크 */}
        <div className="text-center mb-6">
          <p className="text-sm text-slate-600">이미 계정이 있다면?</p>
          <Link
            href="/auth/login"
            className="text-violet-600 font-medium hover:text-violet-700 transition-colors"
          >
            로그인하기
          </Link>
        </div>

        {/* 통계 카드 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="text-center mb-4">
            <h3 className="font-bold text-slate-900 mb-1">지금까지
              <span className="text-violet-600"> 1,247개</span>의
            </h3>
            <p className="text-sm text-slate-600">대학교와 함께 했어요.</p>
          </div>

          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🏠</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}