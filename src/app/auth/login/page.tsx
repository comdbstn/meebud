'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth, useNotifications } from '@/contexts/AppContext'
import { dummyUser } from '@/data/dummyData'
import InteractiveButton from '@/components/InteractiveButton'

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
  const [email, setEmail] = useState('test@meebud.com')
  const [password, setPassword] = useState('meebud123!')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuth()
  const { addNotification } = useNotifications()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🔐 Login attempt started', { email, passwordLength: password.length })
    setLoading(true)
    setError('')

    try {
      // 입력값 검증
      if (!email || !password) {
        console.log('❌ Validation failed: Missing email or password')
        setError('이메일과 비밀번호를 모두 입력해주세요.')
        return
      }

      // 테스트 계정 인증
      const validPassword = TEST_ACCOUNTS[email as keyof typeof TEST_ACCOUNTS]
      console.log('🔍 Account check', { email, validPassword: !!validPassword, passwordMatch: validPassword === password })

      if (validPassword && validPassword === password) {
        // 상태 관리에 로그인 처리
        const userWithEmail = { ...dummyUser, email }

        console.log('✅ Authentication successful, processing login...')

        // 세션 스토리지 먼저 설정
        const userRole = email === 'admin@meebud.com' ? 'admin' : 'user'
        sessionStorage.setItem('user_role', userRole)
        console.log('💾 Session storage updated', { userRole })

        // Context 상태 업데이트
        login(userWithEmail)
        console.log('🔄 Context state updated')

        // 알림 표시
        addNotification('success', '로그인되었습니다!')
        console.log('📢 Notification added')

        // 상태 업데이트 완료 후 리다이렉트
        console.log('⏳ Waiting for state update...')
        await new Promise(resolve => setTimeout(resolve, 300))

        const redirectPath = email === 'admin@meebud.com' ? '/admin' : '/'
        console.log('🚀 Redirecting to:', redirectPath)
        router.push(redirectPath)
      } else {
        setError('이메일 또는 비밀번호가 올바르지 않습니다.')
        setLoading(false)
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('로그인 중 오류가 발생했습니다. 다시 시도해주세요.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex flex-col justify-center px-4 max-w-md mx-auto">
      {/* 모바일 최적화 헤더 */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">💜</span>
          </div>
          <h1 className="text-3xl font-bold text-[#0D1B2A]">
            MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
          </h1>
        </div>
        <h2 className="text-base font-medium text-[#0D1B2A] opacity-80">
          AI가 매칭하는 후불제 소개팅
        </h2>
      </div>

      {/* 모바일 최적화 카드 */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
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
            <label htmlFor="email" className="block text-sm font-semibold text-[#0D1B2A] mb-2">
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
              className="block w-full px-4 py-4 border border-gray-300 rounded-xl text-base text-[#0D1B2A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:border-[#FF4D8D] bg-white"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-[#0D1B2A] mb-2">
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
              className="block w-full px-4 py-4 border border-gray-300 rounded-xl text-base text-[#0D1B2A] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:border-[#FF4D8D] bg-white"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-300 text-red-800 rounded-xl font-medium">
              {error}
            </div>
          )}

          <InteractiveButton
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            className="w-full"
          >
            로그인
          </InteractiveButton>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-600 font-medium">또는</span>
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
                className="font-medium text-[#0D1B2A] opacity-70 hover:text-[#FF4D8D] transition-colors duration-200 underline decoration-gray-300 hover:decoration-[#FF4D8D]"
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