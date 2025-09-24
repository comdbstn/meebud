'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// 샘플 채팅 데이터
const chatData = {
  1: {
    name: '하은',
    age: 24,
    photo: '👩🏻‍🦰',
    isOnline: true,
    lastSeen: '방금 전',
    messages: [
      { id: 1, sender: 'other', text: '안녕하세요! 매칭되어서 너무 기뻐요 😊', time: '오후 2:10', isRead: true },
      { id: 2, sender: 'me', text: '저도요! 반가워요 ✨', time: '오후 2:12', isRead: true },
      { id: 3, sender: 'other', text: '프로필 보니까 취미가 비슷한 것 같아요', time: '오후 2:15', isRead: true },
      { id: 4, sender: 'me', text: '정말요? 어떤 취미를 좋아하세요?', time: '오후 2:18', isRead: true },
      { id: 5, sender: 'other', text: '저는 사진 찍는 걸 좋아해요! 특히 카페나 예쁜 장소들 📸', time: '오후 2:20', isRead: true },
      { id: 6, sender: 'me', text: '오 저도 사진 찍는 거 좋아해요! 최근에 어디 가셨어요?', time: '오후 2:25', isRead: true },
      { id: 7, sender: 'other', text: '지난 주말에 성수동 카페거리 다녀왔어요 ☕', time: '오후 2:30', isRead: true },
      { id: 8, sender: 'other', text: '오늘 날씨가 정말 좋네요! 혹시 시간 되시면 커피 한잔 어떠세요?', time: '오후 3:45', isRead: false }
    ]
  },
  2: {
    name: '준호',
    age: 29,
    photo: '👨🏻‍🦱',
    isOnline: false,
    lastSeen: '1시간 전',
    messages: [
      { id: 1, sender: 'other', text: '안녕하세요! 잘 부탁드려요', time: '어제 오후 6:30', isRead: true },
      { id: 2, sender: 'me', text: '안녕하세요! 저도 잘 부탁드립니다', time: '어제 오후 7:00', isRead: true },
      { id: 3, sender: 'me', text: '영화 보는 걸 좋아하신다고 하셨는데, 어떤 장르를 좋아하세요?', time: '어제 오후 7:15', isRead: true },
      { id: 4, sender: 'other', text: '네, 맞아요! 저도 그 영화 정말 좋아해요 😄', time: '1시간 전', isRead: true }
    ]
  }
}

export default function ChatPage() {
  const params = useParams()
  const chatId = params.id as string
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const chat = chatData[chatId as '1' | '2'] || null

  useEffect(() => {
    // 메시지 하단으로 스크롤
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chat?.messages])

  useEffect(() => {
    // 타이핑 시뮬레이션
    if (isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isTyping])

  if (!chat) {
    return (
      <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-4xl mb-4">💬</div>
          <h1 className="text-xl font-bold text-gray-800 mb-2">채팅방을 찾을 수 없어요</h1>
          <Link href="/messages" className="text-[#FF4D8D] hover:text-[#ff3080]">
            ← 메시지 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // TODO: 실제로는 백엔드로 메시지 전송
      // console.log('Sending message:', message)
      setMessage('')
      setIsTyping(true)
    }
  }

  const handlePhotoShare = () => {
    setShowPhotoModal(true)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex flex-col">
      {/* 채팅 헤더 */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/messages" className="text-gray-600 hover:text-gray-800">
            ←
          </Link>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] flex items-center justify-center text-lg">
            {chat.photo}
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              {chat.name}, {chat.age}
            </h2>
            <p className="text-xs text-gray-500">
              {chat.isOnline ? (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  온라인
                </span>
              ) : (
                `마지막 접속: ${chat.lastSeen}`
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handlePhotoShare}
            className="p-2 text-gray-600 hover:text-[#FF4D8D] hover:bg-pink-50 rounded-lg transition-colors"
          >
            📷
          </button>
          <button className="p-2 text-gray-600 hover:text-[#FF4D8D] hover:bg-pink-50 rounded-lg transition-colors">
            ⋮
          </button>
        </div>
      </div>

      {/* 사진 공개 안내 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mx-4 mt-4 rounded-r-lg">
        <div className="flex items-center">
          <span className="text-yellow-600 mr-2">💡</span>
          <p className="text-sm text-yellow-800">
            서로 매칭된 상대입니다. 추가 사진을 공개하면 더 깊은 대화를 나눌 수 있어요!
          </p>
        </div>
      </div>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {chat.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
              msg.sender === 'me'
                ? 'bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white'
                : 'bg-white text-gray-800 border border-gray-200'
            }`}>
              <p className="text-sm">{msg.text}</p>
              <div className={`text-xs mt-1 ${
                msg.sender === 'me' ? 'text-white opacity-80' : 'text-gray-500'
              }`}>
                {msg.time}
                {msg.sender === 'me' && (
                  <span className="ml-1">
                    {msg.isRead ? '✓✓' : '✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* 타이핑 인디케이터 */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 메시지 입력 영역 */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-600 hover:text-[#FF4D8D] hover:bg-pink-50 rounded-lg transition-colors">
            📎
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="메시지를 입력하세요..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF4D8D] focus:border-transparent"
            />
          </div>

          <button className="p-2 text-gray-600 hover:text-[#FF4D8D] hover:bg-pink-50 rounded-lg transition-colors">
            😊
          </button>

          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="p-2 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ➤
          </button>
        </div>
      </div>

      {/* 사진 공개 모달 */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              사진 공개하기
            </h3>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-sm text-gray-600">
                  추가 사진을 공개하시겠어요?
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                <h4 className="font-semibold text-[#FF4D8D] mb-2">💝 사진 공개 혜택</h4>
                <ul className="text-sm text-[#0D1B2A] opacity-70 space-y-1">
                  <li>• 상대방이 나를 더 잘 알 수 있어요</li>
                  <li>• 대화가 더 활발해져요</li>
                  <li>• 실제 만남으로 이어질 가능성이 높아져요</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowPhotoModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-300 transition-colors"
                >
                  나중에
                </button>
                <button
                  onClick={() => {
                    alert('사진을 공개했어요! 🎉')
                    setShowPhotoModal(false)
                  }}
                  className="flex-1 bg-gradient-to-r from-[#0D1B2A] to-[#FF4D8D] text-white py-3 px-4 rounded-xl font-medium hover:opacity-90 transition-all"
                >
                  공개하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}