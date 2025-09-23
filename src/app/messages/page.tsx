'use client'

import { useState } from 'react'
import Link from 'next/link'
import BottomNavigation from '@/components/BottomNavigation'

// 샘플 메시지 데이터
const conversations = [
  {
    id: 1,
    name: '하은',
    age: 24,
    photo: '👩🏻‍🦰',
    lastMessage: '오늘 날씨가 정말 좋네요! 혹시 시간 되시면 커피 한잔 어떠세요? ☕',
    lastMessageTime: '방금 전',
    unreadCount: 2,
    isOnline: true,
    matchedDate: '2025.01.21'
  },
  {
    id: 2,
    name: '준호',
    age: 29,
    photo: '👨🏻‍🦱',
    lastMessage: '네, 맞아요! 저도 그 영화 정말 좋아해요 😄',
    lastMessageTime: '1시간 전',
    unreadCount: 0,
    isOnline: false,
    matchedDate: '2025.01.20'
  },
  {
    id: 3,
    name: '지수',
    age: 25,
    photo: '👩🏻',
    lastMessage: '안녕하세요! 프로필 사진이 정말 멋지네요',
    lastMessageTime: '어제',
    unreadCount: 1,
    isOnline: true,
    matchedDate: '2025.01.19'
  },
  {
    id: 4,
    name: '민준',
    age: 28,
    photo: '👨🏻',
    lastMessage: '좋은 하루 되세요!',
    lastMessageTime: '2일 전',
    unreadCount: 0,
    isOnline: false,
    matchedDate: '2025.01.18'
  }
]

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const unreadTotal = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-20">
      <div className="max-w-sm mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/dashboard" className="text-gray-700 hover:text-gray-800">
            ← 홈으로
          </Link>
          <h1 className="text-lg font-bold text-gray-800">
            메시지 {unreadTotal > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-1">
                {unreadTotal}
              </span>
            )}
          </h1>
          <Link href="/matching/history" className="text-purple-600 text-sm font-medium">
            매칭 히스토리
          </Link>
        </div>

        {/* 검색 */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="대화 상대 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {/* 빠른 액션 */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link
            href="/matching"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl text-center hover:from-purple-700 hover:to-pink-600 transition-all"
          >
            <div className="text-2xl mb-1">💕</div>
            <div className="text-sm font-medium">새로운 매칭</div>
          </Link>
          <Link
            href="/matching/history"
            className="bg-white border border-gray-300 text-gray-700 p-4 rounded-xl text-center hover:bg-gray-50 transition-colors"
          >
            <div className="text-2xl mb-1">📋</div>
            <div className="text-sm font-medium">매칭 히스토리</div>
          </Link>
        </div>

        {/* 대화 목록 */}
        {filteredConversations.length > 0 ? (
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              활성 대화 ({filteredConversations.length})
            </h2>

            {filteredConversations.map((conversation) => (
              <Link
                key={conversation.id}
                href={`/messages/${conversation.id}`}
                className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-4">
                  {/* 프로필 사진 */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-xl">
                      {conversation.photo}
                    </div>

                    {/* 온라인 상태 */}
                    {conversation.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}

                    {/* 읽지 않은 메시지 */}
                    {conversation.unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">
                          {conversation.unreadCount > 9 ? '9+' : conversation.unreadCount}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 메시지 정보 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800">
                        {conversation.name}, {conversation.age}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {conversation.lastMessageTime}
                      </span>
                    </div>

                    <p className={`text-sm truncate ${
                      conversation.unreadCount > 0 ? 'text-gray-800 font-medium' : 'text-gray-700'
                    }`}>
                      {conversation.lastMessage}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-purple-600">
                        매칭일: {conversation.matchedDate}
                      </span>
                      {conversation.isOnline && (
                        <span className="text-xs text-green-600 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                          온라인
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* 빈 상태 */
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {searchQuery ? '검색 결과가 없어요' : '아직 대화가 없어요'}
            </h3>
            <p className="text-gray-700 mb-6">
              {searchQuery
                ? '다른 이름으로 검색해보세요'
                : '매칭된 사람과 대화를 시작해보세요!'
              }
            </p>
            {!searchQuery && (
              <Link
                href="/matching"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all"
              >
                매칭 시작하기
              </Link>
            )}
          </div>
        )}

        {/* 팁 카드 */}
        {filteredConversations.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">💡 대화 팁</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 상대방의 관심사에 대해 질문해보세요</li>
              <li>• 첫 메시지는 간단하고 친근하게 시작하세요</li>
              <li>• 사진이나 이모지를 활용하면 더 재미있어요</li>
            </ul>
          </div>
        )}

      </div>

      <BottomNavigation />
    </div>
  )
}