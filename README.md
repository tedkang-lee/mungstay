# 50K 반응형 웹사이트

합리적인 가격의 전문 서비스를 제공하는 50K의 반응형 웹사이트입니다.

## 📋 프로젝트 개요

- **컬러 스킴**: 노란색(#FFB800), 다크그레이(#2C2C2C), 화이트
- **폰트**: Pretendard
- **디자인**: 모던하고 미니멀한 imweb 스타일
- **기술 스택**: HTML5, CSS3, Vanilla JavaScript

## ✨ 주요 기능

### 1. 완전한 반응형 디자인
- 📱 모바일 (< 768px)
- 📱 태블릿 (768px - 1024px)
- 💻 데스크톱 (> 1024px)

### 2. 인터랙티브 요소
- 햄버거 메뉴 (모바일)
- 부드러운 스크롤
- 스크롤 애니메이션
- 활성 네비게이션 하이라이트
- 호버 효과

### 3. 섹션 구성
- 히어로 섹션
- 소개 (4개 카드)
- 서비스 (6개 서비스)
- 포트폴리오 (4개 프로젝트)
- 뉴스 (3개 포스트)
- 상담 문의 폼
- 푸터

## 🚀 시작하기

### 방법 1: 직접 열기
```bash
# 브라우저로 index.html 파일 열기
open index.html
```

### 방법 2: 로컬 서버 실행 (권장)
```bash
# Python 3가 설치되어 있는 경우
python3 -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

### 방법 3: Live Server (VS Code 사용 시)
1. VS Code에서 프로젝트 폴더 열기
2. Live Server 확장 프로그램 설치
3. index.html에서 우클릭 > "Open with Live Server"

## 📁 파일 구조

```
50k-responsive/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 파일
└── README.md           # 프로젝트 문서
```

## 🎨 디자인 시스템

### 컬러 팔레트
```css
--primary-color: #FFB800    /* 노란색 (주요 강조) */
--dark-gray: #2C2C2C        /* 다크 그레이 (텍스트, 배경) */
--white: #FFFFFF            /* 화이트 (배경) */
--light-gray: #F5F5F5       /* 라이트 그레이 (섹션 배경) */
--text-gray: #666666        /* 텍스트 그레이 */
--border-color: #E0E0E0     /* 보더 */
```

### 타이포그래피
- **폰트 패밀리**: Pretendard
- **제목 (H1)**: 56px / 700
- **섹션 제목 (H2)**: 42px / 700
- **카드 제목 (H3)**: 20-24px / 700
- **본문**: 15-18px / 400-500

### 간격
- **섹션 패딩 (데스크톱)**: 100px 0
- **섹션 패딩 (모바일)**: 60px 0
- **카드 간격**: 30px
- **컨테이너 최대 너비**: 1480px

## 📱 반응형 브레이크포인트

```css
/* 소형 모바일 */
@media (max-width: 480px) { ... }

/* 모바일 */
@media (max-width: 768px) { ... }

/* 태블릿 */
@media (max-width: 1024px) { ... }
```

## 🔧 커스터마이징

### 1. 색상 변경
`style.css` 파일 상단의 CSS 변수를 수정:
```css
:root {
    --primary-color: #YOUR_COLOR;
    --dark-gray: #YOUR_COLOR;
}
```

### 2. 콘텐츠 수정
`index.html` 파일에서 해당 섹션의 텍스트를 수정:
- 회사명, 슬로건
- 서비스 항목
- 포트폴리오 내용
- 연락처 정보

### 3. 이미지 추가
현재는 그라디언트 placeholder를 사용하고 있습니다.
실제 이미지를 추가하려면:

```html
<!-- 기존 -->
<div class="service-placeholder" style="background: ..."></div>

<!-- 변경 -->
<img src="your-image.jpg" alt="설명">
```

## 🌐 배포

### GitHub Pages
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings > Pages에서 배포 설정

### Netlify / Vercel
1. 폴더를 드래그 앤 드롭
2. 자동 배포 완료

## 📝 폼 연동

현재 상담 폼은 콘솔에 데이터를 출력합니다.
실제 서버나 서비스와 연동하려면 `script.js`의 폼 제출 부분을 수정:

```javascript
// 예: 이메일 서비스 연동
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

추천 서비스:
- Formspree
- EmailJS
- Google Forms
- 직접 백엔드 구축

## 🎯 최적화 팁

### 성능
- 이미지 최적화 (WebP 포맷)
- CSS/JS 압축
- CDN 사용

### SEO
- meta 태그 추가
- alt 속성 작성
- sitemap.xml 생성

### 접근성
- ARIA 라벨 추가
- 키보드 네비게이션 지원
- 색상 대비 확인

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 💡 지원

문제가 발생하거나 질문이 있으시면:
- 📧 contact@50k.click
- 📞 02-1234-5678

---

© 2026 50K. All rights reserved.
