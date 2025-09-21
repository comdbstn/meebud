export default function WhyMeebud() {
  const features = [
    {
      icon: "🤖",
      title: "AI 외모 매칭",
      subtitle: "강아지상 ↔ 고양이상 분석",
      description: "얼굴형, 눈매, 미소까지 AI가 분석해서 당신과 찰떡궁합인 외모 스타일을 찾아드려요."
    },
    {
      icon: "✨",
      title: "꼼꼼한 검수 시스템",
      subtitle: "운영진 직접 확인",
      description: "학력, 직장, 취미 등 본인이 인증하고 싶은 정보만 운영진이 꼼꼼하게 검수해서 신뢰도를 높여요."
    },
    {
      icon: "💕",
      title: "성사형 후불제",
      subtitle: "성공한 연결에만 결제",
      description: "서로 좋아하는 마음이 확인된 후에만 결제하는 공정한 시스템으로 부담없이 시작하세요."
    }
  ]

  return (
    <section id="why-meebud" className="py-16 px-4 bg-white">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            어떻게 진행될까요?
          </h2>
          <p className="text-gray-600">
            AI가 분석하는 <span className="text-[#FF4D8D] font-semibold">나의 완벽한 이상형</span>
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FF4D8D] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">{feature.icon}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">
                      STEP {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#FF4D8D] font-medium mb-2">
                    {feature.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 text-center">
          <div className="bg-[#FF4D8D] text-white px-6 py-3 rounded-xl">
            <p className="text-sm font-medium">
              🎉 테스트 기간이라 전부 무료예요!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}