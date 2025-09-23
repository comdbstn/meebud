'use client'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-sm mx-auto animate-fade-in">
        {/* Logo - Heart with wolf silhouette */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-2xl flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                <path d="M9 8c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 8 9 8zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S15.83 8 15 8z" className="opacity-70"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
              MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
            </h1>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
            가벼운 스와이프는 잊으세요.
          </h2>
          <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
            Mee'bud는 인증·AI·성사형 후불제로 <span className="text-[#FF4D8D]">'진짜'</span>를 잇습니다.
          </h3>
          <p className="text-base text-gray-600 font-medium">
            서로 수락한 연결에만 결제합니다.
          </p>
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