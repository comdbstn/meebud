'use client'

import { useState } from 'react'
import Link from 'next/link'

// 샘플 매칭 데이터
const sampleMatches = [
  {
    id: 1,
    name: '지수',
    age: 25,
    location: '서울 강남구',
    job: '디자이너',
    education: '대학교 졸업',
    height: 165,
    faceType: '고양이상',
    mbti: 'ENFP',
    photos: ['👩🏻', '📸', '📸'],
    introduction: '안녕하세요! 디자인을 사랑하는 지수입니다. 여행과 맛집 탐방을 좋아하고, 새로운 사람들과의 만남을 소중히 여겨요.',
    personality: ['유머러스한', '활발한', '로맨틱한', '외향적인'],
    hobbies: ['여행', '사진촬영', '요리', '영화감상'],
    compatibility: 95,
    isVerified: true,
    distance: '2.3km'
  },
  {
    id: 2,
    name: '민준',
    age: 28,
    location: '서울 서초구',
    job: '개발자',
    education: '대학교 졸업',
    height: 175,
    faceType: '강아지상',
    mbti: 'INFP',
    photos: ['👨🏻', '📸', '📸'],
    introduction: '개발을 하면서도 예술을 사랑하는 민준입니다. 조용한 카페에서 책 읽는 시간을 좋아하고, 진솔한 대화를 나누고 싶어요.',
    personality: ['진중한', '차분한', '감성적인', '내향적인'],
    hobbies: ['독서', '음악감상', '게임', '영화감상'],
    compatibility: 87,
    isVerified: false,
    distance: '1.8km'
  },
  {
    id: 3,
    name: '하은',
    age: 24,
    location: '서울 홍대',
    job: '학생',
    education: '대학교 재학',
    height: 160,
    faceType: '여우상',
    mbti: 'ESFJ',
    photos: ['👩🏻‍🦰', '📸', '📸'],
    introduction: '대학생 하은이에요! 춤과 음악을 사랑하고, 활기찬 에너지로 가득한 사람입니다. 함께 즐거운 시간을 만들어가요.',
    personality: ['활발한', '유머러스한', '외향적인', '즉흥적인'],
    hobbies: ['댄스', '음악감상', '여행', '운동'],
    compatibility: 82,
    isVerified: true,
    distance: '5.1km'
  }
]

export default function MatchingPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<'like' | 'pass' | null>(null)

  const currentMatch = sampleMatches[currentIndex]

  const handleSwipe = (direction: 'like' | 'pass') => {
    setSwipeDirection(direction)

    // 애니메이션 후 다음 카드로
    setTimeout(() => {
      if (currentIndex < sampleMatches.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        // 모든 카드를 다 본 경우
        alert('오늘의 추천이 끝났어요! 내일 새로운 매칭을 확인해보세요.')
        window.location.href = '/'
      }
      setSwipeDirection(null)
      setShowDetails(false)
    }, 300)
  }

  const handleSuperLike = () => {
    alert('슈퍼 라이크를 보냈어요! 상대방에게 특별한 관심을 표시했습니다.')
    handleSwipe('like')
  }

  if (!currentMatch) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            오늘의 추천 완료!
          </h1>
          <p className="text-gray-700 mb-8">
            내일 새로운 매칭을 확인해보세요
          </p>
          <Link href="/" className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-8">
      <div className="max-w-sm mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-gray-700 hover:text-gray-800">
            ← 뒤로가기
          </Link>
          <h1 className="text-lg font-bold text-gray-800">
            AI 추천 매칭
          </h1>
          <div className="text-sm text-gray-600">
            {currentIndex + 1}/{sampleMatches.length}
          </div>
        </div>

        {/* 매칭 카드 */}
        <div className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${
          swipeDirection === 'like' ? 'transform translate-x-full opacity-0' :
          swipeDirection === 'pass' ? 'transform -translate-x-full opacity-0' : ''
        }`}>

          {/* 궁합도 배지 */}
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            궁합도 {currentMatch.compatibility}%
          </div>

          {/* 인증 배지 */}
          {currentMatch.isVerified && (
            <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white p-1 rounded-full">
              <span className="text-xs">✓</span>
            </div>
          )}

          {/* 사진 영역 */}
          <div className="relative h-80 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <div className="text-6xl">{currentMatch.photos[0]}</div>

            {/* 사진 인디케이터 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {currentMatch.photos.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/50'}`}></div>
              ))}
            </div>

            {/* 거리 표시 */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
              📍 {currentMatch.distance}
            </div>
          </div>

          {/* 기본 정보 */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {currentMatch.name}, {currentMatch.age}
                </h2>
                <p className="text-gray-700">{currentMatch.location}</p>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                {showDetails ? '간단히' : '자세히'} →
              </button>
            </div>

            {/* 기본 태그들 */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {currentMatch.faceType}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {currentMatch.mbti}
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {currentMatch.height}cm
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {currentMatch.job}
              </span>
            </div>

            {/* 상세 정보 (토글) */}
            {showDetails && (
              <div className="space-y-4 border-t border-gray-200 pt-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">자기소개</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {currentMatch.introduction}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">성격</h3>
                  <div className="flex flex-wrap gap-1">
                    {currentMatch.personality.map((trait, index) => (
                      <span key={index} className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">취미</h3>
                  <div className="flex flex-wrap gap-1">
                    {currentMatch.hobbies.map((hobby, index) => (
                      <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          {/* 패스 */}
          <button
            onClick={() => handleSwipe('pass')}
            className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-2xl hover:border-gray-400 transition-colors shadow-lg"
          >
            ✕
          </button>

          {/* 슈퍼 라이크 */}
          <button
            onClick={handleSuperLike}
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-xl text-white hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg"
          >
            ⭐
          </button>

          {/* 라이크 */}
          <button
            onClick={() => handleSwipe('like')}
            className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-2xl text-white hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg"
          >
            💜
          </button>
        </div>

        {/* 버튼 설명 */}
        <div className="flex items-center justify-center space-x-8 mt-4 text-xs text-gray-600">
          <span>패스</span>
          <span>슈퍼라이크</span>
          <span>좋아요</span>
        </div>

        {/* 팁 */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
          <h4 className="font-semibold text-purple-800 mb-2">💡 매칭 팁</h4>
          <ul className="text-sm text-purple-700 space-y-1">
            <li>• 서로 좋아요를 누르면 매칭이 성사돼요</li>
            <li>• 슈퍼라이크는 상대방에게 우선 노출됩니다</li>
            <li>• 매칭 성사 시에만 결제가 진행돼요</li>
          </ul>
        </div>

        {/* 추가 액션 */}
        <div className="flex space-x-3 mt-6">
          <Link
            href="/matching/history"
            className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium text-center hover:bg-gray-50 transition-colors"
          >
            매칭 히스토리
          </Link>
          <Link
            href="/messages"
            className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-xl font-medium text-center hover:bg-purple-700 transition-colors"
          >
            메시지함
          </Link>
        </div>
      </div>
    </div>
  )
}