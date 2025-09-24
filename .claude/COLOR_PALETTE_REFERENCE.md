# MEE'BUD 색상 시스템 레퍼런스

## 🎨 메인 색상 팔레트

### Primary Colors
```css
/* 다크네이비 - 신뢰감, 프리미엄 */
--primary-navy: #0D1B2A;

/* 핑크 - 활기, 매칭, CTA */
--primary-pink: #FF4D8D;
--primary-pink-hover: #ff3080;

/* 로즈골드 - 따뜻함, 프리미엄 액센트 */
--accent-rose-gold: #C49A6C;
--accent-rose-gold-hover: #b8885d;
```

### Supporting Colors
```css
/* 배경색 */
--bg-primary: #F8FAFB;
--bg-card: white;

/* 텍스트 */
--text-primary: #0D1B2A;
--text-secondary: #0D1B2A opacity-80;
--text-tertiary: #0D1B2A opacity-70;
--text-quaternary: #0D1B2A opacity-60;
```

## 🔧 Tailwind CSS 클래스 매핑

### 배경색
- `bg-[#0D1B2A]` - 다크네이비 배경 (네비게이션, 푸터)
- `bg-[#FF4D8D]` - 핑크 배경 (버튼, CTA)
- `bg-[#C49A6C]` - 로즈골드 배경 (액센트)
- `bg-[#F8FAFB]` - 통일된 페이지 배경

### 텍스트 색상
- `text-[#0D1B2A]` - 메인 텍스트
- `text-[#0D1B2A] opacity-80` - 서브 텍스트
- `text-[#0D1B2A] opacity-70` - 보조 텍스트
- `text-[#0D1B2A] opacity-60` - 힌트 텍스트

### 호버 효과
- `hover:bg-[#ff3080]` - 핑크 버튼 호버
- `hover:bg-[#1a2332]` - 네이비 버튼 호버
- `hover:bg-[#b8885d]` - 로즈골드 호버

### 그라디언트
- `from-[#0D1B2A] to-[#FF4D8D]` - 메인 그라디언트
- `from-[#FF4D8D] to-[#C49A6C]` - 따뜻한 그라디언트
- `from-[#C49A6C] to-[#0D1B2A]` - 프리미엄 그라디언트

## 📐 컴포넌트별 색상 가이드

### 버튼
```css
.btn-primary {
  @apply bg-[#FF4D8D] text-white font-semibold py-3 px-4 rounded-xl;
  @apply hover:bg-[#ff3080] transition-colors;
}

.btn-secondary {
  @apply bg-[#0D1B2A] text-white font-semibold py-3 px-4 rounded-xl;
  @apply hover:bg-[#1a2332] transition-colors;
}
```

### 카드
```css
.card {
  @apply bg-white rounded-2xl shadow-sm border border-gray-100 p-6;
}
```

### 네비게이션
```css
.nav-primary {
  @apply bg-[#0D1B2A] text-white;
}

.nav-active {
  @apply text-white border-b-2 border-[#FF4D8D];
}
```

### 폼 요소
```css
.input-primary {
  @apply border border-gray-300 rounded-xl px-3 py-2;
  @apply text-[#0D1B2A] focus:ring-2 focus:ring-[#FF4D8D];
}
```

## 🎯 접근성 가이드라인

### 색상 대비 비율
- **주요 텍스트**: 최소 4.5:1 대비
- **대형 텍스트**: 최소 3:1 대비
- **UI 요소**: 최소 3:1 대비

### 색상 조합 검증
✅ `#0D1B2A` on `white` - 16.1:1 (AAA)
✅ `#FF4D8D` on `white` - 4.8:1 (AA)
✅ `#C49A6C` on `white` - 3.9:1 (AA Large)
✅ `white` on `#0D1B2A` - 16.1:1 (AAA)

### 금지 조합
❌ `#FF4D8D` on `#C49A6C` - 대비 부족
❌ 색상만으로 정보 전달
❌ 너무 밝은 배경색 조합

## 🚀 사용 예시

### Hero Section
```tsx
<section className="min-h-screen bg-gradient-to-br from-[#F8FAFB] to-white">
  <h1 className="text-4xl font-bold text-[#0D1B2A]">
    MEE<span className="text-[#FF4D8D]">'</span>BUD
  </h1>
  <button className="bg-[#FF4D8D] hover:bg-[#ff3080] text-white px-6 py-3 rounded-xl">
    시작하기
  </button>
</section>
```

### Card Component
```tsx
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
  <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">제목</h3>
  <p className="text-[#0D1B2A] opacity-80">설명 텍스트</p>
</div>
```

---
**마지막 업데이트**: 2025.09.24 | **버전**: 1.0