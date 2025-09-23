'use client'

import { useState } from 'react'

// 샘플 데이터 - 실제로는 API에서 가져올 데이터
const sampleMatches = [
  { id: 1, name: '지수', age: 25, image: '👩🏻', style: '고양이상', day: 3 },
  { id: 2, name: '민준', age: 27, image: '👨🏻', style: '강아지상', day: 5 },
  { id: 3, name: '유진', age: 24, image: '👩🏻‍🦱', style: '여우상', day: 7 },
  { id: 4, name: '준호', age: 29, image: '👨🏻‍🦱', style: '곰상', day: 12 },
  { id: 5, name: '서연', age: 26, image: '👩🏻‍🦰', style: '토끼상', day: 15 },
  { id: 6, name: '현우', age: 28, image: '👨🏻‍🦰', style: '늑대상', day: 18 },
  { id: 7, name: '하은', age: 23, image: '👩🏻', style: '고양이상', day: 22 },
  { id: 8, name: '태민', age: 30, image: '👨🏻', style: '강아지상', day: 25 },
]

export default function Calendar() {
  const [currentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<number | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // 월의 첫 번째 날과 마지막 날
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  // 시작 요일 (일요일 = 0)
  const startDayOfWeek = firstDay.getDay()
  const daysInMonth = lastDay.getDate()

  // 달력 그리드를 위한 배열 생성
  const calendarDays = []

  // 이전 달의 빈 칸들
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays.push(null)
  }

  // 현재 달의 날짜들
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const monthNames = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ]

  const dayNames = ['일', '월', '화', '수', '목', '금', '토']

  // 특정 날짜의 매칭 상대들 가져오기
  const getMatchesForDay = (day: number) => {
    return sampleMatches.filter(match => match.day === day)
  }

  return (
    <div className="max-w-sm mx-auto px-4 py-6">
      {/* 광고 배너 */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4 mb-6 border border-pink-200">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">💝</span>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              지금 가입하면 <span className="text-pink-600">무료</span>로 매칭!
            </p>
            <p className="text-xs text-gray-600">
              여성은 영구 무료, 남성은 성사 시에만 결제
            </p>
          </div>
        </div>
      </div>

      {/* 달력 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {year}년 {monthNames[month]} 📅
        </h2>
        <div className="flex space-x-1">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-600">←</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-600">→</span>
          </button>
        </div>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day, index) => (
          <div key={index} className="text-center py-2">
            <span className={`text-xs font-medium ${
              index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-600'
            }`}>
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* 달력 그리드 */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => {
          if (day === null) {
            return <div key={index} className="aspect-square"></div>
          }

          const matches = getMatchesForDay(day)
          const hasMatches = matches.length > 0
          const isToday = day === currentDate.getDate() &&
                         month === new Date().getMonth() &&
                         year === new Date().getFullYear()

          return (
            <div
              key={day}
              className={`aspect-square border border-gray-200 rounded-lg p-1 cursor-pointer transition-all ${
                isToday ? 'bg-purple-100 border-purple-300' : 'bg-white hover:bg-gray-50'
              } ${selectedDate === day ? 'ring-2 ring-purple-400' : ''}`}
              onClick={() => setSelectedDate(selectedDate === day ? null : day)}
            >
              <div className="w-full h-full flex flex-col">
                {/* 날짜 */}
                <div className="text-xs font-medium text-gray-700 mb-1">
                  {day}
                </div>

                {/* 매칭 프로필들 */}
                <div className="flex-1 flex flex-wrap justify-center items-center gap-0.5">
                  {matches.slice(0, 4).map((match) => (
                    <div
                      key={match.id}
                      className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-xs border border-white shadow-sm"
                      title={`${match.name} (${match.age})`}
                    >
                      {match.image}
                    </div>
                  ))}

                  {matches.length > 4 && (
                    <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white">
                      +
                    </div>
                  )}
                </div>

                {/* 매칭 개수 표시 */}
                {hasMatches && (
                  <div className="text-xs text-center">
                    <span className="bg-purple-600 text-white px-1 rounded-full text-xs">
                      {matches.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* 선택된 날짜의 매칭 상세 */}
      {selectedDate && (
        <div className="mt-6 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-3">
            {selectedDate}일의 추천 매칭 💕
          </h3>
          <div className="space-y-3">
            {getMatchesForDay(selectedDate).map((match) => (
              <div key={match.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-xl">
                  {match.image}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{match.name}</p>
                  <p className="text-sm text-gray-600">{match.age}세 • {match.style}</p>
                </div>
                <button className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-700 transition-colors">
                  관심표시
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}