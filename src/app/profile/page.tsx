import { Metadata } from 'next'
import Link from 'next/link'
import BottomNavigation from '@/components/BottomNavigation'

export const metadata: Metadata = {
  title: "프로필 - MEE'BUD",
  description: "MEE'BUD 프로필 관리 및 설정",
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-gray-700 hover:text-gray-800">
              ← 홈으로
            </Link>
            <h1 className="text-lg font-bold text-gray-900">
              프로필
            </h1>
            <Link href="/profile/edit" className="text-[#FF4D8D] font-medium">
              편집
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-sm mx-auto px-4 py-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FF4D8D] to-[#FF6BA3] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              👩🏻
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">김지수, 25</h2>
            <p className="text-[#FF4D8D] font-medium mb-1">디자이너</p>
            <p className="text-sm text-gray-700">서울 강남구</p>

            <div className="flex justify-center space-x-2 mt-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                🐱 고양이상
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                ENFP
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                ✨ 인증완료
              </span>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-700 leading-relaxed text-center">
              안녕하세요! 디자인을 사랑하는 지수입니다. 새로운 사람들과 만나는 것을 좋아하고, 함께 즐거운 시간을 보낼 수 있는 분을 찾고 있어요.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 text-center border border-gray-100">
            <div className="text-2xl font-bold text-[#FF4D8D] mb-1">12</div>
            <div className="text-xs text-gray-700">매칭 성사</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center border border-gray-100">
            <div className="text-2xl font-bold text-blue-600 mb-1">86%</div>
            <div className="text-xs text-gray-700">프로필 완성도</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center border border-gray-100">
            <div className="text-2xl font-bold text-green-600 mb-1">4.8</div>
            <div className="text-xs text-gray-700">평균 별점</div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="space-y-4">
          {/* 기본 정보 */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">👤</span>
              기본 정보
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">키</span>
                <span className="text-gray-900">165cm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">학력</span>
                <span className="text-gray-900">대학교 졸업</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">직업</span>
                <span className="text-gray-900">디자이너</span>
              </div>
            </div>
          </div>

          {/* 성격 */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">✨</span>
              성격
            </h3>
            <div className="flex flex-wrap gap-2">
              {['유머러스한', '활발한', '로맨틱한'].map((trait) => (
                <span key={trait} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* 취미 */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">🎯</span>
              취미
            </h3>
            <div className="flex flex-wrap gap-2">
              {['여행', '사진촬영', '요리'].map((hobby) => (
                <span key={hobby} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* 이상형 */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">💕</span>
              이상형
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">나이</span>
                <span className="text-gray-900">22-32세</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">선호 타입</span>
                <div className="flex gap-2">
                  <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs">🐶 강아지상</span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">🦊 여우상</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <Link
            href="/profile/edit"
            className="block w-full bg-[#FF4D8D] text-white font-semibold py-4 rounded-2xl text-center hover:bg-[#ff3080] transition-colors duration-200"
          >
            프로필 편집하기
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/matching"
              className="bg-purple-600 text-white font-medium py-3 rounded-xl text-center hover:bg-purple-700 transition-colors duration-200"
            >
              매칭 시작
            </Link>
            <Link
              href="/messages"
              className="bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-xl text-center hover:bg-gray-50 transition-colors duration-200"
            >
              메시지함
            </Link>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">설정</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between py-3 text-left">
              <span className="text-gray-700">알림 설정</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 text-left">
              <span className="text-gray-700">프라이버시 설정</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 text-left">
              <span className="text-gray-700">차단 목록</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 text-left text-red-600">
              <span>로그아웃</span>
              <span className="text-red-400">→</span>
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}