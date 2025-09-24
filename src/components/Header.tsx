'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-sm mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-purple-600 text-lg font-bold">💜</span>
            </div>
            <h1 className="text-xl font-bold">
              MEE<span className="text-yellow-300">&apos;</span>BUD
            </h1>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <span className={`block w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="max-w-sm mx-auto">
              <nav className="py-4 px-4 space-y-3">
                <Link href="/matching" className="block text-[#0D1B2A] opacity-80 hover:text-purple-600 font-medium transition-colors">
                  내 매칭
                </Link>
                <Link href="/messages" className="block text-[#0D1B2A] opacity-80 hover:text-purple-600 font-medium transition-colors">
                  메시지
                </Link>
                <Link href="/profile/edit" className="block text-[#0D1B2A] opacity-80 hover:text-purple-600 font-medium transition-colors">
                  프로필 설정
                </Link>
                <Link href="/welcome" className="block text-[#0D1B2A] opacity-80 hover:text-purple-600 font-medium transition-colors">
                  서비스 소개
                </Link>
                <div className="pt-2 border-t border-gray-200">
                  <Link href="/login" className="block w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center">
                    로그인
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}