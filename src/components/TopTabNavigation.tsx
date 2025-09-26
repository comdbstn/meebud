'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const tabs = [
  {
    name: '홈',
    href: '/',
    icon: '🏠',
  },
  {
    name: '매칭',
    href: '/matching',
    icon: '💝',
  },
  {
    name: '메시지',
    href: '/messages',
    icon: '💬',
  },
  {
    name: '꿈결제',
    href: '/dreams',
    icon: '☁️',
  },
  {
    name: '프로필',
    href: '/profile',
    icon: '👤',
  },
]

export default function TopTabNavigation() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-[#0D1B2A] shadow-sm" role="navigation" aria-label="메인 네비게이션">
      <div className="max-w-sm mx-auto">
        <div className="flex">
          {tabs.map((tab) => {
            const active = isActive(tab.href)
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex-1 flex flex-col items-center py-4 px-2 text-xs font-semibold transition-colors relative min-h-[64px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:ring-inset rounded-lg ${
                  active
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                aria-current={active ? 'page' : undefined}
                aria-label={`${tab.name} 페이지로 이동`}
              >
                <span className="text-lg mb-1" role="img" aria-hidden="true">{tab.icon}</span>
                <span className="typography-button">{tab.name}</span>
                {active && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF4D8D] rounded-t-full" aria-hidden="true"></div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}