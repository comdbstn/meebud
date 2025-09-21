'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0D1B2A] to-[#1e3a4a] flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF4D8D] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#C49A6C] rounded-full opacity-10 blur-xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Mee<span className="text-[#FF4D8D]">&apos;</span>bud
          </h1>
          <div className="w-16 h-1 bg-[#FF4D8D] mx-auto rounded-full"></div>
        </div>

        {/* Main headline */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          가벼운 스와이프는<br />
          <span className="text-[#FF4D8D]">잊으세요.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-[#ADB5BD] text-lg mb-12 font-medium">
          서로 수락한 연결에만 결제합니다.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.open('https://meebud.com', '_blank')}
            className="w-full bg-[#FF4D8D] text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-[#ff3080] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            지금 시작하기
          </button>

          <button
            onClick={() => document.getElementById('why-meebud')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-transparent border-2 border-[#ADB5BD] text-[#ADB5BD] font-semibold py-4 px-8 rounded-full text-lg hover:border-white hover:text-white transition-all duration-300"
          >
            서비스 살펴보기
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#ADB5BD] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#ADB5BD] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}