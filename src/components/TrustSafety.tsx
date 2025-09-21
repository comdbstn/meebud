export default function TrustSafety() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            신뢰와 안전
          </h2>
          <p className="text-gray-600">
            운영진이 직접 검수하는 안전한 시스템
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-4 mb-10">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-center space-x-3">
              <span className="text-xl">🔒</span>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">개인정보 보호</h3>
                <p className="text-xs text-gray-600">동의 기반 최소 수집, 안전한 보관</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-center space-x-3">
              <span className="text-xl">✨</span>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">선택적 인증</h3>
                <p className="text-xs text-gray-600">원하는 정보만 운영진 검수 후 인증</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-center space-x-3">
              <span className="text-xl">🛡️</span>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">신고 시스템</h3>
                <p className="text-xs text-gray-600">24시간 내 빠른 검토 및 조치</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="bg-gray-800 rounded-xl p-6 text-center text-white">
          <div className="text-2xl mb-2">🛡️</div>
          <h3 className="font-bold mb-2">안전한 만남을 위해</h3>
          <p className="text-sm text-gray-300">
            부적절한 행동 발견 시 즉시 신고해주세요
          </p>
        </div>
      </div>
    </section>
  )
}