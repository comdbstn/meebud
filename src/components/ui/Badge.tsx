import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Badge({ children, variant = 'primary', size = 'md', className = '' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full'

  const variantStyles = {
    primary: 'bg-[#FF4D8D] bg-opacity-10 text-[#FF4D8D] border border-[#FF4D8D] border-opacity-20',
    secondary: 'bg-[#0D1B2A] bg-opacity-10 text-[#0D1B2A] border border-[#0D1B2A] border-opacity-20',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    info: 'bg-blue-100 text-blue-800 border border-blue-200',
    outline: 'bg-transparent border border-gray-300 text-gray-600'
  }

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  )
}

// 특별한 상태를 나타내는 Badge 컴포넌트들
export function StatusBadge({
  status,
  className = ''
}: {
  status: 'completed' | 'pending' | 'failed' | 'new' | 'verified',
  className?: string
}) {
  const statusConfig = {
    completed: { variant: 'success' as const, text: '완료' },
    pending: { variant: 'warning' as const, text: '대기중' },
    failed: { variant: 'warning' as const, text: '실패' },
    new: { variant: 'primary' as const, text: '새로운' },
    verified: { variant: 'info' as const, text: '인증됨' }
  }

  const config = statusConfig[status]

  return (
    <Badge variant={config.variant} size="sm" className={className}>
      {config.text}
    </Badge>
  )
}