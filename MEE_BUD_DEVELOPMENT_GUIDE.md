# MEE'BUD 종합 개발 가이드

## 📋 프로젝트 개요

**서비스명**: MEE'BUD (미버드)
**도메인**: https://meebud.com
**컨셉**: 인증·AI·성사형 후불제 매칭 서비스
**타겟**: 진정한 연결을 원하는 성인 사용자
**차별점**: 가벼운 스와이프 대신 심층 분석을 통한 진짜 매칭

### 핵심 가치 제안
- 🛡 **다중 인증**: 신분·학력·직장·건강 인증을 통한 신뢰성
- 🤖 **AI 이상형 매칭**: MBTI·가치관·취향 기반 정교한 추천
- 💳 **성사형 후불제**: 성사된 연결에만 결제하는 합리적 시스템

---

## 🏗️ 기술 스택 & 아키텍처

### Frontend
- **프레임워크**: Next.js 15.5.3 (App Router)
- **UI 라이브러리**: React 19.1.0
- **타입스크립트**: TypeScript 5.0+
- **스타일링**: Tailwind CSS 4.0
- **빌드 도구**: Turbopack
- **배포**: Vercel

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
├── public/                    # 정적 파일
└── 설정 파일들
```

---

## 📱 페이지별 상세 분석

### 1. Welcome 페이지 (`/welcome`)
**목적**: 서비스 소개 및 첫 인상 형성
**타겟**: 신규 방문자

**구현 완료 섹션**:
- **Hero 섹션**: 메인 헤드라인 "가벼운 스와이프는 잊으세요. Mee'bud는 인증·AI·성사형 후불제로 '진짜'를 잇습니다."
- **Why Mee'bud**: 3가지 차별화 포인트 시각화
- **How It Works**: 3단계 프로세스 설명
- **Trust & Safety**: 인증 프로세스 안내
- **FAQ**: 주요 질문 및 답변
- **Footer**: 사업자등록번호 405-06-65006 포함

**디자인 특징**:
- 애니메이션: 하트 비트, 플로트 효과
- 색상: 브랜드 핑크(#FF4D8D) 중심
- 레이아웃: 모바일 퍼스트 반응형

### 2. 홈 대시보드 (`/`)
**목적**: 로그인 후 메인 허브
**타겟**: 인증된 사용자

**구현된 기능**:
- 조건부 렌더링 (비로그인 시 로그인 유도)
- 모바일 최적화 대시보드
- 오늘의 AI 추천 섹션
- 진행 중인 매칭 현황
- 빠른 액션 버튼 (프로필 완성, 인증하기)
- 최근 활동 타임라인
- BottomNavigation 포함

### 3. 인증 시스템 (`/auth/`)
**로그인 페이지** (`/auth/login`):
- 테스트 계정 제공 (test@meebud.com / meebud123!)
- 세션 기반 인증 (sessionStorage)
- 로그인 성공 시 홈(/)으로 리다이렉트

**회원가입 페이지** (`/auth/signup`):
- 기본 구조 구현 (상세 기능 대기)

### 4. 매칭 시스템 (`/matching/`)
**매칭 홈** (`/matching`):
- AI 추천 후보 카드 인터페이스
- 스와이프/클릭 기반 선택
- 매칭 성사 시 축하 화면

**매칭 히스토리** (`/matching/history`):
- 과거 매칭 기록
- 상태별 필터링 (성사/거절/대기)

### 5. 메시지 시스템 (`/messages/`)
**메시지 리스트** (`/messages`):
- 대화 목록
- 읽지 않은 메시지 카운트
- 최신 메시지 미리보기

**개별 채팅** (`/messages/[id]`):
- 1:1 채팅 인터페이스
- 실시간 메시지 (UI만 구현)

### 6. 프로필 관리 (`/profile/`)
**프로필 홈** (`/profile`):
- 내 프로필 미리보기
- 인증 현황
- 매칭 통계

**프로필 편집** (`/profile/edit`):
- 탭 기반 편집 (기본정보/사진/이상형)
- 성격, 취미 다중 선택
- MBTI, 나이대 설정

**프로필 생성** (`/profile/create`):
- 온보딩 프로세스
- 단계별 정보 입력

**AI 분석** (`/profile/analysis`):
- AI 기반 프로필 분석 결과

### 7. 꿈결제 시스템 (`/dreams/`)
**꿈결제 홈** (`/dreams`):
- 결제 현황 대시보드
- 포인트 잔액

**결제** (`/dreams/purchase`):
- 4단계 결제 시스템 완전 구현
- 성사형 후불제 설명

**잔액 관리** (`/dreams/balance`):
- 포인트 충전/환불

**결제 히스토리** (`/dreams/history`):
- 거래 내역 조회

### 8. 관리자 시스템 (`/admin`)
**관리자 대시보드**:
- 사용자 관리
- 매칭 현황 모니터링
- 결제 관리
- 인증 검수

---

## 🎨 디자인 시스템

### 색상 팔레트
```scss
// Primary Colors
$primary: #FF4D8D;        // 브랜드 핑크
$primary-hover: #ff3080;  // 호버 상태

// Secondary Colors
$secondary: #0D1B2A;      // 네이비
$accent: #ADB5BD;         // 그레이
$supporting: #C49A6C;     // 골드

// Neutral Colors (접근성 개선됨)
$text-primary: #1F2937;   // text-gray-800
$text-secondary: #374151; // text-gray-700
$text-tertiary: #4B5563;  // text-gray-600
$text-light: #6B7280;     // text-gray-500

// Background Colors
$bg-primary: #FFFFFF;     // 메인 배경
$bg-secondary: #F9FAFB;   // text-gray-50
$bg-accent: #F3F4F6;      // text-gray-100
```

### 타이포그래피 시스템
```scss
// Headings
.heading-xl { @apply text-3xl font-bold; }
.heading-lg { @apply text-2xl font-bold; }
.heading-md { @apply text-xl font-bold; }
.heading-sm { @apply text-lg font-bold; }

// Body Text
.body-lg { @apply text-base font-medium; }
.body-md { @apply text-sm font-medium; }
.body-sm { @apply text-xs font-medium; }

// Colors
.text-primary { @apply text-gray-900; }
.text-secondary { @apply text-gray-800; }
.text-tertiary { @apply text-gray-700; }
.text-light { @apply text-gray-600; }
```

### 컴포넌트 디자인 원칙
1. **모바일 퍼스트**: 320px부터 시작
2. **접근성**: WCAG 2.1 AA 준수 (색상 대비 4.5:1 이상)
3. **일관성**: 동일한 패딩, 마진, 라운딩 사용
4. **애니메이션**: 자연스러운 마이크로 인터랙션

### 공통 스타일 클래스
```scss
// Cards
.card { @apply bg-white rounded-2xl shadow-sm border border-gray-100; }
.card-hover { @apply hover:shadow-md transition-shadow; }

// Buttons
.btn-primary { @apply bg-[#FF4D8D] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#ff3080]; }
.btn-secondary { @apply bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl; }

// Layout
.page-container { @apply min-h-screen bg-gray-50 pb-20; }
.content-wrapper { @apply max-w-sm mx-auto px-4 py-6; }
```

---

## 🧩 컴포넌트 아키텍처

### 재사용 가능한 컴포넌트

#### BottomNavigation
- **위치**: `src/components/BottomNavigation.tsx`
- **역할**: 하단 네비게이션 바
- **포함 메뉴**: 홈(/), 메시지, 꿈결제, 프로필
- **특징**: 현재 페이지 하이라이팅, 애니메이션

#### Loading
- **위치**: `src/components/Loading.tsx`
- **역할**: 로딩 스피너
- **스타일**: 브랜드 컬러 적용

#### Header
- **위치**: `src/components/Header.tsx`
- **역할**: 페이지 공통 헤더
- **기능**: 뒤로가기, 제목, 액션 버튼

### Welcome 페이지 전용 컴포넌트
- **Hero.tsx**: 히어로 섹션
- **WhyMeebud.tsx**: 차별화 포인트
- **HowItWorks.tsx**: 작동 방식
- **TrustSafety.tsx**: 신뢰와 안전
- **FAQ.tsx**: 자주 묻는 질문
- **Footer.tsx**: 푸터

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
```

### ESLint 규칙
```javascript
// 주요 규칙
{
  "react/no-unescaped-entities": "error",  // &apos; 사용 필수
  "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  "no-console": ["warn", { "allow": ["warn", "error"] }]
}
```

### Git 워크플로우
```bash
# 표준 커밋 메시지 형식
git commit -m "feat: 새 기능 설명"
git commit -m "fix: 버그 수정 설명"
git commit -m "design: UI/UX 개선"
git commit -m "docs: 문서 업데이트"
```

---

## 📊 현재 구현 현황

### ✅ 완료된 영역 (프론트엔드)
- [x] **Welcome 페이지**: 100% 완성
- [x] **홈 대시보드**: 모바일 최적화 완성
- [x] **인증 시스템**: 기본 로그인/회원가입
- [x] **매칭 UI**: 전체 페이지 구조
- [x] **메시지 UI**: 리스트 및 채팅 인터페이스
- [x] **프로필 관리**: 생성/편집/분석 페이지
- [x] **꿈결제 시스템**: 4단계 완전 구현
- [x] **관리자 페이지**: 대시보드 및 관리 기능
- [x] **공통 컴포넌트**: BottomNavigation, Loading 등
- [x] **반응형 디자인**: 모바일 퍼스트
- [x] **접근성**: WCAG 2.1 AA 준수
- [x] **빌드 시스템**: 에러 없는 안정적 빌드

### 🚧 백엔드 개발 필요 영역
- [ ] **사용자 인증**: JWT 기반 인증 시스템
- [ ] **프로필 관리**: 데이터베이스 CRUD
- [ ] **AI 매칭 알고리즘**: 추천 엔진
- [ ] **실시간 채팅**: WebSocket 또는 Socket.io
- [ ] **결제 시스템**: PG사 연동
- [ ] **파일 업로드**: 프로필 사진 관리
- [ ] **관리자 기능**: 실제 데이터 관리
- [ ] **알림 시스템**: 푸시 알림

---

## 🛣️ 개발 로드맵

### Phase 1: 백엔드 기반 구축 (4-6주)
**목표**: 핵심 백엔드 시스템 구축

#### Week 1-2: 인프라 & 인증
- [ ] 데이터베이스 설계 (PostgreSQL 또는 MongoDB)
- [ ] API 서버 구축 (Node.js + Express 또는 NestJS)
- [ ] JWT 기반 인증 시스템
- [ ] 사용자 모델 및 CRUD API
- [ ] 프로필 데이터 모델

#### Week 3-4: 핵심 기능 API
- [ ] 매칭 알고리즘 v1.0 (기본 필터링)
- [ ] 메시지 시스템 API
- [ ] 파일 업로드 시스템 (AWS S3 또는 Cloudinary)
- [ ] 알림 시스템 기초

#### Week 5-6: 결제 & 관리
- [ ] 결제 시스템 연동 (토스페이먼츠 또는 아임포트)
- [ ] 포인트 시스템
- [ ] 관리자 API
- [ ] 테스트 및 디버깅

### Phase 2: AI 고도화 & 실시간 기능 (3-4주)
**목표**: 차별화 기능 구현

#### Week 7-8: AI 매칭 고도화
- [ ] MBTI 기반 매칭 알고리즘
- [ ] 선호도 학습 시스템
- [ ] 매칭 성사율 최적화
- [ ] A/B 테스트 시스템

#### Week 9-10: 실시간 기능
- [ ] WebSocket 기반 실시간 채팅
- [ ] 실시간 알림
- [ ] 온라인 상태 표시
- [ ] 메시지 읽음 처리

### Phase 3: 고급 기능 & 최적화 (2-3주)
**목표**: 사용자 경험 향상

#### Week 11-12: 고급 기능
- [ ] 프로필 인증 시스템 (신분증, 학력, 직장)
- [ ] 영상 인증 기능
- [ ] 안전 신고 시스템
- [ ] 차단 및 신고 기능

#### Week 13: 최적화 & 런칭 준비
- [ ] 성능 최적화
- [ ] SEO 최적화
- [ ] 모니터링 시스템 (Sentry, Analytics)
- [ ] 베타 테스트 준비

### Phase 4: 베타 런칭 & 피드백 (2-4주)
**목표**: 실제 사용자 피드백 수집

#### Week 14-15: 베타 런칭
- [ ] 베타 사용자 모집 (50-100명)
- [ ] 실사용 테스트
- [ ] 버그 수정 및 개선
- [ ] 사용자 피드백 수집

#### Week 16-17: 개선 및 확장
- [ ] 피드백 기반 개선사항 적용
- [ ] 추가 기능 개발
- [ ] 공식 런칭 준비

---

## 🎯 성공 지표 (KPI)

### 사용자 지표
- **MAU** (Monthly Active Users): 목표 1,000명 (베타)
- **매칭 성사율**: 목표 15% 이상
- **사용자 만족도**: 4.5/5.0 이상
- **재방문율**: 60% 이상

### 비즈니스 지표
- **결제 전환율**: 20% 이상
- **평균 사용자당 매출** (ARPU): 목표 설정 필요
- **사용자 유지율**: 1개월 50%, 3개월 30%

### 기술 지표
- **페이지 로딩 속도**: 2초 이내
- **서버 응답 시간**: 500ms 이내
- **앱 크래시율**: 0.1% 미만

---

## ⚠️ 중요 고려사항

### 보안
- [ ] 개인정보 보호법 준수
- [ ] 데이터 암호화 (전송/저장)
- [ ] API 보안 (Rate Limiting, CORS)
- [ ] 사진 및 개인정보 안전 관리

### 법적 이슈
- [ ] 정보통신망법 준수
- [ ] 개인정보처리방침 작성
- [ ] 이용약관 작성
- [ ] 사업자 등록 및 통신판매업 신고

### 운영
- [ ] 고객센터 운영 방안
- [ ] 신고 처리 프로세스
- [ ] 컨텐츠 관리 정책
- [ ] 24/7 모니터링 시스템

---

## 📞 연락처 & 지원

**개발 관련 문의**
- 이메일: jys13230@gmail.com
- 인스타그램: @meebud_

**사업자 정보**
- 사업자등록번호: 405-06-65006

**기술 지원**
- GitHub: https://github.com/comdbstn/meebud
- Vercel: https://meebud.com

---

*이 문서는 MEE'BUD 프로젝트의 종합적인 개발 가이드입니다. 개발 진행에 따라 지속적으로 업데이트됩니다.*

**마지막 업데이트**: 2025년 9월 24일
**문서 버전**: 1.0
**작성자**: Claude Code