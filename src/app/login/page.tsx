'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: 백엔드 연동 시 실제 로그인 로직 구현
    console.log('Login attempt:', formData)

    // 임시로 2초 후 메인 페이지로 이동
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = '/'
    }, 2000)
  }

  const handleSocialLogin = (provider: string) => {
    // TODO: 소셜 로그인 연동
    console.log(`${provider} login`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        {/* 로고 */}
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

        {/* 로그인 폼 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">로그인</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all disabled:opacity-50"
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </form>

          {/* 구분선 */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">또는</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* 소셜 로그인 */}
          <div className="space-y-3">
            <button
              onClick={() => handleSocialLogin('kakao')}
              className="w-full bg-yellow-400 text-gray-800 py-3 px-4 rounded-xl font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>카카오로 계속하기</span>
            </button>

            <button
              onClick={() => handleSocialLogin('google')}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>🌐</span>
              <span>Google로 계속하기</span>
            </button>
          </div>

          {/* 회원가입 링크 */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              아직 계정이 없으신가요?{' '}
              <Link href="/signup" className="text-purple-600 font-semibold hover:text-purple-700">
                회원가입
              </Link>
            </p>
          </div>

          {/* 비밀번호 찾기 */}
          <div className="text-center mt-3">
            <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>

        {/* 서비스 소개 링크 */}
        <div className="text-center mt-6">
          <Link href="/welcome" className="text-sm text-purple-600 hover:text-purple-700">
            → 서비스 소개 보기
          </Link>
        </div>
      </div>
    </div>
  )
}