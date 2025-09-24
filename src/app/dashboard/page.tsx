'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  useEffect(() => {
    // Dashboard content has been moved to the home page (/)
    redirect('/')
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D8D]"></div>
    </div>
  )
}