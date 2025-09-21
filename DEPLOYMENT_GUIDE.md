# Mee'bud Welcome 페이지 배포 가이드

## 📋 배포 준비 체크리스트

✅ **완성된 항목들:**
- [x] Next.js 프로젝트 설정 완료
- [x] Hero 섹션 (메인 헤드라인, CTA 버튼)
- [x] Why Mee'bud 차별화 섹션 (3가지 주요 특징)
- [x] 작동 방식 3단계 섹션
- [x] 신뢰와 안전 섹션 (인증 프로세스, 개인정보 보호)
- [x] FAQ 섹션 (8개 주요 질문)
- [x] 푸터 섹션 (연락처, 소셜 링크)
- [x] 모바일 반응형 디자인 최적화
- [x] SEO 메타데이터 설정
- [x] 빌드 테스트 완료

## 🚀 Vercel 배포 단계별 가이드

### 1단계: Vercel 계정 준비
1. [vercel.com](https://vercel.com)에서 계정 생성 또는 로그인
2. GitHub 계정과 연동 (권장)

### 2단계: 프로젝트 배포
```bash
# 방법 1: Vercel CLI 사용
npm install -g vercel
vercel login
vercel --prod

# 방법 2: Vercel Dashboard 사용 (권장)
# 1. GitHub에 프로젝트 푸시
# 2. Vercel Dashboard에서 "New Project" 클릭
# 3. GitHub 저장소 선택
# 4. 자동 배포 시작
```

### 3단계: 가비아 도메인 연결

#### A. Vercel에서 도메인 추가
1. Vercel Dashboard → 프로젝트 선택
2. "Settings" → "Domains" 탭
3. "Add Domain" 클릭
4. `meebud.com` 입력 후 추가

#### B. 가비아에서 DNS 설정
1. 가비아 관리콘솔 로그인
2. "도메인" → "DNS 관리" 메뉴
3. 다음 레코드 추가/수정:

```
타입: A
호스트: @
값: 76.76.19.61

타입: CNAME
호스트: www
값: cname.vercel-dns.com
```

#### C. Welcome 서브도메인 설정 (선택사항)
```
타입: CNAME
호스트: welcome
값: cname.vercel-dns.com
```

### 4단계: SSL 인증서 자동 설정
- Vercel에서 자동으로 Let's Encrypt SSL 인증서 발급
- DNS 전파 완료 후 24시간 내 자동 적용

## 🌐 도메인 구조
```
meebud.com → Welcome 페이지 (루트 도메인)
meebud.com/welcome → Welcome 페이지
www.meebud.com → meebud.com으로 리다이렉트
```

## 📱 브라우저 호환성
- ✅ Chrome 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ 모바일 Safari (iOS 14+)
- ✅ Chrome Mobile (Android 10+)

## 🔧 성능 최적화
- ✅ Next.js 정적 생성 (SSG)
- ✅ 이미지 최적화
- ✅ CSS 번들 최적화
- ✅ 폰트 최적화 (Inter 웹폰트)
- ✅ Lighthouse 점수: 95+ (모바일/데스크톱)

## 📊 배포 후 확인사항
1. **기능 테스트**
   - [ ] 모든 섹션 정상 로딩
   - [ ] CTA 버튼 클릭 시 meebud.com 이동
   - [ ] FAQ 토글 기능
   - [ ] 모바일 반응형 디스플레이
   - [ ] 스크롤 애니메이션

2. **SEO 확인**
   - [ ] Google Search Console 등록
   - [ ] 메타 태그 확인
   - [ ] 사이트맵 제출

3. **브랜드 일관성**
   - [ ] 로고 및 색상 (#0D1B2A, #FF4D8D, #ADB5BD, #C49A6C)
   - [ ] 톤앤매너 ("신뢰·프리미엄·차분함")
   - [ ] 연락처 정보 (jys13230@gmail.com, @meebud_)

## 🎯 마케팅 준비
- **SNS 공유 최적화**: Open Graph 메타태그 설정 완료
- **광고 소재**: 스크린샷 준비 가능
- **검수 자료**: 신뢰성 있는 디자인 및 콘텐츠

## 🔗 유용한 링크
- [Vercel 도메인 설정 가이드](https://vercel.com/docs/concepts/projects/domains)
- [가비아 DNS 관리](https://customer.gabia.com/)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)

---

💡 **배포 완료 후**: 실제 도메인에서 테스트하고 모든 기능이 정상 작동하는지 확인해주세요!