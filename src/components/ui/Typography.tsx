import React from 'react'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

// 제목 컴포넌트들
export function H1({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`text-3xl font-bold text-[#0D1B2A] leading-tight ${className}`}>
      {children}
    </h1>
  )
}

export function H2({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-2xl font-bold text-[#0D1B2A] leading-tight ${className}`}>
      {children}
    </h2>
  )
}

export function H3({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-xl font-bold text-[#0D1B2A] leading-snug ${className}`}>
      {children}
    </h3>
  )
}

export function H4({ children, className = '' }: TypographyProps) {
  return (
    <h4 className={`text-lg font-semibold text-[#0D1B2A] leading-snug ${className}`}>
      {children}
    </h4>
  )
}

// 본문 텍스트 컴포넌트들
export function P({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-base text-[#0D1B2A] leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export function Small({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-sm text-[#0D1B2A] opacity-70 leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export function Caption({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-xs text-[#0D1B2A] opacity-60 leading-normal ${className}`}>
      {children}
    </p>
  )
}

// 특별한 용도의 텍스트 컴포넌트들
export function Accent({ children, className = '' }: TypographyProps) {
  return (
    <span className={`text-[#FF4D8D] font-medium ${className}`}>
      {children}
    </span>
  )
}

export function Secondary({ children, className = '' }: TypographyProps) {
  return (
    <span className={`text-[#C49A6C] font-medium ${className}`}>
      {children}
    </span>
  )
}

export function Muted({ children, className = '' }: TypographyProps) {
  return (
    <span className={`text-[#6B7280] ${className}`}>
      {children}
    </span>
  )
}