export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo & Brand */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            Mee<span className="text-[#FF4D8D]">&apos;</span>bud
          </h3>
          <p className="text-[#ADB5BD] text-sm">
            진짜 연결을 위한 프리미엄 소개팅 서비스
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <div className="space-y-3">
            <a
              href="mailto:jys13230@gmail.com"
              className="flex items-center justify-center space-x-2 text-[#ADB5BD] hover:text-white transition-colors duration-200"
            >
              <span>✉️</span>
              <span className="text-sm">jys13230@gmail.com</span>
            </a>

            <a
              href="https://instagram.com/meebud_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-[#ADB5BD] hover:text-[#FF4D8D] transition-colors duration-200"
            >
              <span>📷</span>
              <span className="text-sm">@meebud_</span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <a
              href="#"
              className="text-[#ADB5BD] text-sm hover:text-white transition-colors duration-200"
            >
              이용약관
            </a>
            <a
              href="#"
              className="text-[#ADB5BD] text-sm hover:text-white transition-colors duration-200"
            >
              개인정보처리방침
            </a>
          </div>
        </div>

        {/* Brand Values */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-4 text-xs text-[#ADB5BD]">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-[#FF4D8D] rounded-full"></span>
              <span>신뢰</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-[#C49A6C] rounded-full"></span>
              <span>프리미엄</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-[#ADB5BD] rounded-full"></span>
              <span>차분함</span>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-[#ADB5BD] text-xs">
            © 2024 Mee&apos;bud. All rights reserved.
          </p>
          <p className="text-[#ADB5BD] text-xs mt-2">
            Made with 💝 for genuine connections
          </p>
        </div>
      </div>
    </footer>
  )
}