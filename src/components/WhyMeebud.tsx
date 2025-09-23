export default function WhyMeebud() {
  const features = [
    {
      icon: "🛡",
      title: "다중 인증",
      subtitle: "신분·학력·직장·건강",
      description: "운영진 검수 뱃지로 신뢰할 수 있는 연결만",
      bgColor: "from-blue-50 to-indigo-50",
      iconBg: "from-blue-500 to-indigo-600"
    },
    {
      icon: "🤖",
      title: "AI 매칭, 이젠 외모까지",
      subtitle: "MBTI, 가치관, 취향 심지어 사주까지",
      description: "AI가 분석한 완벽한 궁합으로 진짜 맞는 사람만",
      bgColor: "from-purple-50 to-pink-50",
      iconBg: "from-purple-500 to-pink-600"
    },
    {
      icon: "💳",
      title: "성사형 후불제",
      subtitle: "성사된 연결에만 결제",
      description: "서로 수락한 연결에만 결제하는 공정한 시스템",
      bgColor: "from-emerald-50 to-teal-50",
      iconBg: "from-emerald-500 to-teal-600"
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
              className={`bg-gradient-to-r ${feature.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover-lift animate-slide-up-delay`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg animate-float`}>
                  <span className="text-white text-xl">{feature.icon}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-medium mb-3">
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
              💝 매칭 당 9,900원
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}