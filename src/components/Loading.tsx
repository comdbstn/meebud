'use client'

import { useEffect, useState } from 'react'

interface LoadingProps {
  message?: string
  fullScreen?: boolean
}

export default function Loading({ message = "로딩 중...", fullScreen = false }: LoadingProps) {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return ''
        return prev + '.'
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const containerClass = fullScreen
    ? "fixed inset-0 bg-white z-50 flex items-center justify-center"
    : "flex items-center justify-center p-8"

  return (
    <div className={containerClass}>
      <div className="text-center">
        {/* 로딩 애니메이션 */}
        <div className="relative mb-6">
          {/* 메인 하트 */}
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-2xl flex items-center justify-center animate-pulse">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current animate-heart-beat">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* 주변 작은 하트들 */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-pink-300 rounded-full flex items-center justify-center animate-bounce-gentle">
            <span className="text-white text-xs">💕</span>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-300 rounded-full flex items-center justify-center animate-bounce-gentle animation-delay-200">
            <span className="text-white text-xs">✨</span>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-300 rounded-full flex items-center justify-center animate-bounce-gentle animation-delay-400">
            <span className="text-white text-xs">💖</span>
          </div>
        </div>

        {/* 브랜드 로고 */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
          </h1>
          <p className="text-gray-600 text-sm">AI가 찾아주는 완벽한 이상형</p>
        </div>

        {/* 로딩 메시지 */}
        <div className="mb-8">
          <p className="text-gray-700 font-medium text-lg">
            {message}<span className="inline-block w-8 text-left">{dots}</span>
          </p>
        </div>

        {/* 진행률 바 */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF4D8D] to-[#FF6BA3] h-full rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* 로딩 텍스트 */}
        {fullScreen && (
          <div className="mt-8 space-y-2 text-sm text-gray-500">
            <p>✨ AI가 당신의 이상형을 분석하고 있어요</p>
            <p>💕 완벽한 매칭을 위해 잠시만 기다려주세요</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function PageLoader() {
  return <Loading message="페이지를 불러오는 중" fullScreen={true} />
}

export function ComponentLoader({ message }: { message?: string }) {
  return <Loading message={message} fullScreen={false} />
}