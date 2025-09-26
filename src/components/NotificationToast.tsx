'use client'

import { useEffect } from 'react'
import { useNotifications } from '@/contexts/AppContext'

export default function NotificationToast() {
  const { notifications, clearNotification } = useNotifications()

  useEffect(() => {
    // 5초 후 자동으로 알림 제거
    notifications.forEach(notification => {
      const timer = setTimeout(() => {
        clearNotification(notification.id)
      }, 5000)

      return () => clearTimeout(timer)
    })
  }, [notifications, clearNotification])

  if (notifications.length === 0) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm px-4">
      <div className="space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`
              bg-white rounded-xl shadow-lg border-l-4 p-4 animate-slide-up
              ${notification.type === 'success' ? 'border-green-500' : ''}
              ${notification.type === 'error' ? 'border-red-500' : ''}
              ${notification.type === 'warning' ? 'border-yellow-500' : ''}
              ${notification.type === 'info' ? 'border-blue-500' : ''}
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="flex-shrink-0 mt-0.5">
                  {notification.type === 'success' && (
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                  {notification.type === 'error' && (
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </div>
                  )}
                  {notification.type === 'warning' && (
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">⚠</span>
                    </div>
                  )}
                  {notification.type === 'info' && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">i</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#0D1B2A] font-medium leading-relaxed">
                    {notification.message}
                  </p>
                  <p className="text-xs text-[#0D1B2A] opacity-60 mt-1">
                    {new Date(notification.timestamp).toLocaleTimeString('ko-KR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
              <button
                onClick={() => clearNotification(notification.id)}
                className="flex-shrink-0 ml-3 text-[#0D1B2A] opacity-40 hover:opacity-70 transition-opacity"
              >
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}