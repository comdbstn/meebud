import React from 'react'
import Link from 'next/link'

interface BaseButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

interface ButtonProps extends BaseButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

interface LinkButtonProps extends BaseButtonProps {
  href: string
}

export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center text-center'

  const variantStyles = {
    primary: 'bg-[#FF4D8D] text-white hover:bg-[#ff3080] active:bg-[#ff1a75] disabled:bg-gray-300',
    secondary: 'bg-[#0D1B2A] text-white hover:bg-[#1a2332] active:bg-[#0a1520] disabled:bg-gray-300',
    outline: 'bg-white border-2 border-[#FF4D8D] text-[#FF4D8D] hover:bg-[#FF4D8D] hover:text-white disabled:border-gray-300 disabled:text-gray-300',
    ghost: 'bg-transparent text-[#0D1B2A] hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-300',
    gradient: 'bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white hover:opacity-90 active:opacity-80'
  }

  const sizeStyles = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-sm',
    lg: 'py-4 px-6 text-base'
  }

  const disabledStyles = disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  children,
  href,
  className = '',
  variant = 'primary',
  size = 'md'
}: LinkButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-200 inline-flex items-center justify-center text-center'

  const variantStyles = {
    primary: 'bg-[#FF4D8D] text-white hover:bg-[#ff3080] active:bg-[#ff1a75]',
    secondary: 'bg-[#0D1B2A] text-white hover:bg-[#1a2332] active:bg-[#0a1520]',
    outline: 'bg-white border-2 border-[#FF4D8D] text-[#FF4D8D] hover:bg-[#FF4D8D] hover:text-white',
    ghost: 'bg-transparent text-[#0D1B2A] hover:bg-gray-100 active:bg-gray-200',
    gradient: 'bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white hover:opacity-90 active:opacity-80'
  }

  const sizeStyles = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-sm',
    lg: 'py-4 px-6 text-base'
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Link>
  )
}