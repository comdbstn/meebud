'use client'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-sm mx-auto animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 mb-3">
            <div className="w-6 h-6 bg-[#FF4D8D] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">💜</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
            </h1>
          </div>
          <div className="w-16 h-0.5 bg-[#FF4D8D] mx-auto rounded-full"></div>
        </div>

        {/* Main headline */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            AI가 매칭하는 후불제 매칭,
          </h2>
          <h3 className="text-xl font-bold text-gray-700">
            가장 <span className="text-[#FF4D8D]">완벽한</span> 이상형을 찾아드립니다.
          </h3>
        </div>

        {/* Key features */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span>🐶</span>
            <span>내 이상형을 Ai가 인식해서 완벽한 매칭</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span>🐱</span>
            <span>100% 후불제! 서로 매칭 수락한 뒤 결제하세요:)</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span>✨</span>
            <span>운영진 꼼꼼 검수로 안전한 만남</span>
          </div>
        </div>

        <h4 className="text-base font-medium text-gray-700 mb-8">
          저희는 <span className="font-bold text-[#FF4D8D]">MEE&apos;BUD</span> 입니다
        </h4>

        {/* Simple preview */}
        <div className="bg-white rounded-xl p-4 mb-8 shadow-sm border border-gray-100">
          <div className="text-center mb-3">
            <span className="text-sm font-medium text-gray-700">3분 내외의 간단한 가입으로</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-sm text-gray-600 mb-2">💬 이상형이 어떻게 되세요?</div>
            <div className="text-xs text-gray-500">🦊 ENTJ 여우상이 좋아요!</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => window.open('https://meebud.com', '_blank')}
            className="w-full bg-[#FF4D8D] text-white font-semibold py-4 px-8 rounded-xl text-base hover:bg-[#ff3080] transition-colors duration-200"
          >
            지금 시작하기
          </button>

          <button
            onClick={() => document.getElementById('why-meebud')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-white border border-gray-200 text-gray-700 font-medium py-3 px-8 rounded-xl text-base hover:bg-gray-50 transition-colors duration-200"
          >
            서비스 살펴보기
          </button>
        </div>
      </div>
    </section>
  )
}