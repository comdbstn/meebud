'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useNotifications } from '@/contexts/AppContext'
import InteractiveButton from './InteractiveButton'

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: string
  action: () => void
  completed?: boolean
}

export default function OnboardingFlow() {
  const { addNotification } = useNotifications()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const steps: OnboardingStep[] = [
    {
      id: 'welcome',
      title: 'MEE\'BUD에 오신 걸 환영해요!',
      description: 'AI가 분석하는 진짜 매칭을 경험해보세요. 단계별로 안내해드릴게요.',
      icon: '👋',
      action: () => {
        setCurrentStep(1)
        addNotification('success', 'MEE\'BUD 여정을 시작하셨어요!')
      }
    },
    {
      id: 'profile',
      title: '프로필을 완성해주세요',
      description: '매력적인 프로필은 더 좋은 매칭의 시작이에요. AI가 도와드릴게요.',
      icon: '👤',
      action: () => {
        router.push('/profile')
        addNotification('info', '프로필 작성 페이지로 이동해요')
      }
    },
    {
      id: 'verification',
      title: '본인 인증을 완료하세요',
      description: '신뢰할 수 있는 매칭을 위해 다중 인증 시스템을 제공해요.',
      icon: '🛡️',
      action: () => {
        addNotification('info', '인증 시스템은 곧 업데이트 예정이에요')
        setCurrentStep(3)
      }
    },
    {
      id: 'matching',
      title: 'AI 매칭을 확인하세요',
      description: 'MBTI, 취향, 가치관을 종합 분석한 최적의 매칭을 받아보세요.',
      icon: '🤖',
      action: () => {
        router.push('/matching')
        addNotification('success', 'AI 매칭 페이지로 이동해요')
      }
    },
    {
      id: 'dreams',
      title: '성사형 후불제 알아보기',
      description: '성사된 연결에만 결제하는 안전한 시스템을 확인해보세요.',
      icon: '☁️',
      action: () => {
        router.push('/dreams')
        addNotification('info', '성사형 후불제에 대해 알아보세요')
      }
    }
  ]

  const currentStepData = steps[currentStep]

  if (!currentStepData) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 animate-slide-up">
        {/* 진행도 표시 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#0D1B2A] opacity-70">진행도</span>
            <span className="text-sm font-semibold text-[#FF4D8D]">
              {currentStep + 1}/{steps.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#FF4D8D] to-[#C49A6C] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* 아이콘 */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-4 animate-bounce-gentle">
            {currentStepData.icon}
          </div>
          <h2 className="text-xl font-bold text-[#0D1B2A] mb-2">
            {currentStepData.title}
          </h2>
          <p className="text-sm text-[#0D1B2A] opacity-70 leading-relaxed">
            {currentStepData.description}
          </p>
        </div>

        {/* 액션 버튼 */}
        <div className="space-y-3">
          <InteractiveButton
            variant="primary"
            size="lg"
            onClick={currentStepData.action}
            className="w-full"
          >
            {currentStep === steps.length - 1 ? '시작하기' : '다음'}
          </InteractiveButton>

          {currentStep > 0 && (
            <InteractiveButton
              variant="outline"
              size="md"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="w-full"
            >
              이전
            </InteractiveButton>
          )}

          <button
            onClick={() => {
              addNotification('info', '언제든지 도움말에서 다시 확인할 수 있어요')
              // 온보딩 완료 상태를 저장
              localStorage.setItem('onboarding_completed', 'true')
            }}
            className="w-full text-sm text-[#0D1B2A] opacity-60 hover:opacity-80 transition-opacity"
          >
            건너뛰기
          </button>
        </div>

        {/* 단계별 미니 가이드 */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
          <h4 className="font-semibold text-[#0D1B2A] mb-2 text-sm">💡 꿀팁</h4>
          <div className="text-xs text-[#0D1B2A] opacity-70">
            {currentStep === 0 && '• MEE\'BUD는 AI 기술로 97% 매칭 성공률을 자랑해요'}
            {currentStep === 1 && '• 프로필이 상세할수록 더 정확한 매칭을 받을 수 있어요'}
            {currentStep === 2 && '• 인증 완료 시 프리미엄 매칭 서비스를 이용할 수 있어요'}
            {currentStep === 3 && '• AI는 1,000+ 성공 사례를 바탕으로 최적 매칭을 찾아드려요'}
            {currentStep === 4 && '• 매칭 실패 시 결제가 발생하지 않아 안전해요'}
          </div>
        </div>
      </div>
    </div>
  )
}

// 온보딩 완료 여부 확인 훅
export function useOnboarding() {
  const isCompleted = typeof window !== 'undefined'
    ? localStorage.getItem('onboarding_completed') === 'true'
    : true

  const markCompleted = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('onboarding_completed', 'true')
    }
  }

  return { isCompleted, markCompleted }
}