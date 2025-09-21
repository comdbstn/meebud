export default function TrustSafety() {
  const certifications = [
    {
      icon: "👤",
      title: "신분 인증",
      description: "본인 확인 서류",
      badge: "필수"
    },
    {
      icon: "🎓",
      title: "학력 인증",
      description: "졸업증명서 등",
      badge: "선택"
    },
    {
      icon: "💼",
      title: "직장 인증",
      description: "재직증명서 등",
      badge: "선택"
    },
    {
      icon: "🏥",
      title: "건강 인증",
      description: "건강검진 결과",
      badge: "선택"
    }
  ]

  const rejectionReasons = [
    "신분증 정보가 불명확한 경우",
    "서류가 만료되었거나 위조된 경우",
    "제출 정보와 서류 내용이 일치하지 않는 경우",
    "필수 정보가 가려져 식별이 불가한 경우"
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
            신뢰와 안전
          </h2>
          <p className="text-[#ADB5BD] text-lg">
            운영진이 직접 검수하는 인증 시스템
          </p>
        </div>

        {/* Certification Process */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#0D1B2A] mb-6 text-center">
            인증 프로세스
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <h4 className="font-bold text-[#0D1B2A] text-sm mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#ADB5BD] mb-2">
                    {cert.description}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    cert.badge === '필수'
                      ? 'bg-[#FF4D8D] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {cert.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="mb-16 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-[#0D1B2A] mb-4 flex items-center">
            <span className="mr-2">🔒</span>
            민감정보 처리 원칙
          </h3>
          <div className="space-y-3 text-sm text-[#ADB5BD]">
            <div className="flex items-start space-x-2">
              <span className="text-[#FF4D8D] mt-1">•</span>
              <span>동의 기반으로만 수집 및 처리</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-[#FF4D8D] mt-1">•</span>
              <span>필요한 최소한의 정보만 수집</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-[#FF4D8D] mt-1">•</span>
              <span>권한을 가진 운영진만 제한적 열람</span>
            </div>
          </div>
        </div>

        {/* Rejection Reasons */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-[#0D1B2A] mb-6 text-center">
            인증 반려 사유 예시
          </h3>

          <div className="space-y-3">
            {rejectionReasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-500 text-sm">✕</span>
                </div>
                <p className="text-sm text-[#ADB5BD] leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Report & Protection */}
        <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1e3a4a] rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="text-white font-bold text-lg mb-2">신고 및 보호 정책</h3>
          <p className="text-[#ADB5BD] text-sm leading-relaxed">
            부적절한 행동 발견 시 즉시 신고해주세요.<br />
            24시간 내 검토 후 적절한 조치를 취합니다.
          </p>
        </div>
      </div>
    </section>
  )
}