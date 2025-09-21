export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Mee<span className="text-[#FF4D8D]">&apos;</span>bud
        </h1>
        <p className="text-[#ADB5BD] text-lg mb-8">
          서비스 준비 중입니다
        </p>
        <a
          href="/welcome"
          className="inline-block bg-[#FF4D8D] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#ff3080] transition-colors duration-300"
        >
          서비스 소개 보기
        </a>
      </div>
    </div>
  )
}
