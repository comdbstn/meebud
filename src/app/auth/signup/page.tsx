import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "회원가입 - MEE'BUD",
  description: "MEE'BUD에 가입하여 AI가 추천하는 완벽한 이상형을 만나보세요",
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
          </h1>
          <h2 className="text-lg font-medium text-gray-600">
            AI가 매칭하는 후불제 소개팅
          </h2>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일 주소
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#FF4D8D] focus:border-[#FF4D8D] sm:text-sm"
                  placeholder="이메일을 입력하세요"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                비밀번호
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#FF4D8D] focus:border-[#FF4D8D] sm:text-sm"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                비밀번호 확인
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#FF4D8D] focus:border-[#FF4D8D] sm:text-sm"
                  placeholder="비밀번호를 다시 입력하세요"
                />
              </div>
            </div>

            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">
                닉네임
              </label>
              <div className="mt-1">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#FF4D8D] focus:border-[#FF4D8D] sm:text-sm"
                  placeholder="닉네임을 입력하세요"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[#FF4D8D] focus:ring-[#FF4D8D] border-gray-300 rounded"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                <span className="text-[#FF4D8D]">이용약관</span> 및{' '}
                <span className="text-[#FF4D8D]">개인정보처리방침</span>에 동의합니다
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF4D8D] hover:bg-[#ff3080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4D8D] transition-colors duration-200"
              >
                회원가입
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              이미 계정이 있으신가요?{' '}
              <a
                href="/auth/login"
                className="font-medium text-[#FF4D8D] hover:text-[#ff3080] transition-colors duration-200"
              >
                로그인
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}