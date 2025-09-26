'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'

// 사용자 상태 타입 정의
export interface UserProfile {
  id: string
  email: string
  name: string
  age: number
  height: number
  job: string
  education: string
  location: string
  photos: string[]
  introduction: string
  personality: string[]
  hobbies: string[]
  mbti: string
  isVerified: boolean
  isProfileComplete: boolean
  createdAt: string
}

// 매칭 상태 타입
export interface MatchData {
  id: string
  userId: string
  matchedUserId: string
  matchedUser: {
    id: string
    name: string
    age: number
    job: string
    education: string
    photos: string[]
    introduction: string
    personality: string[]
    hobbies: string[]
    mbti: string
    faceType: string
    location: string
    distance: string
    isVerified: boolean
  }
  compatibility: number
  matchingReason: string
  aiAnalysis: string
  confidenceScore: number
  matchingFactors: string[]
  status: 'pending' | 'accepted' | 'declined' | 'matched'
  createdAt: string
  updatedAt: string
}

// 애플리케이션 전체 상태
export interface AppState {
  // 인증 상태
  isAuthenticated: boolean
  isLoading: boolean

  // 사용자 정보
  user: UserProfile | null

  // 매칭 상태
  currentMatch: MatchData | null
  matchHistory: MatchData[]

  // UI 상태
  notifications: Array<{
    id: string
    type: 'success' | 'error' | 'warning' | 'info'
    message: string
    timestamp: string
  }>
}

// 액션 타입
export type AppAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGIN'; payload: { user: UserProfile } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PROFILE'; payload: Partial<UserProfile> }
  | { type: 'SET_CURRENT_MATCH'; payload: MatchData }
  | { type: 'CLEAR_CURRENT_MATCH' }
  | { type: 'ADD_MATCH_HISTORY'; payload: MatchData }
  | { type: 'ADD_NOTIFICATION'; payload: { type: 'success' | 'error' | 'warning' | 'info'; message: string } }
  | { type: 'CLEAR_NOTIFICATION'; payload: string }

// 초기 상태
const initialState: AppState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  currentMatch: null,
  matchHistory: [],
  notifications: []
}

// 리듀서 함수
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }

    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user
      }

    case 'LOGOUT':
      return {
        ...initialState,
        isLoading: false
      }

    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null
      }

    case 'SET_CURRENT_MATCH':
      return {
        ...state,
        currentMatch: action.payload
      }

    case 'CLEAR_CURRENT_MATCH':
      return {
        ...state,
        currentMatch: null
      }

    case 'ADD_MATCH_HISTORY':
      return {
        ...state,
        matchHistory: [action.payload, ...state.matchHistory]
      }

    case 'ADD_NOTIFICATION':
      const newNotification = {
        id: Math.random().toString(36).substr(2, 9),
        type: action.payload.type,
        message: action.payload.message,
        timestamp: new Date().toISOString()
      }
      return {
        ...state,
        notifications: [newNotification, ...state.notifications.slice(0, 4)] // 최대 5개까지만 유지
      }

    case 'CLEAR_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      }

    default:
      return state
  }
}

// Context 생성
const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

// Provider 컴포넌트
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // 앱 초기화 시 로컬 스토리지에서 상태 복원
  React.useEffect(() => {
    const initializeApp = () => {
      try {
        const authStatus = sessionStorage.getItem('user_authenticated')
        const userEmail = sessionStorage.getItem('user_email')
        const userData = sessionStorage.getItem('user_data')

        if (authStatus === 'true' && userEmail && userData) {
          const user = JSON.parse(userData)
          dispatch({ type: 'LOGIN', payload: { user } })
        } else {
          dispatch({ type: 'SET_LOADING', payload: false })
        }
      } catch (error) {
        console.error('Failed to initialize app:', error)
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    }

    initializeApp()
  }, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// Context 사용 훅
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

// 편의 훅들
export function useAuth() {
  const { state, dispatch } = useAppContext()

  const login = (user: UserProfile) => {
    sessionStorage.setItem('user_authenticated', 'true')
    sessionStorage.setItem('user_email', user.email)
    sessionStorage.setItem('user_data', JSON.stringify(user))
    dispatch({ type: 'LOGIN', payload: { user } })
  }

  const logout = () => {
    sessionStorage.removeItem('user_authenticated')
    sessionStorage.removeItem('user_email')
    sessionStorage.removeItem('user_data')
    dispatch({ type: 'LOGOUT' })
  }

  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    isLoading: state.isLoading,
    login,
    logout
  }
}

export function useMatching() {
  const { state, dispatch } = useAppContext()

  const setCurrentMatch = (match: MatchData | null) => {
    if (match) {
      dispatch({ type: 'SET_CURRENT_MATCH', payload: match })
    } else {
      dispatch({ type: 'CLEAR_CURRENT_MATCH' })
    }
  }

  const clearCurrentMatch = () => {
    dispatch({ type: 'CLEAR_CURRENT_MATCH' })
  }

  const addToHistory = (match: MatchData) => {
    dispatch({ type: 'ADD_MATCH_HISTORY', payload: match })
  }

  return {
    currentMatch: state.currentMatch,
    matchHistory: state.matchHistory,
    setCurrentMatch,
    clearCurrentMatch,
    addToHistory
  }
}

export function useNotifications() {
  const { state, dispatch } = useAppContext()

  const addNotification = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: { type, message } })
  }

  const clearNotification = (id: string) => {
    dispatch({ type: 'CLEAR_NOTIFICATION', payload: id })
  }

  return {
    notifications: state.notifications,
    addNotification,
    clearNotification
  }
}