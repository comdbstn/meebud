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
      answer: "남성 9,900원, 여성 무료입니다. 서로 수락한 연결에만 결제가 진행되는 공정한 시스템이에요. 지금은 테스트 기간이라 전부 무료! 🎉",
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
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-2xl animate-bounce">🤔</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              어떻게 진행될까요?
            </h2>
          </div>
          <p className="text-gray-600 text-lg font-medium">
            자주 묻는 <span className="text-[#FF4D8D] font-bold">궁금한 점들</span>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left hover:bg-white/50 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{faq.icon}</span>
                  <span className="font-semibold text-gray-800 text-sm">
                    {faq.question}
                  </span>
                </div>
                <span className={`text-[#FF4D8D] text-xl font-bold transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              {openFAQ === index && (
                <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-white/30">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl animate-bounce">💌</span>
              <span className="font-bold text-gray-800">더 궁금한 점이 있으시나요?</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              언제든지 편하게 문의해주세요!
            </p>
            <a
              href="mailto:jys13230@gmail.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF4D8D] to-purple-500 text-white px-6 py-3 rounded-2xl text-sm font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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