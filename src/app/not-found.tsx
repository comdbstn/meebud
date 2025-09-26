import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto text-center">
        {/* 브랜드 로고 */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🔍</span>
          </div>
          <h1 className="text-xl font-bold text-[#0D1B2A]">
            MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
          </h1>
        </div>

        {/* 404 메시지 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="text-6xl mb-4">🤔</div>
          <h2 className="text-xl font-bold text-[#0D1B2A] mb-2">
            404 - 페이지를 찾을 수 없어요
          </h2>
          <p className="text-sm text-[#0D1B2A] opacity-70 mb-6 leading-relaxed">
            요청하신 페이지가 존재하지 않거나<br />
            이동되었을 수 있습니다.
          </p>

          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all text-center"
            >
              홈으로 돌아가기
            </Link>

            <Link
              href="/welcome"
              className="block w-full bg-white border border-gray-300 text-[#0D1B2A] font-medium py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors text-center"
            >
              서비스 소개 보기
            </Link>
          </div>
        </div>

        {/* 추천 링크 */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
          <h3 className="font-semibold text-[#0D1B2A] mb-3">🎯 이런 페이지는 어떠세요?</h3>
          <div className="space-y-2 text-sm">
            <Link
              href="/auth/login"
              className="block text-[#FF4D8D] font-medium hover:text-[#ff3080] text-left"
            >
              💜 로그인하기
            </Link>
            <Link
              href="/auth/signup"
              className="block text-[#FF4D8D] font-medium hover:text-[#ff3080] text-left"
            >
              ✨ 회원가입하기
            </Link>
            <Link
              href="/matching"
              className="block text-[#FF4D8D] font-medium hover:text-[#ff3080] text-left"
            >
              🤖 AI 매칭 보기
            </Link>
            <Link
              href="/dreams"
              className="block text-[#FF4D8D] font-medium hover:text-[#ff3080] text-left"
            >
              ☁️ 성사형 후불제 안내
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}