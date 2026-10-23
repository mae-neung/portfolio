# Portfolio Project Guidelines

공통 Agent 운영·Handoff 규칙은 전역 `AGENTS.md`를 따른다. 이 파일은 개인 포트폴리오 저장소의 기술, 콘텐츠와 배포 계약을 정의한다.

## 기반과 실행

공통 프론트엔드 기반은 `mae-neung/frontend_template`의 커밋된 설정을 기준으로 점진적으로 반영한다. 현재 기술은 React 19, TypeScript 5, Vite 8, React Router 7, pnpm 10.23, Node.js 24.15.0 이상, Oxlint, Vitest, DEVUP UI다. 패키지 명령은 pnpm만 사용한다.

`pnpm dev`로 개발하고 `pnpm verify`로 lint, test, typecheck를 포함한 빌드를 확인한다. 배포 입력은 `.openai/hosting.json`이 지정한 `dist/`다. `dist/`는 현재 추적되는 배포 산출물이므로 출처인 `src/data/`, `src/pages/`, `src/theme/`, `public/assets/`를 먼저 고친 다음 빌드한다.

## 콘텐츠·디자인 보존

승인된 서사형 UI와 뉴트럴·블루 Design Foundation을 유지한다. 포트폴리오 사실관계는 사용자 승인 없이 바꾸지 않는다. 16개 물리적 `index.html` 배포 경로, 각 페이지 제목·설명, 이미지·링크, 라이트·다크 테마의 `portfolio-theme` 저장 키, 접근성과 reduced-motion을 보존한다.

작성하는 HTML은 Vite 필수 루트 `index.html` 하나만 둔다. 작성하는 CSS 파일은 두지 않는다. 본문은 구조화된 TypeScript 데이터와 TSX로, 스타일은 DEVUP UI와 `devup.json`의 토큰으로 구성한다. `dist/`의 HTML·CSS는 16개 정적 배포 경로와 DEVUP 스타일을 위한 빌드 산출물이다.

새로운 시각 방향이 필요한 요청은 전역 Designer 승인 절차를 따른다. 콘텐츠·구조 마이그레이션은 현재 디자인을 보존한다.

## 구조

- `src/components/`: 공통 헤더·푸터
- `src/layouts/`: 페이지 공통 조립
- `src/router/`, `src/data/`: 라우트·메타데이터·구조화된 프로젝트 본문
- `src/pages/`: 페이지 본문 조립
- `src/theme/`, `devup.json`: DEVUP UI 스타일과 Design Foundation
- `src/hooks/`: 테마 동작
- `src/utils/`: 경로 계산
- `public/assets/`: 프로젝트 이미지 원본

공통 변경의 위험·검증 기준은 [오케스트레이션 문서](docs/orchestration/README.md)를 따른다.
