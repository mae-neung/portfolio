export interface PortfolioRoute {
  path: string
  source: string
  title: string
  description: string
  bodyClasses: string
  mainClasses: string
  footerLabel: string
}

export const portfolioRoutes: PortfolioRoute[] = [
  {
    "path": "/",
    "source": "src/content/index.html",
    "title": "이강욱 — Frontend Developer",
    "description": "React·Next.js 프론트엔드 개발자 이강욱의 프로젝트 포트폴리오",
    "bodyClasses": "",
    "mainClasses": "",
    "footerLabel": "React · Next.js · TypeScript"
  },
  {
    "path": "/projects/",
    "source": "src/content/projects/index.html",
    "title": "Project Archive — 이강욱",
    "description": "이강욱이 참여한 프론트엔드 프로젝트 아카이브",
    "bodyClasses": "detail-page project-index-page",
    "mainClasses": "project-archive",
    "footerLabel": "13 Projects"
  },
  {
    "path": "/projects/ai-docs/",
    "source": "src/content/projects/ai-docs/index.html",
    "title": "AI 에이전트 문서 관리 — 이강욱",
    "description": "Codex와 Notion API를 연결한 승인 기반 AI 문서 관리 자동화 프로젝트",
    "bodyClasses": "detail-page",
    "mainClasses": "detail-main",
    "footerLabel": "Case Study 04 / 04"
  },
  {
    "path": "/projects/devfive/",
    "source": "src/content/projects/devfive/index.html",
    "title": "DEVFIVE 공통 라이브러리 — 이강욱",
    "description": "React·Next.js 공통 컴포넌트 라이브러리 설계·개발 프로젝트",
    "bodyClasses": "detail-page",
    "mainClasses": "detail-main",
    "footerLabel": "Case Study 01 / 04"
  },
  {
    "path": "/projects/devfive-landing/",
    "source": "src/content/projects/devfive-landing/index.html",
    "title": "DEVFIVE 랜딩페이지 — 이강욱",
    "description": "SSG·SEO와 Notion 프로젝트 연동을 적용한 DEVFIVE 공식 랜딩페이지",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 02 / 13"
  },
  {
    "path": "/projects/finance-security-intelligence/",
    "source": "src/content/projects/finance-security-intelligence/index.html",
    "title": "금융보안원 위험 인텔리전스 관리 시스템 — 이강욱",
    "description": "다양한 위협 데이터를 수집·분류하고 실시간 알림·시각화를 제공하는 금융 보안 관리 시스템",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 09 / 13"
  },
  {
    "path": "/projects/hankyu-plant/",
    "source": "src/content/projects/hankyu-plant/index.html",
    "title": "한큐플랜트 — 이강욱",
    "description": "상품 등록부터 견적·결제·납품 관리까지 지원하는 B2B 식물 거래 플랫폼",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 05 / 13"
  },
  {
    "path": "/projects/humansense/",
    "source": "src/content/projects/humansense/index.html",
    "title": "HumanSense — 이강욱",
    "description": "기업·제품 정보를 직관적으로 전달하도록 SEO와 반응형 UI를 적용한 휴먼센스 공식 홈페이지",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 03 / 13"
  },
  {
    "path": "/projects/joara/",
    "source": "src/content/projects/joara/index.html",
    "title": "조아라 서비스 리뉴얼 — 이강욱",
    "description": "조아라 웹소설 사용자 서비스와 운영 CMS 리뉴얼 프로젝트",
    "bodyClasses": "detail-page",
    "mainClasses": "detail-main",
    "footerLabel": "Case Study 02 / 04"
  },
  {
    "path": "/projects/matched-admin/",
    "source": "src/content/projects/matched-admin/index.html",
    "title": "Matched Admin — 이강욱",
    "description": "기업 심사·사용자·매칭 신청과 운영 통계를 관리하는 B2B 영업 매칭 어드민",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 06 / 13"
  },
  {
    "path": "/projects/ncsoft-ncdp/",
    "source": "src/content/projects/ncsoft-ncdp/index.html",
    "title": "NCSOFT NCDP — 이강욱",
    "description": "44개 강연의 온라인 진행과 참가자 접근을 지원한 NCSOFT 사내 개발자 컨퍼런스 사이트",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 07 / 13"
  },
  {
    "path": "/projects/planb/",
    "source": "src/content/projects/planb/index.html",
    "title": "플랜비 — 이강욱",
    "description": "일정 기반 출발시간 예측·알림과 주변 주차장 안내를 제공하는 웹·앱 서비스",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 04 / 13"
  },
  {
    "path": "/projects/round-table/",
    "source": "src/content/projects/round-table/index.html",
    "title": "라운드 테이블 — 이강욱",
    "description": "Flutter 앱 유지보수와 Next.js 웹 확장·운영을 담당한 글로벌 한국어 교육 SNS 서비스",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 10 / 13"
  },
  {
    "path": "/projects/seocho-family-center/",
    "source": "src/content/projects/seocho-family-center/index.html",
    "title": "서초구가족센터 — 이강욱",
    "description": "아이돌보미 신청·일정·근태·정산 흐름을 통합한 가족센터 서비스 관리 시스템",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 08 / 13"
  },
  {
    "path": "/projects/shinhan/",
    "source": "src/content/projects/shinhan/index.html",
    "title": "2021 신한은행 업적평가 — 이강욱",
    "description": "메타버스·영상·이미지 콘텐츠와 반응형 UI를 구현한 신한은행 사내 업적평가 이벤트 웹페이지",
    "bodyClasses": "detail-page project-brief-page project-case-page",
    "mainClasses": "detail-main",
    "footerLabel": "Project 01 / 13"
  },
  {
    "path": "/projects/the-bridge/",
    "source": "src/content/projects/the-bridge/index.html",
    "title": "더 브릿지 기부 플랫폼 — 이강욱",
    "description": "더 브릿지 기부 플랫폼 React 리뉴얼과 외부 PG 전환 추적 프로젝트",
    "bodyClasses": "detail-page",
    "mainClasses": "detail-main",
    "footerLabel": "Case Study 03 / 04"
  }
]

