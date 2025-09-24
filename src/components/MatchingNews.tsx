'use client'

// 다른 사용자 매칭 소식 타입
interface MatchingNewsItem {
  id: number
  user1: {
    personality: string
    name: string // 익명화된 이름 (김○○ 형태)
  }
  user2: {
    personality: string
    name: string
  }
  reason: string
  timestamp: string
}

interface MatchingNewsProps {
  newsItems?: MatchingNewsItem[]
}

// 기본 더미 데이터
const defaultNewsItems: MatchingNewsItem[] = [
  {
    id: 1,
    user1: { personality: '활발한', name: '김○○' },
    user2: { personality: '차분한', name: '이○○' },
    reason: '서로 보완적인 성격',
    timestamp: '방금'
  },
  {
    id: 2,
    user1: { personality: '유머러스한', name: '박○○' },
    user2: { personality: '진중한', name: '최○○' },
    reason: '균형잡힌 대화',
    timestamp: '3분 전'
  },
  {
    id: 3,
    user1: { personality: '예술적인', name: '정○○' },
    user2: { personality: '분석적인', name: '한○○' },
    reason: '창의성과 논리의 조화',
    timestamp: '10분 전'
  }
]

export default function MatchingNews({ newsItems = defaultNewsItems }: MatchingNewsProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-gradient-to-br from-[#FF4D8D] to-[#C49A6C] rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">📢</span>
        </div>
        <h3 className="font-bold text-[#0D1B2A]">실시간 매칭 소식</h3>
      </div>

      <div className="space-y-3">
        {newsItems.slice(0, 3).map((item, index) => (
          <div
            key={item.id}
            className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: 'fadeInUp 0.5s ease-out forwards'
            }}
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#FF4D8D] rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#0D1B2A] opacity-80 leading-relaxed">
                <span className="font-medium">{item.user1.personality} 성격</span>인{' '}
                <span className="font-semibold text-[#FF4D8D]">{item.user1.name}님</span>과{' '}
                <span className="font-medium">{item.user2.personality} 성격</span>인{' '}
                <span className="font-semibold text-[#FF4D8D]">{item.user2.name}님</span>이{' '}
                <span className="font-medium text-[#0D1B2A]">&quot;{item.reason}&quot;</span>으로 매칭되었습니다!
              </p>
              <div className="text-xs text-[#0D1B2A] opacity-60 mt-1">{item.timestamp}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 pt-3 border-t border-slate-100">
        <p className="text-xs text-[#0D1B2A] opacity-60">
          🎉 오늘 총 <span className="font-semibold text-[#FF4D8D]">23건</span>의 매칭이 성사되었어요!
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}