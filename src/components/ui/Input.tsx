import React from 'react'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'filled'
}

export function Input({
  label,
  error,
  size = 'md',
  variant = 'default',
  className = '',
  disabled,
  ...props
}: InputProps) {
  const baseStyles = 'w-full rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2'

  const variantStyles = {
    default: 'border-gray-300 bg-white focus:border-[#FF4D8D] focus:ring-[#FF4D8D] focus:ring-opacity-20',
    outline: 'border-2 border-gray-300 bg-white focus:border-[#FF4D8D] focus:ring-[#FF4D8D] focus:ring-opacity-20',
    filled: 'border-gray-200 bg-gray-50 focus:border-[#FF4D8D] focus:ring-[#FF4D8D] focus:ring-opacity-20 focus:bg-white'
  }

  const sizeStyles = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-base',
    lg: 'py-4 px-5 text-lg'
  }

  const textStyles = 'text-[#0D1B2A] placeholder-[#9CA3AF]'
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''
  const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
          {label}
        </label>
      )}

      <input
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${textStyles}
          ${disabledStyles}
          ${errorStyles}
          ${className}
        `}
        disabled={disabled}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
}

export function TextArea({
  label,
  error,
  size = 'md',
  className = '',
  disabled,
  ...props
}: TextAreaProps) {
  const baseStyles = 'w-full rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 resize-none'
  const variantStyles = 'border-gray-300 bg-white focus:border-[#FF4D8D] focus:ring-[#FF4D8D] focus:ring-opacity-20'

  const sizeStyles = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-base',
    lg: 'py-4 px-5 text-lg'
  }

  const textStyles = 'text-[#0D1B2A] placeholder-[#9CA3AF]'
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''
  const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
          {label}
        </label>
      )}

      <textarea
        className={`
          ${baseStyles}
          ${variantStyles}
          ${sizeStyles[size]}
          ${textStyles}
          ${disabledStyles}
          ${errorStyles}
          ${className}
        `}
        disabled={disabled}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}