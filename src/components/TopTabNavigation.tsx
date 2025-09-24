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
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-sm mx-auto">
        <div className="flex">
          {tabs.map((tab) => {
            const active = isActive(tab.href)
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex-1 flex flex-col items-center py-3 px-2 text-xs font-medium transition-colors relative ${
                  active
                    ? 'text-violet-600'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <span className="text-lg mb-1">{tab.icon}</span>
                <span>{tab.name}</span>
                {active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500"></div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}