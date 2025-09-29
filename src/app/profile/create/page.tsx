'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CreateProfilePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // 기본 정보
    height: '',
    job: '',
    education: '',
    location: '',
    religion: '',
    smoking: '',
    drinking: '',

    // 외모 및 스타일
    profilePhoto: null as File | null,
    additionalPhotos: [] as File[],
    bodyType: '',
    style: '',

    // 성격 및 취미
    personality: [] as string[],
    hobbies: [] as string[],
    mbti: '',

    // 이상형
    idealAgeMin: 20,
    idealAgeMax: 35,
    idealHeight: '',
    idealType: [] as string[],

    // 자기소개
    introduction: '',

    // 인증 (선택사항)
    wantVerification: false,
    verificationTypes: [] as string[]
  })

  const totalSteps = 5

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // TODO: 백엔드 연동 시 실제 프로필 생성 로직
    // console.log('Profile created:', formData)

    // AI 분석 시뮬레이션
    setTimeout(() => {
      window.location.href = '/profile/analysis'
    }, 2000)
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
    <div className="min-h-screen bg-[#F8FAFB] px-4 py-8">
      <div className="max-w-sm mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            프로필 만들기
          </h1>
          <p className="text-gray-600">
            AI가 분석할 수 있도록 상세히 작성해주세요
          </p>
        </div>

        {/* 진행 바 */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-[#0D1B2A] mb-2">
            <span>진행률</span>
            <span>{currentStep}/{totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">

          {/* Step 1: 기본 정보 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">기본 정보</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  키 (cm)
                </label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                  placeholder="170"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  직업
                </label>
                <input
                  type="text"
                  value={formData.job}
                  onChange={(e) => setFormData({...formData, job: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                  placeholder="개발자, 디자이너, 학생 등"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  학력
                </label>
                <select
                  value={formData.education}
                  onChange={(e) => setFormData({...formData, education: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                >
                  <option value="">선택해주세요</option>
                  <option value="고등학교">고등학교 졸업</option>
                  <option value="대학교">대학교 재학/졸업</option>
                  <option value="대학원">대학원 재학/졸업</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  거주지역
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                  placeholder="서울 강남구"
                />
              </div>
            </div>
          )}

          {/* Step 2: 사진 업로드 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">사진 등록</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  대표 사진 <span className="text-red-500">(필수)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#FF4D8D] transition-colors cursor-pointer">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm text-gray-600 mb-2">
                    얼굴이 잘 보이는 사진을 업로드해주세요
                  </p>
                  <p className="text-xs text-gray-700">
                    AI가 얼굴상을 분석합니다
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) setFormData({...formData, profilePhoto: file})
                    }}
                    className="hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  추가 사진 (선택)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-[#FF4D8D] transition-colors cursor-pointer aspect-square flex flex-col justify-center">
                      <div className="text-2xl mb-1">📸</div>
                      <p className="text-xs text-gray-700">사진 {index}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-700 mt-2">
                  * 전신사진, 취미활동 사진 등을 추가하시면 매칭률이 높아져요
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="font-semibold text-[#FF4D8D] mb-2">🤖 AI 분석 예정</h3>
                <ul className="text-sm text-[#0D1B2A] opacity-70 space-y-1">
                  <li>• 얼굴형 분석 (강아지상, 고양이상 등)</li>
                  <li>• 눈매, 미소 스타일 분석</li>
                  <li>• 전체적인 분위기 파악</li>
                </ul>
              </div>
            </div>
          )}

          {/* Step 3: 성격 및 취미 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">성격 & 취미</h2>

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
                        if (formData.personality.includes(option)) {
                          setFormData({
                            ...formData,
                            personality: formData.personality.filter(p => p !== option)
                          })
                        } else if (formData.personality.length < 4) {
                          setFormData({
                            ...formData,
                            personality: [...formData.personality, option]
                          })
                        }
                      }}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        formData.personality.includes(option)
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
                        if (formData.hobbies.includes(option)) {
                          setFormData({
                            ...formData,
                            hobbies: formData.hobbies.filter(h => h !== option)
                          })
                        } else if (formData.hobbies.length < 6) {
                          setFormData({
                            ...formData,
                            hobbies: [...formData.hobbies, option]
                          })
                        }
                      }}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        formData.hobbies.includes(option)
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
                  MBTI (선택)
                </label>
                <input
                  type="text"
                  value={formData.mbti}
                  onChange={(e) => setFormData({...formData, mbti: e.target.value.toUpperCase()})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                  placeholder="ENFP, INTJ 등"
                  maxLength={4}
                />
              </div>
            </div>
          )}

          {/* Step 4: 이상형 */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">이상형 설정</h2>

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
                      value={formData.idealAgeMin}
                      onChange={(e) => setFormData({...formData, idealAgeMin: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-center text-sm text-gray-600 mt-1">
                      {formData.idealAgeMin}세
                    </div>
                  </div>
                  <span className="text-gray-700">~</span>
                  <div className="flex-1">
                    <input
                      type="range"
                      min="18"
                      max="50"
                      value={formData.idealAgeMax}
                      onChange={(e) => setFormData({...formData, idealAgeMax: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="text-center text-sm text-gray-600 mt-1">
                      {formData.idealAgeMax}세
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
                        if (formData.idealType.includes(option)) {
                          setFormData({
                            ...formData,
                            idealType: formData.idealType.filter(t => t !== option)
                          })
                        } else {
                          setFormData({
                            ...formData,
                            idealType: [...formData.idealType, option]
                          })
                        }
                      }}
                      className={`py-3 px-4 rounded-xl font-medium transition-all ${
                        formData.idealType.includes(option)
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
                <h3 className="font-semibold text-pink-800 mb-2">💕 AI 매칭 시스템</h3>
                <p className="text-sm text-pink-700">
                  입력하신 정보를 바탕으로 AI가 가장 잘 어울리는 상대를 찾아드려요!
                </p>
              </div>
            </div>
          )}

          {/* Step 5: 자기소개 & 완료 */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">자기소개</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  나를 소개해주세요
                </label>
                <textarea
                  value={formData.introduction}
                  onChange={(e) => setFormData({...formData, introduction: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] resize-none"
                  rows={4}
                  placeholder="안녕하세요! 저는..."
                  maxLength={500}
                />
                <div className="text-right text-xs text-gray-700 mt-1">
                  {formData.introduction.length}/500
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="wantVerification"
                    checked={formData.wantVerification}
                    onChange={(e) => setFormData({...formData, wantVerification: e.target.checked})}
                    className="w-4 h-4 text-[#FF4D8D] rounded"
                  />
                  <label htmlFor="wantVerification" className="ml-2 text-sm font-medium text-gray-700">
                    추가 인증을 받고 싶어요 (선택)
                  </label>
                </div>

                {formData.wantVerification && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600 mb-3">
                      운영진이 직접 검수하여 신뢰도를 높여드려요
                    </p>
                    {['학력 인증', '직장 인증', '소득 인증', '자격증 인증'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.verificationTypes.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                verificationTypes: [...formData.verificationTypes, type]
                              })
                            } else {
                              setFormData({
                                ...formData,
                                verificationTypes: formData.verificationTypes.filter(t => t !== type)
                              })
                            }
                          }}
                          className="w-3 h-3 text-[#FF4D8D] rounded"
                        />
                        <span className="ml-2 text-xs text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 버튼들 */}
          <div className="flex space-x-3 mt-8">
            {currentStep > 1 && (
              <button
                onClick={handlePrev}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                이전
              </button>
            )}

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="flex-1 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                다음
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                프로필 완성 🎉
              </button>
            )}
          </div>
        </div>

        {/* 건너뛰기 */}
        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-gray-700 hover:text-gray-700">
            나중에 완성하기 →
          </Link>
        </div>
      </div>
    </div>
  )
}