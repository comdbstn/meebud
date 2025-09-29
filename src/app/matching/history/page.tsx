'use client'

import { useState } from 'react'
import Link from 'next/link'

// 샘플 매칭 히스토리 데이터
const matchingHistory = {
  likes: [
    { id: 1, name: '지수', age: 25, faceType: '고양이상', photo: '👩🏻', status: 'mutual', time: '방금 전' },
    { id: 2, name: '서연', age: 26, faceType: '여우상', photo: '👩🏻‍🦰', status: 'waiting', time: '1시간 전' },
    { id: 3, name: '유진', age: 24, faceType: '토끼상', photo: '👩🏻‍🦱', status: 'passed', time: '3시간 전' }
  ],
  received: [
    { id: 4, name: '민준', age: 28, faceType: '강아지상', photo: '👨🏻', status: 'pending', time: '30분 전' },
    { id: 5, name: '현우', age: 30, faceType: '곰상', photo: '👨🏻‍🦰', status: 'pending', time: '2시간 전' },
    { id: 6, name: '태민', age: 27, faceType: '늑대상', photo: '👨🏻‍🦱', status: 'pending', time: '5시간 전' }
  ],
  matches: [
    {
      id: 7,
      name: '하은',
      age: 24,
      faceType: '여우상',
      photo: '👩🏻‍🦰',
      matchedAt: '오늘 오후 2시',
      lastMessage: '안녕하세요! 반가워요 😊',
      hasNewMessage: true
    },
    {
      id: 8,
      name: '준호',
      age: 29,
      faceType: '강아지상',
      photo: '👨🏻‍🦱',
      matchedAt: '어제 오후 6시',
      lastMessage: '좋은 하루 보내세요~',
      hasNewMessage: false
    }
  ]
}

export default function MatchingHistoryPage() {
  const [activeTab, setActiveTab] = useState<'likes' | 'received' | 'matches'>('matches')

  const handleLikeResponse = (id: number, response: 'like' | 'pass') => {
    // console.log(`Response to ${id}: ${response}`)
    // TODO: 백엔드 연동 시 실제 로직 구현
    alert(response === 'like' ? '매칭이 성사되었어요! 🎉' : '다음 기회에 만나요')
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'mutual': return '매칭 성사'
      case 'waiting': return '답변 대기'
      case 'passed': return '거절됨'
      case 'pending': return '답변 필요'
      default: return ''
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'mutual': return 'bg-green-100 text-green-800'
      case 'waiting': return 'bg-yellow-100 text-yellow-800'
      case 'passed': return 'bg-red-100 text-red-800'
      case 'pending': return 'bg-pink-100 text-[#FF4D8D]'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFB] px-4 py-8">
      <div className="max-w-sm mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/matching" className="text-gray-600 hover:text-gray-800">
            ← 뒤로가기
          </Link>
          <h1 className="text-lg font-bold text-gray-800">
            매칭 히스토리
          </h1>
          <div></div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="bg-white rounded-2xl p-1 shadow-lg border border-gray-100 mb-6">
          <div className="grid grid-cols-3 gap-1">
            <button
              onClick={() => setActiveTab('matches')}
              className={`py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'matches'
                  ? 'bg-[#FF4D8D] text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              매칭됨 ({matchingHistory.matches.length})
            </button>
            <button
              onClick={() => setActiveTab('received')}
              className={`py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'received'
                  ? 'bg-[#FF4D8D] text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              받은 관심 ({matchingHistory.received.length})
            </button>
            <button
              onClick={() => setActiveTab('likes')}
              className={`py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'likes'
                  ? 'bg-[#FF4D8D] text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              보낸 관심 ({matchingHistory.likes.length})
            </button>
          </div>
        </div>

        {/* 매칭된 사람들 */}
        {activeTab === 'matches' && (
          <div className="space-y-4">
            {matchingHistory.matches.length > 0 ? (
              matchingHistory.matches.map((match) => (
                <div key={match.id} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] flex items-center justify-center text-2xl">
                        {match.photo}
                      </div>
                      {match.hasNewMessage && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">N</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800">
                          {match.name}, {match.age}
                        </h3>
                        <span className="text-xs text-gray-700">{match.matchedAt}</span>
                      </div>

                      <p className="text-sm text-[#FF4D8D] mb-1">{match.faceType}</p>

                      <p className="text-sm text-gray-600 truncate">
                        {match.lastMessage}
                      </p>
                    </div>

                    <Link
                      href={`/messages/${match.id}`}
                      className="bg-[#FF4D8D] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#ff3080] transition-colors"
                    >
                      채팅
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">💔</div>
                <p className="text-gray-600">아직 매칭된 사람이 없어요</p>
                <Link
                  href="/matching"
                  className="inline-block mt-4 bg-[#FF4D8D] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#ff3080] transition-colors"
                >
                  매칭 시작하기
                </Link>
              </div>
            )}
          </div>
        )}

        {/* 받은 관심 */}
        {activeTab === 'received' && (
          <div className="space-y-4">
            {matchingHistory.received.map((person) => (
              <div key={person.id} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] flex items-center justify-center text-2xl">
                    {person.photo}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-800">
                        {person.name}, {person.age}
                      </h3>
                      <span className="text-xs text-gray-700">{person.time}</span>
                    </div>

                    <p className="text-sm text-[#FF4D8D] mb-2">{person.faceType}</p>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleLikeResponse(person.id, 'pass')}
                        className="flex-1 bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                      >
                        패스
                      </button>
                      <button
                        onClick={() => handleLikeResponse(person.id, 'like')}
                        className="flex-1 bg-[#FF4D8D] text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-[#ff3080] transition-colors"
                      >
                        좋아요
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 보낸 관심 */}
        {activeTab === 'likes' && (
          <div className="space-y-4">
            {matchingHistory.likes.map((person) => (
              <div key={person.id} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] flex items-center justify-center text-2xl">
                    {person.photo}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-800">
                        {person.name}, {person.age}
                      </h3>
                      <span className="text-xs text-gray-700">{person.time}</span>
                    </div>

                    <p className="text-sm text-[#FF4D8D] mb-2">{person.faceType}</p>

                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(person.status)}`}>
                      {getStatusText(person.status)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 하단 액션 */}
        <div className="mt-8 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] rounded-2xl p-6 text-white text-center">
          <h3 className="font-bold mb-2">💡 매칭률을 높이는 팁</h3>
          <p className="text-sm text-white opacity-80 mb-4">
            프로필을 더 자세히 작성하면 더 많은 매칭 기회가 생겨요
          </p>
          <Link
            href="/profile/edit"
            className="inline-block bg-white text-[#FF4D8D] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
          >
            프로필 개선하기
          </Link>
        </div>
      </div>
    </div>
  )
}