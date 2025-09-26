import React from 'react'

// 스크린 리더 전용 텍스트
interface ScreenReaderOnlyProps {
  children: React.ReactNode
}

export function ScreenReaderOnly({ children }: ScreenReaderOnlyProps) {
  return (
    <span className="sr-only">
      {children}
    </span>
  )
}

// 접근성이 개선된 링크 컴포넌트
interface AccessibleLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  ariaLabel?: string
}

export function AccessibleLink({
  href,
  children,
  className = '',
  external = false,
  ariaLabel
}: AccessibleLinkProps) {
  const baseStyles = 'focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:ring-offset-2 rounded-lg transition-all duration-200'

  return (
    <a
      href={href}
      className={`${baseStyles} ${className}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
    >
      {children}
      {external && (
        <ScreenReaderOnly>
          (새 창에서 열림)
        </ScreenReaderOnly>
      )}
    </a>
  )
}

// 접근성이 개선된 버튼 컴포넌트
interface AccessibleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  className?: string
  ariaLabel?: string
  ariaDescribedBy?: string
}

export function AccessibleButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ariaLabel,
  ariaDescribedBy
}: AccessibleButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:ring-offset-2 inline-flex items-center justify-center'

  const variantStyles = {
    primary: 'bg-[#FF4D8D] text-white hover:bg-[#ff3080] active:bg-[#ff1a75]',
    secondary: 'bg-[#0D1B2A] text-white hover:bg-[#1a2332] active:bg-[#0a1520]',
    outline: 'bg-white border-2 border-[#FF4D8D] text-[#FF4D8D] hover:bg-[#FF4D8D] hover:text-white',
    ghost: 'bg-transparent text-[#0D1B2A] hover:bg-gray-100 active:bg-gray-200'
  }

  const sizeStyles = {
    sm: 'py-2 px-3 text-sm min-h-[36px]',
    md: 'py-3 px-4 text-sm min-h-[44px]',
    lg: 'py-4 px-6 text-base min-h-[48px]'
  }

  const disabledStyles = (disabled || loading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled || loading}
    >
      {loading && (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
          <ScreenReaderOnly>처리 중...</ScreenReaderOnly>
        </>
      )}
      {children}
    </button>
  )
}

// 접근성이 개선된 입력 필드
interface AccessibleInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string
  error?: string
  hint?: string
  size?: 'sm' | 'md' | 'lg'
  required?: boolean
}

export function AccessibleInput({
  label,
  error,
  hint,
  size = 'md',
  required = false,
  className = '',
  id,
  ...props
}: AccessibleInputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  const errorId = error ? `${inputId}-error` : undefined
  const hintId = hint ? `${inputId}-hint` : undefined

  const baseStyles = 'w-full rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:ring-offset-1'
  const normalStyles = 'border-gray-300 bg-white focus:border-[#FF4D8D]'
  const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''

  const sizeStyles = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-base',
    lg: 'py-4 px-5 text-lg'
  }

  const textStyles = 'text-[#0D1B2A] placeholder-[#9CA3AF]'

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-[#0D1B2A] mb-2"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="필수 입력">*</span>
        )}
      </label>

      {hint && (
        <p id={hintId} className="text-sm text-[#6B7280] mb-2">
          {hint}
        </p>
      )}

      <input
        id={inputId}
        className={`
          ${baseStyles}
          ${normalStyles}
          ${errorStyles}
          ${sizeStyles[size]}
          ${textStyles}
          ${className}
        `}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        aria-invalid={error ? 'true' : 'false'}
        aria-required={required}
        {...props}
      />

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

// 접근성이 개선된 선택 버튼 그룹
interface AccessibleRadioGroupProps {
  name: string
  label: string
  options: { value: string; label: string; description?: string }[]
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}

export function AccessibleRadioGroup({
  name,
  label,
  options,
  value,
  onChange,
  error,
  required = false
}: AccessibleRadioGroupProps) {
  const groupId = `radio-group-${name}`
  const errorId = error ? `${groupId}-error` : undefined

  return (
    <fieldset className="w-full">
      <legend className="block text-sm font-medium text-[#0D1B2A] mb-3">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="필수 선택">*</span>
        )}
      </legend>

      <div className="space-y-3" role="radiogroup" aria-describedby={errorId}>
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-start space-x-3 cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="mt-1 w-4 h-4 text-[#FF4D8D] border-gray-300 focus:ring-[#FF4D8D] focus:ring-2"
              aria-describedby={option.description ? `${option.value}-desc` : undefined}
            />
            <div className="flex-1">
              <span className="text-[#0D1B2A] font-medium">{option.label}</span>
              {option.description && (
                <p id={`${option.value}-desc`} className="text-sm text-[#6B7280] mt-1">
                  {option.description}
                </p>
              )}
            </div>
          </label>
        ))}
      </div>

      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}