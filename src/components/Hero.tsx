'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#FF4D8D] to-[#C49A6C] rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15 blur-lg animate-bounce delay-500"></div>

        {/* Floating hearts */}
        <div className="absolute top-1/4 right-1/4 text-2xl animate-bounce delay-300">💕</div>
        <div className="absolute bottom-1/4 left-1/3 text-xl animate-bounce delay-700">✨</div>
        <div className="absolute top-3/4 right-1/3 text-lg animate-bounce delay-1000">💖</div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Logo with enhanced animation */}
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF4D8D] to-purple-500 rounded-lg flex items-center justify-center transform rotate-12 animate-pulse">
              <span className="text-white text-sm">💜</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF4D8D] via-purple-500 to-blue-500 bg-clip-text text-transparent">
              MEE&apos;BUD
            </h1>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF4D8D] to-purple-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Main headline with typing animation effect */}
        <div className="mb-6 animate-fade-in-up delay-300">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-tight">
            <span className="inline-block animate-bounce">AI</span>가 외모해주는
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
            가장 <span className="text-[#FF4D8D] animate-pulse">완벽한</span> 나의 이상형
          </h3>
        </div>

        {/* Key features with icons */}
        <div className="mb-8 space-y-3 animate-fade-in-up delay-500">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span className="animate-bounce">🐶</span>
            <span>강아지상 ↔ 강아지상 매칭</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span className="animate-bounce delay-200">🐱</span>
            <span>고양이상 ↔ 고양이상 매칭</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span className="animate-bounce delay-400">✨</span>
            <span>운영진 꼼꼼 검수로 좋은 서비스</span>
          </div>
        </div>

        <h4 className="text-lg font-medium text-gray-700 mb-8 animate-fade-in-up delay-700">
          저희는 <span className="font-bold text-[#FF4D8D]">MEE&apos;BUD</span> 입니다
        </h4>

        {/* Interactive chat preview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-8 animate-fade-in-up delay-1000 shadow-lg">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-6 h-6 bg-gradient-to-br from-[#FF4D8D] to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">💜</span>
            </div>
            <span className="text-sm font-medium text-gray-700">3분 내외의 간단한 가입으로</span>
          </div>
          <div className="bg-gray-100 rounded-xl p-3 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span>💬</span>
              <span>자기소개 해볼까요?</span>
            </div>
            <div className="mt-2 text-xs text-orange-500 flex items-center space-x-1">
              <span>🦊</span>
              <span>넌 다정한 사람이야</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons with enhanced styling */}
        <div className="space-y-4 animate-fade-in-up delay-1200">
          <button
            onClick={() => window.open('https://meebud.com', '_blank')}
            className="w-full bg-gradient-to-r from-[#FF4D8D] to-purple-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>지금 시작하기</span>
              <span className="animate-bounce">✨</span>
            </span>
          </button>

          <button
            onClick={() => document.getElementById('why-meebud')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-white/50 backdrop-blur-sm border-2 border-purple-200 text-gray-700 font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-white/70 hover:border-purple-300 transition-all duration-300"
          >
            서비스 살펴보기
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-[#FF4D8D] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  )
}