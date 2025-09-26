'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth, useMatching, useNotifications } from '@/contexts/AppContext'
import { dummyMatches } from '@/data/dummyData'

export function useDemoFlow() {
  const { isAuthenticated, user } = useAuth()
  const { setCurrentMatch, addToHistory } = useMatching()
  const { addNotification } = useNotifications()
  const router = useRouter()

  // 데모 플로우 시뮬레이션
  const simulateMatchingFlow = () => {
    if (!isAuthenticated || !user) return

    // 1단계: 3초 후 새로운 매칭 알림
    setTimeout(() => {
      addNotification('success', '새로운 AI 매칭이 도착했어요! 94% 궁합의 완벽한 상대를 확인해보세요.')

      // 첫 번째 매칭 설정
      const firstMatch = dummyMatches[0]
      if (firstMatch) {
        setCurrentMatch(firstMatch)
      }
    }, 3000)

    // 2단계: 10초 후 프로필 완성 권유
    setTimeout(() => {
      if (!user.isProfileComplete) {
        addNotification('info', '프로필을 더 상세히 작성하면 매칭 정확도가 98%까지 올라가요!')
      }
    }, 10000)

    // 3단계: 15초 후 AI 분석 완료 메시지
    setTimeout(() => {
      addNotification('success', 'AI 분석이 완료되었어요. MBTI와 취향을 바탕으로 3명의 최적 후보를 찾았습니다!')
    }, 15000)
  }

  // 매칭 수락 시뮬레이션
  const simulateMatchAcceptance = () => {
    // 상대방 수락 시뮬레이션 (5초 후)
    setTimeout(() => {
      addNotification('success', '축하해요! 상대방도 매칭을 수락했습니다. 이제 대화를 시작할 수 있어요.')

      // 결제 안내
      setTimeout(() => {
        addNotification('info', '성사형 후불제가 자동으로 적용됩니다. ₩50,000이 결제 예정이에요.')
        router.push('/dreams')
      }, 2000)
    }, 5000)
  }

  // 실시간 매칭 업데이트 시뮬레이션
  const simulateLiveUpdates = () => {
    const messages = [
      '현재 1,247명이 매칭을 기다리고 있어요',
      '오늘 34커플이 새롭게 탄생했어요! 🎉',
      '당신과 94% 궁합인 3명을 발견했어요',
      'ENFP 성격과 가장 잘 맞는 상대를 분석 중이에요',
      '서울 강남구 근처에서 5명의 후보를 찾았어요'
    ]

    messages.forEach((message, index) => {
      setTimeout(() => {
        addNotification('info', message)
      }, (index + 1) * 7000)
    })
  }

  return {
    simulateMatchingFlow,
    simulateMatchAcceptance,
    simulateLiveUpdates
  }
}

// 실시간 통계 컴포넌트
export function LiveStats() {
  const [stats, setStats] = useState({
    activeUsers: 1247,
    todayMatches: 34,
    onlineNow: 89
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3) - 1,
        todayMatches: prev.todayMatches + (Math.random() > 0.7 ? 1 : 0),
        onlineNow: prev.onlineNow + Math.floor(Math.random() * 5) - 2
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200 mb-6">
      <h4 className="font-semibold text-[#0D1B2A] mb-3 flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
        실시간 현황
      </h4>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-[#FF4D8D]">{stats.activeUsers.toLocaleString()}</div>
          <div className="text-xs text-[#0D1B2A] opacity-70">대기 중</div>
        </div>
        <div>
          <div className="text-lg font-bold text-[#0D1B2A]">{stats.todayMatches}</div>
          <div className="text-xs text-[#0D1B2A] opacity-70">오늘 매칭</div>
        </div>
        <div>
          <div className="text-lg font-bold text-[#C49A6C]">{stats.onlineNow}</div>
          <div className="text-xs text-[#0D1B2A] opacity-70">현재 접속</div>
        </div>
      </div>
    </div>
  )
}

// 진행 상황 추적 컴포넌트
export function ProgressTracker() {
  const { user } = useAuth()
  const { matchHistory } = useMatching()

  const progress = [
    {
      id: 'signup',
      title: '회원가입',
      completed: !!user,
      icon: '✅'
    },
    {
      id: 'profile',
      title: '프로필 작성',
      completed: user?.isProfileComplete,
      icon: user?.isProfileComplete ? '✅' : '⏳'
    },
    {
      id: 'verification',
      title: '본인 인증',
      completed: user?.isVerified,
      icon: user?.isVerified ? '✅' : '⏳'
    },
    {
      id: 'matching',
      title: '첫 매칭',
      completed: matchHistory.length > 0,
      icon: matchHistory.length > 0 ? '✅' : '⏳'
    },
    {
      id: 'conversation',
      title: '대화 시작',
      completed: false,
      icon: '⏳'
    }
  ]

  const completedSteps = progress.filter(step => step.completed).length

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-[#0D1B2A]">나의 MEE'BUD 여정</h3>
        <span className="text-sm text-[#FF4D8D] font-semibold">
          {completedSteps}/{progress.length}
        </span>
      </div>

      <div className="space-y-3">
        {progress.map((step) => (
          <div key={step.id} className="flex items-center space-x-3">
            <span className="text-lg">{step.icon}</span>
            <div className="flex-1">
              <div className={`text-sm font-medium ${
                step.completed ? 'text-[#0D1B2A]' : 'text-gray-500'
              }`}>
                {step.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#FF4D8D] to-[#C49A6C] h-2 rounded-full transition-all duration-300"
          style={{ width: `${(completedSteps / progress.length) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}