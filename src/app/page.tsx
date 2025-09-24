'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'
import MatchingStatus, { MatchingStatusType } from '@/components/MatchingStatus'
import MatchingNews from '@/components/MatchingNews'

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [_userEmail, _setUserEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [matchingStatus, setMatchingStatus] = useState<MatchingStatusType>('profile_incomplete')

  useEffect(() => {
    // 로그인 상태 확인
    const authStatus = sessionStorage.getItem('user_authenticated')
    const email = sessionStorage.getItem('user_email')

    if (authStatus === 'true' && email) {
      setIsAuthenticated(true)
      _setUserEmail(email)

      // TODO: 실제로는 API에서 사용자의 매칭 상태를 가져와야 함
      // 데모용으로 다양한 상태를 보여주기 위해 랜덤으로 설정
      const demoStatuses: MatchingStatusType[] = ['profile_incomplete', 'ready_to_start', 'matching', 'matched']
      const randomStatus = demoStatuses[Math.floor(Math.random() * demoStatuses.length)]
      setMatchingStatus(randomStatus)
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D8D]"></div>
      </div>
    )
  }

  if (isAuthenticated) {
    // 새로운 매칭 상태별 대시보드
    return (
      <div className="min-h-screen bg-[#F8FAFB]">
        {/* 상단 탭 네비게이션 */}
        <TopTabNavigation />

        {/* 브랜드 헤더 */}
        <div className="bg-white shadow-sm">
          <div className="max-w-sm mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">💜</span>
                </div>
                <h1 className="text-lg font-bold text-[#0D1B2A]">
                  MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
                </h1>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs text-[#0D1B2A] opacity-70 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="max-w-sm mx-auto px-4 py-6">
          {/* 매칭 상태별 메인 섹션 */}
          <MatchingStatus
            status={matchingStatus}
            matchedProfile={matchingStatus === 'matched' ? {
              name: '수진',
              age: 25,
              job: '디자이너',
              mbti: 'ENFP',
              compatibility: 94
            } : undefined}
          />

          {/* 다른 사용자 매칭 소식 */}
          <MatchingNews />

          {/* 통계 카드 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
            <div className="text-center mb-4">
              <h3 className="font-bold text-[#0D1B2A] mb-1">지금까지
                <span className="text-[#FF4D8D]"> 1,247개</span>의
              </h3>
              <p className="text-sm text-[#0D1B2A] opacity-70">성공적인 매칭이 이루어졌어요.</p>
            </div>

            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">💝</span>
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
              <div className="font-medium text-[#0D1B2A] text-sm">꿈결제</div>
              <div className="text-xs text-[#0D1B2A] opacity-60">포인트 관리</div>
            </Link>

            <Link
              href="/profile"
              className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">👤</div>
              <div className="font-medium text-[#0D1B2A] text-sm">프로필</div>
              <div className="text-xs text-[#0D1B2A] opacity-60">내 정보 관리</div>
            </Link>
          </div>

          {/* 상태별 추가 정보 */}
          {matchingStatus === 'matched' && (
            <div className="bg-gradient-to-r from-[#FF4D8D] to-[#C49A6C] rounded-2xl p-4 text-white text-center mb-6">
              <div className="text-lg mb-1">🎉</div>
              <div className="font-bold text-sm mb-1">축하합니다!</div>
              <div className="text-xs opacity-90">Admin이 선별한 최고의 매칭을 확인해보세요</div>
            </div>
          )}

          {matchingStatus === 'profile_incomplete' && (
            <div className="bg-gradient-to-r from-[#C49A6C] to-[#FF4D8D] rounded-2xl p-4 text-white text-center">
              <div className="text-lg mb-1">⚡</div>
              <div className="font-bold text-sm mb-1">프로필 완성 혜택</div>
              <div className="text-xs opacity-90">첫 매칭 성사 시 50% 할인!</div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // 비로그인 사용자용 프리미엄 스타일 랜딩
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFB] to-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-sm mx-auto">
        {/* 브랜드 로고 */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">💜</span>
            </div>
            <h1 className="text-3xl font-bold text-[#0D1B2A]">
              MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
            </h1>
          </div>
        </div>

        {/* 히어로 섹션 */}
        <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-2xl p-8 text-white mb-6 shadow-lg">
          <div className="text-3xl mb-2">✨</div>
          <h2 className="text-xl font-bold mb-2">진짜 매칭의 시작</h2>
          <p className="text-sm text-pink-100 mb-4">
            10,245명의 인증회원과 함께하고 있어요!
          </p>
          <Link
            href="/auth/signup"
            className="bg-white text-[#0D1B2A] font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors inline-block shadow-sm"
          >
            1분만에 무료 가입하기
          </Link>
        </div>

        {/* 로그인 링크 */}
        <div className="text-center mb-6">
          <p className="text-sm text-[#6B7280]">이미 계정이 있다면?</p>
          <Link
            href="/auth/login"
            className="text-[#FF4D8D] font-semibold hover:text-[#ff3080] transition-colors"
          >
            로그인하기
          </Link>
        </div>

        {/* 통계 카드 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="text-center mb-4">
            <h3 className="font-bold text-[#0D1B2A] mb-1">지금까지
              <span className="text-[#FF4D8D]"> 1,247개</span>의
            </h3>
            <p className="text-sm text-[#6B7280]">성공적인 매칭이 이루어졌어요.</p>
          </div>

          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#C49A6C] to-[#FF4D8D] rounded-2xl flex items-center justify-center opacity-90">
              <span className="text-4xl">💝</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}