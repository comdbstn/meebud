'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "얼굴은 언제 공개되나요?",
      answer: "서로 수락한 후 연결이 성사되면 얼굴 사진이 공개됩니다. 그 전까지는 모자이크 처리되어 보호됩니다."
    },
    {
      question: "성사형 후불제 가격은 얼마인가요?",
      answer: "남성 9,900원, 여성 무료입니다. 서로 수락한 연결에만 결제가 진행되는 공정한 시스템입니다."
    },
    {
      question: "인증은 필수인가요?",
      answer: "신분 인증은 필수이며, 학력·직장·건강 인증은 선택사항입니다. 더 많은 인증을 받을수록 신뢰도가 높아집니다."
    },
    {
      question: "AI는 어떻게 매칭하나요?",
      answer: "MBTI, 가치관, 라이프스타일, 취향 등을 종합 분석하여 궁합을 계산하고 가장 잘 맞는 사람을 추천합니다."
    },
    {
      question: "매칭이 안 되면 환불되나요?",
      answer: "서로 수락하지 않으면 결제가 발생하지 않습니다. 성사된 연결에만 결제하는 후불제 시스템입니다."
    },
    {
      question: "개인정보는 안전한가요?",
      answer: "모든 개인정보는 암호화되어 보관되며, 권한을 가진 운영진만 최소한의 정보에 접근할 수 있습니다."
    },
    {
      question: "부적절한 사용자를 신고할 수 있나요?",
      answer: "신고 기능을 통해 언제든 신고 가능하며, 24시간 내 검토 후 적절한 조치를 취합니다."
    },
    {
      question: "탈퇴하면 정보가 삭제되나요?",
      answer: "탈퇴 시 개인정보는 즉시 삭제되며, 법적 보관이 필요한 최소한의 정보만 일정 기간 보관됩니다."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-[#ADB5BD] text-lg">
            궁금한 점이 있으시다면 확인해보세요
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-semibold text-[#0D1B2A] text-sm">
                  {faq.question}
                </span>
                <span className={`text-[#FF4D8D] text-xl font-bold transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              {openFAQ === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-[#ADB5BD] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#ADB5BD] text-sm mb-4">
            더 궁금한 점이 있으시나요?
          </p>
          <a
            href="mailto:jys13230@gmail.com"
            className="inline-flex items-center space-x-2 bg-[#0D1B2A] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1a2b3d] transition-colors duration-200"
          >
            <span>✉️</span>
            <span>문의하기</span>
          </a>
        </div>
      </div>
    </section>
  )
}