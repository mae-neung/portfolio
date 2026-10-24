# Portfolio Project Guidelines

공통 Agent 운영·Handoff 규칙은 전역 `AGENTS.md`를 따른다. 이 파일은 개인 포트폴리오 저장소의 기술, 콘텐츠와 배포 계약을 정의한다.

## 기반과 실행

공통 프론트엔드 기반은 `mae-neung/frontend_template`의 커밋된 설정을 기준으로 점진적으로 반영한다. 현재 기술은 React 19, TypeScript 5, Vite 8, React Router 7, pnpm 10.23, Node.js 24.15.0 이상, Oxlint, Vitest, DEVUP UI다. 패키지 명령은 pnpm만 사용한다.

`pnpm dev`로 개발하고 `pnpm verify`로 lint, test, typecheck를 포함한 빌드를 확인한다. 배포 입력은 `.openai/hosting.json`이 지정한 `dist/`다. `dist/`는 Git에 포함하는 SSG 산출물이므로 출처인 `src/data/`, `src/pages/`, `src/theme/`, `public/assets/`를 고친 뒤 `pnpm build`로 재생성해 함께 커밋한다. CI는 검증 후 커밋된 `dist/`와 재생성 결과의 일치를 확인한다. PR에서는 배포하지 않고, `main` push 또는 `main`에서 수동 실행할 때 기존 legacy `gh-pages` 브랜치 루트에 게시한다.

## 콘텐츠·디자인 보존

승인된 서사형 UI와 뉴트럴·블루 Design Foundation을 유지한다. 포트폴리오 사실관계는 사용자 승인 없이 바꾸지 않는다. 18개 물리적 `index.html` 배포 경로, 각 페이지 제목·설명, 이미지·링크, 라이트·다크 테마의 `portfolio-theme` 저장 키, 접근성과 reduced-motion을 보존한다.

작성 소스에 `.html`·`.css` 파일은 두지 않는다. 문서 셸, 본문과 프리렌더 스크립트는 TypeScript/TSX로, 스타일은 DEVUP UI와 `devup.json`의 토큰으로 구성한다. `dist/`의 HTML·CSS는 18개 정적 배포 경로와 DEVUP 스타일을 위한 추적 빌드 산출물이다.

`src/`의 `className`과 인라인 `style`은 사용하지 않는다. `globalCss`에는 클래스 선택자를 두지 않고 리셋·문서 전역 규칙만 유지한다. 페이지·컴포넌트 스타일은 DEVUP UI props와 지역 `styled` 컴포넌트로 관리한다.

레이아웃 래퍼는 `styled.div`에 `display: grid` 또는 `display: flex`를 명시한다. 현재 DEVUP의 `styled(Grid/Flex/VStack/Center)`와 직접 사용한 `Grid`의 기본 display 클래스가 반복 빌드에서 서로 다른 이름으로 생성되어 JS·CSS가 어긋난 사례가 있었다. 해당 primitive를 다시 쓰기 전에는 연속 빌드의 `dist/` 바이트 동일성과 실제 렌더링을 확인한다.

새로운 시각 방향이 필요한 요청은 전역 Designer 승인 절차를 따른다. 콘텐츠·구조 마이그레이션은 현재 디자인을 보존한다.

## 구조

- `src/components/`: 공통 헤더·푸터
- `src/layouts/`: 페이지 공통 조립
- `src/router/`, `src/data/`: 라우트·메타데이터·구조화된 프로젝트 본문
- `src/pages/`: 페이지 본문 조립
- `src/document.ts`: 개발·배포 공통 문서 셸
- `src/theme/`, `devup.json`: DEVUP UI 스타일과 Design Foundation
- `src/hooks/`: 테마 동작
- `src/utils/`: 경로 계산
- `public/assets/`: 프로젝트 이미지 원본
- `scripts/*.ts`: 프리렌더와 산출물·Git 추적 검증

공통 변경의 위험·검증 기준은 [오케스트레이션 문서](docs/orchestration/README.md)를 따른다.
