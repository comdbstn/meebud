'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const _metadata: Metadata = {
  title: "로그인 - MEE'BUD",
  description: "MEE'BUD 로그인으로 AI 매칭 서비스를 시작하세요",
}

// 테스트 계정 정보
const TEST_ACCOUNTS = {
  'test@meebud.com': 'meebud123!',
  'demo@meebud.com': 'demo123!',
  'user@meebud.com': 'user123!',
  'admin@meebud.com': 'admin123!'
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // 테스트 계정 인증
    if (TEST_ACCOUNTS[email as keyof typeof TEST_ACCOUNTS] === password) {
      // 로그인 성공
      sessionStorage.setItem('user_authenticated', 'true')
      sessionStorage.setItem('user_email', email)

      // 관리자 계정 확인
      if (email === 'admin@meebud.com') {
        sessionStorage.setItem('user_role', 'admin')
        router.push('/admin')
      } else {
        sessionStorage.setItem('user_role', 'user')
        router.push('/')
      }
    } else {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center px-4 max-w-md mx-auto">
      {/* 모바일 최적화 헤더 */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-2xl flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-black">
            MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
          </h1>
        </div>
        <h2 className="text-base font-medium text-gray-800">
          AI가 매칭하는 후불제 소개팅
        </h2>
      </div>

      {/* 모바일 최적화 카드 */}
      <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
        {/* 테스트 계정 안내 */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">테스트 계정</h3>
          <div className="text-xs text-blue-800 space-y-1">
            <p><strong>일반 사용자:</strong> test@meebud.com / meebud123!</p>
            <p><strong>관리자:</strong> admin@meebud.com / admin123!</p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              이메일 주소
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-4 border border-gray-300 rounded-xl text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:border-[#FF4D8D] bg-white"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-4 border border-gray-300 rounded-xl text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:border-[#FF4D8D] bg-white"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-300 text-red-800 rounded-xl font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-semibold text-white bg-[#FF4D8D] hover:bg-[#ff3080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4D8D] transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-gray-50 text-gray-600 font-medium">또는</span>
            </div>
          </div>

          <div className="mt-6 text-center space-y-4">
            <p className="text-sm text-gray-800">
              아직 계정이 없으신가요?{' '}
              <a
                href="/auth/signup"
                className="font-semibold text-[#FF4D8D] hover:text-[#ff3080] transition-colors duration-200"
              >
                회원가입
              </a>
            </p>
            <p className="text-sm text-gray-700">
              <a
                href="/welcome"
                className="font-medium text-gray-700 hover:text-[#FF4D8D] transition-colors duration-200 underline decoration-gray-300 hover:decoration-[#FF4D8D]"
              >
                MEE&apos;BUD에 대해서 자세히 알아보세요 :)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}