// ===== 햄버거 메뉴 토글 =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

// 햄버거 메뉴 클릭
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// 메뉴 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===== 스크롤 시 헤더 스타일 변경 =====
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // 스크롤 다운 시 헤더에 그림자 추가
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// ===== 활성 네비게이션 링크 =====
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = '#FFB800';
            } else {
                navLink.style.color = '';
            }
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ===== 부드러운 스크롤 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // 해시만 있는 링크 제외 (예: href="#")
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== 폼 제출 처리 =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 폼 데이터 수집
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // 개인정보 동의 확인
        if (!data.privacy) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            return;
        }

        // 여기에 실제 폼 제출 로직 추가 (예: fetch API)
        console.log('폼 데이터:', data);

        // 성공 메시지
        alert('문의가 성공적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.');

        // 폼 초기화
        contactForm.reset();
    });
}

// ===== 스크롤 애니메이션 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 적용할 요소들
const animateElements = document.querySelectorAll(
    '.about-card, .service-card, .portfolio-item, .news-card'
);

animateElements.forEach((el, index) => {
    // 초기 상태 설정
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

    // 관찰 시작
    observer.observe(el);
});

// ===== 이미지 로드 시뮬레이션 (실제 이미지 대신 placeholder 사용) =====
const placeholders = document.querySelectorAll('.service-placeholder, .portfolio-placeholder, .news-placeholder');

placeholders.forEach(placeholder => {
    // 각 placeholder에 아이콘이나 텍스트 추가 (선택사항)
    const parentCard = placeholder.closest('.service-card, .portfolio-item, .news-card');
    if (parentCard) {
        placeholder.style.transition = 'transform 0.3s ease';
    }
});

// ===== 반응형 그리드 최적화 =====
function optimizeGrid() {
    const width = window.innerWidth;
    const grids = document.querySelectorAll('.services-grid, .portfolio-grid, .news-grid');

    grids.forEach(grid => {
        if (width <= 480) {
            grid.style.gap = '20px';
        } else if (width <= 768) {
            grid.style.gap = '25px';
        } else {
            grid.style.gap = '30px';
        }
    });
}

window.addEventListener('resize', optimizeGrid);
optimizeGrid();

// ===== 페이지 로드 시 실행 =====
window.addEventListener('load', () => {
    // 초기 네비게이션 하이라이트
    highlightNav();

    // 히어로 섹션 애니메이션
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ===== 성능 최적화: 스크롤 이벤트 쓰로틀링 =====
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 스크롤 이벤트에 쓰로틀링 적용
const throttledScroll = throttle(() => {
    highlightNav();
}, 100);

window.addEventListener('scroll', throttledScroll);

// ===== 개인정보 처리방침 모달 (선택사항) =====
// 추후 필요 시 구현
