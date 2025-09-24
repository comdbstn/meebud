'use client'

import { useState } from 'react'

// 사용자 데이터 타입
interface UserProfile {
  id: number
  name: string
  age: number
  job: string
  location: string
  mbti: string
  personality: string[]
  hobbies: string[]
  photos: string[]
  profileCompleted: boolean
  matchingActive: boolean
}

// 매칭 생성 데이터 타입
interface CreateMatchData {
  user1Id: number
  user2Id: number
  compatibility: number
  matchingReason: string
  adminAnalysis: string
}

// 샘플 사용자 데이터
const sampleUsers: UserProfile[] = [
  {
    id: 1,
    name: '민수',
    age: 27,
    job: '개발자',
    location: '서울 강남구',
    mbti: 'INTJ',
    personality: ['차분한', '논리적인', '내향적인'],
    hobbies: ['독서', '게임', '영화감상'],
    photos: ['👨🏻'],
    profileCompleted: true,
    matchingActive: true
  },
  {
    id: 2,
    name: '지수',
    age: 25,
    job: '디자이너',
    location: '서울 강남구',
    mbti: 'ENFP',
    personality: ['활발한', '유머러스한', '외향적인'],
    hobbies: ['여행', '사진촬영', '요리'],
    photos: ['👩🏻'],
    profileCompleted: true,
    matchingActive: true
  },
  {
    id: 3,
    name: '소영',
    age: 24,
    job: '마케터',
    location: '서울 서초구',
    mbti: 'ISFJ',
    personality: ['따뜻한', '배려심많은', '신중한'],
    hobbies: ['카페투어', '독서', '운동'],
    photos: ['👩🏻‍🦱'],
    profileCompleted: true,
    matchingActive: false
  }
]

interface AdminMatchingManagerProps {
  onCreateMatch: (matchData: CreateMatchData) => void
}

export default function AdminMatchingManager({ onCreateMatch }: AdminMatchingManagerProps) {
  const [selectedUser1, setSelectedUser1] = useState<UserProfile | null>(null)
  const [selectedUser2, setSelectedUser2] = useState<UserProfile | null>(null)
  const [compatibility, setCompatibility] = useState(85)
  const [matchingReason, setMatchingReason] = useState('')
  const [adminAnalysis, setAdminAnalysis] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)

  const activeUsers = sampleUsers.filter(user => user.matchingActive && user.profileCompleted)

  const handleCreateMatch = () => {
    if (!selectedUser1 || !selectedUser2) {
      alert('두 명의 사용자를 선택해주세요.')
      return
    }

    if (!matchingReason || !adminAnalysis) {
      alert('매칭 이유와 분석 내용을 입력해주세요.')
      return
    }

    const matchData: CreateMatchData = {
      user1Id: selectedUser1.id,
      user2Id: selectedUser2.id,
      compatibility,
      matchingReason,
      adminAnalysis
    }

    onCreateMatch(matchData)

    // 폼 리셋
    setSelectedUser1(null)
    setSelectedUser2(null)
    setCompatibility(85)
    setMatchingReason('')
    setAdminAnalysis('')
    setShowCreateForm(false)

    alert('매칭이 생성되었습니다! 두 사용자에게 알림이 발송됩니다.')
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-[#0D1B2A] text-lg">매칭 관리</h3>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-[#FF4D8D] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#ff3080] transition-colors"
        >
          {showCreateForm ? '취소' : '+ 매칭 생성'}
        </button>
      </div>

      {/* 활성 사용자 목록 */}
      <div className="mb-6">
        <h4 className="font-semibold text-[#0D1B2A] mb-3">활성 사용자 ({activeUsers.length}명)</h4>
        <div className="grid grid-cols-1 gap-3">
          {activeUsers.map(user => (
            <div key={user.id} className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{user.photos[0]}</div>
                  <div>
                    <div className="font-semibold text-[#0D1B2A]">{user.name}님</div>
                    <div className="text-sm text-[#0D1B2A] opacity-70">
                      {user.age}세 • {user.job} • {user.mbti}
                    </div>
                    <div className="text-xs text-[#0D1B2A] opacity-60">{user.location}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {user.personality.slice(0, 2).map((trait, index) => (
                    <span key={index} className="bg-pink-100 text-[#FF4D8D] px-2 py-1 rounded text-xs">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 매칭 생성 폼 */}
      {showCreateForm && (
        <div className="border-t border-slate-200 pt-6">
          <h4 className="font-semibold text-[#0D1B2A] mb-4">새 매칭 생성</h4>

          {/* 사용자 선택 */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-[#0D1B2A] mb-2">사용자 1</label>
              <select
                value={selectedUser1?.id || ''}
                onChange={(e) => {
                  const user = activeUsers.find(u => u.id === parseInt(e.target.value))
                  setSelectedUser1(user || null)
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-[#0D1B2A]"
              >
                <option value="">선택해주세요</option>
                {activeUsers.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.age}세, {user.job})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0D1B2A] mb-2">사용자 2</label>
              <select
                value={selectedUser2?.id || ''}
                onChange={(e) => {
                  const user = activeUsers.find(u => u.id === parseInt(e.target.value))
                  setSelectedUser2(user || null)
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-[#0D1B2A]"
              >
                <option value="">선택해주세요</option>
                {activeUsers.filter(u => u.id !== selectedUser1?.id).map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.age}세, {user.job})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 호환성 점수 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
              호환성 점수: {compatibility}%
            </label>
            <input
              type="range"
              min="60"
              max="100"
              value={compatibility}
              onChange={(e) => setCompatibility(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-[#0D1B2A] opacity-60 mt-1">
              <span>60%</span>
              <span>100%</span>
            </div>
          </div>

          {/* 매칭 이유 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D1B2A] mb-2">매칭 이유</label>
            <input
              type="text"
              value={matchingReason}
              onChange={(e) => setMatchingReason(e.target.value)}
              placeholder="예: 서로 보완적인 성격과 공통 관심사"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Admin 분석 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D1B2A] mb-2">Admin 분석 (사용자에게 표시)</label>
            <textarea
              value={adminAnalysis}
              onChange={(e) => setAdminAnalysis(e.target.value)}
              placeholder="두 분이 잘 맞는 이유와 예상되는 시너지 효과를 작성해주세요..."
              rows={3}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* 매칭 미리보기 */}
          {selectedUser1 && selectedUser2 && (
            <div className="bg-pink-50 rounded-xl p-4 mb-4 border border-pink-100">
              <h5 className="font-semibold text-[#0D1B2A] mb-2">매칭 미리보기</h5>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <span>{selectedUser1.photos[0]}</span>
                  <span className="font-medium">{selectedUser1.name}</span>
                  <span className="text-[#0D1B2A] opacity-70">({selectedUser1.mbti})</span>
                </div>
                <div className="text-[#FF4D8D] font-bold">{compatibility}%</div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#0D1B2A] opacity-70">({selectedUser2.mbti})</span>
                  <span className="font-medium">{selectedUser2.name}</span>
                  <span>{selectedUser2.photos[0]}</span>
                </div>
              </div>
            </div>
          )}

          {/* 액션 버튼 */}
          <div className="flex space-x-3">
            <button
              onClick={handleCreateMatch}
              disabled={!selectedUser1 || !selectedUser2 || !matchingReason || !adminAnalysis}
              className="flex-1 bg-[#FF4D8D] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#ff3080] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              매칭 생성하기
            </button>
            <button
              onClick={() => setShowCreateForm(false)}
              className="px-4 py-3 border border-gray-300 text-[#0D1B2A] opacity-80 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  )
}