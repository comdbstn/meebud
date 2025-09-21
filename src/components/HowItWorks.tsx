export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "프로필 완성",
      description: "기본정보와 질문지를 작성하고 인증 서류를 업로드하여 신뢰할 수 있는 프로필을 만들어보세요."
    },
    {
      number: "02",
      title: "AI 추천 확인",
      description: "AI가 분석한 당신과 가장 잘 맞는 1~3명의 이상형을 추천받고 신중하게 선택하세요."
    },
    {
      number: "03",
      title: "상호 수락 시 성사",
      description: "서로 수락하면 연결이 성사되고, 그때만 결제가 진행되는 공정한 시스템입니다."
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
            어떻게 작동하나요?
          </h2>
          <p className="text-[#ADB5BD] text-lg">
            간단한 3단계로 진짜 연결을 경험하세요
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-[#FF4D8D] to-[#C49A6C] opacity-30"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FF4D8D] to-[#C49A6C] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#ADB5BD] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Feature highlight */}
        <div className="mt-16 bg-gradient-to-r from-[#0D1B2A] to-[#1e3a4a] rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">🤖</div>
          <h3 className="text-white font-bold text-lg mb-2">AI 궁합 분석</h3>
          <p className="text-[#ADB5BD] text-sm leading-relaxed">
            성격, 가치관, 라이프스타일까지 종합 분석하여<br />
            진짜 잘 맞는 사람만 추천해드립니다
          </p>
        </div>
      </div>
    </section>
  )
}