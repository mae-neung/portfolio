export interface ProjectContent {
  kicker: string
  heading: string
  summary: string
  facts: { label: string; value: string }[]
  stage: { label: string; steps: string[] } | null
  sections: {
    label: string
    heading: string
    paragraphs: string[]
    bullets: string[]
    results: { label: string; text: string }[]
    images: { src: string; alt: string }[]
    galleryLabel: string
    links: { href: string; label: string; external: boolean }[]
  }[]
  next: { href: string; label: string; eyebrow: string } | null
}

interface ProjectSource {
  index: string
  year: string
  heading: string
  summary: string
  role: string
  period: string
  stack: string
  scope: string
  intro: string[]
  features: string[]
  technology: string[]
  images?: string[]
  links?: { href: string; label: string; external: boolean }[]
}

function createProject(source: ProjectSource): ProjectContent {
  const images = (source.images ?? []).map((src, index) => ({
    src: `/assets/projects/${src}`,
    alt: `${source.heading} 프로젝트 화면 ${index + 1}`,
  }))

  return {
    kicker: `Project ${source.index} · ${source.year}`,
    heading: source.heading,
    summary: source.summary,
    facts: [
      { label: 'Role', value: source.role },
      { label: 'Period', value: source.period },
      { label: 'Stack', value: source.stack },
      { label: 'Scope', value: source.scope },
    ],
    stage: null,
    sections: [
      {
        label: '01 / Overview',
        heading: '프로젝트 소개',
        paragraphs: source.intro,
        bullets: [],
        results: [],
        images: [],
        galleryLabel: '',
        links: [],
      },
      {
        label: '02 / Features',
        heading: '주요 기능',
        paragraphs: [],
        bullets: source.features,
        results: [],
        images: [],
        galleryLabel: '',
        links: [],
      },
      {
        label: '03 / Technology',
        heading: images.length > 0 ? '기술 스택 및 프로젝트 화면' : '기술 스택',
        paragraphs: [],
        bullets: source.technology,
        results: [],
        images,
        galleryLabel: images.length > 0 ? `${source.heading} 프로젝트 화면` : '',
        links: source.links ?? [],
      },
    ],
    next: null,
  }
}

export const projectContent: Record<string, ProjectContent> = {
  'ai-docs': createProject({
    index: '14',
    year: '2026—Present',
    heading: 'AI 에이전트 문서 관리',
    summary: '역할별 에이전트와 Notion을 연결해 프로젝트 정보를 추출·검증하고, 사용자 승인 후 원본에 반영하는 문서 관리 워크플로우입니다.',
    role: '기획 · 개발 · 운영',
    period: '2026.08 — 현재',
    stack: 'Codex · OpenClaw',
    scope: '문서 분석 · 검증 · 승인 흐름',
    intro: ['여러 문서에 흩어진 프로젝트 정보를 일관된 형식으로 정리하기 위한 문서 관리 워크플로우입니다. 역할별 에이전트가 정보를 분석하고 근거를 확인한 뒤, 사용자 승인을 거쳐 Notion 원본에 반영하도록 구성했습니다.'],
    features: ['요청 내용에 맞는 문서와 프로젝트 컨텍스트 분류', '기술·역할·기간·요약 정보 추출 및 상호 검증', '사용자 승인 이후에만 원본 문서를 갱신하는 반영 절차', '프로젝트 근거를 포트폴리오와 경력 문서에서 재사용하는 구조'],
    technology: ['Codex 기반 역할별 에이전트 워크플로우', 'OpenClaw 기반 작업 연계'],
  }),
  devfive: createProject({
    index: '13',
    year: '2023—2024',
    heading: 'DEVFIVE 사내 공통 컴포넌트 라이브러리',
    summary: 'React와 Next.js 프로젝트에서 반복되는 UI·인증·유틸리티를 재사용할 수 있도록 구성한 사내 공통 라이브러리입니다.',
    role: '라이브러리 설계·개발',
    period: '2023.05 — 2024.05',
    stack: 'React · Next.js',
    scope: '공통 UI · OAuth · Utils · 선택 빌드',
    intro: ['여러 React와 Next.js 프로젝트에서 반복해서 구현하던 UI, 인증, 유틸리티 기능을 하나의 패키지로 제공하는 사내 공통 라이브러리입니다. 프로젝트 환경에 따라 필요한 모듈을 선택해 사용할 수 있도록 구성했습니다.'],
    features: ['Props 기반으로 조합할 수 있는 공통 UI 컴포넌트', 'SNS 로그인과 프로젝트 공통 인증 기능', '반복해서 사용하는 데이터 처리 유틸리티', 'React와 Next.js 환경별 선택 빌드 및 배포'],
    technology: ['React와 Next.js 기반 컴포넌트 및 모듈'],
  }),
  'devfive-landing': createProject({
    index: '02', year: '2022', heading: 'DEVFIVE 랜딩페이지',
    summary: 'SSG·SEO와 Notion 프로젝트 연동을 적용한 DEVFIVE 공식 랜딩페이지입니다.',
    role: '프론트엔드 개발', period: '2022.08 — 2022.09', stack: 'Next.js · TypeScript', scope: '기업 소개 · 프로젝트 연동 · SSG',
    intro: ['DEVFIVE의 회사와 서비스, 수행 프로젝트를 소개하는 공식 랜딩페이지입니다. 정적 사이트 생성 방식과 검색 엔진 최적화를 적용하고, Notion 데이터베이스의 프로젝트 정보가 빌드 과정에서 사이트에 반영되도록 구성했습니다.'],
    features: ['회사 및 서비스 소개 콘텐츠', 'Notion 데이터베이스와 연동한 프로젝트 목록', '빌드 시점의 프로젝트 콘텐츠 생성', '반응형 화면과 검색 엔진 최적화'],
    technology: ['Next.js와 TypeScript 기반 웹사이트', 'SSG 기반 정적 페이지 생성'],
    links: [{ href: 'https://devfive.kr/ko/', label: 'DEVFIVE 홈페이지 ↗', external: true }],
  }),
  'finance-security-intelligence': createProject({
    index: '09', year: '2021', heading: '금융보안원 위험 인텔리전스 관리 시스템',
    summary: '다양한 위협 데이터를 수집·분류하고 실시간 알림·시각화를 제공하는 금융 보안 관리 시스템입니다.',
    role: '프론트엔드 개발자', period: '2021.10 — 2021.12', stack: 'React · TypeScript', scope: '위협 데이터 · 대시보드 · 알림',
    intro: ['금융업계의 보안 담당자가 IP, 파일, 이메일, URL, 도메인 등 다양한 위협 정보를 한곳에서 확인하고 관리할 수 있도록 구축한 위험 인텔리전스 시스템입니다.'],
    features: ['위협 정보의 유형·심각도 분류 및 조회', '위협 현황을 확인하는 대시보드와 통계 시각화', '위협 발생 시 실시간 알림과 모니터링', '위협 이력 관리와 보고서 확인'],
    technology: ['React와 TypeScript 기반 SPA', 'API 기반 위협 데이터 조회와 상태 관리'],
    images: ['finance-security-intelligence-01.webp', 'finance-security-intelligence-02.webp', 'finance-security-intelligence-03.webp'],
  }),
  'hankyu-plant': createProject({
    index: '05', year: '2021', heading: '한큐플랜트', summary: '상품 등록부터 견적·결제·납품 관리까지 지원하는 B2B 식물 거래 플랫폼입니다.',
    role: '프론트엔드 개발', period: '2021.10 — 2021.12', stack: 'React · FastAPI · TypeScript', scope: '상품 · 견적 · 주문 · 납품',
    intro: ['조경회사, 입찰기업, 화훼·관목 농가 등 식물 거래 관계자가 모바일 환경에서 상품을 등록하고 견적을 주고받을 수 있도록 만든 B2B 식물 거래 플랫폼입니다.'],
    features: ['도매 식물 상품 등록과 목록 조회', '직접 입력·이미지·엑셀 파일을 활용한 견적 요청', '판매회원의 견적 제안과 자동 견적함', '주문·결제·거래 내역·납품 캘린더 관리'],
    technology: ['React와 TypeScript 기반 프론트엔드', 'FastAPI 기반 백엔드 API 연동'],
    images: ['hankyu-plant-01.webp', 'hankyu-plant-02.webp'],
  }),
  humansense: createProject({
    index: '03', year: '2021', heading: 'HumanSense', summary: '기업·제품 정보를 직관적으로 전달하도록 SEO와 반응형 UI를 적용한 휴먼센스 공식 홈페이지입니다.',
    role: '프론트엔드 개발', period: '2021.10 — 2021.11', stack: 'Next.js · TypeScript', scope: '기업 소개 · 제품 정보 · 문의',
    intro: ['전기안전 기업 휴먼센스의 브랜드와 사업 분야, 제품 정보를 소개하는 공식 홈페이지입니다. 방문자가 기업의 핵심 기술과 제품을 쉽게 탐색할 수 있도록 정보 구조와 반응형 화면을 구성했습니다.'],
    features: ['회사와 브랜드 소개', '사업 분야 및 제품 목록·상세 정보', '제품 카탈로그와 고객 문의', '반응형 화면과 검색 엔진 최적화'],
    technology: ['Next.js와 TypeScript 기반 웹사이트', '반응형 UI와 SEO 설정'],
  }),
  joara: createProject({
    index: '12', year: '2022', heading: '조아라 웹소설 서비스 리뉴얼', summary: '웹소설 사용자 서비스와 운영 CMS의 핵심 화면·결제·뷰어를 구현한 리뉴얼 프로젝트입니다.',
    role: '프론트엔드 개발자', period: '2022.05 — 2022.09', stack: 'React · TypeScript', scope: '사용자 서비스 · 뷰어 · 결제 · CMS',
    intro: ['웹소설을 탐색하고 읽고 결제하는 사용자 서비스와, 작품·회원·이벤트·결제 정보를 관리하는 운영 CMS를 함께 리뉴얼한 프로젝트입니다.'],
    features: ['로그인·회원가입과 홈·검색·작품 목록', '웹소설 뷰어와 보관함·마이페이지', '이용권 결제와 구매 내역 확인', '회원·작품·이벤트·결제 관리를 위한 운영 CMS', 'React Native WebView 기반 모바일 앱 연동'],
    technology: ['React와 TypeScript 기반 사용자 서비스 및 CMS'],
    images: ['joara-01.webp', 'joara-02.webp'],
  }),
  'matched-admin': createProject({
    index: '06', year: '2022', heading: 'Matched Admin', summary: '기업 심사·사용자·매칭 신청과 운영 통계를 관리하는 B2B 영업 매칭 어드민입니다.',
    role: '프론트엔드 개발', period: '2022.04 — 2022.05', stack: 'React · TypeScript', scope: '기업 · 사용자 · 매칭 · 통계',
    intro: ['기업과 영업 담당자를 연결하는 B2B 매칭 서비스의 운영 정보를 관리하는 어드민 시스템입니다. 약 80개 화면에서 기업 심사, 사용자, 매칭 신청, 운영 현황을 확인하고 처리할 수 있도록 구성했습니다.'],
    features: ['기업·사용자 정보 조회 및 관리', '매칭 신청의 검색·필터·상태 관리', '승인·보류·반려 등 운영 처리', '서비스 현황 대시보드와 통계', '운영자 권한에 따른 메뉴 접근 제어'],
    technology: ['React와 TypeScript 기반 어드민 SPA'],
    images: ['matched-admin-01.webp', 'matched-admin-02.webp', 'matched-admin-03.webp', 'matched-admin-04.webp'],
  }),
  'ncsoft-ncdp': createProject({
    index: '07', year: '2022', heading: 'NCSOFT NCDP', summary: '44개 강연의 온라인 진행과 참가자 접근을 지원한 NCSOFT 사내 개발자 컨퍼런스 사이트입니다.',
    role: '프론트엔드 개발', period: '2022.04 — 2022.05', stack: 'React · TypeScript', scope: '컨퍼런스 · 강연 · 온라인 참여',
    intro: ['2022년 5월 25일부터 26일까지 열린 NCSOFT 사내 개발자 컨퍼런스 NCDP의 강연 정보와 온라인 참여를 지원하는 웹사이트입니다.'],
    features: ['컨퍼런스 일정과 강연 정보 안내', '44개 강연의 목록 및 상세 정보', '온라인 발표 시청과 참가자 접근', 'API 기반 강연 데이터와 반응형 화면'],
    technology: ['React와 TypeScript 기반 컨퍼런스 SPA'],
    images: ['ncsoft-ncdp-01.webp', 'ncsoft-ncdp-02.webp', 'ncsoft-ncdp-03.webp'],
  }),
  planb: createProject({
    index: '04', year: '2022', heading: '플랜비', summary: '일정 기반 출발시간 예측·알림과 주변 주차장 안내를 제공하는 웹·앱 서비스입니다.',
    role: '프론트엔드 개발', period: '2022.03 — 2022.11', stack: 'React · React Native · TypeScript', scope: '일정 · 교통 · 알림 · 주차',
    intro: ['사용자가 약속 일정을 등록하면 교통 상황을 바탕으로 출발 시점을 안내하고, 참여자와 일정 정보를 공유할 수 있는 웹·앱 서비스입니다.'],
    features: ['일정 조회·등록과 참여자 관리', '교통 정보 기반 출발시간 안내와 지각 알림', '알림 설정과 즐겨찾기 순서 변경', '주변 주차장 안내와 비효율 신호등 제보', 'OAuth2 로그인과 WebView·앱 알림 연동'],
    technology: ['React와 TypeScript 기반 웹', 'React Native 기반 앱'],
    images: ['planb-01.webp', 'planb-02.webp', 'planb-03.webp', 'planb-04.webp'],
  }),
  'round-table': createProject({
    index: '10', year: '2023—2024', heading: '라운드 테이블', summary: 'Flutter 앱 유지보수와 React 웹 확장·운영을 담당한 글로벌 한국어 교육 SNS 서비스입니다.',
    role: '프론트엔드 개발자', period: '2023.05 — 2024.01', stack: 'React · Flutter · TypeScript', scope: '한국어 학습 · 커뮤니티 · 운영',
    intro: ['한류 콘텐츠를 통해 한국어를 학습하고 글로벌 사용자와 교류할 수 있도록 구성한 교육 SNS 서비스입니다. Flutter 앱을 유지보수하고 같은 기능을 제공하는 React 웹 서비스를 확장·운영했습니다.'],
    features: ['한류 콘텐츠 기반 한국어 학습', 'AI Tutor와 AI 한국어 말하기', '글로벌 사용자 커뮤니티', '신규 콘텐츠 업데이트와 관리자 기능', '앱·웹 서비스 유지보수와 운영'],
    technology: ['Flutter 기반 모바일 앱', 'React와 TypeScript 기반 웹 서비스', '공통 API를 활용한 앱·웹 기능 연동'],
    images: ['round-table-01.webp', 'round-table-02.webp', 'round-table-03.webp'],
  }),
  'seocho-family-center': createProject({
    index: '08', year: '2023—2024', heading: '서초구가족센터', summary: '아이돌보미 신청·일정·근태·정산 흐름을 통합한 가족센터 서비스 관리 시스템입니다.',
    role: '프론트엔드 개발자', period: '2023.10 — 2024.05', stack: 'React · TypeScript', scope: '돌봄 신청 · 일정 · 근태 · 정산',
    intro: ['서초구·119·손주돌보미 서비스의 신청과 일정 관리부터 운영자의 근태·정산 업무까지 하나의 흐름으로 관리할 수 있도록 구축한 서비스입니다.'],
    features: ['돌봄 서비스 신청과 요청 관리', '이용자·돌보미 일정 확인', '근태와 정산을 포함한 관리자 운영 기능', '로그인과 사용자 상태 관리', '큰 글씨·아이콘·버튼을 적용한 직관적인 화면'],
    technology: ['React와 TypeScript 기반 사용자·관리자 화면'],
    images: ['seocho-family-center-01.webp', 'seocho-family-center-02.webp', 'seocho-family-center-03.webp', 'seocho-family-center-04.webp'],
  }),
  shinhan: createProject({
    index: '01', year: '2021', heading: '2021 신한은행 업적평가', summary: '메타버스·영상·이미지 콘텐츠와 반응형 UI를 구현한 신한은행 사내 업적평가 이벤트 웹페이지입니다.',
    role: '프론트엔드 개발', period: '2021.11 — 2021.12', stack: 'React · TypeScript', scope: '이벤트 콘텐츠 · 인증 · 반응형',
    intro: ['신한은행의 연말 업적평가를 메타버스, 영상, 이미지 등 다양한 콘텐츠로 전달하는 사내 이벤트 웹페이지입니다. 직원이 필요한 콘텐츠를 쉽게 탐색할 수 있도록 탭 구조와 반응형 화면을 구성했습니다.'],
    features: ['메타버스·업평 갤러리·업평 TV 콘텐츠 탭', '로그인과 사용자 인증', 'API 기반 이벤트 데이터 조회', '비동기 데이터 로딩 상태 UI', '모바일과 데스크톱 반응형 화면'],
    technology: ['React와 TypeScript 기반 SPA'],
    images: ['shinhan-01.png'],
  }),
  'the-bridge': createProject({
    index: '11', year: '2023—2024', heading: '더 브릿지', summary: '기부 서비스 React 리뉴얼과 외부 PG 구간의 Google Analytics 전환 추적을 구현한 비영리단체 웹사이트입니다.',
    role: '프론트엔드 개발자', period: '2023.09 — 2024.05', stack: 'React · TypeScript', scope: '콘텐츠 · 기부 · 결제 · 전환 분석',
    intro: ['비영리단체 더 브릿지의 미션과 사회적 비즈니스 콘텐츠를 소개하고, 캠페인 탐색부터 외부 결제까지 기부 흐름을 제공하는 공식 웹사이트 리뉴얼 프로젝트입니다.'],
    features: ['단체 소개와 사회적 비즈니스 콘텐츠', '운영 콘텐츠를 관리하는 CMS', '캠페인 탐색과 외부 PG 기부 결제', '외부 PG 구간을 포함한 Google Analytics 전환 추적', '로그인과 사용자 상태 관리'],
    technology: ['React와 TypeScript 기반 웹사이트'],
    images: ['the-bridge-01.webp', 'the-bridge-02.webp', 'the-bridge-03.webp'],
  }),
  'vine-international-academy': createProject({
    index: '14', year: '2021—2022', heading: 'Vine International Academy', summary: '국제학교의 교육과정과 입학 정보를 사용자 친화적인 구조와 반응형 UI로 제공하는 공식 웹사이트입니다.',
    role: '프론트엔드 개발', period: '2021.11 — 2022.01', stack: 'React · TypeScript', scope: '학교 소개 · 교육과정 · 입학 안내 · 반응형',
    intro: ['VIA 국제학교의 브랜드 가치와 교육 전문성을 온라인에서 전달하는 공식 웹사이트입니다. 미국 대학 진학 준비를 위한 커리큘럼과 프로그램, 입학 정보를 학부모와 학생이 쉽게 탐색할 수 있도록 구성했습니다.'],
    features: ['학교와 교육 철학 소개', '유치원·초등·중등·고등 과정별 교육 프로그램 안내', '입학 정보와 학교 커뮤니티 콘텐츠 제공', '컬러·타이포그래피·이미지를 활용한 브랜드 아이덴티티 표현', '데스크톱과 모바일 환경에 대응하는 반응형 화면'],
    technology: ['React와 TypeScript 기반 웹사이트', '학부모와 학생의 정보 탐색 흐름을 고려한 반응형 UI'],
    images: ['vine-international-academy-01.webp', 'vine-international-academy-02.webp', 'vine-international-academy-03.webp'],
  }),
  yourtest: createProject({
    index: '15', year: '2025', heading: '유어테스트', summary: '회원가입 없이 다양한 심리·성향 테스트를 이용하고 결과를 공유할 수 있는 종합 테스트 플랫폼입니다.',
    role: '프론트엔드 개발', period: '2025.06 — 2025.08', stack: 'Next.js · TypeScript', scope: '테스트 참여 · 결과 · 공유 · 관리자 화면',
    intro: ['성격 유형과 개인적 취향, 가치관 등을 알아볼 수 있는 다양한 테스트 콘텐츠를 제공하는 종합 유틸리티 플랫폼입니다. 회원가입 없이 바로 참여할 수 있으며, 직관적인 화면을 통해 자기 탐색과 엔터테인먼트를 함께 경험할 수 있도록 구성했습니다.'],
    features: ['회원가입 없이 바로 참여할 수 있는 심리·성향 테스트', '질문·응답·결과 매칭과 점수 계산을 통한 유형별 결과 제공', '밸런스 게임, 유형 분석, 캐릭터 매칭 등 다양한 테스트 방식', '결과 이미지 생성과 SNS 공유 인터페이스', '테스트 등록과 결과 현황·이용 통계를 확인하는 관리자 화면'],
    technology: ['Next.js와 TypeScript 기반 웹사이트', '테스트 참여 흐름과 결과 공유에 최적화된 반응형 UI'],
    images: ['yourtest-01.webp', 'yourtest-02.webp', 'yourtest-03.webp'],
    links: [{ href: 'https://yourtest.kr/', label: '유어테스트 바로가기 ↗', external: true }],
  }),
}
