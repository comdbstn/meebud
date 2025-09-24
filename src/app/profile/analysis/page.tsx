'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ProfileAnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 분석 진행 시뮬레이션
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsAnalyzing(false)
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  // 임시 분석 결과 데이터
  const analysisResult = {
    faceType: '고양이상',
    charm: '신비로운 매력',
    personality: 'ENFP',
    compatibility: [
      { type: '강아지상', percentage: 95, description: '서로 다른 매력으로 완벽한 조화' },
      { type: '여우상', percentage: 87, description: '비슷한 감성으로 깊은 공감대' },
      { type: '곰상', percentage: 82, description: '안정감과 활력의 균형' }
    ],
    recommendations: [
      '감성적이고 로맨틱한 데이트를 좋아할 것 같아요',
      '예술적 감각이 뛰어나 문화생활을 즐기실 것 같아요',
      '소통을 중요하게 생각하는 성향이 보여요'
    ]
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="text-6xl mb-6 animate-pulse">🤖</div>

            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              AI가 분석 중입니다
            </h1>

            <p className="text-gray-600 mb-8">
              당신의 매력을 깊이 있게 분석하고 있어요
            </p>

            {/* 진행 바 */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>분석 진행률</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] h-3 rounded-full transition-all duration-300 relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* 분석 단계 */}
            <div className="space-y-3 text-left">
              <div className={`flex items-center space-x-3 ${progress >= 20 ? 'text-[#FF4D8D]' : 'text-gray-400'}`}>
                <span className="text-lg">✓</span>
                <span className="text-sm">얼굴형 분석</span>
              </div>
              <div className={`flex items-center space-x-3 ${progress >= 40 ? 'text-[#FF4D8D]' : 'text-gray-400'}`}>
                <span className="text-lg">✓</span>
                <span className="text-sm">눈매 & 미소 분석</span>
              </div>
              <div className={`flex items-center space-x-3 ${progress >= 60 ? 'text-[#FF4D8D]' : 'text-gray-400'}`}>
                <span className="text-lg">✓</span>
                <span className="text-sm">전체적인 분위기 파악</span>
              </div>
              <div className={`flex items-center space-x-3 ${progress >= 80 ? 'text-[#FF4D8D]' : 'text-gray-400'}`}>
                <span className="text-lg">✓</span>
                <span className="text-sm">성격 & 취미 매칭</span>
              </div>
              <div className={`flex items-center space-x-3 ${progress >= 100 ? 'text-[#FF4D8D]' : 'text-gray-400'}`}>
                <span className="text-lg">✓</span>
                <span className="text-sm">이상형 궁합도 계산</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFB] px-4 py-8">
      <div className="max-w-sm mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            AI 분석 완료!
          </h1>
          <p className="text-gray-600">
            당신만의 특별한 매력을 발견했어요
          </p>
        </div>

        {/* 메인 분석 결과 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🐱</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {analysisResult.faceType}
            </h2>
            <p className="text-[#FF4D8D] font-semibold">
              {analysisResult.charm}
            </p>
          </div>

          <div className="bg-pink-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-[#FF4D8D] mb-2">✨ AI가 분석한 당신</h3>
            <ul className="text-sm text-[#0D1B2A] opacity-70 space-y-1">
              {analysisResult.recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
              ))}
            </ul>
          </div>

          {/* 성격 유형 */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">추정 성격 유형</p>
            <div className="inline-block bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white px-4 py-2 rounded-xl font-bold">
              {analysisResult.personality}
            </div>
          </div>
        </div>

        {/* 궁합도 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            💕 이상형 궁합도
          </h3>

          <div className="space-y-4">
            {analysisResult.compatibility.map((comp, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">
                      {comp.type === '강아지상' && '🐶'}
                      {comp.type === '여우상' && '🦊'}
                      {comp.type === '곰상' && '🐻'}
                    </span>
                    <span className="font-semibold text-gray-800">{comp.type}</span>
                  </div>
                  <span className="text-lg font-bold text-[#FF4D8D]">{comp.percentage}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] h-2 rounded-full"
                    style={{ width: `${comp.percentage}%` }}
                  ></div>
                </div>

                <p className="text-xs text-gray-600">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white py-4 px-6 rounded-xl font-bold text-center hover:opacity-90 transition-all"
          >
            매칭 시작하기 🚀
          </Link>

          <Link
            href="/profile/edit"
            className="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold text-center hover:bg-gray-50 transition-colors"
          >
            프로필 수정하기
          </Link>
        </div>

        {/* 팁 */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">💡 매칭 성공 팁</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 프로필 사진을 다양하게 올리면 매칭률이 높아져요</li>
            <li>• 자기소개를 구체적으로 작성해보세요</li>
            <li>• 정기적으로 접속하면 더 많은 추천을 받을 수 있어요</li>
          </ul>
        </div>
      </div>
    </div>
  )
}