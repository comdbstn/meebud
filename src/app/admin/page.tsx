'use client'

import { useState, useEffect } from 'react'
import AdminMatchingManager from '@/components/AdminMatchingManager'

// 보안을 위한 간단한 비밀번호 인증
const ADMIN_PASSWORD = 'meebud2025admin!'

// 생성된 매칭 데이터 타입
interface CreatedMatch {
  id: number
  user1: string
  user2: string
  compatibility: number
  matchingReason: string
  adminAnalysis: string
  createdAt: string
  status: 'pending' | 'user1_accepted' | 'user2_accepted' | 'both_accepted' | 'declined'
}

interface CreateMatchData {
  user1Id: number
  user2Id: number
  compatibility: number
  matchingReason: string
  adminAnalysis: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [createdMatches, setCreatedMatches] = useState<CreatedMatch[]>([
    {
      id: 1,
      user1: '민수 (27세, 개발자)',
      user2: '지수 (25세, 디자이너)',
      compatibility: 94,
      matchingReason: '서로 보완적인 성격과 창의적 분야 공통 관심사',
      adminAnalysis: '두 분 모두 창의적인 분야에서 일하시며, 성격이 서로 균형을 이룰 것 같습니다.',
      createdAt: '2025-09-24 10:30',
      status: 'pending'
    }
  ])

  useEffect(() => {
    // 세션 스토리지에서 인증 상태 확인
    const authStatus = sessionStorage.getItem('admin_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_authenticated', 'true')
      setError('')
    } else {
      setError('잘못된 비밀번호입니다.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_authenticated')
    setPassword('')
  }

  const handleCreateMatch = (matchData: CreateMatchData) => {
    const newMatch: CreatedMatch = {
      id: createdMatches.length + 1,
      user1: `사용자 ${matchData.user1Id}`,
      user2: `사용자 ${matchData.user2Id}`,
      compatibility: matchData.compatibility,
      matchingReason: matchData.matchingReason,
      adminAnalysis: matchData.adminAnalysis,
      createdAt: new Date().toLocaleString(),
      status: 'pending'
    }
    setCreatedMatches([newMatch, ...createdMatches])
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">관리자 로그인</h1>
            <p className="text-gray-600">MEE&apos;BUD 관리자 페이지</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                관리자 비밀번호
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D1B2A] to-[#FF4D8D] rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">👨‍💼</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#0D1B2A]">MEE&apos;BUD Admin</h1>
                <p className="text-sm text-[#0D1B2A] opacity-70">매칭 큐레이팅 시스템</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-600 transition-colors"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">👥</span>
              </div>
              <div>
                <p className="text-xs text-[#0D1B2A] opacity-70">활성 사용자</p>
                <p className="text-lg font-bold text-[#0D1B2A]">342</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">⏳</span>
              </div>
              <div>
                <p className="text-xs text-[#0D1B2A] opacity-70">대기중 매칭</p>
                <p className="text-lg font-bold text-[#0D1B2A]">{createdMatches.filter(m => m.status === 'pending').length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#C49A6C] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">💕</span>
              </div>
              <div>
                <p className="text-xs text-[#0D1B2A] opacity-70">성사된 매칭</p>
                <p className="text-lg font-bold text-[#0D1B2A]">{createdMatches.filter(m => m.status === 'both_accepted').length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF4D8D] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">💰</span>
              </div>
              <div>
                <p className="text-xs text-[#0D1B2A] opacity-70">오늘 수익</p>
                <p className="text-lg font-bold text-[#0D1B2A]">₩450K</p>
              </div>
            </div>
          </div>
        </div>

        {/* 매칭 관리자 */}
        <AdminMatchingManager onCreateMatch={handleCreateMatch} />

        {/* 생성된 매칭 목록 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mt-6">
          <h3 className="font-bold text-[#0D1B2A] text-lg mb-4">생성된 매칭 ({createdMatches.length})</h3>

          {createdMatches.length === 0 ? (
            <div className="text-center py-8 text-[#0D1B2A] opacity-60">
              아직 생성된 매칭이 없습니다.
            </div>
          ) : (
            <div className="space-y-4">
              {createdMatches.map(match => (
                <div key={match.id} className="border border-slate-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg">💝</div>
                      <div>
                        <div className="font-semibold text-[#0D1B2A]">
                          {match.user1} ↔ {match.user2}
                        </div>
                        <div className="text-sm text-[#0D1B2A] opacity-70">{match.createdAt}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-pink-100 text-[#FF4D8D] px-2 py-1 rounded-full text-xs font-semibold">
                        {match.compatibility}%
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        match.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                        match.status === 'both_accepted' ? 'bg-green-100 text-green-700' :
                        match.status === 'declined' ? 'bg-red-100 text-red-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {match.status === 'pending' ? '대기중' :
                         match.status === 'both_accepted' ? '성사됨' :
                         match.status === 'declined' ? '거절됨' :
                         '진행중'}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-[#0D1B2A] opacity-80 mb-2">
                    <strong>매칭 이유:</strong> {match.matchingReason}
                  </div>
                  <div className="text-sm text-[#0D1B2A] opacity-80">
                    <strong>Admin 분석:</strong> {match.adminAnalysis}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}