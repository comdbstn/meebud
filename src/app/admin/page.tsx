'use client'

import { useState, useEffect } from 'react'

// 보안을 위한 간단한 비밀번호 인증
const ADMIN_PASSWORD = 'meebud2025admin!'

interface ModalState {
  isOpen: boolean
  type: string
  title: string
  content: React.ReactNode
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: '',
    title: '',
    content: null
  })

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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">MEE&apos;BUD 관리자</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm">👥</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">총 사용자</p>
                <p className="text-2xl font-bold text-gray-800">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm">💕</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">성사된 매칭</p>
                <p className="text-2xl font-bold text-gray-800">567</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm">💰</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">이번 달 수익</p>
                <p className="text-2xl font-bold text-gray-800">₩1,234,567</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">매칭 성공률</p>
                <p className="text-2xl font-bold text-gray-800">78%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Management */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-medium text-gray-900">사용자 관리</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'user-approval',
                    title: '신규 가입자 승인',
                    content: (
                      <div className="space-y-4">
                        <p className="text-gray-600">승인 대기 중인 신규 가입자 12명이 있습니다.</p>
                        <div className="max-h-60 overflow-y-auto space-y-2">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="p-3 border rounded flex justify-between items-center">
                              <span>사용자 {i}</span>
                              <div className="space-x-2">
                                <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">승인</button>
                                <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">거부</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">신규 가입자 승인</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">12</span>
                  </div>
                </button>
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'user-list',
                    title: '사용자 목록 관리',
                    content: (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">전체 사용자: 1,234명</p>
                          <button className="px-4 py-2 bg-blue-500 text-white rounded">사용자 추가</button>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">이름</th>
                                <th className="text-left p-2">이메일</th>
                                <th className="text-left p-2">상태</th>
                                <th className="text-left p-2">작업</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[1,2,3,4,5].map(i => (
                                <tr key={i} className="border-b">
                                  <td className="p-2">사용자 {i}</td>
                                  <td className="p-2">user{i}@example.com</td>
                                  <td className="p-2">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">활성</span>
                                  </td>
                                  <td className="p-2">
                                    <button className="text-blue-500 text-xs">수정</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">사용자 목록 관리</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'reports',
                    title: '신고 접수 처리',
                    content: (
                      <div className="space-y-4">
                        <p className="text-gray-600">처리 대기 중인 신고 3건이 있습니다.</p>
                        <div className="max-h-60 overflow-y-auto space-y-3">
                          {[1,2,3].map(i => (
                            <div key={i} className="p-4 border rounded bg-orange-50">
                              <div className="flex justify-between items-start mb-2">
                                <span className="font-medium">신고 #{i}</span>
                                <span className="text-xs text-gray-500">2024-01-{10+i}</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">부적절한 메시지 전송</p>
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">제재</button>
                                <button className="px-3 py-1 bg-gray-500 text-white rounded text-sm">경고</button>
                                <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">기각</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">신고 접수 처리</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">3</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Match Management */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-medium text-gray-900">매칭 관리</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'ai-settings',
                    title: 'AI 매칭 설정',
                    content: (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">매칭 알고리즘</label>
                          <select className="w-full p-2 border border-gray-300 rounded">
                            <option>MBTI 기반 매칭</option>
                            <option>취향 유사도 매칭</option>
                            <option>가치관 기반 매칭</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">매칭 정확도 임계값</label>
                          <input type="range" min="50" max="95" defaultValue="75" className="w-full" />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>50%</span>
                            <span>현재: 75%</span>
                            <span>95%</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">일일 추천 수</label>
                          <input type="number" defaultValue="3" min="1" max="10" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">AI 매칭 설정</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'match-monitoring',
                    title: '매칭 현황 모니터링',
                    content: (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-blue-50 rounded">
                            <p className="text-sm text-gray-600">오늘 생성된 매칭</p>
                            <p className="text-2xl font-bold text-blue-600">156</p>
                          </div>
                          <div className="p-4 bg-green-50 rounded">
                            <p className="text-sm text-gray-600">성사된 매칭</p>
                            <p className="text-2xl font-bold text-green-600">23</p>
                          </div>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">시간</th>
                                <th className="text-left p-2">사용자</th>
                                <th className="text-left p-2">상태</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Array.from({length: 10}, (_, i) => (
                                <tr key={i} className="border-b">
                                  <td className="p-2">14:{30+i}</td>
                                  <td className="p-2">사용자 A ↔ 사용자 B</td>
                                  <td className="p-2">
                                    <span className={`px-2 py-1 rounded text-xs ${i % 3 === 0 ? 'bg-green-100 text-green-800' : i % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                                      {i % 3 === 0 ? '성사' : i % 3 === 1 ? '대기' : '진행중'}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">매칭 현황 모니터링</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'match-analysis',
                    title: '성공 매칭 분석',
                    content: (
                      <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-green-50 rounded">
                            <p className="text-2xl font-bold text-green-600">78%</p>
                            <p className="text-sm text-gray-600">전체 성공률</p>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded">
                            <p className="text-2xl font-bold text-blue-600">4.2일</p>
                            <p className="text-sm text-gray-600">평균 매칭 시간</p>
                          </div>
                          <div className="text-center p-4 bg-purple-50 rounded">
                            <p className="text-2xl font-bold text-purple-600">9.1/10</p>
                            <p className="text-sm text-gray-600">만족도 점수</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">성공 요인 분석</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">MBTI 호환성</span>
                              <span className="text-sm font-medium">85%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">취향 유사도</span>
                              <span className="text-sm font-medium">72%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">지역 근접성</span>
                              <span className="text-sm font-medium">68%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">연령 호환성</span>
                              <span className="text-sm font-medium">91%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">성공 매칭 분석</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Payment Management */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-medium text-gray-900">결제 관리</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'payment-history',
                    title: '결제 내역 조회',
                    content: (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">전체 결제 내역: 1,456건</p>
                          <div className="flex space-x-2">
                            <input type="date" className="px-3 py-1 border rounded text-sm" />
                            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">검색</button>
                          </div>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">날짜</th>
                                <th className="text-left p-2">사용자</th>
                                <th className="text-left p-2">금액</th>
                                <th className="text-left p-2">상태</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Array.from({length: 15}, (_, i) => (
                                <tr key={i} className="border-b">
                                  <td className="p-2">2024-01-{15+i}</td>
                                  <td className="p-2">사용자 {i+1}</td>
                                  <td className="p-2">₩{(Math.random() * 100000 + 50000).toLocaleString()}</td>
                                  <td className="p-2">
                                    <span className={`px-2 py-1 rounded text-xs ${
                                      i % 4 === 0 ? 'bg-green-100 text-green-800' :
                                      i % 4 === 1 ? 'bg-blue-100 text-blue-800' :
                                      i % 4 === 2 ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-red-100 text-red-800'
                                    }`}>
                                      {i % 4 === 0 ? '완료' : i % 4 === 1 ? '처리중' : i % 4 === 2 ? '대기' : '실패'}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">결제 내역 조회</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'refund-requests',
                    title: '환불 요청 처리',
                    content: (
                      <div className="space-y-4">
                        <p className="text-gray-600">처리 대기 중인 환불 요청 2건이 있습니다.</p>
                        <div className="space-y-3">
                          {[1,2].map(i => (
                            <div key={i} className="p-4 border rounded bg-yellow-50">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <span className="font-medium">환불 요청 #{i}</span>
                                  <p className="text-sm text-gray-500">사용자: user{i}@example.com</p>
                                </div>
                                <span className="text-xs text-gray-500">2024-01-{20+i}</span>
                              </div>
                              <div className="mb-3">
                                <p className="text-sm text-gray-600">요청 금액: ₩{(Math.random() * 50000 + 30000).toLocaleString()}</p>
                                <p className="text-sm text-gray-600">사유: 매칭 대상자가 부적절함</p>
                              </div>
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">승인</button>
                                <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">거부</button>
                                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">상세보기</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-yellow-50 hover:border-yellow-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">환불 요청 처리</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">2</span>
                  </div>
                </button>
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'revenue-stats',
                    title: '수익 통계',
                    content: (
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-green-50 rounded">
                            <p className="text-sm text-gray-600">이번 달 수익</p>
                            <p className="text-2xl font-bold text-green-600">₩1,234,567</p>
                            <p className="text-xs text-green-500">전월 대비 +12%</p>
                          </div>
                          <div className="p-4 bg-blue-50 rounded">
                            <p className="text-sm text-gray-600">전체 누적 수익</p>
                            <p className="text-2xl font-bold text-blue-600">₩32,456,789</p>
                            <p className="text-xs text-blue-500">전년 대비 +45%</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">월별 수익 추이</h4>
                          <div className="space-y-2">
                            {['1월', '2월', '3월', '4월', '5월'].map((month, i) => (
                              <div key={month} className="flex justify-between items-center">
                                <span className="text-sm">{month}</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-20 bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{width: `${(i+1)*20}%`}}></div>
                                  </div>
                                  <span className="text-sm font-medium">₩{((i+1)*200000).toLocaleString()}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">수익 통계</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-medium text-gray-900">시스템 설정</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'app-settings',
                    title: '앱 설정 관리',
                    content: (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">앱 버전</label>
                          <input type="text" defaultValue="1.2.5" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">서비스 점검 모드</label>
                          <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                              <input type="radio" name="maintenance" className="mr-2" defaultChecked />
                              <span>정상 운영</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="maintenance" className="mr-2" />
                              <span>점검 모드</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">새 가입 허용</label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" defaultChecked />
                            <span>새로운 사용자 가입 허용</span>
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">최대 동시 접속자</label>
                          <input type="number" defaultValue="1000" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">앱 설정 관리</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'announcements',
                    title: '공지사항 관리',
                    content: (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">전체 공지사항: 23건</p>
                          <button className="px-4 py-2 bg-blue-500 text-white rounded">새 공지 작성</button>
                        </div>
                        <div className="max-h-60 overflow-y-auto space-y-3">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="p-3 border rounded hover:bg-gray-50">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium">서비스 업데이트 안내 #{i}</h4>
                                <span className="text-xs text-gray-500">2024-01-{20+i}</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">새로운 기능이 추가되었습니다...</p>
                              <div className="flex space-x-2">
                                <span className={`px-2 py-1 rounded text-xs ${
                                  i % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {i % 2 === 0 ? '게시중' : '비공개'}
                                </span>
                                <button className="text-blue-500 text-xs">수정</button>
                                <button className="text-red-500 text-xs">삭제</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">공지사항 관리</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
                <button
                  onClick={() => setModal({
                    isOpen: true,
                    type: 'backup-restore',
                    title: '백업 및 복구',
                    content: (
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-3">자동 백업</h4>
                          <div className="p-4 bg-green-50 rounded">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">마지막 백업</span>
                              <span className="text-sm text-green-600">2024-01-23 02:00</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">다음 백업</span>
                              <span className="text-sm">2024-01-24 02:00</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">수동 백업</h4>
                          <div className="space-y-2">
                            <button className="w-full p-3 border border-blue-300 text-blue-600 rounded hover:bg-blue-50">
                              전체 데이터 백업
                            </button>
                            <button className="w-full p-3 border border-gray-300 rounded hover:bg-gray-50">
                              사용자 데이터만 백업
                            </button>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">복구</h4>
                          <div className="max-h-40 overflow-y-auto space-y-2">
                            {[1,2,3,4,5].map(i => (
                              <div key={i} className="flex justify-between items-center p-2 border rounded">
                                <span className="text-sm">backup_2024-01-{20+i}.sql</span>
                                <button className="px-3 py-1 bg-orange-500 text-white rounded text-xs">복구</button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">백업 및 복구</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-medium text-gray-900">최근 활동</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">새로운 매칭이 성사되었습니다</p>
                  <p className="text-xs text-gray-500">5분 전</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">신규 사용자가 가입했습니다</p>
                  <p className="text-xs text-gray-500">15분 전</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">결제가 완료되었습니다</p>
                  <p className="text-xs text-gray-500">1시간 전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">{modal.title}</h2>
              <button
                onClick={() => setModal({...modal, isOpen: false})}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              {modal.content}
            </div>
            <div className="px-6 py-4 border-t bg-gray-50 flex justify-end space-x-3">
              <button
                onClick={() => setModal({...modal, isOpen: false})}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              >
                닫기
              </button>
              <button
                onClick={() => setModal({...modal, isOpen: false})}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}