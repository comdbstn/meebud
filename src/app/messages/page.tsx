import Link from 'next/link'
import TopTabNavigation from '@/components/TopTabNavigation'

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* 상단 탭 네비게이션 */}
      <TopTabNavigation />

      {/* 메시지 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#0D1B2A]">💬 메시지</h1>
            <Link href="/matching/history" className="text-[#FF4D8D] text-sm font-medium">
              📝 히스토리
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm mx-auto px-4 py-6">
        {/* 빈 상태 - Admin 매칭 플로우에 맞게 */}
        <div className="text-center py-16">
          <div className="text-6xl mb-6">💬</div>
          <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">
            아직 메시지가 없어요
          </h3>
          <p className="text-[#0D1B2A] opacity-70 mb-8 leading-relaxed">
            Admin이 큐레이팅한 매칭을 확인하고<br/>
            상호 수락 후 결제를 완료하면<br/>
            메시지를 주고받을 수 있어요!
          </p>

          {/* 단계별 안내 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8 text-left">
            <h4 className="font-semibold text-[#0D1B2A] mb-4 text-center">📋 메시지까지 3단계</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#FF4D8D] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <div>
                  <p className="font-medium text-[#0D1B2A]">Admin 매칭 확인</p>
                  <p className="text-sm text-[#0D1B2A] opacity-70">AI가 분석한 최적의 매칭을 받아보세요</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <div>
                  <p className="font-medium text-gray-500">상호 수락</p>
                  <p className="text-sm text-gray-400">양쪽 모두 매칭에 동의해야 합니다</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <div>
                  <p className="font-medium text-gray-500">꿈결제 완료</p>
                  <p className="text-sm text-gray-400">성사형 후불제로 안전하게 결제</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <Link
            href="/matching"
            className="inline-block bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            매칭 확인하러 가기
          </Link>
        </div>

        {/* 안내 카드 */}
        <div className="mt-8 bg-gradient-to-r from-[#FF4D8D] bg-opacity-10 to-[#C49A6C] bg-opacity-10 rounded-xl p-4 border border-[#FF4D8D] border-opacity-20">
          <h4 className="font-semibold text-[#0D1B2A] mb-2">✨ Admin 큐레이팅의 특별함</h4>
          <ul className="text-sm text-[#0D1B2A] opacity-70 space-y-1">
            <li>• AI가 MBTI, 가치관, 취향을 종합 분석해서 매칭</li>
            <li>• 다중 인증을 통과한 검증된 회원만</li>
            <li>• 성사된 연결에만 결제하는 안심 시스템</li>
          </ul>
        </div>
      </div>
    </div>
  )
}