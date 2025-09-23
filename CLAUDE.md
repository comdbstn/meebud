# MEE'BUD 프로젝트 개발 가이드 - Claude Code

## 📋 프로젝트 개요

**프로젝트명**: MEE'BUD (미버드)
**도메인**: https://meebud.com
**유형**: 인증·AI·성사형 후불제 매칭 서비스
**기술 스택**: Next.js 15.5.3, React 19.1.0, TypeScript, Tailwind CSS 4.0

## 🏗️ 프로젝트 구조

```
meebud-welcome/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 메인 대시보드 (로그인 후)
│   │   ├── welcome/page.tsx   # Welcome 랜딩 페이지
│   │   ├── login/page.tsx     # 로그인 페이지
│   │   ├── signup/page.tsx    # 회원가입 페이지
│   │   ├── matching/          # 매칭 관련 페이지
│   │   ├── profile/           # 프로필 관련 페이지
│   │   └── messages/          # 메시지 관련 페이지
│   └── components/            # 재사용 가능한 컴포넌트
│       ├── Hero.tsx          # Welcome 페이지 히어로 섹션
│       ├── WhyMeebud.tsx     # 차별화 3가지 섹션
│       ├── HowItWorks.tsx    # 3단계 작동방식 섹션
│       ├── TrustSafety.tsx   # 신뢰와 안전 섹션
│       ├── FAQ.tsx           # 자주 묻는 질문
│       └── Footer.tsx        # 푸터 (사업자등록번호 포함)
├── public/                    # 정적 파일
├── package.json              # 의존성 및 스크립트
├── next.config.ts            # Next.js 설정
├── eslint.config.mjs         # ESLint 설정
├── tsconfig.json             # TypeScript 설정
├── vercel.json               # Vercel 배포 설정
└── DEPLOYMENT_GUIDE.md       # 배포 가이드
```

## 🎯 핵심 기능

### 1. Welcome 페이지 (서비스 소개)
- **Hero 섹션**: 기획서 원본 헤드라인 "가벼운 스와이프는 잊으세요. Mee'bud는 인증·AI·성사형 후불제로 '진짜'를 잇습니다."
- **Why Mee'bud**: 차별화 3가지
  - 🛡 다중 인증 (신분·학력·직장·건강)
  - 🤖 AI 이상형 매칭 (MBTI·가치관·취향 기반 추천)
  - 💳 성사형 후불제 (성사된 연결에만 결제)
- **How It Works**: 3단계 프로세스
- **Trust & Safety**: 인증 프로세스 및 안전 정책
- **FAQ**: 주요 질문 및 답변

### 2. Main 서비스 (프론트엔드)
- **온보딩**: 프로필 작성, 사진 업로드, 질문지, 인증
- **매칭 홈**: AI 추천 후보 확인 및 수락/거절
- **성사 화면**: 매칭 성공 시 결제 유도
- **알림함**: 매칭, 인증, 결제 관련 알림
- **마이페이지**: 프로필 관리, 인증 현황, 매칭 기록

## 🚀 개발 및 배포 환경

### GitHub 저장소
- **URL**: https://github.com/comdbstn/meebud
- **권한**: comdbstn (admin 권한)
- **브랜치 보호**: 설정되지 않음 (개발 단계)
- **Security**: Secret scanning, Push protection 활성화

### Vercel 배포
- **프로젝트 ID**: prj_sccxIPGtXWlt8eNZ9Emjpr89nEi9
- **도메인**: meebud.com (Third Party DNS)
- **환경 변수**: 현재 없음
- **빌드 설정**:
  - 빌드 명령어: `npm run build`
  - 출력 디렉토리: `.next`
  - 프레임워크: Next.js
  - 함수 최대 실행시간: 30초

### 빌드 및 린팅
```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 코드 품질 검사
npm run lint
```

## ⚠️ 주요 개발 주의사항

### 1. ESLint 규칙 준수
- **React 규칙**: `react/no-unescaped-entities` 엄격 적용
  - 작은따옴표(') 사용 시 반드시 `&apos;` 사용
  - 큰따옴표(") 사용 시 반드시 `&quot;` 사용
- **Import 순서**: Next.js 모듈 → 외부 라이브러리 → 내부 컴포넌트
- **Console 로그**: `console.log` 사용 금지, `console.warn`/`console.error`만 허용

### 2. 기획서 준수
- **헤드라인**: 정확한 카피 사용 필수
- **차별화 포인트**: 3가지 핵심 기능 정확히 표현
- **3단계 프로세스**: 기획서 내용과 일치 필요
- **사업자등록번호**: 405-06-65006 푸터에 표시

### 3. 성능 최적화
- Next.js 15 + Turbopack 사용
- 정적 생성(SSG) 활용
- 이미지 최적화 적용
- 모바일 반응형 디자인

## 🔧 개발 명령어

```bash
# 프로젝트 설정
npm install

# 로컬 개발
npm run dev

# 프로덕션 빌드 테스트
npm run build

# 코드 품질 검사
npm run lint

# 자동 수정 가능한 ESLint 오류 수정
npm run lint -- --fix

# Vercel 배포
vercel --prod

# Git 작업 (일반적인 플로우)
git add .
git commit -m "feat: 기능 설명"
git push
```

## 📊 현재 상태 (2025년 9월 23일 기준)

### ✅ 완성된 기능
- [x] Welcome 페이지 전체 섹션 구현
- [x] Main 서비스 기본 페이지 구조
- [x] 모바일 반응형 디자인
- [x] SEO 메타데이터 설정
- [x] Vercel 자동 배포 설정
- [x] 도메인 연결 (meebud.com)
- [x] ESLint 설정 최적화

### 🚧 개발 진행 상황
- **현재 단계**: 디자인 수정 및 프론트엔드 완성
- **다음 단계**: 백엔드 개발 및 실제 기능 구현

### 🐛 알려진 이슈
- 일부 페이지에서 `console.log` 사용 (개발용, 프로덕션에서 제거 예정)
- Welcome 페이지와 메인 서비스 간 UI/UX 일관성 개선 필요

## 🎨 디자인 가이드라인

### 색상 팔레트
- **Primary**: #FF4D8D (핑크)
- **Secondary**: #0D1B2A (네이비)
- **Accent**: #ADB5BD (그레이)
- **Supporting**: #C49A6C (골드)

### 타이포그래피
- **헤드라인**: 볼드, 큰 사이즈
- **서브텍스트**: 미디움, 적절한 line-height
- **바디텍스트**: 레귤러, 가독성 우선

### 브랜딩
- **톤앤매너**: 신뢰, 프리미엄, 차분함
- **연락처**: jys13230@gmail.com, @meebud_
- **사업자등록번호**: 405-06-65006

## 🔮 향후 개발 계획

1. **백엔드 구현** (예정)
   - 사용자 인증 시스템
   - AI 매칭 알고리즘
   - 결제 시스템
   - 관리자 패널

2. **추가 기능** (예정)
   - 실시간 알림 시스템
   - 인증서 업로드 및 검수
   - 채팅 기능
   - 한일 크로스보더 매칭

---

💡 **중요**: 이 문서는 Claude Code가 지속적인 개발을 위해 작성한 가이드입니다. 변경사항이 있을 때마다 업데이트해 주세요.