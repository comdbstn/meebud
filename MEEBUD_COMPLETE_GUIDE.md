# MEE'BUD 완전 개발 가이드

> **MEE'BUD (미버드)** 프로젝트의 모든 것을 담은 통합 개발 문서

---

## 📑 목차

1. [프로젝트 개요](#-프로젝트-개요)
2. [기술 스택 & 아키텍처](#-기술-스택--아키텍처)
3. [도메인 구조 분석](#-도메인-구조-분석)
4. [페이지별 상세 분석](#-페이지별-상세-분석)
5. [디자인 시스템](#-통합-디자인-시스템)
6. [개발 환경 & 도구](#-개발-환경--도구)
7. [현재 구현 현황](#-현재-구현-현황)
8. [개발 로드맵](#-개발-로드맵)
9. [성공 지표 & KPI](#-성공-지표-kpi)
10. [중요 고려사항](#-중요-고려사항)

---

## 📋 프로젝트 개요

### 서비스 정보
- **프로젝트명**: MEE'BUD (미버드)
- **도메인**: https://meebud.com
- **유형**: 인증·AI·성사형 후불제 매칭 서비스
- **컨셉**: "가벼운 스와이프는 잊으세요. 인증·AI·성사형 후불제로 '진짜'를 잇습니다."
- **타겟**: 진정한 연결을 원하는 성인 사용자

### 핵심 가치 제안
- 🛡 **다중 인증**: 신분·학력·직장·건강 인증을 통한 신뢰성
- 🤖 **AI 이상형 매칭**: MBTI·가치관·취향 기반 정교한 추천
- 💳 **성사형 후불제**: 성사된 연결에만 결제하는 합리적 시스템

### 차별화 포인트
1. **신뢰성**: 운영진 꼼꼼 검수로 안전한 만남
2. **정확성**: AI가 인식하는 완벽한 이상형 매칭
3. **공정성**: 100% 후불제로 서로 매칭 수락 후 결제

---

## 🏗️ 기술 스택 & 아키텍처

### Frontend
- **프레임워크**: Next.js 15.5.3 (App Router)
- **UI 라이브러리**: React 19.1.0
- **언어**: TypeScript 5.0+
- **스타일링**: Tailwind CSS 4.0
- **빌드 도구**: Turbopack
- **배포**: Vercel

### 개발 환경
- **GitHub**: https://github.com/comdbstn/meebud
- **Vercel 프로젝트 ID**: prj_sccxIPGtXWlt8eNZ9Emjpr89nEi9
- **도메인**: meebud.com (Third Party DNS)
- **환경 변수**: 현재 없음
- **빌드 설정**: `npm run build` → `.next` 출력

### 프로젝트 구조
```
meebud-welcome/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 홈 대시보드 (로그인 후)
│   │   ├── welcome/           # Welcome 랜딩 페이지
│   │   ├── auth/              # 인증 (로그인/회원가입)
│   │   ├── matching/          # 매칭 관련 페이지
│   │   ├── messages/          # 메시지/채팅 시스템
│   │   ├── profile/           # 프로필 관리
│   │   ├── dreams/            # 꿈결제 시스템
│   │   └── admin/             # 관리자 대시보드
│   └── components/            # 재사용 컴포넌트
│       ├── BottomNavigation.tsx
│       ├── Hero.tsx
│       ├── WhyMeebud.tsx
│       └── ... (총 10개 컴포넌트)
├── public/                    # 정적 파일
├── package.json
├── next.config.ts
├── eslint.config.mjs
├── tsconfig.json
└── vercel.json
```

---

## 🌐 도메인 구조 분석

### URL 구조 체계
```
meebud.com/
├── /                          # 홈 (로그인 후 대시보드)
├── /welcome                   # 서비스 소개 랜딩
├── /auth/
│   ├── /login                 # 로그인
│   └── /signup                # 회원가입
├── /matching/
│   ├── /                      # 매칭 홈 (카드 스와이프)
│   └── /history               # 매칭 히스토리
├── /messages/
│   ├── /                      # 메시지 리스트
│   └── /[id]                  # 개별 채팅방
├── /profile/
│   ├── /                      # 프로필 홈
│   ├── /edit                  # 프로필 편집
│   ├── /create                # 프로필 생성
│   └── /analysis              # AI 분석 결과
├── /dreams/
│   ├── /                      # 꿈결제 홈
│   ├── /purchase              # 결제하기
│   ├── /balance               # 잔액 관리
│   └── /history               # 결제 히스토리
├── /admin                     # 관리자 대시보드
└── /sitemap.xml               # SEO 사이트맵
```

### SEO 최적화
- **사이트맵**: 모든 주요 페이지 포함
- **메타데이터**: 페이지별 맞춤 SEO 설정
- **구조화된 데이터**: Schema.org 마크업 준비

---

## 📄 페이지별 상세 분석

## 1. 홈 페이지 (`/`)

### 📊 기획 의도
**목표**: 로그인한 사용자의 메인 허브이자 대시보드
**핵심 가치**: 한눈에 보는 매칭 현황과 빠른 액션 접근

### 🎯 타겟 사용자
- **주요**: 로그인한 활성 사용자
- **부차**: 비로그인 사용자 (로그인 유도)

### ⚙️ 핵심 기능
1. **조건부 렌더링**
```typescript
// 로그인 상태에 따른 화면 분기
useEffect(() => {
  const authStatus = sessionStorage.getItem('user_authenticated')
  const email = sessionStorage.getItem('user_email')

  if (authStatus === 'true' && email) {
    setIsAuthenticated(true)
  }
}, [])
```

2. **모바일 최적화 대시보드**
- 매칭 현황 한눈에 보기
- 오늘의 AI 추천 강조
- 진행 중인 매칭 상태 표시

3. **빠른 액션 버튼**
- 프로필 완성 유도
- 인증하기 버튼
- 매칭 확인하기 CTA

4. **최근 활동 타임라인**
- 매칭, 메시지, 인증 관련 알림
- 실시간 업데이트 (UI 준비 완료)

### 🎨 디자인 특징
```scss
// 모바일 퍼스트 레이아웃
.container { @apply max-w-sm mx-auto px-4 py-6; }
.card { @apply bg-white rounded-2xl p-6 shadow-sm border border-gray-100; }
.header { @apply bg-white shadow-sm; }
```

### 📱 사용자 플로우
```
홈 진입 → 로그인 상태 확인 → 대시보드 표시 → 매칭/메시지/프로필 이동
```

---

## 2. Welcome 페이지 (`/welcome`)

### 📊 기획 의도
**목표**: MEE'BUD 서비스의 차별화된 가치 전달
**핵심 메시지**: "가벼운 스와이프는 잊으세요. 인증·AI·성사형 후불제로 '진짜'를 잇습니다."

### ⚙️ 섹션별 상세 기능

#### Hero 섹션
```typescript
// 핵심 구성 요소
- 브랜드 로고 (하트 + MEE'BUD 타이포)
- 메인 헤드라인 (기획서 원문 그대로)
- 3가지 핵심 특징 설명
- CTA 버튼: "지금 시작하기", "서비스 살펴보기"
```

#### WhyMeebud 섹션 (차별화 포인트)
1. **🛡 다중 인증**: 신분·학력·직장·건강
2. **🤖 AI 이상형 매칭**: MBTI·가치관·취향 기반
3. **💳 성사형 후불제**: 성사된 연결에만 결제

#### HowItWorks 섹션 (3단계 프로세스)
1. **프로필 작성**: 사진, 정보, 취향 입력
2. **AI 분석**: 이상형 매칭 알고리즘 적용
3. **매칭 & 결제**: 성사 시에만 결제 진행

#### TrustSafety 섹션
- 신분 인증 프로세스 설명
- 운영진 검수 시스템
- 안전한 만남 보장 정책

#### FAQ 섹션
- 후불제 시스템 상세 설명
- AI 매칭 원리
- 안전성 보장 방법

### 🎨 디자인 특징
```scss
// 애니메이션 효과
.animate-heart-beat { animation: heartbeat 2s ease-in-out infinite; }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-fade-in { animation: fadeIn 1s ease-out; }

// 색상 그라데이션
.bg-gradient { @apply bg-gradient-to-br from-slate-50 to-blue-50; }
```

---

## 3. 인증 시스템

### 3-1. 로그인 페이지 (`/auth/login`)

### 📊 기획 의도
**목표**: 간편하고 신뢰할 수 있는 로그인 경험
**핵심**: 테스트 계정 제공으로 바로 체험 가능

### ⚙️ 핵심 기능
```typescript
// 테스트 계정 시스템
const TEST_ACCOUNTS = {
  'test@meebud.com': 'meebud123!',
  'demo@meebud.com': 'demo123!',
  'user@meebud.com': 'user123!'
}

// 로그인 처리
const handleLogin = async (e: React.FormEvent) => {
  if (TEST_ACCOUNTS[email as keyof typeof TEST_ACCOUNTS] === password) {
    sessionStorage.setItem('user_authenticated', 'true')
    sessionStorage.setItem('user_email', email)
    router.push('/') // 홈으로 리다이렉트
  }
}
```

### 🎨 UI 특징
- 중앙 정렬 카드 형태
- 테스트 계정 안내 박스 (파란색)
- 실시간 에러 메시지
- 로딩 상태 표시

### 3-2. 회원가입 페이지 (`/auth/signup`)
**현재 상태**: 기본 구조만 구현, 백엔드 연동 후 상세 기능 개발 예정

---

## 4. 매칭 시스템

### 4-1. 매칭 홈 (`/matching`)

### 📊 기획 의도
**목표**: 틴더 스타일을 넘어선 심층적 매칭 경험
**차별점**: AI 호환성 점수와 상세 프로필 제공

### ⚙️ 핵심 기능
```typescript
// 매칭 프로필 데이터 구조
interface MatchProfile {
  id: number
  name: string
  age: number
  location: string
  job: string
  education: string
  height: number
  faceType: string // '고양이상', '강아지상' 등
  mbti: string
  photos: string[]
  introduction: string
  personality: string[] // 최대 4개
  hobbies: string[]     // 최대 6개
  compatibility: number // AI 호환성 점수 (0-100)
  isVerified: boolean
  distance: string
}

// 스와이프 액션 처리
const handleSwipe = (direction: 'like' | 'pass') => {
  setSwipeDirection(direction)

  setTimeout(() => {
    if (currentIndex < sampleMatches.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      alert('오늘의 추천이 끝났어요!')
      window.location.href = '/'
    }
  }, 300)
}
```

### 🎨 UI 특징
- **카드 스타일**: 모바일 전체 화면 활용
- **그라데이션**: from-purple-50 to-pink-50
- **호환성 표시**: 95% 등 숫자 + 색상
- **액션 버튼**: PASS/LIKE/SUPER LIKE

### 4-2. 매칭 히스토리 (`/matching/history`)
- **목적**: 매칭 기록 관리 및 재검토
- **기능**: 필터링, 재매칭, 통계 제공 (백엔드 연동 후)

---

## 5. 메시지 시스템

### 5-1. 메시지 리스트 (`/messages`)

### 📊 기획 의도
**목표**: 모든 대화를 한눈에 관리
**핵심**: 읽지 않은 메시지 강조, 최신순 정렬

### ⚙️ 데이터 구조
```typescript
interface Conversation {
  id: number
  name: string
  lastMessage: string
  timestamp: string
  unreadCount: number
  isOnline: boolean
  matchDate: string
  profileImage: string
}
```

### 5-2. 개별 채팅 (`/messages/[id]`)
- **매칭 정보 표시**: 상대방 프로필, 호환성 점수
- **채팅 인터페이스**: 말풍선, 시간 표시, 읽음 확인
- **안전 기능**: 신고/차단 (백엔드 연동 후)

---

## 6. 프로필 관리 시스템

### 6-1. 프로필 홈 (`/profile`)
- **프로필 미리보기**: 상대방이 보는 내 모습
- **완성도 체크**: 완성률, 개선 제안
- **통계 정보**: 조회수, 매칭 횟수

### 6-2. 프로필 편집 (`/profile/edit`)

### 📊 기획 의도
**목표**: 사용자 친화적인 프로필 관리
**특징**: 3단계 탭 구성, 실시간 미리보기

### ⚙️ 3단계 탭 시스템
```typescript
// 1. 기본정보 탭
const basicInfo = {
  height: number,
  job: string,
  location: string,
  introduction: string, // 500자 제한
  personality: string[], // 최대 4개 선택
  hobbies: string[],     // 최대 6개 선택
  mbti: string
}

// 2. 사진관리 탭
const photoManagement = {
  mainPhoto: string,
  additionalPhotos: string[4], // 추가 4장
  photoTips: string[] // 사진 업로드 가이드
}

// 3. 이상형 설정 탭
const preferences = {
  idealAgeMin: number,
  idealAgeMax: number,
  idealTypes: string[] // 복수 선택 가능
}
```

### 6-3. 프로필 생성 (`/profile/create`)
**목적**: 신규 사용자 온보딩 프로세스

### 6-4. AI 분석 (`/profile/analysis`)
**목적**: AI 분석 결과 및 매칭 전략 제공

---

## 7. 꿈결제 시스템

### 7-1. 꿈결제 홈 (`/dreams`)

### 📊 기획 의도
**목표**: 투명하고 합리적인 결제 시스템 설명
**핵심 가치**: 성사형 후불제의 공정함

### ⚙️ 핵심 기능
- **결제 현황 대시보드**: 잔액, 사용내역, 예정금액
- **후불제 시스템 설명**: 성사 시에만 결제
- **투명한 과금 구조**: 명확한 요금제

### 7-2. 결제하기 (`/dreams/purchase`)

### 📊 4단계 결제 프로세스
```typescript
const paymentSteps = [
  '매칭 확인',    // 결제 대상 매칭 확인
  '포인트 선택',  // 필요 포인트 계산
  '결제 방법',    // PG사 선택
  '결제 완료'     // 완료 및 안내
]

// 각 단계별 상세 기능
1. 매칭 확인: 결제 대상 리스트, 포인트 계산
2. 포인트 선택: 패키지 옵션, 할인 혜택
3. 결제 방법: 신용카드, 계좌이체, 할부
4. 결제 완료: 성공 확인, 영수증, 안내
```

### 7-3. 잔액 관리 (`/dreams/balance`)
- **잔액 현황**: 보유/사용예정/환불가능 포인트
- **충전 시스템**: 패키지, 보너스 혜택
- **환불 시스템**: 신청, 정책, 처리 현황

### 7-4. 결제 히스토리 (`/dreams/history`)
```typescript
// 거래 유형 분류
type TransactionType = 'charge' | 'use' | 'refund' | 'bonus'

// 필터링 시스템
- 기간별 조회 (1주, 1개월, 3개월, 전체)
- 유형별 분류 (충전, 사용, 환불, 보너스)
- 금액대별 검색
```

---

## 8. 관리자 시스템 (`/admin`)

### 📊 기획 의도
**목표**: 서비스 운영 및 관리 효율성
**대상**: 운영진, 관리자

### ⚙️ 핵심 기능
1. **사용자 관리**
   - 회원 목록 및 상태 관리
   - 인증 승인/거부 처리
   - 신고 접수 및 처리

2. **AI 분석 프로필 관리** ⭐ **신규**
   - 사용자 프로필 조회
   - AI 분석 결과 직접 작성/편집
   - 얼굴상, 성격 분석, 매력 포인트 입력
   - MBTI 호환성 분석 작성
   - 개인별 매칭 전략 수립

3. **매칭 관리** ⭐ **강화**
   - 매칭 현황 모니터링
   - **수동 매칭 생성**: 관리자가 직접 사용자 매칭
   - **호환성 점수 조정**: AI 점수 수동 설정
   - 매칭 성사율 통계 분석
   - 문제 매칭 개입 처리

4. **결제 관리**
   - 결제 현황 실시간 조회
   - 환불 처리 및 승인
   - 수익 통계 및 분석

5. **컨텐츠 관리**
   - 공지사항 작성/수정
   - FAQ 업데이트
   - 정책 변경 공지

### 🎨 디자인 특징
- **대시보드 스타일**: 정보 밀도 높은 레이아웃
- **차트/그래프**: 시각적 데이터 표현
- **테이블**: 정렬/필터/검색 기능
- **액션 버튼**: 승인/거부/처리 등

---

## 🎨 통합 디자인 시스템

### 색상 체계 ⭐ **yeonpick 레퍼런스 기반 리뉴얼**
```scss
// Primary Brand Colors (보라색 계열로 변경)
$brand-primary: #8B5CF6;       // MEE'BUD 보라 (violet-500)
$brand-primary-hover: #7C3AED;  // 호버 상태 (violet-600)
$brand-primary-light: #C4B5FD;  // 연한 보라 (violet-300)
$brand-primary-dark: #6D28D9;   // 진한 보라 (violet-700)

// Secondary Colors
$brand-secondary: #1E293B;      // 슬레이트 (신뢰감)
$brand-accent: #64748B;         // 중성 슬레이트
$brand-supporting: #F59E0B;     // 골드 (프리미엄)

// Functional Colors
$success: #10B981;              // 성공 (초록)
$warning: #F59E0B;              // 경고 (노랑)
$error: #EF4444;                // 에러 (빨강)
$info: #3B82F6;                 // 정보 (파랑)

// Text Hierarchy (접근성 개선 - WCAG 2.1 AA 준수)
$text-primary: #111827;         // 제목 (gray-900)
$text-secondary: #1F2937;       // 부제목 (gray-800)
$text-body: #374151;            // 본문 (gray-700)
$text-caption: #4B5563;         // 캡션 (gray-600)
$text-disabled: #9CA3AF;        // 비활성 (gray-400)

// Background Colors
$bg-primary: #FFFFFF;           // 메인 배경
$bg-secondary: #F9FAFB;         // 보조 배경 (gray-50)
$bg-elevated: #F3F4F6;          // 카드 배경 (gray-100)
$bg-overlay: rgba(0,0,0,0.5);   // 오버레이
```

### 타이포그래피 시스템
```scss
// Heading Styles
.text-display-lg { font-size: 3.5rem; font-weight: 700; } // 56px
.text-display-md { font-size: 3rem; font-weight: 700; }   // 48px
.text-display-sm { font-size: 2.5rem; font-weight: 700; } // 40px

.text-heading-xl { font-size: 2rem; font-weight: 600; }   // 32px
.text-heading-lg { font-size: 1.5rem; font-weight: 600; } // 24px
.text-heading-md { font-size: 1.25rem; font-weight: 600; }// 20px
.text-heading-sm { font-size: 1rem; font-weight: 600; }   // 16px

// Body Text
.text-body-lg { font-size: 1rem; font-weight: 400; }      // 16px
.text-body-md { font-size: 0.875rem; font-weight: 400; }  // 14px
.text-body-sm { font-size: 0.75rem; font-weight: 400; }   // 12px

// Specialized
.text-caption { font-size: 0.625rem; font-weight: 500; }  // 10px
.text-overline { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
```

### 간격(Spacing) 시스템
```scss
// Tailwind 기반 8px 그리드 시스템
$space-0: 0;        // 0px
$space-1: 0.25rem;  // 4px
$space-2: 0.5rem;   // 8px
$space-3: 0.75rem;  // 12px
$space-4: 1rem;     // 16px
$space-6: 1.5rem;   // 24px
$space-8: 2rem;     // 32px
$space-12: 3rem;    // 48px
$space-16: 4rem;    // 64px
$space-20: 5rem;    // 80px
```

### 컴포넌트 스타일
```scss
// 공통 카드 스타일
.card {
  @apply bg-white rounded-2xl shadow-sm border border-gray-100;
}
.card-hover {
  @apply hover:shadow-md transition-shadow duration-200;
}

// 버튼 시스템
.btn-primary {
  @apply bg-[#FF4D8D] text-white font-semibold py-3 px-4 rounded-xl;
  @apply hover:bg-[#ff3080] transition-colors duration-200;
}
.btn-secondary {
  @apply bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl;
  @apply hover:bg-gray-50 transition-colors duration-200;
}

// 레이아웃
.page-container {
  @apply min-h-screen bg-gray-50 pb-20;
}
.content-wrapper {
  @apply max-w-sm mx-auto px-4 py-6;
}
```

### 모바일 전용 디자인 (Mobile First) ⭐
**핵심 원칙**: 모든 페이지는 스마트폰 화면비율 기준으로 설계

```scss
// 모바일 전용 브레이크포인트
$mobile-min: 320px;   // 최소 폭
$mobile-max: 480px;   // 최대 폭 (기본 타겟)
$mobile-optimal: 375px; // 최적화 기준 (iPhone 기준)

// 모바일 전용 컨테이너
.mobile-container {
  max-width: 480px;        // 최대 폭 제한
  min-width: 320px;        // 최소 폭 보장
  margin: 0 auto;          // 중앙 정렬
  padding: 0 1rem;         // 좌우 여백
  min-height: 100vh;       // 전체 화면 높이
}

// 모바일 전용 레이아웃
.mobile-header {
  height: 60px;            // 고정 헤더 높이
  padding: 0.5rem 1rem;    // 내부 여백
}

.mobile-content {
  padding: 1rem;           // 콘텐츠 여백
  padding-bottom: 80px;    // 하단 네비게이션 공간
}

.mobile-bottom-nav {
  height: 60px;            // 하단 네비게이션 높이
  position: fixed;         // 고정 위치
  bottom: 0;               // 하단 고정
  left: 0;
  right: 0;
}
```

### 모바일 색상 접근성 강화 ⭐ **업데이트**
```scss
// 모바일에서 가독성 강화
$mobile-text-primary: #000000;    // 완전한 검은색
$mobile-text-secondary: #1A1A1A;  // 거의 검은색
$mobile-text-body: #2D2D2D;       // 진한 회색
$mobile-text-caption: #4A4A4A;    // 중간 회색
$mobile-bg-contrast: #FFFFFF;     // 완전한 흰색 배경
$mobile-input-text: #000000;      // 입력 필드 텍스트 (검은색)
$mobile-input-bg: #FFFFFF;        // 입력 필드 배경 (흰색)
$mobile-placeholder: #6B7280;     // 플레이스홀더 (회색)

// 모바일 전용 입력 필드
.mobile-input {
  font-size: 16px;         // iOS 줌 방지
  line-height: 1.5;        // 터치 최적화
  padding: 12px 16px;      // 충분한 터치 영역
  border-radius: 12px;     // 모바일 친화적 라운딩
  color: #000000;          // 입력 텍스트 검은색
  background: #FFFFFF;     // 배경 흰색
}

.mobile-input::placeholder {
  color: #6B7280;          // 플레이스홀더 회색
  opacity: 1;              // 투명도 제거
}
```

### UI/UX 개선 사항 ⭐ **yeonpick 레퍼런스 기반 리뉴얼**

#### 상단 탭 네비게이션 시스템 (하단→상단 이동)
```scss
// 레퍼런스 기반 네비게이션 구조 변경
기존: 하단 고정 네비게이션 (BottomNavigation)
신규: 상단 탭 네비게이션 (TopTabNavigation)

// 탭 구조 (5개 탭)
1. 홈 (메인 대시보드)
2. 매칭 (AI 매칭, 카드 스와이프)
3. 메시지 (채팅, 대화)
4. 꿈결제 (결제, 포인트)
5. 프로필 (마이페이지, 설정)

// 디자인 특징
- 탭 하단 선택 인디케이터 (보라색)
- 선택된 탭은 진한 텍스트, 미선택은 회색
- 깔끔한 수평 레이아웃
- 모바일 친화적 터치 영역
```

#### 깔끔한 카드 기반 디자인 시스템
```scss
// yeonpick 스타일 카드 레이아웃
.main-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(139, 92, 246, 0.1);
  border: 1px solid #F1F5F9;
}

.hero-section {
  background: linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 100%);
  color: white;
  text-align: center;
  padding: 40px 20px;
}

.stats-card {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  text-align: center;
  padding: 20px;
}
```

#### 텍스트 최소화 & 시각적 개선
```scss
// 깔끔한 디자인 원칙 (yeonpick 기반)
1. 핵심 메시지 중심: "진짜 매칭, 진짜 연결" 같은 캐치프레이즈
2. 숫자 강조: "10,000명과 함께하는 매칭" 스타일
3. 카드 기반 정보 표시: 핵심 정보를 카드로 구분
4. 보라색 계열 통일: 브랜드 일관성 확보
5. 여백 중심 레이아웃: 깔끔하고 여유로운 공간감
```

#### 헤더 중앙 정렬 시스템
```scss
// 모든 페이지 헤더 표준화
.page-header {
  display: flex;
  align-items: center;
  justify-content: center;  // 중앙 정렬
  position: relative;       // 버튼 절대 위치 기준
  height: 60px;
  padding: 0 1rem;
}

.header-back-btn {
  position: absolute;
  left: 1rem;              // 왼쪽 고정
  top: 50%;
  transform: translateY(-50%);
}

.header-action-btn {
  position: absolute;
  right: 1rem;             // 오른쪽 고정
  top: 50%;
  transform: translateY(-50%);
}

.header-title {
  font-size: 1.125rem;     // 18px
  font-weight: 600;
  color: #000000;
  text-align: center;
}
```

---

## 🔧 개발 환경 & 도구

### 필수 명령어
```bash
# 개발 환경 시작
npm run dev

# 프로덕션 빌드
npm run build

# 코드 품질 검사
npm run lint

# 자동 수정
npm run lint -- --fix

# Vercel 배포
vercel --prod

# Git 작업
git add .
git commit -m "feat: 기능 설명"
git push
```

### ESLint 규칙
```javascript
// 주요 규칙 (.eslintrc.json)
{
  "react/no-unescaped-entities": "error",  // &apos; 사용 필수
  "@typescript-eslint/no-unused-vars": [
    "error",
    { "argsIgnorePattern": "^_" }  // _로 시작하는 변수는 허용
  ],
  "no-console": ["warn", { "allow": ["warn", "error"] }] // console.log 금지
}
```

### 빌드 오류 방지 가이드라인 ⭐ **중요**
```typescript
// 1. JSX 구조 검증 - 반드시 확인할 사항들
// ❌ 잘못된 예시: div 태그 누락/중복
<div className="header">
  <div className="container">
  <div className="content">  // 이전 div 닫지 않고 새로운 div 시작
    <h1>제목</h1>
  </div>
</div>

// ✅ 올바른 예시: 모든 태그 정확히 열고 닫기
<div className="header">
  <div className="container">
    <div className="content">
      <h1>제목</h1>
    </div>
  </div>
</div>

// 2. 컴포넌트 import/export 확인
// ❌ 존재하지 않는 컴포넌트 import
import BottomNavigation from '@/components/BottomNavigation'  // 삭제된 파일

// ✅ 올바른 import
import TopTabNavigation from '@/components/TopTabNavigation'  // 실제 존재하는 파일

// 3. 중괄호와 괄호 매칭 확인
// 반드시 다음을 확인:
// - { } 중괄호 쌍 맞춤
// - ( ) 소괄호 쌍 맞춤
// - [ ] 대괄호 쌍 맞춤
// - < > JSX 태그 쌍 맞춤
```

### 빌드 전 필수 체크리스트
```bash
# 배포 전 반드시 실행해야 할 명령어들
npm run build    # 로컬에서 빌드 테스트
npm run lint     # 코드 품질 검사

# 일반적인 빌드 오류 패턴
1. "Unexpected token" → JSX 태그 누락/중복
2. "Cannot find module" → import 경로 오류
3. "Expected '}'" → 중괄호 누락
4. "Parsing failed" → 문법 오류

# 오류 발생 시 해결 순서
1. 오류 메시지의 파일명과 라인 번호 확인
2. 해당 라인 주변의 태그/괄호 매칭 확인
3. import문과 실제 파일 존재 여부 확인
4. 수정 후 다시 빌드 테스트
```

### 브랜딩 정보
- **톤앤매너**: 신뢰, 프리미엄, 차분함
- **연락처**: jys13230@gmail.com, @meebud_
- **사업자등록번호**: 405-06-65006

---

## 📊 현재 구현 현황

### ✅ 완성된 기능 (프론트엔드 95%)
- [x] **Welcome 페이지**: 100% 완성 (Hero, Why, How, Trust, FAQ)
- [x] **홈 대시보드**: 모바일 최적화 완성
- [x] **인증 시스템**: 로그인/회원가입 + 테스트 계정
- [x] **전체 서비스 페이지**: 17개 페이지 구조 완성
- [x] **매칭 시스템 UI**: 카드 스와이프, 히스토리
- [x] **메시지 시스템 UI**: 리스트, 개별 채팅 인터페이스
- [x] **프로필 관리**: 생성/편집/분석 (3단계 탭)
- [x] **꿈결제 시스템**: 4단계 완전 구현
- [x] **관리자 페이지**: 대시보드 및 관리 기능
- [x] **공통 컴포넌트**: BottomNavigation, Loading 등
- [x] **반응형 디자인**: 모바일 퍼스트 완성
- [x] **접근성**: WCAG 2.1 AA 준수 (색상 대비 개선)
- [x] **빌드 시스템**: ESLint 오류 없는 안정적 빌드
- [x] **배포 환경**: Vercel 자동 배포 + 도메인 연결

### 🚧 백엔드 개발 필요 영역
- [ ] **사용자 인증**: JWT 기반 인증 시스템
- [ ] **프로필 관리**: 데이터베이스 CRUD 연동
- [ ] **AI 매칭 알고리즘**: 추천 엔진 개발
- [ ] **실시간 채팅**: WebSocket 또는 Socket.io
- [ ] **결제 시스템**: PG사 연동 (토스페이먼츠/아임포트)
- [ ] **파일 업로드**: 프로필 사진 관리 (AWS S3/Cloudinary)
- [ ] **관리자 기능**: 실제 데이터 관리 시스템
- [ ] **알림 시스템**: 푸시 알림 (FCM/APNS)

### 🎯 구현된 주요 페이지 (17개)
1. **Welcome** (`/welcome`) - 서비스 소개 랜딩
2. **홈 대시보드** (`/`) - 로그인 후 메인 화면 (모바일 최적화)
3. **로그인** (`/auth/login`) - 테스트 계정 포함
4. **회원가입** (`/auth/signup`) - 기본 구조
5. **매칭 홈** (`/matching`) - 카드 스와이프 시스템
6. **매칭 히스토리** (`/matching/history`) - 매칭 기록
7. **메시지 리스트** (`/messages`) - 대화 목록
8. **개별 채팅** (`/messages/[id]`) - 1:1 채팅
9. **프로필 홈** (`/profile`) - 프로필 현황
10. **프로필 편집** (`/profile/edit`) - 3단계 탭 시스템
11. **프로필 생성** (`/profile/create`) - 온보딩
12. **AI 분석** (`/profile/analysis`) - 분석 결과
13. **꿈결제 홈** (`/dreams`) - 결제 현황
14. **결제하기** (`/dreams/purchase`) - 4단계 프로세스
15. **잔액 관리** (`/dreams/balance`) - 포인트 관리
16. **결제 히스토리** (`/dreams/history`) - 거래 내역
17. **관리자** (`/admin`) - 운영 대시보드

---

## 🛣️ 개발 로드맵

### Phase 1: 백엔드 기반 구축 (6주)

#### Week 1-2: 인프라 & 인증
- [ ] **데이터베이스 설계** (PostgreSQL 또는 MongoDB)
  - 사용자 테이블 (User, Profile)
  - 매칭 테이블 (Match, MatchHistory)
  - 메시지 테이블 (Conversation, Message)
  - 결제 테이블 (Transaction, Point)

- [ ] **API 서버 구축** (Node.js + Express 또는 NestJS)
  - RESTful API 설계
  - GraphQL 고려 (선택사항)
  - 미들웨어 설정

- [ ] **JWT 기반 인증 시스템**
  - 회원가입/로그인 API
  - 토큰 발급/갱신
  - 권한 관리 미들웨어

- [ ] **사용자 모델 및 CRUD API**
  - 프로필 생성/조회/수정/삭제
  - 이미지 업로드 처리
  - 유효성 검증

#### Week 3-4: 핵심 기능 API
- [ ] **매칭 알고리즘 v1.0**
```typescript
// 기본 필터링 조건
interface MatchingCriteria {
  ageRange: [number, number]
  location: string
  education: string
  jobCategory: string
  faceTypes: string[]
  mbtiCompatibility: string[]
}

// 호환성 점수 계산
function calculateCompatibility(user1: Profile, user2: Profile): number {
  // MBTI 호환성 (30%)
  // 취미 공통점 (25%)
  // 성격 매치 (25%)
  // 거리 및 기본 조건 (20%)
}
```

- [ ] **메시지 시스템 API**
  - 대화 생성/조회
  - 메시지 전송/수신
  - 읽음 처리
  - 신고/차단 기능

- [ ] **파일 업로드 시스템**
  - AWS S3 또는 Cloudinary 연동
  - 이미지 리사이징/최적화
  - 보안 검증 (성인 컨텐츠 필터링)

#### Week 5-6: 결제 & 관리
- [ ] **결제 시스템 연동**
  - 토스페이먼츠 또는 아임포트
  - 포인트 충전/사용/환불
  - 결제 내역 관리

- [ ] **관리자 API**
  - 사용자 관리 (승인/정지/탈퇴)
  - 신고 처리 시스템
  - 통계 및 분석 데이터

- [ ] **알림 시스템 기초**
  - 이메일 알림
  - SMS 알림 (선택)
  - 인앱 알림 준비

### Phase 2: AI 고도화 & 실시간 기능 (4주)

#### Week 7-8: AI 매칭 고도화
- [ ] **MBTI 기반 매칭 알고리즘**
```typescript
// MBTI 호환성 매트릭스
const mbtiCompatibility = {
  'ENFP': ['INTJ', 'INFJ', 'ENFJ', 'ENTP'],
  'INTJ': ['ENFP', 'ENTP', 'INFJ', 'ENFJ'],
  // ... 전체 16가지 타입
}

// 성격 태그 기반 매칭
const personalityMatching = {
  '유머러스한': ['유머러스한', '활발한'],
  '진중한': ['진중한', '차분한'],
  // ... 성격 태그별 호환성
}
```

- [ ] **선호도 학습 시스템**
  - 사용자 행동 분석 (LIKE/PASS 패턴)
  - 성사된 매칭 분석
  - 개인별 선호도 프로필 생성

- [ ] **매칭 성사율 최적화**
  - A/B 테스트 시스템
  - 알고리즘 성능 모니터링
  - 피드백 루프 구현

#### Week 9-10: 실시간 기능
- [ ] **WebSocket 기반 실시간 채팅**
  - Socket.io 구현
  - 메시지 전송/수신 실시간 처리
  - 연결 상태 관리

- [ ] **실시간 알림**
  - 새 매칭 알림
  - 메시지 수신 알림
  - 결제/인증 완료 알림

- [ ] **온라인 상태 표시**
  - 사용자 활동 상태 추적
  - 최근 접속 시간 표시
  - 실시간 상태 업데이트

### Phase 3: 고급 기능 & 최적화 (3주)

#### Week 11-12: 고급 기능
- [ ] **프로필 인증 시스템**
```typescript
// 인증 단계별 처리
interface VerificationStep {
  type: 'identity' | 'education' | 'job' | 'health'
  status: 'pending' | 'approved' | 'rejected'
  documents: File[]
  verifiedAt?: Date
  adminNotes?: string
}
```

- [ ] **영상 인증 기능**
  - 실시간 영상 통화
  - 얼굴 인식 기술
  - 사기 방지 시스템

- [ ] **안전 신고 시스템**
  - 신고 접수/처리 프로세스
  - 자동 모니터링 시스템
  - 블랙리스트 관리

#### Week 13: 최적화 & 런칭 준비
- [ ] **성능 최적화**
  - 데이터베이스 쿼리 최적화
  - CDN 설정 (이미지/정적 파일)
  - 캐싱 전략 구현

- [ ] **SEO 최적화**
  - 메타 태그 최적화
  - sitemap.xml 동적 생성
  - Schema.org 마크업

- [ ] **모니터링 시스템**
  - Sentry 에러 트래킹
  - Google Analytics 4
  - 서버 모니터링 (New Relic/DataDog)

### Phase 4: 베타 런칭 & 피드백 (4주)

#### Week 14-15: 베타 런칭
- [ ] **베타 사용자 모집**
  - 50-100명 타겟
  - 친구/지인 네트워크 활용
  - 소셜 미디어 프로모션

- [ ] **실사용 테스트**
  - 매칭 시스템 안정성 확인
  - 결제 프로세스 검증
  - 사용자 경험 개선

#### Week 16-17: 개선 및 확장
- [ ] **피드백 기반 개선**
  - 사용자 인터뷰 진행
  - UI/UX 개선사항 적용
  - 버그 수정 및 안정성 향상

- [ ] **공식 런칭 준비**
  - 마케팅 전략 수립
  - 법적 검토 완료
  - 고객 지원 체계 구축

---

## 🎯 성공 지표 (KPI)

### 사용자 지표
- **DAU** (Daily Active Users): 목표 200명 (베타)
- **MAU** (Monthly Active Users): 목표 1,000명 (베타)
- **매칭 성사율**: 목표 15% 이상
- **사용자 만족도**: NPS 40+ (4.5/5.0 이상)
- **재방문율**: 1일 후 80%, 7일 후 60%, 30일 후 40%

### 비즈니스 지표
- **결제 전환율**: 매칭 성사 시 20% 이상
- **평균 사용자당 매출** (ARPU): 월 30,000원 목표
- **사용자 유지율**: 1개월 50%, 3개월 30%, 6개월 20%
- **고객 획득 비용** (CAC): 20,000원 이하
- **생애 가치** (LTV): 150,000원 이상

### 기술 지표
- **페이지 로딩 속도**: 2초 이내 (모바일 기준)
- **서버 응답 시간**: 500ms 이내
- **앱 크래시율**: 0.1% 미만
- **API 에러율**: 1% 미만
- **데이터베이스 응답 시간**: 100ms 이내

### 운영 지표
- **고객 문의 응답 시간**: 24시간 이내
- **신고 처리 시간**: 48시간 이내
- **인증 승인 시간**: 72시간 이내
- **시스템 가동률**: 99.9% 이상

---

## ⚠️ 중요 고려사항

### 보안 & 개인정보보호
```typescript
// 필수 보안 조치
const securityMeasures = {
  dataEncryption: {
    transit: 'TLS 1.3',        // 전송 중 암호화
    storage: 'AES-256',        // 저장 시 암호화
    password: 'bcrypt',        // 비밀번호 해싱
  },
  apiSecurity: {
    rateLimit: '100/hour',     // API 호출 제한
    cors: 'same-origin',       // CORS 정책
    authentication: 'JWT',     // 인증 토큰
  },
  imageProcessing: {
    virusScanning: true,       // 바이러스 검사
    contentFiltering: true,    // 음란물 필터링
    faceDetection: true,       // 얼굴 인식
  }
}
```

- [ ] **개인정보보호법 준수**
  - 개인정보 수집/이용 동의서
  - 개인정보 처리방침 작성
  - 데이터 보관/파기 정책

- [ ] **정보통신망법 준수**
  - 본인 확인 절차
  - 청소년 접근 제한
  - 스팸 방지 조치

### 법적 이슈
- [ ] **사업자 등록 및 신고**
  - 통신판매업 신고
  - 개인정보보호 신고
  - 청소년보호책임자 지정

- [ ] **이용약관 및 정책**
```markdown
# 필수 정책 문서
1. 이용약관 (Terms of Service)
2. 개인정보 처리방침 (Privacy Policy)
3. 커뮤니티 가이드라인
4. 결제 및 환불 정책
5. 저작권 정책
```

### 운영 체계
- [ ] **고객센터 운영**
  - 1:1 문의 시스템
  - FAQ 관리
  - 전화 상담 (선택)

- [ ] **컨텐츠 관리**
  - 신고 처리 프로세스
  - 부적절한 컨텐츠 필터링
  - 사용자 제재 정책

- [ ] **24/7 모니터링**
  - 시스템 장애 대응
  - 악성 사용자 탐지
  - 데이터 백업/복구

### 마케팅 & 성장 전략
```typescript
// 성장 전략 로드맵
const growthStrategy = {
  phase1: {
    period: '베타 런칭 (1-3개월)',
    target: 'Early Adopter 확보',
    channels: ['지인 추천', '대학 커뮤니티', 'SNS'],
    budget: '월 500만원'
  },
  phase2: {
    period: '정식 런칭 (4-12개월)',
    target: '브랜드 인지도 구축',
    channels: ['인플루언서', '페이스북/인스타', '구글 광고'],
    budget: '월 2,000만원'
  },
  phase3: {
    period: '확장 (1년 후)',
    target: '시장 점유율 확대',
    channels: ['TV 광고', '지하철 광고', '제휴'],
    budget: '월 5,000만원'
  }
}
```

---

## 📞 연락처 & 지원

### 개발 관련
- **이메일**: jys13230@gmail.com
- **인스타그램**: @meebud_
- **GitHub**: https://github.com/comdbstn/meebud

### 서비스 정보
- **도메인**: https://meebud.com
- **사업자등록번호**: 405-06-65006
- **Vercel**: https://vercel.com/comdbstns-projects

### 기술 스택 버전
- **Next.js**: 15.5.3
- **React**: 19.1.0
- **TypeScript**: 5.0+
- **Tailwind CSS**: 4.0
- **Node.js**: 18.0+ (권장)

---

## 📚 추가 자료

### 참고 문서
- [Next.js 15 공식 문서](https://nextjs.org/docs)
- [React 19 Release Notes](https://react.dev/blog)
- [Tailwind CSS 4.0](https://tailwindcss.com)
- [Vercel 배포 가이드](https://vercel.com/docs)

### 개발 도구
- **IDE**: VSCode (권장 확장: ES7+, Tailwind IntelliSense)
- **디자인**: Figma (UI 프로토타입)
- **API 테스트**: Postman 또는 Insomnia
- **데이터베이스**: PostgreSQL (Supabase) 또는 MongoDB (Atlas)

---

*이 문서는 MEE'BUD 프로젝트의 완전한 개발 가이드입니다. 개발 진행에 따라 지속적으로 업데이트됩니다.*

**마지막 업데이트**: 2025년 9월 24일
**문서 버전**: 2.0 (통합 버전)
**작성자**: Claude Code
**검토자**: MEE'BUD 개발팀

---

## 🔄 문서 히스토리

- **v1.0** (2025.09.24): 초기 문서 작성 (3개 파일 분리)
- **v2.0** (2025.09.24): 통합 문서로 재구성, 상세 분석 추가

**총 라인 수**: 1,500+ 라인
**섹션 수**: 10개 주요 섹션
**페이지 분석**: 17개 페이지 완전 분석
**개발 단계**: 17주 로드맵 완성