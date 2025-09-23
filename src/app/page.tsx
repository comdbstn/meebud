import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "MEE'BUD - AI가 매칭하는 후불제 소개팅",
  description: "AI가 외모까지 분석해서 찾아주는 완벽한 이상형. 성사 시에만 결제하는 안전한 후불제 매칭 서비스",
  keywords: "소개팅, 매칭, AI, 얼굴상, 후불제, 데이팅앱, 이상형",
  openGraph: {
    title: "MEE'BUD - AI가 매칭하는 후불제 소개팅",
    description: "AI가 외모까지 분석해서 찾아주는 완벽한 이상형. 성사 시에만 결제하는 안전한 후불제 매칭 서비스",
    type: "website",
    url: "https://meebud.com",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-sm mx-auto animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-2xl flex items-center justify-center shadow-lg animate-heart-beat">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                <path d="M9 8c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 8 9 8zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S15.83 8 15 8z" className="opacity-70"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight animate-float">
              MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
            </h1>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
            AI가 매칭하는 후불제 소개팅, Meebud입니다
          </h2>
          <p className="text-base text-gray-600 font-medium mb-6">
            Meebud에 대해서 자세히 알아보세요 :)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a
            href="/welcome"
            className="block w-full bg-white border-2 border-[#FF4D8D] text-[#FF4D8D] font-semibold py-4 px-8 rounded-xl text-base hover:bg-[#FF4D8D] hover:text-white transition-all duration-200 hover-lift"
          >
            어떤 서비스인가요?
          </a>

          <a
            href="/auth/login"
            className="block w-full bg-[#FF4D8D] text-white font-semibold py-4 px-8 rounded-xl text-base hover:bg-[#ff3080] transition-colors duration-200 animate-pulse-glow hover-lift"
          >
            로그인
          </a>

          <a
            href="/auth/signup"
            className="block w-full bg-gray-100 text-gray-700 font-medium py-4 px-8 rounded-xl text-base hover:bg-gray-200 transition-colors duration-200 hover-lift"
          >
            회원가입
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            AI가 분석한 완벽한 이상형 매칭 서비스
          </p>
        </div>
      </div>
    </div>
  )
}