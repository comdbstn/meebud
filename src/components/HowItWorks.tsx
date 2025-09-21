export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            어떻게 작동하나요?
          </h2>
          <p className="text-gray-600">
            간단한 3단계로 진짜 연결을 경험하세요
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#FF4D8D] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">프로필 완성</h3>
            <p className="text-sm text-gray-600">기본정보와 질문지를 작성하고 원하는 경우 인증까지</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-[#FF4D8D] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI 추천 확인</h3>
            <p className="text-sm text-gray-600">AI가 분석한 나와 가장 잘 맞는 이상형 추천받기</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-[#FF4D8D] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">상호 수락 시 성사</h3>
            <p className="text-sm text-gray-600">서로 수락하면 연결 성사, 그때만 결제 진행</p>
          </div>
        </div>

        {/* AI Feature highlight */}
        <div className="mt-12 bg-gray-800 rounded-xl p-6 text-center text-white">
          <div className="text-2xl mb-2">🤖</div>
          <h3 className="font-bold mb-2">AI 궁합 분석</h3>
          <p className="text-sm text-gray-300">
            성격, 가치관, 외모 스타일까지 종합 분석하여 진짜 잘 맞는 사람만 추천
          </p>
        </div>
      </div>
    </section>
  )
}