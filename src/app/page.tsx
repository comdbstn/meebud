'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'
import MatchingStatus, { MatchingStatusType } from '@/components/MatchingStatus'
import MatchingNews from '@/components/MatchingNews'
import { LinkButton, Card, H1, H2, H4, P, Small } from '@/components/ui'
import { useAuth, useMatching, useNotifications } from '@/contexts/AppContext'
import { dummyNotifications } from '@/data/dummyData'
import { PageLoading } from '@/components/LoadingSpinner'
import OnboardingFlow, { useOnboarding } from '@/components/OnboardingFlow'
import { useDemoFlow, LiveStats, ProgressTracker } from '@/components/DemoFlow'

export default function HomePage() {
  const { isAuthenticated, user, isLoading, logout } = useAuth()
  const { currentMatch, matchHistory } = useMatching()
  const { notifications, addNotification } = useNotifications()
  const { isCompleted: onboardingCompleted } = useOnboarding()
  const { simulateMatchingFlow, simulateLiveUpdates } = useDemoFlow()

  useEffect(() => {
    // 초기 알림 로드 및 데모 플로우 시작
    if (isAuthenticated && user && notifications.length === 0) {
      dummyNotifications.forEach(notif => {
        addNotification(notif.type, notif.message)
      })

      // 데모 플로우 시작
      simulateMatchingFlow()
      simulateLiveUpdates()
    }
  }, [isAuthenticated, user, isLoading, notifications.length, addNotification, simulateMatchingFlow, simulateLiveUpdates])

  // 매칭 상태 결정 로직
  const getMatchingStatus = (): MatchingStatusType => {
    if (!user) return 'profile_incomplete'
    if (!user.isProfileComplete) return 'profile_incomplete'
    if (currentMatch) return 'matched'
    if (matchHistory.length > 0) return 'waiting_for_match'
    return 'profile_complete'
  }

  const matchingStatus = getMatchingStatus()

  if (isLoading) {
    return <PageLoading message="MEE'BUD를 준비하고 있어요..." />
  }

  if (isAuthenticated) {
    // 새로운 매칭 상태별 대시보드
    return (
      <div className="min-h-screen bg-[#F8FAFB]">
        {/* 온보딩 플로우 */}
        {!onboardingCompleted && <OnboardingFlow />}
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
                onClick={logout}
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
            matchedProfile={currentMatch ? {
              name: currentMatch.matchedUser.name,
              age: currentMatch.matchedUser.age,
              job: currentMatch.matchedUser.job,
              mbti: currentMatch.matchedUser.mbti,
              compatibility: currentMatch.compatibility
            } : undefined}
          />

          {/* 진행 상황 추적 */}
          <ProgressTracker />

          {/* 실시간 통계 */}
          <LiveStats />

          {/* 다른 사용자 매칭 소식 */}
          <MatchingNews />

          {/* 퀵 액션 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card variant="hover" padding="md" className="text-center">
              <Link href="/dreams" className="block">
                <div className="text-2xl mb-2">☁️</div>
                <H4 className="text-sm mb-1">꿈결제</H4>
                <Small>포인트 관리</Small>
              </Link>
            </Card>

            <Card variant="hover" padding="md" className="text-center">
              <Link href="/profile" className="block">
                <div className="text-2xl mb-2">👤</div>
                <H4 className="text-sm mb-1">프로필</H4>
                <Small>내 정보 관리</Small>
              </Link>
            </Card>
          </div>

          {/* 상태별 추가 정보 */}
          {matchingStatus === 'matched' && (
            <div className="bg-gradient-to-r from-[#FF4D8D] to-[#C49A6C] rounded-2xl p-4 text-white text-center mb-6">
              <div className="text-lg mb-1">🎉</div>
              <div className="font-bold text-sm mb-1">축하합니다!</div>
              <div className="text-xs opacity-90">AI가 선별한 최고의 매칭을 확인해보세요</div>
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
            <H1>
              MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
            </H1>
          </div>
        </div>

        {/* 히어로 섹션 */}
        <Card variant="gradient" padding="lg" className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white mb-6 shadow-lg">
          <div className="text-3xl mb-2">✨</div>
          <H2 className="text-white mb-2">진짜 매칭의 시작</H2>
          <P className="text-pink-100 mb-4">
            10,245명의 인증회원과 함께하고 있어요!
          </P>
          <LinkButton
            href="/auth/signup"
            variant="secondary"
            size="lg"
            className="bg-white text-[#0D1B2A] hover:bg-gray-50"
          >
            1분만에 무료 가입하기
          </LinkButton>
        </Card>

        {/* 서비스 자세히보기 버튼 추가 */}
        <div className="text-center mb-4">
          <LinkButton
            href="/welcome"
            variant="outline"
            size="lg"
            className="w-full"
          >
            서비스 자세히 보기
          </LinkButton>
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
      </div>
    </div>
  )
}