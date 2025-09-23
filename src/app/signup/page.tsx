'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    birth: '',
    gender: '',
    phone: '',
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: 백엔드 연동 시 실제 회원가입 로직 구현
    console.log('Signup attempt:', formData)

    // 임시로 2초 후 프로필 작성 페이지로 이동
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = '/profile/create'
    }, 2000)
  }

  const handleSocialSignup = (provider: string) => {
    // TODO: 소셜 회원가입 연동
    console.log(`${provider} signup`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-8">
      <div className="max-w-sm mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">💜</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              MEE<span className="text-purple-600">&apos;</span>BUD
            </h1>
          </div>
          <p className="text-gray-600">AI가 찾아주는 완벽한 이상형</p>
        </div>

        {/* 진행 단계 */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step <= currentStep
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-8 h-1 mx-2 ${
                  step < currentStep ? 'bg-purple-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          {currentStep === 1 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                간편하게 시작하기
              </h2>

              {/* 소셜 회원가입 */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleSocialSignup('kakao')}
                  className="w-full bg-yellow-400 text-gray-800 py-3 px-4 rounded-xl font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>카카오로 3초 가입</span>
                </button>

                <button
                  onClick={() => handleSocialSignup('google')}
                  className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>🌐</span>
                  <span>Google로 3초 가입</span>
                </button>
              </div>

              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">또는 이메일로</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all"
              >
                이메일로 가입하기
              </button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                기본 정보 입력
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="실명을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    생년월일
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.birth}
                    onChange={(e) => setFormData({...formData, birth: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    성별
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, gender: 'male'})}
                      className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                        formData.gender === 'male'
                          ? 'border-purple-500 bg-purple-50 text-purple-600'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      👨 남성
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, gender: 'female'})}
                      className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                        formData.gender === 'female'
                          ? 'border-purple-500 bg-purple-50 text-purple-600'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      👩 여성
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all"
                >
                  다음 단계
                </button>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                비밀번호 설정
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="8자리 이상 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="비밀번호를 다시 입력해주세요"
                  />
                </div>

                {/* 약관 동의 */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
                      이용약관 동의 <span className="text-red-500">(필수)</span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({...formData, agreePrivacy: e.target.checked})}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <label htmlFor="agreePrivacy" className="ml-2 text-sm text-gray-700">
                      개인정보처리방침 동의 <span className="text-red-500">(필수)</span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onChange={(e) => setFormData({...formData, agreeMarketing: e.target.checked})}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <label htmlFor="agreeMarketing" className="ml-2 text-sm text-gray-700">
                      마케팅 정보 수신 동의 (선택)
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !formData.agreeTerms || !formData.agreePrivacy}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all disabled:opacity-50"
                >
                  {isLoading ? '회원가입 중...' : '회원가입 완료'}
                </button>
              </form>
            </>
          )}

          {/* 이전 단계 / 로그인 링크 */}
          <div className="text-center mt-6">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                ← 이전 단계
              </button>
            ) : (
              <p className="text-sm text-gray-600">
                이미 계정이 있으신가요?{' '}
                <Link href="/login" className="text-purple-600 font-semibold hover:text-purple-700">
                  로그인
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}