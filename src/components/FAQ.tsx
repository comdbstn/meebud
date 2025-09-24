'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "AI가 외모를 어떻게 분석하나요?",
      answer: "얼굴형, 눈매, 미소 등을 AI가 분석해서 강아지상, 고양이상 등의 스타일을 파악하고 비슷한 취향을 가진 분들과 매칭해드려요! 🐶🐱",
      icon: "🤖"
    },
    {
      question: "성사형 후불제 가격은 얼마인가요?",
      answer: "9,900원입니다! 서로 수락한 연결에만 결제가 진행되는 공정한 시스템이에요! 💝",
      icon: "💳"
    },
    {
      question: "인증은 꼭 해야 하나요?",
      answer: "기본 회원가입만으로도 이용 가능해요! 학력, 직장, 취미 등은 본인이 원할 때만 인증하면 되고, 운영진이 꼼꼼하게 검수해서 신뢰도를 높여드려요.",
      icon: "✨"
    },
    {
      question: "얼굴 사진은 언제 공개되나요?",
      answer: "서로 관심을 보이고 연결이 성사되면 얼굴 사진이 공개됩니다. 그 전까지는 안전하게 보호되어 있어요!",
      icon: "🔒"
    },
    {
      question: "매칭이 안 되면 어떻게 되나요?",
      answer: "서로 수락하지 않으면 결제가 전혀 발생하지 않아요. 성사된 연결에만 결제하는 후불제 시스템이라 부담 없이 시작할 수 있어요!",
      icon: "💕"
    },
    {
      question: "개인정보는 안전한가요?",
      answer: "모든 개인정보는 암호화되어 보관되며, 최소한의 정보만 수집해요. 권한을 가진 운영진만 접근할 수 있고, 절대 외부에 유출되지 않아요.",
      icon: "🛡️"
    },
    {
      question: "부적절한 사용자는 어떻게 처리하나요?",
      answer: "신고 기능을 통해 언제든 신고 가능하며, 24시간 내 빠르게 검토해서 적절한 조치를 취해요. 안전한 만남 환경을 위해 최선을 다해요!",
      icon: "🚨"
    },
    {
      question: "가입하면 바로 매칭이 되나요?",
      answer: "프로필 작성 후 AI가 분석하는 시간이 조금 필요해요. 보통 1-2시간 내에 나와 잘 맞는 이상형들을 추천해드려요! ⏰",
      icon: "⚡"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">
            자주 묻는 질문
          </h2>
          <p className="text-[#0D1B2A] opacity-70">
            궁금한 점이 있으시다면 확인해보세요
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-base">{faq.icon}</span>
                  <span className="font-medium text-[#0D1B2A] text-sm">
                    {faq.question}
                  </span>
                </div>
                <span className={`text-[#FF4D8D] text-lg font-bold transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              {openFAQ === index && (
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-[#0D1B2A] opacity-80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="font-semibold text-[#0D1B2A] mb-2">더 궁금한 점이 있으시나요?</p>
            <p className="text-[#0D1B2A] opacity-70 text-sm mb-4">
              언제든지 편하게 문의해주세요!
            </p>
            <a
              href="mailto:jys13230@gmail.com"
              className="inline-flex items-center space-x-2 bg-[#FF4D8D] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#ff3080] transition-colors duration-200"
            >
              <span>✉️</span>
              <span>문의하기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}