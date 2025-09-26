'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AppContext'

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

export default function AuthGuard({
  children,
  requireAuth = true,
  redirectTo = '/auth/login'
}: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && requireAuth && !isAuthenticated) {
      router.push(redirectTo)
    }
  }, [isAuthenticated, isLoading, requireAuth, redirectTo, router])

  // 로딩 중이거나 인증 확인 중일 때
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white text-xl">💜</span>
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF4D8D] mx-auto"></div>
        </div>
      </div>
    )
  }

  // 인증이 필요하지만 인증되지 않은 경우
  if (requireAuth && !isAuthenticated) {
    return null // 리다이렉트 중이므로 아무것도 렌더링하지 않음
  }

  // 인증이 필요하지 않거나 인증된 경우
  return <>{children}</>
}