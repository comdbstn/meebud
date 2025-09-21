export default function WhyMeebud() {
  const features = [
    {
      icon: "🛡",
      title: "다중 인증 시스템",
      subtitle: "운영진 검수 뱃지",
      description: "신분·학력·직장·건강 등 모든 정보를 운영진이 직접 검수하여 신뢰할 수 있는 연결만을 제공합니다."
    },
    {
      icon: "🤖",
      title: "AI 이상형 매칭",
      subtitle: "정확한 추천 시스템",
      description: "MBTI, 가치관, 취향을 종합 분석한 AI가 당신과 진짜 잘 맞는 사람을 추천해드립니다."
    },
    {
      icon: "💳",
      title: "성사형 후불제",
      subtitle: "성공한 연결에만 결제",
      description: "서로 수락한 연결에만 결제하는 공정한 시스템으로 안심하고 시작하세요."
    }
  ]

  return (
    <section id="why-meebud" className="py-20 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
            왜 Mee<span className="text-[#FF4D8D]">&apos;</span>bud일까요?
          </h2>
          <p className="text-[#ADB5BD] text-lg">
            진짜 연결을 위한 차별화된 서비스
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-[#0D1B2A]">
                      {feature.title}
                    </h3>
                    <span className="text-xs bg-[#FF4D8D] text-white px-2 py-1 rounded-full font-medium">
                      {feature.subtitle}
                    </span>
                  </div>
                  <p className="text-[#ADB5BD] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#0D1B2A] text-white px-6 py-3 rounded-full text-sm font-medium">
            <span>✨</span>
            <span>신뢰를 해치면, 연결은 멀어집니다.</span>
          </div>
        </div>
      </div>
    </section>
  )
}