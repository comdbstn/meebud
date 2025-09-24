'use client'

import { useState } from 'react'
import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    occupation: '',
    education: '',
    height: '',
    bio: '',
    mbti: '',
    interests: [] as string[],
    photos: [] as string[]
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const interestOptions = [
    '여행', '영화감상', '독서', '요리', '운동', '음악감상',
    '카페', '전시회', '드라이브', '게임', '반려동물', '사진촬영'
  ]

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest].slice(0, 5) // 최대 5개
    }))
  }

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* 상단 탭 네비게이션 */}
      <TopTabNavigation />

      {/* 프로필 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#0D1B2A]">프로필 작성</h1>
            <div className="text-sm text-[#0D1B2A] opacity-70">
              {currentStep}/{totalSteps}단계
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 진행도 표시 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#0D1B2A] opacity-70">진행도</span>
            <span className="text-sm font-semibold text-[#FF4D8D]">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#FF4D8D] to-[#C49A6C] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* 안내 메시지 */}
        <div className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-2xl p-6 text-white mb-6">
          <h2 className="text-xl font-bold mb-2">기본 정보만 입력하세요!</h2>
          <p className="text-white opacity-80 text-sm leading-relaxed">
            입력하신 정보를 바탕으로 AI가<br/>
            매력적인 프로필을 완성해드립니다.
          </p>
        </div>

        {/* Step 1: 기본 정보 */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0D1B2A] mb-4">👤 기본 정보</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-2">이름</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] text-[#0D1B2A]"
                    placeholder="실명을 입력해주세요"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0D1B2A] mb-2">나이</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] text-[#0D1B2A]"
                      placeholder="25"
                      min="18"
                      max="65"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0D1B2A] mb-2">키</label>
                    <input
                      type="text"
                      value={formData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] text-[#0D1B2A]"
                      placeholder="170cm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-2">지역</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] text-[#0D1B2A]"
                    placeholder="서울시 강남구"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: 직업/학력 정보 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0D1B2A] mb-4">🎓 직업 및 학력</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-2">직업</label>
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] text-[#0D1B2A]"
                    placeholder="직업을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-2">학력</label>
                  <select
                    value={formData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] text-[#0D1B2A]"
                  >
                    <option value="">학력을 선택해주세요</option>
                    <option value="고등학교 졸업">고등학교 졸업</option>
                    <option value="전문대 졸업">전문대 졸업</option>
                    <option value="대학교 졸업">대학교 졸업</option>
                    <option value="대학원 재학">대학원 재학</option>
                    <option value="대학원 졸업">대학원 졸업</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-2">MBTI (선택)</label>
                  <input
                    type="text"
                    value={formData.mbti}
                    onChange={(e) => handleInputChange('mbti', e.target.value.toUpperCase())}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] text-[#0D1B2A]"
                    placeholder="ENFP, ISTJ 등"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: 관심사 및 소개 */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0D1B2A] mb-4">🎯 관심사 (최대 5개)</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 py-2 rounded-full text-sm transition-all ${
                      formData.interests.includes(interest)
                        ? 'bg-[#FF4D8D] text-white'
                        : 'bg-gray-100 text-[#0D1B2A] hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0D1B2A] mb-2">간단한 자기소개</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] text-[#0D1B2A] resize-none"
                  placeholder="나를 한줄로 소개해주세요..."
                  rows={3}
                  maxLength={100}
                />
                <div className="text-xs text-[#0D1B2A] opacity-60 mt-1 text-right">
                  {formData.bio.length}/100
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 네비게이션 버튼 */}
        <div className="mt-8 flex space-x-3">
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="flex-1 bg-white border border-gray-300 text-[#0D1B2A] font-medium py-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              이전
            </button>
          )}

          {currentStep < totalSteps ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="flex-1 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all"
            >
              다음
            </button>
          ) : (
            <Link
              href="/profile/analysis"
              className="flex-1 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white font-semibold py-4 rounded-xl text-center hover:opacity-90 transition-all"
            >
              AI 검토 요청 →
            </Link>
          )}
        </div>

        {/* 안내 메시지 */}
        <div className="mt-6 bg-[#FF4D8D] bg-opacity-10 rounded-xl p-4 border border-[#FF4D8D] border-opacity-20">
          <h4 className="font-semibold text-[#0D1B2A] mb-2">💡 AI가 완성해드려요</h4>
          <ul className="text-sm text-[#0D1B2A] opacity-70 space-y-1">
            <li>• 입력된 정보로 매력적인 프로필 문구 자동 생성</li>
            <li>• MBTI와 관심사 기반 이상형 매칭 설정</li>
            <li>• 전문 작가 수준의 프로필 완성</li>
          </ul>
        </div>
      </div>
    </div>
  )
}