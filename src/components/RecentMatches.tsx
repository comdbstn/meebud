'use client'

// 샘플 데이터
const recentActivities = [
  {
    id: 1,
    type: 'match',
    title: '💕 새로운 매칭이 성사되었어요!',
    description: '강아지상 매력의 지수님과 연결되었습니다',
    time: '2025.01.21 오후 2시',
    image: '👩🏻',
    status: 'new'
  },
  {
    id: 2,
    type: 'like',
    title: '❤️ 누군가 당신에게 관심을 보였어요',
    description: '고양이상 스타일의 회원이 좋아요를 눌렀어요',
    time: '2025.01.21 오전 9시',
    image: '👨🏻',
    status: 'waiting'
  },
  {
    id: 3,
    type: 'message',
    title: '💬 새로운 메시지가 도착했어요',
    description: '민준님으로부터 첫 메시지가 왔어요',
    time: '2025.01.20 오후 8시',
    image: '👨🏻‍🦱',
    status: 'read'
  },
  {
    id: 4,
    type: 'recommendation',
    title: '✨ AI가 완벽한 이상형을 찾았어요',
    description: '97% 궁합의 여우상 회원을 추천드려요',
    time: '2025.01.20 오후 6시',
    image: '👩🏻‍🦰',
    status: 'pending'
  },
  {
    id: 5,
    type: 'profile',
    title: '🔍 프로필 조회수가 증가했어요',
    description: '오늘 5명이 당신의 프로필을 확인했어요',
    time: '2025.01.20 오후 5시',
    image: '📊',
    status: 'info'
  }
]

export default function RecentMatches() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-red-500'
      case 'waiting': return 'bg-orange-500'
      case 'pending': return 'bg-[#FF4D8D]'
      default: return 'bg-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return '신규'
      case 'waiting': return '대기'
      case 'pending': return '추천'
      case 'read': return '확인'
      default: return ''
    }
  }

  return (
    <div className="max-w-sm mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-[#0D1B2A] mb-2">
          다가오는 일정보기
        </h2>
        <p className="text-sm text-[#0D1B2A] opacity-70">
          최근 매칭 활동과 추천을 확인해보세요
        </p>
      </div>

      <div className="space-y-3">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start space-x-3">
              {/* 아이콘/이미지 */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] flex items-center justify-center text-xl flex-shrink-0">
                {activity.image}
              </div>

              {/* 내용 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-[#0D1B2A] text-sm leading-tight">
                    {activity.title}
                  </h3>
                  {activity.status !== 'read' && activity.status !== 'info' && (
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs text-white ${getStatusColor(activity.status)} flex-shrink-0`}>
                      {getStatusText(activity.status)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#0D1B2A] opacity-70 mt-1 leading-relaxed">
                  {activity.description}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-[#0D1B2A] opacity-60">
                    {activity.time}
                  </span>

                  <button className="text-xs text-[#FF4D8D] hover:text-[#ff3080] font-medium">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 더보기 버튼 */}
      <div className="mt-6 text-center">
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-[#0D1B2A] opacity-80 py-3 px-4 rounded-xl font-medium transition-colors">
          더 많은 활동 보기
        </button>
      </div>

      {/* 하단 CTA */}
      <div className="mt-8 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-xl p-6 text-white text-center">
        <div className="text-2xl mb-2">🎯</div>
        <h3 className="font-bold mb-2">완벽한 이상형을 찾아보세요!</h3>
        <p className="text-sm text-white opacity-80 mb-4">
          AI가 분석한 나만의 이상형이 기다리고 있어요
        </p>
        <button className="w-full bg-white text-[#FF4D8D] py-3 px-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
          지금 시작하기
        </button>
      </div>
    </div>
  )
}