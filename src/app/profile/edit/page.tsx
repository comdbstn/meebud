'use client'

import { useState } from 'react'
import Link from 'next/link'
import BottomNavigation from '@/components/BottomNavigation'

export default function EditProfilePage() {
  const [activeTab, setActiveTab] = useState<'basic' | 'photos' | 'preferences'>('basic')

  // 기존 프로필 데이터 (실제로는 API에서 가져올 데이터)
  const [profile, setProfile] = useState({
    name: '김지수',
    age: 25,
    height: 165,
    job: '디자이너',
    education: '대학교 졸업',
    location: '서울 강남구',
    introduction: '안녕하세요! 디자인을 사랑하는 지수입니다.',
    personality: ['유머러스한', '활발한', '로맨틱한'],
    hobbies: ['여행', '사진촬영', '요리'],
    mbti: 'ENFP',
    idealAgeMin: 22,
    idealAgeMax: 32,
    idealTypes: ['강아지상', '여우상']
  })

  const handleSave = () => {
    // TODO: 백엔드로 프로필 업데이트 전송
    // console.log('Saving profile:', profile)
    alert('프로필이 업데이트되었어요! 🎉')
  }

  const personalityOptions = [
    '유머러스한', '진중한', '활발한', '차분한', '로맨틱한', '현실적인',
    '외향적인', '내향적인', '계획적인', '즉흥적인', '감성적인', '논리적인'
  ]

  const hobbyOptions = [
    '영화감상', '음악감상', '독서', '운동', '요리', '여행',
    '게임', '사진촬영', '그림그리기', '악기연주', '댄스', '등산'
  ]

  const idealTypeOptions = [
    '강아지상', '고양이상', '여우상', '곰상', '토끼상', '늑대상'
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFB] pb-20">
      <div className="max-w-sm mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-gray-800">
            프로필 수정
          </h1>
          <button
            onClick={handleSave}
            className="text-[#FF4D8D] font-semibold hover:text-[#ff3080]"
          >
            저장
          </button>
        </div>

        {/* 프로필 미리보기 */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 mb-6">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] flex items-center justify-center text-3xl mx-auto mb-3">
              👩🏻
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              {profile.name}, {profile.age}
            </h2>
            <p className="text-[#FF4D8D] font-medium">{profile.job}</p>
            <p className="text-sm text-gray-600">{profile.location}</p>

            <div className="flex justify-center space-x-2 mt-3">
              <span className="bg-pink-100 text-[#FF4D8D] px-3 py-1 rounded-full text-xs">
                고양이상 (AI 분석)
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                {profile.mbti}
              </span>
            </div>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="bg-white rounded-2xl p-1 shadow-lg border border-gray-100 mb-6">
          <div className="grid grid-cols-3 gap-1">
            <button
              onClick={() => setActiveTab('basic')}
              className={`py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'basic'
                  ? 'bg-[#FF4D8D] text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              기본정보
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'photos'
                  ? 'bg-[#FF4D8D] text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              사진관리
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'preferences'
                  ? 'bg-[#FF4D8D] text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              이상형
            </button>
          </div>
        </div>

        {/* 기본정보 탭 */}
        {activeTab === 'basic' && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                키 (cm)
              </label>
              <input
                type="number"
                value={profile.height}
                onChange={(e) => setProfile({...profile, height: parseInt(e.target.value)})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                직업
              </label>
              <input
                type="text"
                value={profile.job}
                onChange={(e) => setProfile({...profile, job: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                거주지역
              </label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({...profile, location: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                자기소개
              </label>
              <textarea
                value={profile.introduction}
                onChange={(e) => setProfile({...profile, introduction: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] resize-none"
                rows={4}
                maxLength={500}
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {profile.introduction.length}/500
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                성격 (최대 4개)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {personalityOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      if (profile.personality.includes(option)) {
                        setProfile({
                          ...profile,
                          personality: profile.personality.filter(p => p !== option)
                        })
                      } else if (profile.personality.length < 4) {
                        setProfile({
                          ...profile,
                          personality: [...profile.personality, option]
                        })
                      }
                    }}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      profile.personality.includes(option)
                        ? 'bg-[#FF4D8D] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                취미 (최대 6개)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {hobbyOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      if (profile.hobbies.includes(option)) {
                        setProfile({
                          ...profile,
                          hobbies: profile.hobbies.filter(h => h !== option)
                        })
                      } else if (profile.hobbies.length < 6) {
                        setProfile({
                          ...profile,
                          hobbies: [...profile.hobbies, option]
                        })
                      }
                    }}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      profile.hobbies.includes(option)
                        ? 'bg-[#FF4D8D] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                MBTI
              </label>
              <input
                type="text"
                value={profile.mbti}
                onChange={(e) => setProfile({...profile, mbti: e.target.value.toUpperCase()})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                placeholder="ENFP, INTJ 등"
                maxLength={4}
              />
            </div>
          </div>
        )}

        {/* 사진관리 탭 */}
        {activeTab === 'photos' && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">대표 사진</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#FF4D8D] transition-colors cursor-pointer">
                <div className="text-4xl mb-2">👩🏻</div>
                <p className="text-sm text-gray-600 mb-2">
                  현재 대표 사진
                </p>
                <button className="text-[#FF4D8D] text-sm font-medium hover:text-[#ff3080]">
                  사진 변경하기
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">추가 사진</h3>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-[#FF4D8D] transition-colors cursor-pointer aspect-square flex flex-col justify-center">
                    <div className="text-2xl mb-1">📸</div>
                    <p className="text-xs text-gray-500">사진 {index}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-4">
              <h4 className="font-semibold text-[#FF4D8D] mb-2">📸 사진 팁</h4>
              <ul className="text-sm text-[#0D1B2A] opacity-70 space-y-1">
                <li>• 얼굴이 잘 보이는 밝은 사진을 사용하세요</li>
                <li>• 전신 사진이 있으면 매칭률이 높아져요</li>
                <li>• 취미나 관심사가 드러나는 사진도 좋아요</li>
              </ul>
            </div>
          </div>
        )}

        {/* 이상형 탭 */}
        {activeTab === 'preferences' && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                선호 나이대
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="range"
                    min="18"
                    max="50"
                    value={profile.idealAgeMin}
                    onChange={(e) => setProfile({...profile, idealAgeMin: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="text-center text-sm text-gray-600 mt-1">
                    {profile.idealAgeMin}세
                  </div>
                </div>
                <span className="text-gray-500">~</span>
                <div className="flex-1">
                  <input
                    type="range"
                    min="18"
                    max="50"
                    value={profile.idealAgeMax}
                    onChange={(e) => setProfile({...profile, idealAgeMax: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="text-center text-sm text-gray-600 mt-1">
                    {profile.idealAgeMax}세
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                선호 얼굴상 (복수 선택 가능)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {idealTypeOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      if (profile.idealTypes.includes(option)) {
                        setProfile({
                          ...profile,
                          idealTypes: profile.idealTypes.filter(t => t !== option)
                        })
                      } else {
                        setProfile({
                          ...profile,
                          idealTypes: [...profile.idealTypes, option]
                        })
                      }
                    }}
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      profile.idealTypes.includes(option)
                        ? 'bg-[#FF4D8D] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option === '강아지상' && '🐶'}
                    {option === '고양이상' && '🐱'}
                    {option === '여우상' && '🦊'}
                    {option === '곰상' && '🐻'}
                    {option === '토끼상' && '🐰'}
                    {option === '늑대상' && '🐺'}
                    <br />
                    <span className="text-sm">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-4">
              <h4 className="font-semibold text-pink-800 mb-2">💡 이상형 설정 팁</h4>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• 너무 까다로운 조건보다는 열린 마음으로!</li>
                <li>• 얼굴상은 참고용이니 너무 제한하지 마세요</li>
                <li>• 설정을 바꿔가며 다양한 사람을 만나보세요</li>
              </ul>
            </div>
          </div>
        )}

        {/* 하단 액션 버튼들 */}
        <div className="mt-8 space-y-3">
          <Link
            href="/profile/analysis"
            className="block w-full bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white py-3 px-4 rounded-xl font-semibold text-center hover:opacity-90 transition-all"
          >
            🤖 AI 재분석 요청하기
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/matching"
              className="bg-[#FF4D8D] text-white py-3 px-4 rounded-xl font-medium text-center hover:bg-[#ff3080] transition-colors"
            >
              매칭 시작
            </Link>
            <Link
              href="/messages"
              className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium text-center hover:bg-gray-50 transition-colors"
            >
              메시지함
            </Link>
          </div>
        </div>

        {/* 계정 관리 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="space-y-3">
            <button className="w-full text-left text-gray-600 hover:text-gray-800 py-2">
              알림 설정
            </button>
            <button className="w-full text-left text-gray-600 hover:text-gray-800 py-2">
              차단 목록 관리
            </button>
            <button className="w-full text-left text-gray-600 hover:text-gray-800 py-2">
              계정 설정
            </button>
            <button className="w-full text-left text-red-600 hover:text-red-700 py-2">
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}