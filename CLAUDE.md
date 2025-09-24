# MEE'BUD 개발 가이드

## 📋 프로젝트 개요
- **프로젝트명**: MEE'BUD (미버드)
- **도메인**: https://meebud.com
- **유형**: Admin 큐레이팅·AI 프로필 완성·성사형 후불제 매칭 서비스
- **기술 스택**: Next.js 15.5.3, React 19.1.0, TypeScript, Tailwind CSS 4.0

## 🔄 핵심 서비스 플로우 (Admin 중심)
### 1단계: 사용자 프로필 입력
- 사용자가 기본 정보 입력 (사진, 기본정보, 취향 등)

### 2단계: Admin AI 프로필 완성
- Admin이 사용자 프로필 검토
- AI 분석 결과 작성 (얼굴상, 성격, 매력포인트, MBTI 등)
- 완성된 프로필로 매칭 풀에 등록

### 3단계: Admin 매칭 생성
- Admin이 직접 사용자 간 매칭 생성
- 호환성 분석 및 매칭 이유 작성

### 4단계: 사용자 매칭 확인 & 수락/거절
- 매칭 완료 시 상대방 프로필 표시
- 양쪽 모두 수락 시 다음 단계 진행

### 5단계: 결제 & 메시지 시작
- 매칭 성사 시 결제 진행
- 결제 완료 후 메시지창 활성화

## 🏗️ 프로젝트 구조
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 홈 대시보드 (매칭 상태별 UI)
│   ├── welcome/page.tsx   # 랜딩 페이지
│   ├── auth/login/        # 로그인
│   ├── matching/          # 매칭 확인 (수락/거절)
│   ├── messages/          # 메시지/채팅 (결제 후)
│   ├── profile/           # 프로필 입력/관리
│   ├── dreams/            # 꿈결제 시스템
│   └── admin/             # Admin 매칭 관리
└── components/            # 재사용 컴포넌트
    ├── TopTabNavigation.tsx
    ├── MatchingStatus.tsx  # 매칭 상태 컴포넌트
    └── ...
```

## 🎨 디자인 시스템 (프리미엄 + 신뢰 + 따뜻함)
### 색상 팔레트
- **Primary**: 다크네이비 `#0D1B2A` (신뢰감, 프리미엄)
- **Secondary**: 핑크 `#FF4D8D` (활기, 매칭)
- **Accent**: 로즈골드 `#C49A6C` (따뜻함, 프리미엄)
- **Background**: `white`, `#F8FAFB` (slate-50)
- **Text**: `#0D1B2A`, `#374151` (gray-700), `#6B7280` (gray-500)

### 접근성 & 텍스트 가시성 개선
- **입력 필드 텍스트**: `#0D1B2A` (완전히 검은색 계열)
- **플레이스홀더**: `#9CA3AF` (gray-400)
- **비활성 텍스트**: `#6B7280` (gray-500)
- **배경 대비**: 모든 텍스트 WCAG 2.1 AA 준수

### 모바일 우선 그리드 시스템
- **컨테이너**: `max-w-sm mx-auto` (모바일 최적화)
- **카드 사이즈**: 통일된 `rounded-2xl p-6`
- **버튼 높이**: `py-3` (터치 친화적)
- **그리드**: `grid-cols-1 md:grid-cols-2` (모바일 우선)

### 네비게이션
- **상단 탭 네비게이션**: 홈/매칭/메시지/꿈결제/프로필 (5개)
- **색상**: 다크네이비 배경, 핑크 액티브 인디케이터

### 컴포넌트
```scss
.card {
  @apply bg-white rounded-2xl shadow-sm border border-gray-100 p-6;
}
.btn-primary {
  @apply bg-[#FF4D8D] text-white font-semibold py-3 px-4 rounded-xl;
  @apply hover:bg-[#ff3080] transition-colors;
}
.btn-secondary {
  @apply bg-[#0D1B2A] text-white font-semibold py-3 px-4 rounded-xl;
  @apply hover:bg-[#1a2332] transition-colors;
}
.text-primary {
  @apply text-[#0D1B2A];
}
.text-accent {
  @apply text-[#C49A6C];
}
```

## 🔧 개발 명령어
```bash
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run lint       # 코드 검사
vercel --prod      # 배포
```

## ⚠️ 중요 개발 규칙
### ESLint 규칙
- `'` → `&apos;` 사용 필수
- `console.log` 금지 (warn/error만 허용)
- import 순서: Next.js → 외부 → 내부

### 빌드 오류 방지
```typescript
// ❌ 잘못된 JSX
<div className="header">
  <div className="container">
  <div className="content">  // 닫지 않고 새 div
    <h1>제목</h1>
  </div>

// ✅ 올바른 JSX
<div className="header">
  <div className="container">
    <div className="content">
      <h1>제목</h1>
    </div>
  </div>
</div>
```

## 📊 홈 대시보드 매칭 상태별 UI
### 상태 1: 프로필 미완성
```
🔄 프로필을 완성하여 매칭을 시작하세요!
[프로필 완성하기] 버튼
```

### 상태 2: 프로필 완성, 매칭 시작 전
```
✅ 매칭을 시작하세요!
[매칭 시작하기] 버튼
```

### 상태 3: 매칭 진행 중
```
⏳ 매칭 중입니다.
Admin이 최적의 상대를 찾고 있어요.
```

### 상태 4: 매칭 완료
```
💝 매칭되었습니다!
[매칭 확인하기] 버튼 → 상대방 프로필 보기
```

## 📊 현재 상태
### ✅ 완료
- 홈 대시보드 (매칭 상태별 UI 완료)
- 매칭 시스템 (Admin 기반 큐레이팅 완료)
- Admin 매칭 관리 시스템 구축
- 상단 탭 네비게이션 시스템
- 배포 환경 (Vercel + meebud.com)

### 🎨 디자인 통일 필요 (다크네이비+핑크+로즈골드)
1. **색상 전면 교체**: 보라계열 → 다크네이비+핑크+로즈골드
2. **텍스트 가시성 개선**: 입력필드 회색 텍스트 → 검은색 계열
3. **모바일 그리드 통일**: 카드 사이즈 & 레이아웃 일관성
4. **Welcome 페이지 리디자인**: 새 색상 팔레트 적용

### 🚧 백엔드 필요
- 프로필 AI 분석 도구
- 매칭 상태 관리 API
- 결제 시스템 연동

## 🚀 배포 정보
- **GitHub**: https://github.com/comdbstn/meebud
- **Vercel**: 자동 배포
- **도메인**: meebud.com
- **사업자등록번호**: 405-06-65006

## 🎯 추가 기능: 다른 사용자 매칭 현황 표시
홈 대시보드에 다른 사용자들의 매칭 소식 표시:
```
📢 방금 활발한 성격인 김○○님과 차분한 성격인 이○○님이
    "서로 보완적인 성격"으로 매칭되었습니다!
```

---
**업데이트**: 2025.09.24 | **버전**: 4.0 (Admin 중심 플로우)