// Migrated verbatim from the original portfolio case study fragments.
export interface ProjectContent {
  kicker: string
  heading: string
  summary: string
  facts: { label: string; value: string }[]
  stage: { label: string; steps: string[] } | null
  sections: { label: string; heading: string; paragraphs: string[]; bullets: string[]; results: { label: string; text: string }[]; images: { src: string; alt: string }[]; galleryLabel: string; links: { href: string; label: string; external: boolean }[] }[]
  next: { href: string; label: string; eyebrow: string } | null
}

export const projectContent: Record<string, ProjectContent> = {
  "ai-docs": {
    "kicker": "04 / Automation · 2026—Present",
    "heading": "AI의 속도에 검증을 더하다.",
    "summary": "역할별 에이전트와 Notion을 연결해 프로젝트 정보를 추출·검증하고, 사용자 승인 후에만 원본에 반영하는 문서 관리 흐름을 설계했습니다.",
    "facts": [
      {
        "label": "Role",
        "value": "기획 · 개발 · 운영"
      },
      {
        "label": "Period",
        "value": "2026.08 — 현재"
      },
      {
        "label": "Stack",
        "value": "Codex · OpenClaw · Notion API"
      },
      {
        "label": "Scope",
        "value": "Routing · Validation · Approval"
      }
    ],
    "stage": {
      "label": "AI 에이전트가 문서를 분석하고 승인 후 반영하는 흐름을 표현한 다이어그램",
      "steps": [
        "CONTEXT ROUTING",
        "VERIFY EVIDENCE",
        "USER APPROVAL",
        "NOTION UPDATE"
      ]
    },
    "sections": [
      {
        "label": "01 / Problem",
        "heading": "프로젝트 문서가 늘수록 사실과 요약이 어긋나기 쉬웠습니다.",
        "paragraphs": [
          "본문, 기술, 역할, 기간, 성과가 여러 문서에 반복되면서 변경 시점마다 불일치가 생겼습니다. 자동화의 속도는 필요했지만, 확인되지 않은 정보가 원본에 바로 반영돼서는 안 됐습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / System",
        "heading": "요청 분석부터 승인까지 역할과 책임을 분리했습니다.",
        "paragraphs": [],
        "bullets": [
          "역할별 Codex 에이전트를 연결해 요청 분석·컨텍스트 라우팅·결과 취합 흐름을 구성했습니다.",
          "프로젝트 본문에서 기술·역할·요약을 추출하고 기간·성과·속성의 불일치를 탐지했습니다.",
          "근거가 있는 제안만 정리하고, 사용자가 승인한 뒤에만 Notion에 반영했습니다.",
          "채용 공고와 경력 문서가 같은 프로젝트 근거를 재사용하도록 문서 흐름을 연결했습니다."
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Result",
        "heading": "자동화와 최종 판단의 경계를 명확하게 만들었습니다.",
        "paragraphs": [],
        "bullets": [],
        "results": [
          {
            "label": "15",
            "text": "프로젝트의 기술·역할·요약 속성을 본문 근거와 일치하도록 정비했습니다."
          },
          {
            "label": "Human-in-loop",
            "text": "AI가 제안하고 사람이 승인하는 구조로 원본 문서의 안전성을 유지했습니다."
          },
          {
            "label": "3 checks",
            "text": "기간·성과·속성 불일치를 별도 검증 단계에서 확인했습니다."
          },
          {
            "label": "1 source",
            "text": "프로젝트 근거를 채용 공고와 이력 문서에서 일관되게 재사용했습니다."
          }
        ],
        "images": [],
        "galleryLabel": "",
        "links": []
      }
    ],
    "next": {
      "href": "../devfive/",
      "label": "DEVFIVE 공통 라이브러리 →",
      "eyebrow": "Back to first project"
    }
  },
  "devfive": {
    "kicker": "01 / Platform · 2023—2024",
    "heading": "반복 구현을 재사용 구조로.",
    "summary": "React와 Next.js 프로젝트가 같은 기능을 다시 만들지 않도록, 선택 빌드부터 테스트까지 하나의 공통 라이브러리로 설계했습니다.",
    "facts": [
      {
        "label": "Role",
        "value": "라이브러리 설계·개발"
      },
      {
        "label": "Period",
        "value": "2023.05 — 2024.05"
      },
      {
        "label": "Stack",
        "value": "React · Next.js · Vite · Vitest"
      },
      {
        "label": "Scope",
        "value": "선택 빌드 · 공통 UI · OAuth · Utils"
      }
    ],
    "stage": {
      "label": "공통 라이브러리의 모듈 구조를 표현한 다이어그램",
      "steps": [
        "REACT BUILD",
        "SHARED LIBRARY",
        "NEXT.JS BUILD",
        "VITE VITEST"
      ]
    },
    "sections": [
      {
        "label": "01 / Problem",
        "heading": "프로젝트마다 같은 UI와 기능을 다시 만들고 있었습니다.",
        "paragraphs": [
          "공통 기능을 반복 구현하면서 개발 시간과 수정 비용이 누적됐습니다. React와 Next.js라는 서로 다른 환경에서도 필요한 모듈만 골라 사용할 수 있는 기반이 필요했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Build",
        "heading": "환경별 차이는 빌드에서 흡수하고, 사용 방식은 단순하게 만들었습니다.",
        "paragraphs": [],
        "bullets": [
          "React와 Next.js 환경에서 필요한 대상만 선택해 빌드할 수 있는 구조를 설계했습니다.",
          "Next.js에서 바로 사용하기 어려운 React 라이브러리를 전처리해 호환성을 확보했습니다.",
          "Vite와 Vitest 기반의 개발·테스트 환경을 구성해 변경을 빠르게 확인할 수 있게 했습니다.",
          "Props 기반 UI, SNS 로그인, 자주 쓰는 유틸리티를 재사용 가능한 모듈로 제공했습니다."
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Result",
        "heading": "재사용의 효과를 적용 범위와 작업 흐름에서 확인했습니다.",
        "paragraphs": [],
        "bullets": [],
        "results": [
          {
            "label": "20+",
            "text": "프로젝트에 공통 라이브러리를 적용해 중복 구현 부담을 줄였습니다."
          },
          {
            "label": "Reuse",
            "text": "공통 UI·인증·유틸리티를 프로젝트마다 다시 만들지 않는 기반을 마련했습니다."
          },
          {
            "label": "2 builds",
            "text": "React와 Next.js 환경 차이를 선택 빌드 구조 안에서 처리했습니다."
          },
          {
            "label": "1 system",
            "text": "개발·테스트·환경별 빌드를 하나의 재사용 흐름으로 연결했습니다."
          }
        ],
        "images": [],
        "galleryLabel": "",
        "links": []
      }
    ],
    "next": {
      "href": "../joara/",
      "label": "조아라 서비스·CMS 리뉴얼 →",
      "eyebrow": "Next project"
    }
  },
  "devfive-landing": {
    "kicker": "Project 02 · 2022",
    "heading": "DEVFIVE 랜딩페이지",
    "summary": "SSG·SEO와 Notion 프로젝트 연동을 적용한 DEVFIVE 공식 랜딩페이지",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발"
      },
      {
        "label": "Period",
        "value": "2022.08 — 2022.09"
      },
      {
        "label": "Stack",
        "value": "Next.js · Notion API · TypeScript"
      },
      {
        "label": "Scope",
        "value": "SSG · SEO · Notion 연동"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "DEVFIVE 공식 랜딩페이지를 개발한 프로젝트입니다.",
          "웹 성능 향상을 위해 SSG(Static Site Generation) 방식을 채택하였으며, 검색 엔진 최적화(SEO)를 효과적으로 반영하기 위해 Next.js로 전환 개발을 진행했습니다.",
          "또한 DEVFIVE 측 Notion 데이터베이스와 연동하여 관리 중인 프로젝트 정보를 불러와 랜딩페이지 내 프로젝트 탭에 동적으로 빌드되도록 구현했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "퍼블리싱 작업",
          "Notion에 등록한 프로젝트 정보가 Project 페이지에 자동 반영되도록 연동",
          "SSG 방식 적용"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "성과 및 결과",
        "paragraphs": [
          "DEVFIVE 홈페이지 ↗"
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": [
          {
            "href": "https://devfive.kr/ko/",
            "label": "DEVFIVE 홈페이지 ↗",
            "external": true
          }
        ]
      }
    ],
    "next": null
  },
  "finance-security-intelligence": {
    "kicker": "Project 09 · 2021",
    "heading": "금융보안원 위험 인텔리전스 관리 시스템",
    "summary": "다양한 위협 데이터를 수집·분류하고 실시간 알림·시각화를 제공하는 금융 보안 관리 시스템",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발자"
      },
      {
        "label": "Period",
        "value": "2021.10 — 2021.12"
      },
      {
        "label": "Stack",
        "value": "React · TypeScript · Vite"
      },
      {
        "label": "Scope",
        "value": "대시보드 · 알림 · 데이터 시각화"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "본 프로젝트는 금융업계의 특수한 보안 요구사항에 대응하기 위한 포괄적인 위협 인텔리전스 시스템 개발 작업입니다.",
          "고객은 IP, 파일, 이메일, URL, 도메인 등 다양한 정보 출처에서 위협 요소를 식별할 수 있는 포괄적인 시스템 구축을 요청했으며, 실시간 분석 및 탐지 기능을 통해 보안 사고를 사전에 방지할 수 있는 예방적 보안 체계 마련이 필요한 상황이었습니다.",
          "또한 위협 유형에 따른 체계적인 분류, 심각도 표시, 통계 기반 시각화 기능을 갖춘 금융 보안에 최적화된 위협 인텔리전스 시스템과 보안 담당자가 위협 상황에서 즉각적인 조치를 취할 수 있는 직관적이고 사용자 친화적인 인터페이스 제공을 요구했습니다. 더불어 위협 발생 시 실시간 알림 및 로그 추적이 가능한 모니터링 시스템과 위협 이력 관리 및 리포트 생성 기능을 포함한 종합적인 보안 관리 시스템 개발이 요청되었습니다.",
          "이러한 고객 요구사항에 대응하여 위협 인텔리전스 데이터 수집 및 분석 시스템 구축, 통합 대시보드 및 시각화 제공, 알림 및 관리 기능 설계를 완료하여 금융업계 특성에 맞는 지능형 보안 관리 플랫폼을 구현했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "전체적인 퍼블리싱 작업",
          "IP·URL 등 다양한 출처의 데이터를 수집·정규화하는 위협 인텔리전스 시스템 구축",
          "위협 발생 시 관리자에게 즉시 알리는 실시간 알림 기능 설계",
          "반입 전 다단계 검토와 QA·오류 대응"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "성과 및 결과",
        "paragraphs": [],
        "bullets": [],
        "results": [],
        "images": [
          {
            "src": "/assets/projects/finance-security-intelligence-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/finance-security-intelligence-02.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/finance-security-intelligence-03.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "금융보안원 위험 인텔리전스 관리 시스템 프로젝트 화면",
        "links": []
      }
    ],
    "next": null
  },
  "hankyu-plant": {
    "kicker": "Project 05 · 2021",
    "heading": "한큐플랜트",
    "summary": "상품 등록부터 견적·결제·납품 관리까지 지원하는 B2B 식물 거래 플랫폼",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발"
      },
      {
        "label": "Period",
        "value": "2021.10 — 2021.12"
      },
      {
        "label": "Stack",
        "value": "React · FastAPI · TypeScript"
      },
      {
        "label": "Scope",
        "value": "B2B · CMS · 결제 흐름"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "한큐플랜트는 조경회사, 조경사업 입찰기업, 화훼 및 관목 농가 등 식물 거래 관계자들이 모바일 환경에서 상품을 등록하고 견적을 요청·제안할 수 있도록 제작한 B2B 식물 거래 플랫폼입니다.",
          "본 프로젝트에서는 프론트엔드 및 CMS 페이지를 작업했습니다.",
          "구매회원은 필요한 식물 품목을 직접 입력하거나 이미지·엑셀 파일을 활용해 견적을 요청할 수 있고, 판매회원은 보유 상품을 등록한 뒤 견적 요청에 맞춰 제안할 수 있도록 설계했습니다.",
          "또한 상품 리스트, 상품 등록, 견적 요청, 견적 제안, 자동 견적함, 거래 내역, 납품 캘린더, 마이페이지 등 거래 과정에 필요한 주요 기능을 구성했습니다. 구매와 판매 흐름이 반복적으로 발생하는 B2B 거래 특성을 고려해, 상품 정보와 견적 상태, 주문 진행 현황을 직관적으로 확인할 수 있도록 화면 구조를 설계하고 구현했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "전 페이지 퍼블리싱 작업",
          "도매 식물 등록·판매 기능 담당",
          "결제 기능",
          "클라이언트의 요구에 맞춘 즉각 대응"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "결과",
        "paragraphs": [],
        "bullets": [],
        "results": [],
        "images": [
          {
            "src": "/assets/projects/hankyu-plant-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/hankyu-plant-02.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "한큐플랜트 프로젝트 화면",
        "links": []
      }
    ],
    "next": null
  },
  "humansense": {
    "kicker": "Project 03 · 2021",
    "heading": "HumanSense",
    "summary": "기업·제품 정보를 직관적으로 전달하도록 SEO와 반응형 UI를 적용한 휴먼센스 공식 홈페이지",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발"
      },
      {
        "label": "Period",
        "value": "2021.10 — 2021.11"
      },
      {
        "label": "Stack",
        "value": "Next.js · TypeScript · Vite"
      },
      {
        "label": "Scope",
        "value": "기업 사이트 · SEO · 반응형"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "본 프로젝트는 전기안전 산업을 선도하는 휴먼센스의 기업 아이덴티티와 기술력을 효과적으로 전달하기 위한 공식 홈페이지 개발 작업입니다.",
          "고객은 휴먼센스의 핵심 기술과 차별화된 사업 분야를 방문자들에게 효과적으로 소개하고 회사의 전문성과 업계 내 위상을 디지털 플랫폼을 통해 구현할 수 있는 웹사이트 구성을 요청했습니다.",
          "또한 방문자가 회사의 철학과 핵심 제품을 쉽게 이해할 수 있는 직관적인 웹사이트 구조 설계와 브랜드 스토리 및 제품 정보를 한눈에 확인할 수 있는 콘텐츠 구성을 통해 제품 카탈로그 기능과 고객 문의 기능을 포함한 종합적인 정보 제공 시스템 구축을 요구했습니다.",
          "이러한 고객 요구사항에 대응하여 반응형 홈페이지 구축 및 사업 분야와 제품 소개 페이지 개발을 완료하여 방문자들이 휴먼센스의 기업 가치와 제품 정보를 체계적으로 파악할 수 있는 사용자 친화적인 웹사이트 환경을 조성했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "퍼블리싱 작업",
          "SEO 설정 및 빌드 설정"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "구축 결과",
        "paragraphs": [
          "반응형 홈페이지와 사업·제품 소개 페이지를 구축하고 SEO 및 빌드 설정을 반영해, 방문자가 기업 가치와 제품 정보를 체계적으로 확인할 수 있는 공식 웹사이트를 완성했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      }
    ],
    "next": null
  },
  "joara": {
    "kicker": "02 / Product · 2022",
    "heading": "읽기와 운영을 하나의 흐름으로.",
    "summary": "웹소설을 찾고 읽고 결제하는 사용자 경험과, 콘텐츠를 관리하는 운영 CMS를 함께 구현한 대규모 리뉴얼입니다.",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발자"
      },
      {
        "label": "Period",
        "value": "2022.05 — 2022.09"
      },
      {
        "label": "Stack",
        "value": "React · Redux · React Native WebView"
      },
      {
        "label": "Scope",
        "value": "사용자 서비스 · 운영 CMS 핵심 화면"
      }
    ],
    "stage": {
      "label": "사용자 서비스와 운영 CMS의 연결 구조를 표현한 다이어그램",
      "steps": [
        "DISCOVER SEARCH",
        "READER FLOW",
        "PAYMENT HISTORY",
        "CMS OPERATE"
      ]
    },
    "sections": [
      {
        "label": "01 / Challenge",
        "heading": "사용자 서비스와 운영 화면의 복잡도가 동시에 커졌습니다.",
        "paragraphs": [
          "로그인부터 작품 탐색, 뷰어, 결제까지 이어지는 고객 흐름과 회원·작품·이벤트·통계를 다루는 CMS를 같은 일정 안에서 안정적으로 연결해야 했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Build",
        "heading": "서비스 이용과 운영 관리의 핵심 화면을 끝까지 구현했습니다.",
        "paragraphs": [],
        "bullets": [
          "로그인·회원가입·작품 탐색·보관함·검색·마이페이지를 구현했습니다.",
          "웹소설 뷰어와 결제 페이지를 개발하고 결제 서비스를 연동했습니다.",
          "회원·통계·작품·이벤트·결제 내역 CMS의 목록·상세·등록·검색·필터를 구성했습니다.",
          "React 화면을 React Native WebView 앱에 반영하고 QA 이슈에 대응했습니다."
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Decision",
        "heading": "상태가 복잡해지는 시점에 Redux로 흐름을 통일했습니다.",
        "paragraphs": [
          "규모가 커지며 상태 추적과 아키텍처 통제가 어려워졌습니다. 팀이 이미 익숙한 도구와 남은 일정을 함께 고려해 Redux로 전환했고, 복잡한 데이터 흐름을 한 방식으로 정리했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "04 / Result",
        "heading": "짧은 QA 기간에도 핵심 흐름을 안정화하고 마감을 지켰습니다.",
        "paragraphs": [],
        "bullets": [],
        "results": [
          {
            "label": "Core flow",
            "text": "지정받은 사용자 서비스와 운영 CMS 핵심 화면의 퍼블리싱·기능 구현을 전담했습니다."
          },
          {
            "label": "2 sides",
            "text": "사용자 서비스와 운영 CMS를 하나의 제품 흐름으로 연결했습니다."
          }
        ],
        "images": [
          {
            "src": "/assets/projects/joara-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/joara-02.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "조아라 프로젝트 화면",
        "links": []
      }
    ],
    "next": {
      "href": "../the-bridge/",
      "label": "더 브릿지 기부 플랫폼 →",
      "eyebrow": "Next project"
    }
  },
  "matched-admin": {
    "kicker": "Project 06 · 2022",
    "heading": "Matched Admin",
    "summary": "기업 심사·사용자·매칭 신청과 운영 통계를 관리하는 B2B 영업 매칭 어드민",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발"
      },
      {
        "label": "Period",
        "value": "2022.04 — 2022.05"
      },
      {
        "label": "Stack",
        "value": "React · Vite · TypeScript"
      },
      {
        "label": "Scope",
        "value": "어드민 · 통계 · 운영 관리"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "본 프로젝트는 고객의 요구사항에 따라 Matched B2B 영업 매칭 서비스의 원활한 운영과 체계적인 관리를 위한 전용 어드민 페이지 개발 작업입니다.",
          "Matched는 국내 최초로 사전 실사제를 도입한 결재자 기반 B2B 영업 매칭 서비스로서 기존의 일반적인 영업 매칭 플랫폼과 차별화된 신뢰성 높은 비즈니스 연결 서비스를 제공하고 있습니다. 엄격한 심사 과정을 통과한 검증된 기업들의 실질적인 결정권을 보유한 결재자들 간의 직접적인 매칭을 통해 효율적이고 실질적인 비즈니스 협력이 가능하며, 이러한 고품질 매칭 시스템을 바탕으로 참여 기업들이 직면한 다양한 기업 과제와 비즈니스 니즈를 효과적으로 해결할 수 있는 혁신적인 플랫폼입니다.",
          "이러한 Matched 서비스의 특성을 고려하여 서비스 운영진이 매칭 프로세스, 기업 심사, 결재자 관리 등 핵심 기능들을 효율적으로 관리할 수 있는 통합 관리 시스템을 구축했으며, 사전 실사제 운영에 필요한 체계적인 데이터 관리와 매칭 품질 유지를 위한 관리자 도구들을 포함한 전문적인 어드민 페이지를 개발했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "B2B 영업 플랫폼의 매칭 데이터·신청·심사를 관리하는 관리자 페이지 구축",
          "매칭 신청 리스트·상태 변경·필터 검색 기능 구현",
          "기업·사용자 상세 조회와 승인·보류·반려 심사 프로세스 개발",
          "신청 현황·매칭 성공률·누적 통계를 시각화한 대시보드 제공",
          "권한 기반 메뉴 접근 제한과 반응형 어드민 템플릿으로 보안성 강화"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "결과",
        "paragraphs": [],
        "bullets": [],
        "results": [],
        "images": [
          {
            "src": "/assets/projects/matched-admin-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/matched-admin-02.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/matched-admin-03.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/matched-admin-04.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "Matched Admin 프로젝트 화면",
        "links": []
      }
    ],
    "next": null
  },
  "ncsoft-ncdp": {
    "kicker": "Project 07 · 2022",
    "heading": "NCSOFT NCDP",
    "summary": "44개 강연의 온라인 진행과 참가자 접근을 지원한 NCSOFT 사내 개발자 컨퍼런스 사이트",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발"
      },
      {
        "label": "Period",
        "value": "2022.04 — 2022.05"
      },
      {
        "label": "Stack",
        "value": "React · Vite · TypeScript"
      },
      {
        "label": "Scope",
        "value": "컨퍼런스 · 신청 · 콘텐츠"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "본 프로젝트는 2022년 5월 25일부터 26일까지 이틀간 개최된 NC 사내 지식 공유 컨퍼런스인 NCDP(NCSOFT Developers Party)의 기술 공유 및 온라인 발표를 위한 전용 이벤트 사이트 전담 개발 작업입니다.",
          "NCDP는 NC 직원들이 관심 있는 주제를 선택해 온/오프라인에서 자유롭게 수강하며 게임 기획, 제작, 운영 등 전 개발 과정에 축적된 노하우와 기술을 함께 나눌 수 있는 대규모 기술 공유 행사였으며, AI/머신러닝, 사운드, 게임디자인 등 총 44개의 강연이 진행되어 다양한 분야의 전문 지식이 공유되는 종합적인 개발자 컨퍼런스로 운영되었습니다.",
          "이러한 대규모 사내 컨퍼런스의 성공적인 운영을 위해 44개 강연의 온라인 진행과 참가자들의 원활한 접근을 지원하는 디지털 플랫폼을 구축했으며, NC 직원들이 온/오프라인 환경에서 자유롭게 컨퍼런스에 참여할 수 있도록 하는 기술적 기반을 마련하여 대규모 사내 컨퍼런스의 디지털 전환을 지원하고 지식 공유 문화 확산에 기여하는 핵심적인 역할을 수행했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "전 페이지 퍼블리싱 작업",
          "일부 페이지 API 연동 작업",
          "실시간 오류 대응",
          "클라이언트 측 요구사항 반영"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "결과",
        "paragraphs": [],
        "bullets": [],
        "results": [],
        "images": [
          {
            "src": "/assets/projects/ncsoft-ncdp-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/ncsoft-ncdp-02.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/ncsoft-ncdp-03.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "NCSOFT NCDP 프로젝트 화면",
        "links": []
      }
    ],
    "next": null
  },
  "planb": {
    "kicker": "Project 04 · 2022",
    "heading": "플랜비",
    "summary": "일정 기반 출발시간 예측·알림과 주변 주차장 안내를 제공하는 웹·앱 서비스",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발"
      },
      {
        "label": "Period",
        "value": "2022.03 — 2022.11"
      },
      {
        "label": "Stack",
        "value": "React · React Native · TypeScript · Vite · Zustand"
      },
      {
        "label": "Scope",
        "value": "웹·앱 · 일정 · 주차 안내"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "✔ 플랜비는 도착 시간에 맞춰 출발 시간을 예측하고 이용자에게 알려줍니다. ✔ 도착지를 입력하면 근처 주차장에 대한 정보를 제공해줍니다.",
          "📆 캘린더 기능 ✔ 캘린더처럼 일정을 추가할 수 있으며 모든 일정, 이번 달 일정, 오늘 일정 세가지 형태로 한 눈에 일정 파악이 가능합니다. ✔ 참석자 추가하기 버튼을 통해 관련 미팅 참석자들을 등록할 수 있습니다. ✔ 만약 도착 시간에 늦어질 경우 참석자들에게 알림을 보낼 수 있습니다.",
          "🚗예측 및 알림 기능 ✔ 입력한 일정에 따라 인공지능 기술을 통해 미래 교통 상황을 반영하여 출발 시간을 예측하고 이용자에게 미리 알려줍니다. ✔ 이용자들은 알림 횟수 및 시간을 정하여 원하는 횟수 및 알림 시간을 제공 받을 수 있습니다. ✔ 가까운 일정일수록 상단에 표시되며 남은 출발 시간에 따라 노란색, 빨간색으로 알려줍니다.",
          "🅿 주차 안내 기능 ✔ 도착 장소를 입력 시, 근처 주차장을 안내 받을 수 있습니다. ✔ 원하는 주차장을 선택하면 선택한 주차장 까지 예측 시간을 제공합니다.",
          "🚥 비효율 구간 신고 ✔ 이용자는 비효율 구간 신고 기능을 통해 효율적이지 못한 신호 구간에 대해 신고를 할 수 있습니다. ✔ 비효율 구간으로 신고된 지역에 대한 교통 혼잡 정도, 신호 정보를 수집해 개선에 활용합니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "메인 화면 내 복잡한 API 연동 및 비동기 상태 관리를 통한 데이터 로딩 UI/UX 개선",
          "Zustand를 통한 로그인 로직 개발",
          "전 페이지 퍼블리싱 작업",
          "OAuth2 연동 작업",
          "즐겨찾기 DND 작업 진행",
          "클라이언트의 인터뷰 및 협의를 통해 프로젝트의 핵심 요구사항을 도출"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "결과",
        "paragraphs": [],
        "bullets": [],
        "results": [],
        "images": [
          {
            "src": "/assets/projects/planb-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/planb-02.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/planb-03.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/planb-04.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "플랜비 프로젝트 화면",
        "links": []
      }
    ],
    "next": null
  },
  "round-table": {
    "kicker": "Project 10 · 2023",
    "heading": "라운드 테이블",
    "summary": "Flutter 앱 유지보수와 Next.js 웹 확장·운영을 담당한 글로벌 한국어 교육 SNS 서비스",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발자"
      },
      {
        "label": "Period",
        "value": "2023.05 — 2024.01"
      },
      {
        "label": "Stack",
        "value": "Node.js · Flutter · Next.js"
      },
      {
        "label": "Scope",
        "value": "앱 유지보수 · 웹 확장 · 운영"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "본 프로젝트는 K-pop, K-drama, K-food 등 한류 콘텐츠를 통해 한국어를 학습하고자 하는 전 세계 한류 팬들을 대상으로 재미있는 언어 교육 콘텐츠와 글로벌 네트워킹 기능을 제공하는 RoundTable(라운드테이블) 교육 SNS 서비스의 고객 요구사항을 반영한 종합적인 플랫폼 개발 및 운영 지원 작업입니다.",
          "고객과의 전략적 파트너십을 통해 AI Tutor 시스템과 AI 기반 한국어 기본 말하기 기능을 포함한 서비스의 핵심 기능들을 체계적으로 구축했으며, 전 세계 한류 팬들이 효과적으로 한국어를 학습하면서 동시에 글로벌 커뮤니티를 형성할 수 있는 통합적인 교육 플랫폼을 완성했습니다.",
          "또한 서비스의 안정적이고 원활한 운영을 위해 지속적인 시스템 유지보수와 기술 지원을 담당하여 사용자들에게 끊김 없는 학습 경험을 제공하고 있습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "Flutter 앱 유지보수",
          "Next.js 기반 사이트 확장",
          "정기 패치, 신규 콘텐츠 업로드, 관리자 기능 고도화로 운영 안정성과 확장성 강화",
          "QA 및 오류 대응"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "성과 및 결과",
        "paragraphs": [],
        "bullets": [],
        "results": [],
        "images": [
          {
            "src": "/assets/projects/round-table-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/round-table-02.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/round-table-03.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "라운드 테이블 프로젝트 화면",
        "links": []
      }
    ],
    "next": null
  },
  "seocho-family-center": {
    "kicker": "Project 08 · 2023",
    "heading": "서초구가족센터",
    "summary": "아이돌보미 신청·일정·근태·정산 흐름을 통합한 가족센터 서비스 관리 시스템",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발자"
      },
      {
        "label": "Period",
        "value": "2023.10 — 2024.05"
      },
      {
        "label": "Stack",
        "value": "React · Zustand"
      },
      {
        "label": "Scope",
        "value": "일정 · 근태 · 정산"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "본 프로젝트는 서초구 가족센터의 의뢰를 받아 아이돌보미 서비스 운영의 효율성을 향상시키기 위한 관리 시스템을 구축한 작업입니다.",
          "서초구 가족센터에서 운영하는 서초구 아이돌보미, 119 아이돌보미, 손주돌보미 서비스 이용자들이 신청 및 일정 관리를 더욱 편리하게 할 수 있는 기능을 제공하고, 관리자 페이지를 제작하여 서비스 운영 및 정산을 효율적으로 관리할 수 있도록 지원하는 시스템을 구축했습니다.",
          "이를 통해 사용자들의 서비스 이용 편의성을 향상시키고, 관리자의 업무 처리 효율성을 증대시킬 수 있는 디지털 솔루션을 성공적으로 개발했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "클라이언트 측과 협업하여 요청사항을 즉각 반영",
          "도우미 요청·신청·관리 흐름 전반 담당",
          "Zustand 기반 로그인 페이지 구현",
          "큰 글씨·명확한 아이콘·충분한 버튼 크기로 고연령층까지 고려한 직관적 UI/UX 설계"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "결과",
        "paragraphs": [],
        "bullets": [],
        "results": [],
        "images": [
          {
            "src": "/assets/projects/seocho-family-center-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/seocho-family-center-02.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/seocho-family-center-03.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/seocho-family-center-04.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "서초구가족센터 프로젝트 화면",
        "links": []
      }
    ],
    "next": null
  },
  "shinhan": {
    "kicker": "Project 01 · 2021",
    "heading": "2021 신한은행 업적평가",
    "summary": "메타버스·영상·이미지 콘텐츠와 반응형 UI를 구현한 신한은행 사내 업적평가 이벤트 웹페이지",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발"
      },
      {
        "label": "Period",
        "value": "2021.11 — 2021.12"
      },
      {
        "label": "Stack",
        "value": "React · TypeScript · Vite"
      },
      {
        "label": "Scope",
        "value": "이벤트 UI · 인증 · 반응형"
      }
    ],
    "stage": null,
    "sections": [
      {
        "label": "01 / Overview",
        "heading": "프로젝트 개요",
        "paragraphs": [
          "본 프로젝트는 신한은행의 요청에 따라 연말 업적평가를 흥미롭고 몰입감 있게 전달할 수 있는 디지털 이벤트 제작을 목표로 수행된 업적평가 이벤트 전용 웹페이지 프론트엔드 개발 작업입니다.",
          "신한은행은 기존 평가 시스템에서 벗어나 직원들이 콘텐츠를 즐기면서 자발적으로 참여할 수 있는 새로운 형태의 평가 경험 제공을 요구했으며, 메타버스, 영상, 이미지 등 다양한 형식의 이벤트 콘텐츠 구성을 통해 전통적인 업적평가 방식의 딱딱함을 탈피하고자 했습니다.",
          "또한 복잡하지 않으면서도 흥미로운 UI/UX 구성과 모바일 및 웹 환경에서 안정적으로 동작하는 크로스 플랫폼 호환성 확보를 요구했습니다.",
          "이에 대응하여 React 기반 SPA 구조로 설계된 업적평가 이벤트 전용 웹페이지를 개발하고, 메타버스 공간, 업평 갤러리, 업평 TV 등 다채로운 콘텐츠 탭 제작과 반응형 웹 최적화를 통해 신한은행 직원들에게 혁신적인 업적평가 경험을 제공하는 디지털 이벤트 플랫폼을 완성했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Contribution",
        "heading": "주요 작업",
        "paragraphs": [],
        "bullets": [
          "메인 화면 내 복잡한 API 연동 및 비동기 상태 관리를 통한 데이터 로딩 UI/UX 개선",
          "Redux를 통한 로그인 로직 개발",
          "전 페이지 퍼블리싱 작업",
          "짧은 마감 일정에서 개발과 QA 병행",
          "클라이언트의 인터뷰 및 협의를 통해 프로젝트의 핵심 요구사항을 도출"
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Outcome",
        "heading": "성과 및 결과",
        "paragraphs": [
          "프론트엔드 개발자로 React 기반 SPA와 반응형 UI를 구현하고, 짧은 일정 안에서 개발과 QA를 병행했습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [
          {
            "src": "/assets/projects/shinhan-01.png",
            "alt": ""
          }
        ],
        "galleryLabel": "2021 신한은행 업적평가 프로젝트 화면",
        "links": []
      }
    ],
    "next": null
  },
  "the-bridge": {
    "kicker": "03 / Experience · 2023—2024",
    "heading": "기부의 마지막까지 데이터를 잇다.",
    "summary": "웹사이트를 React로 리뉴얼하고, 외부 결제 페이지에서 끊기던 분석 데이터를 PG사와 협업해 전체 기부 흐름으로 연결했습니다.",
    "facts": [
      {
        "label": "Role",
        "value": "프론트엔드 개발자"
      },
      {
        "label": "Period",
        "value": "2023.09 — 2024.05"
      },
      {
        "label": "Stack",
        "value": "React · TypeScript · Zustand · GA"
      },
      {
        "label": "Scope",
        "value": "리뉴얼 · 인증 · 기부 · 분석 추적"
      }
    ],
    "stage": {
      "label": "캠페인 탐색부터 외부 결제와 분석까지의 흐름을 표현한 다이어그램",
      "steps": [
        "CAMPAIGN DISCOVER",
        "DONATION FLOW",
        "EXTERNAL PG",
        "GOOGLE ANALYTICS"
      ]
    },
    "sections": [
      {
        "label": "01 / Problem",
        "heading": "결제는 완료되지만, 전환 데이터는 외부 PG에서 끊겼습니다.",
        "paragraphs": [
          "사용자는 캠페인을 탐색한 뒤 외부 결제 페이지로 이동했습니다. 이 구간에서 Google Analytics 추적이 이어지지 않아 전체 기부 여정을 연속적으로 파악하기 어려웠습니다."
        ],
        "bullets": [],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "02 / Build",
        "heading": "사용자 흐름과 측정 흐름을 함께 설계했습니다.",
        "paragraphs": [],
        "bullets": [
          "기존 웹사이트를 React와 TypeScript 기반으로 리뉴얼했습니다.",
          "Zustand로 인증 상태를 관리하고 로그인부터 캠페인 탐색·기부까지 구현했습니다.",
          "외부 PG 결제 구간에서 추적이 끊기는 지점을 확인했습니다.",
          "PG사와 협업해 결제 페이지에 더 브릿지의 GA 추적 설정을 반영했습니다."
        ],
        "results": [],
        "images": [],
        "galleryLabel": "",
        "links": []
      },
      {
        "label": "03 / Result",
        "heading": "사이트 밖으로 이어지는 결제까지 하나의 전환 흐름이 됐습니다.",
        "paragraphs": [],
        "bullets": [],
        "results": [
          {
            "label": "End-to-end",
            "text": "캠페인 탐색부터 외부 결제까지 전체 기부 플로우의 데이터를 연속 수집했습니다."
          },
          {
            "label": "Cross-team",
            "text": "웹사이트 코드만으로 해결할 수 없는 문제를 PG사와의 협업으로 마무리했습니다."
          }
        ],
        "images": [
          {
            "src": "/assets/projects/the-bridge-01.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/the-bridge-02.webp",
            "alt": ""
          },
          {
            "src": "/assets/projects/the-bridge-03.webp",
            "alt": ""
          }
        ],
        "galleryLabel": "더 브릿지 프로젝트 화면",
        "links": []
      }
    ],
    "next": {
      "href": "../ai-docs/",
      "label": "AI 에이전트 문서 관리 →",
      "eyebrow": "Next project"
    }
  }
}
