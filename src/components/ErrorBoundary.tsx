'use client'

import React from 'react'
import Link from 'next/link'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return (
          <FallbackComponent
            error={this.state.error}
            reset={() => this.setState({ hasError: false, error: undefined })}
          />
        )
      }

      return <DefaultErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error }: { error?: Error }) {
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto text-center">
        {/* 브랜드 로고 */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">💔</span>
          </div>
          <h1 className="text-xl font-bold text-[#0D1B2A]">
            MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
          </h1>
        </div>

        {/* 에러 메시지 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="text-4xl mb-4">😔</div>
          <h2 className="text-lg font-bold text-[#0D1B2A] mb-2">
            앗! 문제가 발생했어요
          </h2>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-4 leading-relaxed">
            일시적인 오류가 발생했습니다.<br />
            잠시 후 다시 시도해 주세요.
          </p>

          {/* 에러 상세 정보 (개발 모드에서만) */}
          {process.env.NODE_ENV === 'development' && error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-left">
              <p className="text-xs text-red-800 font-mono">
                {error.message}
              </p>
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all"
            >
              새로고침
            </button>

            <Link
              href="/"
              className="block w-full bg-white border border-gray-300 text-[#0D1B2A] font-medium py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors text-center"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>

        {/* 고객센터 안내 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
          <h3 className="font-semibold text-[#0D1B2A] mb-2">💬 문제가 계속되나요?</h3>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-3">
            고객센터로 문의해 주세요. 빠르게 도와드리겠습니다.
          </p>
          <a
            href="mailto:jys13230@gmail.com"
            className="inline-flex items-center text-[#FF4D8D] font-medium text-sm hover:text-[#ff3080]"
          >
            📧 jys13230@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundary