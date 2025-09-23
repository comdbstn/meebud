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
  'user@meebud.com': 'user123!'
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
      router.push('/')
    } else {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
          </h1>
          <h2 className="text-lg font-medium text-gray-600">
            AI가 매칭하는 후불제 소개팅
          </h2>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* 테스트 계정 안내 */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <h3 className="text-sm font-medium text-blue-800 mb-2">테스트 계정</h3>
            <div className="text-xs text-blue-700 space-y-1">
              <p><strong>이메일:</strong> test@meebud.com</p>
              <p><strong>비밀번호:</strong> meebud123!</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일 주소
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#FF4D8D] focus:border-[#FF4D8D] sm:text-sm"
                  placeholder="이메일을 입력하세요"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                비밀번호
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#FF4D8D] focus:border-[#FF4D8D] sm:text-sm"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF4D8D] hover:bg-[#ff3080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4D8D] transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? '로그인 중...' : '로그인'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                아직 계정이 없으신가요?{' '}
                <a
                  href="/auth/signup"
                  className="font-medium text-[#FF4D8D] hover:text-[#ff3080] transition-colors duration-200"
                >
                  회원가입
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-500">
                <a
                  href="/welcome"
                  className="font-medium text-gray-700 hover:text-[#FF4D8D] transition-colors duration-200"
                >
                  MEE&apos;BUD에 대해서 자세히 알아보세요 :)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}