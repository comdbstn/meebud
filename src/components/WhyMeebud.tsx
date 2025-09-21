export default function WhyMeebud() {
  const features = [
    {
      icon: "🤖",
      title: "AI 외모 매칭",
      subtitle: "얼굴상 완벽 분석",
      description: "얼굴형, 눈매, 미소까지 AI가 분석해서 당신과 찰떡궁합인 외모 스타일을 찾아드려요."
    },
    {
      icon: "🛡️",
      title: "안전한 인증 시스템",
      subtitle: "선택적 검수로 신뢰도 UP",
      description: "원하는 정보만 골라서 인증 가능! 학력, 직장, 취미 등 운영진이 직접 검수해서 진짜 신뢰할 수 있는 만남을 보장해요."
    },
    {
      icon: "💎",
      title: "공정한 후불제",
      subtitle: "성사될 때만 결제하는 시스템",
      description: "일방적인 관심이 아닌, 서로 마음이 통했을 때만 결제! 여성은 무료, 남성도 성사 시에만 9,900원으로 부담 제로."
    }
  ]

  return (
    <section id="why-meebud" className="py-16 px-4 bg-white">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            왜 MEE&apos;BUD일까요?
          </h2>
          <p className="text-gray-600">
            기존 데이팅 앱과는 <span className="text-[#FF4D8D] font-semibold">완전히 다른 접근</span>
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF4D8D] to-[#ff3080] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-xl">{feature.icon}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#FF4D8D] font-semibold mb-3">
                    {feature.subtitle}
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed">
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
              💝 여성만 무료! 남성 9,900원 (성사 시에만 결제)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}