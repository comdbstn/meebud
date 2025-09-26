'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'
import { useAuth, useMatching, useNotifications } from '@/contexts/AppContext'
import { dummyMatches } from '@/data/dummyData'
import InteractiveButton from '@/components/InteractiveButton'
import { PageLoading } from '@/components/LoadingSpinner'

// AI가 생성한 매칭 데이터 타입
interface AIMatch {
  id: number
  matchedUser: {
    name: string
    age: number
    location: string
    job: string
    education: string
    height: number
    faceType: string
    mbti: string
    photos: string[]
    introduction: string
    personality: string[]
    hobbies: string[]
    isVerified: boolean
    distance: string
  }
  compatibility: number
  matchingReason: string
  aiAnalysis: string
  confidenceScore: number
  matchingFactors: string[]
  createdAt: string
  status: 'pending' | 'accepted' | 'declined'
}

// 샘플 AI 매칭 데이터 (향후 사용 예정)
const _aiMatches: AIMatch[] = [
  {
    id: 1,
    matchedUser: {
      name: '지수',
      age: 25,
      location: '서울 강남구',
      job: '디자이너',
      education: '홍익대학교 시각디자인과',
      height: 165,
      faceType: '고양이상',
      mbti: 'ENFP',
      photos: ['👩🏻', '📸', '📸'],
      introduction: '안녕하세요! 디자인을 사랑하는 지수입니다. 여행과 맛집 탐방을 좋아하고, 새로운 사람들과의 만남을 소중히 여겨요.',
      personality: ['유머러스한', '활발한', '로맨틱한', '외향적인'],
      hobbies: ['여행', '사진촬영', '요리', '영화감상'],
      isVerified: true,
      distance: '2.3km'
    },
    compatibility: 94,
    matchingReason: 'MBTI 궁합도와 라이프스타일 패턴 분석 결과 최적 매칭',
    aiAnalysis: 'MEE\'BUD AI가 1,247개의 매칭 데이터를 분석한 결과, 지수님과의 매칭 성공 확률이 94%로 측정되었습니다. 특히 창의적 성향과 여행 취향, 그리고 MBTI 상호 보완성이 뛰어나 장기적 관계 발전 가능성이 높습니다.',
    confidenceScore: 96,
    matchingFactors: ['MBTI 궁합 (ENFP↔INTJ)', '창의적 직업군', '여행 취향 일치', '나이 차이 적절', '거주지 근접'],
    createdAt: '2025-09-24T10:30:00Z',
    status: 'pending'
  }
]

export default function MatchingPage() {
  const { isAuthenticated, user } = useAuth()
  const { currentMatch, setCurrentMatch, addToHistory } = useMatching()
  const { addNotification } = useNotifications()
  const [showDetails, setShowDetails] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isAuthenticated && user) {
      // 더미 데이터에서 대기 중인 매칭 찾기
      const pendingMatch = dummyMatches.find(match => match.status === 'pending')
      if (pendingMatch && !currentMatch) {
        setCurrentMatch(pendingMatch)
      }
    }
    setLoading(false)
  }, [isAuthenticated, user, currentMatch, setCurrentMatch])

  const handleMatchDecision = async (decision: 'accept' | 'decline') => {
    if (!currentMatch) return

    if (decision === 'accept') {
      // 매칭 수락 - 상태 업데이트
      const updatedMatch = { ...currentMatch, status: 'accepted' as const }
      addToHistory(updatedMatch)
      addNotification('success', `${currentMatch.matchedUser.name}님과의 매칭을 수락했어요! 상대방 응답을 기다리고 있습니다.`)

      alert('매칭을 수락하셨습니다! 상대방도 수락하면 자동으로 결제됩니다.')
      window.location.href = '/dreams'
    } else {
      // 매칭 거절
      addNotification('info', 'AI가 새로운 최적 매칭을 찾고 있어요.')
      setCurrentMatch(null)
      alert('매칭을 거절하셨습니다. AI가 새로운 최적 매칭을 찾고 있어요.')
    }
  }

  if (loading) {
    return <PageLoading message="AI가 최적의 매칭을 분석하고 있어요..." />
  }

  if (!currentMatch) {
    return (
      <div className="min-h-screen bg-[#F8FAFB]">
        <TopTabNavigation />

        <div className="max-w-sm mx-auto px-4 py-6">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-[#0D1B2A] mb-2">🤖 AI 매칭</h1>
            <p className="text-sm text-[#0D1B2A] opacity-70">MEE&apos;BUD AI가 찾은 최적의 매칭을 확인하세요</p>
          </div>

          {/* AI 분석 중 상태 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white animate-pulse">🤖</span>
            </div>
            <h3 className="font-bold text-[#0D1B2A] mb-2">AI가 최적의 매칭을 분석 중입니다</h3>
            <p className="text-sm text-[#0D1B2A] opacity-70 mb-6">
              1,000+ 프로필 데이터를 분석하여<br />
              당신에게 가장 잘 맞는 상대를 찾고 있어요
            </p>
            <Link
              href="/"
              className="bg-[#FF4D8D] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#ff3080] transition-colors inline-block"
            >
              홈으로 돌아가기
            </Link>
          </div>

          {/* AI 매칭 프로세스 설명 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-6 border border-blue-200">
            <h4 className="font-semibold text-[#0D1B2A] mb-3">🤖 AI 매칭 프로세스</h4>
            <div className="space-y-3 text-sm text-[#0D1B2A] opacity-70">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#0D1B2A] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">1</span>
                </div>
                <span>프로필 데이터 딥러닝 분석 (MBTI, 취향, 라이프스타일)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#0D1B2A] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">2</span>
                </div>
                <span>1,000+ 매칭 성공 사례 기반 궁합도 측정</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF4D8D] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">3</span>
                </div>
                <span>최적 매칭 후보 선별 및 상세 분석 제공</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // AI 매칭 확인 페이지
  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      <TopTabNavigation />

      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-[#0D1B2A] mb-2">🤖 AI 매칭 결과</h1>
          <p className="text-sm text-[#0D1B2A] opacity-70">MEE&apos;BUD AI가 분석한 최적의 매칭입니다</p>
        </div>

        {/* AI 매칭 카드 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          {/* AI 분석 헤더 */}
          <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">🤖</span>
                </div>
                <span className="font-semibold text-sm">AI 매칭</span>
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                  신뢰도 {currentMatch.confidenceScore}%
                </div>
              </div>
              <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                {currentMatch.compatibility}% 궁합
              </div>
            </div>
            <p className="text-sm text-pink-100">
              {currentMatch.matchingReason}
            </p>
          </div>

          {/* 인증 배지 */}
          {currentMatch.matchedUser.isVerified && (
            <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white p-1 rounded-full">
              <span className="text-xs">✓</span>
            </div>
          )}

          {/* 사진 영역 */}
          <div className="relative h-64 bg-gradient-to-br from-[#FF4D8D] to-[#C49A6C] flex items-center justify-center">
            <div className="text-5xl">{currentMatch.matchedUser.photos[0]}</div>

            {/* 거리 표시 */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
              📍 {currentMatch.matchedUser.distance}
            </div>
          </div>

          {/* 기본 정보 */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-[#0D1B2A]">
                  {currentMatch.matchedUser.name}님, {currentMatch.matchedUser.age}세
                </h2>
                <p className="text-sm text-[#0D1B2A] opacity-70">{currentMatch.matchedUser.location}</p>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-[#FF4D8D] hover:text-[#ff3080] font-medium text-sm"
              >
                {showDetails ? '간단히' : '자세히'} →
              </button>
            </div>

            {/* 기본 태그들 */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-pink-100 text-[#FF4D8D] px-3 py-1 rounded-full text-sm font-medium">
                {currentMatch.matchedUser.faceType}
              </span>
              <span className="bg-blue-100 text-[#0D1B2A] px-3 py-1 rounded-full text-sm font-medium">
                {currentMatch.matchedUser.mbti}
              </span>
              <span className="bg-gray-100 text-[#0D1B2A] opacity-80 px-3 py-1 rounded-full text-sm">
                {currentMatch.matchedUser.height}cm
              </span>
              <span className="bg-gray-100 text-[#0D1B2A] opacity-80 px-3 py-1 rounded-full text-sm">
                {currentMatch.matchedUser.job}
              </span>
            </div>

            {/* AI 분석 결과 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4 border border-blue-200">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">🤖</span>
                </div>
                <span className="font-semibold text-[#0D1B2A] text-sm">MEE&apos;BUD AI 분석</span>
              </div>
              <p className="text-sm text-[#0D1B2A] opacity-80 leading-relaxed mb-3">
                {currentMatch.aiAnalysis}
              </p>

              {/* AI 매칭 요소들 */}
              <div>
                <h4 className="font-semibold text-[#0D1B2A] text-xs mb-2">주요 매칭 요소</h4>
                <div className="flex flex-wrap gap-1">
                  {currentMatch.matchingFactors.map((factor, index) => (
                    <span key={index} className="bg-blue-100 text-[#0D1B2A] px-2 py-1 rounded-full text-xs">
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 상세 정보 (토글) */}
            {showDetails && (
              <div className="space-y-4 border-t border-slate-200 pt-4">
                <div>
                  <h3 className="font-semibold text-[#0D1B2A] mb-2">자기소개</h3>
                  <p className="text-sm text-[#0D1B2A] opacity-80 leading-relaxed">
                    {currentMatch.matchedUser.introduction}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0D1B2A] mb-2">성격</h3>
                  <div className="flex flex-wrap gap-1">
                    {currentMatch.matchedUser.personality.map((trait, index) => (
                      <span key={index} className="bg-pink-100 text-[#FF4D8D] px-2 py-1 rounded text-xs">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0D1B2A] mb-2">취미</h3>
                  <div className="flex flex-wrap gap-1">
                    {currentMatch.matchedUser.hobbies.map((hobby, index) => (
                      <span key={index} className="bg-green-100 text-[#C49A6C] px-2 py-1 rounded text-xs">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0D1B2A] mb-2">학력</h3>
                  <p className="text-sm text-[#0D1B2A] opacity-80">{currentMatch.matchedUser.education}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 수락/거절 버튼 */}
        <div className="flex space-x-4 mb-6">
          <InteractiveButton
            variant="outline"
            size="lg"
            onClick={() => handleMatchDecision('decline')}
            className="flex-1 flex flex-col items-center space-y-1"
          >
            <div className="text-xl">😔</div>
            <div className="text-sm">다음에요</div>
          </InteractiveButton>

          <InteractiveButton
            variant="secondary"
            size="lg"
            onClick={() => handleMatchDecision('accept')}
            className="flex-1 flex flex-col items-center space-y-1 shadow-lg"
          >
            <div className="text-xl">💜</div>
            <div className="text-sm">매칭 수락하기</div>
          </InteractiveButton>
        </div>

        {/* AI 매칭 안내 메시지 */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
          <h4 className="font-semibold text-[#0D1B2A] mb-2 flex items-center">
            <span className="mr-2">🤖</span>
            AI 매칭 성사형 후불제
          </h4>
          <div className="text-sm text-[#0D1B2A] opacity-80 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-[#FF4D8D] rounded-full"></span>
              <span>AI가 분석한 {currentMatch.compatibility}% 궁합도 매칭</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-[#FF4D8D] rounded-full"></span>
              <span>양쪽 모두 수락 시 자동으로 ₩9,900 결제</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-[#FF4D8D] rounded-full"></span>
              <span>매칭 실패 시 결제 없음 (완전 무료)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}