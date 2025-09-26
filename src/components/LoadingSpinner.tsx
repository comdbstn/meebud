'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'white' | 'gradient'
  message?: string
  fullScreen?: boolean
}

export default function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  message,
  fullScreen = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const borderClasses = {
    primary: 'border-[#FF4D8D] border-t-transparent',
    white: 'border-white border-t-transparent',
    gradient: 'border-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] border-t-transparent'
  }

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  const spinner = (
    <div className="flex flex-col items-center space-y-3">
      {/* MEE'BUD 브랜드 로딩 애니메이션 */}
      <div className={`${sizeClasses[size]} relative`}>
        <div className={`w-full h-full bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-2xl flex items-center justify-center animate-pulse`}>
          <span className="text-white text-xs sm:text-sm lg:text-base animate-heart-beat">💜</span>
        </div>
        <div className={`absolute inset-0 border-2 rounded-2xl animate-spin ${borderClasses[variant]}`}></div>
      </div>

      {/* 로딩 메시지 */}
      {message && (
        <p className={`${textSizeClasses[size]} text-[#0D1B2A] opacity-70 font-medium animate-pulse`}>
          {message}
        </p>
      )}

      {/* 로딩 도트 애니메이션 */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-[#FF4D8D] rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-[#FF4D8D] rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-2 h-2 bg-[#FF4D8D] rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-[#F8FAFB] flex items-center justify-center z-50">
        <div className="text-center">
          {spinner}
        </div>
      </div>
    )
  }

  return spinner
}

// 페이지 로딩용 컴포넌트
export function PageLoading({ message = "페이지를 불러오고 있어요..." }: { message?: string }) {
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center">
      <LoadingSpinner size="lg" message={message} />
    </div>
  )
}

// 버튼 로딩용 컴포넌트
export function ButtonLoading() {
  return (
    <div className="flex items-center space-x-2">
      <LoadingSpinner size="sm" variant="white" />
      <span>처리중...</span>
    </div>
  )
}

// 카드 스켈레톤 로딩
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  )
}