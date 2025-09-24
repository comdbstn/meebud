'use client'

import Link from 'next/link'

// 매칭 상태 타입 정의
export type MatchingStatusType =
  | 'profile_incomplete'  // 프로필 미완성
  | 'ready_to_start'      // 매칭 시작 전
  | 'matching'            // 매칭 진행 중
  | 'matched'             // 매칭 완료

interface MatchingStatusProps {
  status: MatchingStatusType
  matchedProfile?: {
    name: string
    age: number
    job: string
    mbti: string
    compatibility: number
  }
}

export default function MatchingStatus({ status, matchedProfile }: MatchingStatusProps) {
  // 상태 1: 프로필 미완성
  if (status === 'profile_incomplete') {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="font-bold text-[#0D1B2A] mb-2">프로필을 완성하여 매칭을 시작하세요!</h3>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-4">
            AI가 더 정확한 매칭을 위해 당신의 정보가 필요해요.
          </p>
          <Link
            href="/profile/create"
            className="bg-[#FF4D8D] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#ff3080] transition-colors inline-block"
          >
            프로필 완성하기
          </Link>
        </div>
      </div>
    )
  }

  // 상태 2: 프로필 완성, 매칭 시작 전
  if (status === 'ready_to_start') {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#C49A6C] to-[#FF4D8D] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="font-bold text-[#0D1B2A] mb-2">매칭을 시작하세요!</h3>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-4">
            프로필이 완성되었어요. 이제 매칭을 시작할 수 있습니다.
          </p>
          <button
            className="bg-[#FF4D8D] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#ff3080] transition-colors"
            onClick={() => {
              // TODO: 매칭 시작 API 호출
              alert('매칭이 시작되었습니다! Admin이 최적의 상대를 찾고 있어요.')
            }}
          >
            매칭 시작하기
          </button>
        </div>
      </div>
    )
  }

  // 상태 3: 매칭 진행 중
  if (status === 'matching') {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FF4D8D] to-[#C49A6C] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl animate-pulse">⏳</span>
          </div>
          <h3 className="font-bold text-[#0D1B2A] mb-2">매칭 중입니다.</h3>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-4">
            Admin이 최적의 상대를 찾고 있어요.<br />
            보통 24시간 이내에 결과를 알려드려요.
          </p>
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-[#FF4D8D] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#FF4D8D] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-[#FF4D8D] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-xs text-[#0D1B2A] opacity-60 mt-2 text-center">분석 중...</p>
          </div>
        </div>
      </div>
    )
  }

  // 상태 4: 매칭 완료
  if (status === 'matched' && matchedProfile) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FF4D8D] to-[#C49A6C] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💝</span>
          </div>
          <h3 className="font-bold text-[#0D1B2A] mb-2">매칭되었습니다!</h3>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-4">
            Admin이 선별한 최적의 상대를 찾았어요.
          </p>

          {/* 매칭된 상대 미리보기 */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#0D1B2A]">{matchedProfile.name}님</div>
                <div className="text-sm text-[#0D1B2A] opacity-70">
                  {matchedProfile.age}세 • {matchedProfile.job} • {matchedProfile.mbti}
                </div>
              </div>
              <div className="bg-pink-100 text-[#FF4D8D] px-3 py-1 rounded-full text-sm font-semibold">
                {matchedProfile.compatibility}% 호환
              </div>
            </div>
          </div>

          <Link
            href="/matching"
            className="bg-[#FF4D8D] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#ff3080] transition-colors inline-block"
          >
            매칭 확인하기
          </Link>
        </div>
      </div>
    )
  }

  return null
}