export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-12 px-4">
      <div className="max-w-sm mx-auto text-center">
        {/* Logo & Brand */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">
            MEE<span className="text-[#FF4D8D]">&apos;</span>BUD
          </h3>
          <p className="text-gray-400 text-sm">
            진짜 연결을 위한 AI 매칭 서비스
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-8 space-y-3">
          <a
            href="mailto:jys13230@gmail.com"
            className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span>✉️</span>
            <span className="text-sm">jys13230@gmail.com</span>
          </a>

          <a
            href="https://instagram.com/meebud_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-gray-400 hover:text-[#FF4D8D] transition-colors duration-200"
          >
            <span>📷</span>
            <span className="text-sm">@meebud_</span>
          </a>
        </div>

        {/* Links */}
        <div className="mb-6 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
            이용약관
          </a>
          <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
            개인정보처리방침
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-xs">
            © 2024 MEE&apos;BUD. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            사업자등록번호: 405-06-65006
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Made with 💝 for genuine connections
          </p>
        </div>
      </div>
    </footer>
  )
}