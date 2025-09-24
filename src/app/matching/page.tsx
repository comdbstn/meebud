'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

// Admin이 생성한 매칭 데이터 타입
interface AdminMatch {
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
  adminAnalysis: string
  createdAt: string
  status: 'pending' | 'accepted' | 'declined'
}

// 샘플 Admin 매칭 데이터
const adminMatches: AdminMatch[] = [
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
    matchingReason: '서로 보완적인 성격과 창의적 분야 공통 관심사',
    adminAnalysis: '지수님은 당신과 매우 잘 맞는 상대입니다. 둘 다 창의적인 분야에서 일하시며, 외향적인 성격과 내향적인 성격이 서로 균형을 이룰 것 같아요. 특히 여행과 문화적 관심사가 비슷해서 즐거운 시간을 보낼 수 있을 거예요.',
    createdAt: '2025-09-24T10:30:00Z',
    status: 'pending'
  }
]

export default function MatchingPage() {
  const [currentMatch, setCurrentMatch] = useState<AdminMatch | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 실제로는 API에서 사용자의 대기 중인 매칭을 가져와야 함
    // 데모용으로 첫 번째 매칭 사용
    const pendingMatch = adminMatches.find(match => match.status === 'pending')
    setCurrentMatch(pendingMatch || null)
    setLoading(false)
  }, [])

  const handleMatchDecision = async (decision: 'accept' | 'decline') => {
    if (!currentMatch) return

    if (decision === 'accept') {
      // 매칭 수락 - 결제 페이지로 이동
      alert('매칭을 수락하셨습니다! 결제를 진행해주세요.')
      window.location.href = '/dreams/purchase'
    } else {
      // 매칭 거절
      alert('매칭을 거절하셨습니다. 새로운 매칭을 기다려주세요.')
      setCurrentMatch(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D8D]"></div>
      </div>
    )
  }

  if (!currentMatch) {
    return (
      <div className="min-h-screen bg-[#F8FAFB]">
        <TopTabNavigation />

        <div className="max-w-sm mx-auto px-4 py-6">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-[#0D1B2A] mb-2">매칭 확인</h1>
            <p className="text-sm text-[#0D1B2A] opacity-70">Admin이 선별한 매칭을 확인하세요</p>
          </div>

          {/* 매칭 없음 상태 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏳</span>
            </div>
            <h3 className="font-bold text-[#0D1B2A] mb-2">대기 중인 매칭이 없습니다</h3>
            <p className="text-sm text-[#0D1B2A] opacity-70 mb-6">
              Admin이 최적의 상대를 찾고 있어요.<br />
              보통 24-48시간 이내에 매칭 결과를 알려드립니다.
            </p>
            <Link
              href="/"
              className="bg-[#FF4D8D] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#ff3080] transition-colors inline-block"
            >
              홈으로 돌아가기
            </Link>
          </div>

          {/* 매칭 프로세스 설명 */}
          <div className="bg-slate-50 rounded-2xl p-6 mt-6 border border-slate-100">
            <h4 className="font-semibold text-[#0D1B2A] mb-3">🔍 매칭 프로세스</h4>
            <div className="space-y-2 text-sm text-[#0D1B2A] opacity-70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FF4D8D] rounded-full"></div>
                <span>Admin이 프로필 분석 및 호환성 검토</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FF4D8D] rounded-full"></div>
                <span>최적의 상대 선별 및 매칭 생성</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FF4D8D] rounded-full"></div>
                <span>매칭 결과 알림 및 상대방 프로필 공개</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Admin 매칭 확인 페이지
  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      <TopTabNavigation />

      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-[#0D1B2A] mb-2">매칭 확인</h1>
          <p className="text-sm text-[#0D1B2A] opacity-70">Admin이 선별한 최적의 매칭입니다</p>
        </div>

        {/* Admin 매칭 카드 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          {/* Admin 분석 헤더 */}
          <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">👨‍💼</span>
                </div>
                <span className="font-semibold text-sm">Admin 큐레이팅</span>
              </div>
              <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                {currentMatch.compatibility}% 호환
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

            {/* Admin 분석 */}
            <div className="bg-pink-50 rounded-xl p-4 mb-4 border border-pink-100">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 bg-[#FF4D8D] rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">AI</span>
                </div>
                <span className="font-semibold text-[#0D1B2A] text-sm">Admin 분석 결과</span>
              </div>
              <p className="text-sm text-[#0D1B2A] opacity-80 leading-relaxed">
                {currentMatch.adminAnalysis}
              </p>
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
          <button
            onClick={() => handleMatchDecision('decline')}
            className="flex-1 bg-white border-2 border-gray-300 text-[#0D1B2A] opacity-80 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center"
          >
            <div className="text-xl mb-1">😔</div>
            <div className="text-sm">다음에요</div>
          </button>

          <button
            onClick={() => handleMatchDecision('accept')}
            className="flex-1 bg-gradient-to-r from-[#FF4D8D] to-[#C49A6C] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#ff3080] hover:to-[#b8885d] transition-all text-center shadow-lg"
          >
            <div className="text-xl mb-1">💜</div>
            <div className="text-sm">매칭 수락하기</div>
          </button>
        </div>

        {/* 안내 메시지 */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
          <h4 className="font-semibold text-[#0D1B2A] mb-2 flex items-center">
            <span className="mr-2">💡</span>
            매칭 수락 후 프로세스
          </h4>
          <div className="text-sm text-[#0D1B2A] opacity-80 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-[#FF4D8D] rounded-full"></span>
              <span>매칭 수락 → 결제 진행 → 메시지 시작</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-[#FF4D8D] rounded-full"></span>
              <span>상대방도 수락해야 최종 매칭 완료</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-[#FF4D8D] rounded-full"></span>
              <span>양쪽 모두 수락 시에만 결제됩니다</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}