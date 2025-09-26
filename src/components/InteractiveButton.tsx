'use client'

import { useState } from 'react'
import { ButtonLoading } from './LoadingSpinner'

interface InteractiveButtonProps {
  children: React.ReactNode
  onClick?: () => void | Promise<void>
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  hapticFeedback?: boolean
}

export default function InteractiveButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  hapticFeedback = true
}: InteractiveButtonProps) {
  const [isPressed, setIsPressed] = useState(false)
  const [isAsyncLoading, setIsAsyncLoading] = useState(false)

  const baseClasses = 'relative font-semibold rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white hover:opacity-90 focus:ring-[#FF4D8D] shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-[#FF4D8D] to-[#C49A6C] text-white hover:opacity-90 focus:ring-[#FF4D8D] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#FF4D8D] text-[#FF4D8D] bg-white hover:bg-[#FF4D8D] hover:text-white focus:ring-[#FF4D8D]',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-lg hover:shadow-xl'
  }

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm min-h-[36px]',
    md: 'py-3 px-6 text-base min-h-[44px]',
    lg: 'py-4 px-8 text-lg min-h-[52px]'
  }

  const disabledClasses = 'opacity-50 cursor-not-allowed transform-none hover:opacity-50 hover:shadow-none'

  const handleClick = async () => {
    if (disabled || loading || isAsyncLoading || !onClick) return

    // 햅틱 피드백 (모바일에서 지원되는 경우)
    if (hapticFeedback && 'vibrate' in navigator) {
      navigator.vibrate(10)
    }

    try {
      setIsAsyncLoading(true)
      await onClick()
    } catch (error) {
      console.error('Button click error:', error)
    } finally {
      setIsAsyncLoading(false)
    }
  }

  const isLoadingState = loading || isAsyncLoading

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled || isLoadingState ? disabledClasses : ''}
        ${isPressed ? 'scale-95' : ''}
        ${className}
      `}
      disabled={disabled || isLoadingState}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {/* 로딩 오버레이 */}
      {isLoadingState && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ButtonLoading />
        </div>
      )}

      {/* 버튼 내용 */}
      <span className={isLoadingState ? 'invisible' : 'flex items-center justify-center space-x-2'}>
        {children}
      </span>

      {/* 리플 효과 */}
      {isPressed && (
        <div className="absolute inset-0 bg-white opacity-20 rounded-xl animate-ping"></div>
      )}
    </button>
  )
}

// 플로팅 액션 버튼
export function FloatingActionButton({
  children,
  onClick,
  className = '',
  ...props
}: Omit<InteractiveButtonProps, 'variant' | 'size'>) {
  return (
    <InteractiveButton
      variant="primary"
      size="lg"
      className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-2xl animate-float z-40 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </InteractiveButton>
  )
}

// 탭 버튼 (네비게이션용)
export function TabButton({
  children,
  isActive,
  onClick,
  className = '',
  ...props
}: Omit<InteractiveButtonProps, 'variant'> & { isActive?: boolean }) {
  return (
    <InteractiveButton
      variant={isActive ? 'primary' : 'outline'}
      className={`flex-1 ${isActive ? 'animate-pulse-glow' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </InteractiveButton>
  )
}