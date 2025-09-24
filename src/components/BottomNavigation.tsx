'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      href: '/',
      icon: '🏠',
      label: '홈',
      isActive: pathname === '/'
    },
    {
      href: '/messages',
      icon: '💬',
      label: '메시지',
      isActive: pathname.startsWith('/messages')
    },
    {
      href: '/dreams',
      icon: '☁️',
      label: '꿈결제',
      isActive: pathname.startsWith('/dreams')
    },
    {
      href: '/profile',
      icon: '👤',
      label: '프로필',
      isActive: pathname.startsWith('/profile')
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="max-w-sm mx-auto">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
                item.isActive
                  ? 'bg-[#FF4D8D] text-white transform scale-105'
                  : 'text-[#0D1B2A] opacity-80 hover:text-[#FF4D8D] hover:bg-gray-50'
              }`}
            >
              <span className={`text-lg mb-1 ${item.isActive ? 'animate-bounce-gentle' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-xs font-medium ${item.isActive ? 'text-white' : 'text-[#0D1B2A] opacity-80'}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}