export default function WhyMeebud() {
  const features = [
    {
      icon: "🤖",
      title: "AI 외모 매칭",
      subtitle: "강아지상 ↔ 고양이상",
      description: "얼굴형, 눈매, 미소까지 AI가 분석해서 당신과 찰떡궁합인 외모 스타일을 찾아드려요.",
      highlight: "외모 취향 맞춤",
      bgGradient: "from-blue-100 to-purple-100",
      iconBg: "from-blue-400 to-purple-500"
    },
    {
      icon: "✨",
      title: "꼼꼼한 검수 시스템",
      subtitle: "운영진 직접 확인",
      description: "학력, 직장, 취미 등 본인이 인증하고 싶은 정보만 운영진이 꼼꼼하게 검수해서 신뢰도를 높여요.",
      highlight: "선택적 인증",
      bgGradient: "from-green-100 to-emerald-100",
      iconBg: "from-green-400 to-emerald-500"
    },
    {
      icon: "💕",
      title: "성사형 후불제",
      subtitle: "성공한 연결에만 결제",
      description: "서로 좋아하는 마음이 확인된 후에만 결제하는 공정한 시스템으로 부담없이 시작하세요.",
      highlight: "위험 부담 ZERO",
      bgGradient: "from-pink-100 to-rose-100",
      iconBg: "from-pink-400 to-rose-500"
    }
  ]

  return (
    <section id="why-meebud" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-2xl animate-bounce">🌟</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              어떻게 진행될까요?
            </h2>
          </div>
          <p className="text-gray-600 text-lg font-medium">
            AI가 분석하는 <span className="text-[#FF4D8D] font-bold">나의 완벽한 이상형</span>
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-white/50`}
            >
              {/* Step number */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg transform rotate-12`}>
                  <span className="text-white text-xl">{feature.icon}</span>
                </div>
                <div className="bg-white/80 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-gray-600">STEP {index + 1}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <span className="bg-gradient-to-r from-[#FF4D8D] to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    {feature.highlight}
                  </span>
                </div>

                <div className="bg-white/60 rounded-xl p-3 border border-white/80">
                  <div className="text-sm font-medium text-purple-600 mb-1">
                    {feature.subtitle}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full flex-1 ${
                      i <= index ? 'bg-gradient-to-r from-[#FF4D8D] to-purple-400' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom message */}
        <div className="mt-12 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <span className="text-2xl animate-bounce">🎯</span>
              <span className="font-bold text-gray-800">나의 완벽한 이상형을 어떻게찾지?</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-3">
                <div className="flex items-center space-x-1 mb-1">
                  <span>🐶</span>
                  <span className="font-medium">이상형이 어떻게 되세요?</span>
                </div>
                <div className="text-xs text-gray-600">따뜻한 강아지상이 좋아요!</div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-3">
                <div className="flex items-center space-x-1 mb-1">
                  <span>🦊</span>
                  <span className="font-medium text-xs">신청땜에 매칭될 매칭은</span>
                </div>
                <div className="text-xs text-gray-600">매칭이 안돼! 🤔</div>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-[#FF4D8D] to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
              <span className="flex items-center space-x-1">
                <span>텍스트 기간이라 전부 무료에요!</span>
                <span className="animate-bounce">🎉</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}