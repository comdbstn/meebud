import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'gradient'
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({ children, className = '', variant = 'default', padding = 'md' }: CardProps) {
  const baseStyles = 'bg-white rounded-2xl shadow-sm border'

  const variantStyles = {
    default: 'border-gray-100',
    hover: 'border-gray-200 hover:shadow-md transition-shadow cursor-pointer',
    gradient: 'border-gray-100 bg-gradient-to-br from-white to-gray-50'
  }

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  )
}