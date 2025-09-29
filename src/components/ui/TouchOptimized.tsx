import React from 'react'

// 터치 최적화된 버튼 컴포넌트
interface TouchButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  disabled?: boolean
  className?: string
  fullWidth?: boolean
}

export function TouchButton({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  fullWidth = false
}: TouchButtonProps) {
  const baseStyles = 'font-semibold rounded-2xl transition-all duration-200 touch-manipulation'

  // 터치에 최적화된 크기 (최소 44px 권장)
  const sizeStyles = 'py-4 px-6 text-base min-h-[44px]'

  const variantStyles = {
    primary: 'bg-[#FF4D8D] text-white hover:bg-[#ff3080] active:bg-[#ff1a75] active:scale-95',
    secondary: 'bg-[#0D1B2A] text-white hover:bg-[#1a2332] active:bg-[#0a1520] active:scale-95',
    outline: 'bg-white border-2 border-[#FF4D8D] text-[#FF4D8D] hover:bg-[#FF4D8D] hover:text-white active:scale-95',
    ghost: 'bg-gray-100 text-[#0D1B2A] hover:bg-gray-200 active:bg-gray-300 active:scale-95'
  }

  const widthStyles = fullWidth ? 'w-full' : ''
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${widthStyles} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  )
}

// 터치 최적화된 카드 컴포넌트
interface TouchCardProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'default' | 'interactive'
}

export function TouchCard({
  children,
  onClick,
  className = '',
  variant = 'default'
}: TouchCardProps) {
  const baseStyles = 'bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-200'

  const variantStyles = {
    default: 'p-6',
    interactive: 'p-6 hover:shadow-md active:shadow-lg active:scale-[0.98] touch-manipulation cursor-pointer'
  }

  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Component>
  )
}

// 터치 최적화된 탭 컴포넌트
interface TouchTabsProps {
  tabs: { key: string; label: string }[]
  activeTab: string
  onTabChange: (key: string) => void
  className?: string
}

export function TouchTabs({
  tabs,
  activeTab,
  onTabChange,
  className = ''
}: TouchTabsProps) {
  return (
    <div className={`flex bg-gray-100 rounded-2xl p-1 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`
            flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] touch-manipulation
            ${activeTab === tab.key
              ? 'bg-white text-[#0D1B2A] shadow-sm'
              : 'text-[#374151] hover:text-[#0D1B2A] active:bg-white/50'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

// 터치 최적화된 스위치 컴포넌트
interface TouchSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export function TouchSwitch({
  checked,
  onChange,
  label,
  disabled = false
}: TouchSwitchProps) {
  return (
    <label className="flex items-center justify-between cursor-pointer py-2">
      {label && (
        <span className="text-[#0D1B2A] font-medium">{label}</span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 touch-manipulation min-h-[44px] min-w-[44px]
          ${checked ? 'bg-[#FF4D8D]' : 'bg-gray-300'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200
            ${checked ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
    </label>
  )
}

// 터치 최적화된 선택 버튼들
interface TouchSelectProps {
  options: { value: string; label: string }[]
  selected: string[]
  onChange: (selected: string[]) => void
  multiple?: boolean
  className?: string
}

export function TouchSelect({
  options,
  selected,
  onChange,
  multiple = false,
  className = ''
}: TouchSelectProps) {
  const handleSelect = (value: string) => {
    if (multiple) {
      if (selected.includes(value)) {
        onChange(selected.filter(item => item !== value))
      } else {
        onChange([...selected, value])
      }
    } else {
      onChange([value])
    }
  }

  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      {options.map((option) => {
        const isSelected = selected.includes(option.value)
        return (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`
              py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] touch-manipulation
              ${isSelected
                ? 'bg-[#FF4D8D] text-white border-2 border-[#FF4D8D]'
                : 'bg-white text-[#0D1B2A] border-2 border-gray-200 hover:border-[#FF4D8D]'
              }
            `}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}