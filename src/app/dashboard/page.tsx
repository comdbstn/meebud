import { Metadata } from 'next'
import BottomNavigation from '@/components/BottomNavigation'

export const metadata: Metadata = {
  title: "홈 - MEE'BUD",
  description: "MEE'BUD 매칭 현황을 확인하고 새로운 인연을 시작하세요",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
              </h1>
              <p className="text-sm text-gray-600">오늘도 좋은 하루 보내세요!</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🦊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* Matching Status */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">매칭 현황</h2>

          {/* Today's Recommendations */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">오늘의 AI 추천</h3>
                  <p className="text-sm text-gray-600">새로운 인연을 확인해보세요</p>
                </div>
              </div>
              <div className="bg-[#FF4D8D] text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </div>
            </div>
            <button className="w-full bg-[#FF4D8D] text-white font-semibold py-3 rounded-xl hover:bg-[#ff3080] transition-colors duration-200">
              추천 확인하기
            </button>
          </div>

          {/* Matching Progress */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
            <h3 className="font-bold text-gray-900 mb-4">진행 중인 매칭</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⏳</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">김○○님</p>
                    <p className="text-sm text-gray-600">상대방 답변 대기 중</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">2시간 전</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">💕</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">이○○님</p>
                    <p className="text-sm text-green-600">매칭 성사!</p>
                  </div>
                </div>
                <button className="bg-[#FF4D8D] text-white text-xs font-medium px-3 py-1 rounded-full hover:bg-[#ff3080] transition-colors duration-200">
                  메시지
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center hover-lift">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-xl">📝</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">프로필 완성</h3>
              <p className="text-xs text-gray-600">매칭률 높이기</p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center hover-lift">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-xl">⭐</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">인증하기</h3>
              <p className="text-xs text-gray-600">신뢰도 증가</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">최근 활동</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF4D8D] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">💝</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">새로운 매칭이 성사되었어요!</p>
                  <p className="text-xs text-gray-600">30분 전</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🤖</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">AI가 새로운 추천을 완료했어요</p>
                  <p className="text-xs text-gray-600">2시간 전</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">프로필 인증이 승인되었어요</p>
                  <p className="text-xs text-gray-600">1일 전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}