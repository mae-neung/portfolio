# 포트폴리오 Gate

## 변경 전

- 현재 branch, HEAD, 작업 트리를 확인하고 다른 작업자의 변경을 보존한다.
- 본문 데이터와 이미지가 `src/data/`, `public/assets/`에 있는지 확인한 뒤 `dist/`를 빌드한다.
- UI 방향 변경인지, 기존 디자인을 보존하는 구현 변경인지 구분한다.

## 구현

- 새 경로는 `src/data/routes.ts`와 `scripts/prerender.ts`의 물리적 HTML 생성 규칙을 일치시킨다.
- 페이지별 title·description, 상대 링크·이미지 경로를 유지한다.
- 본문과 문서 셸은 TypeScript/TSX로 관리한다. Git에 추적되는 HTML·CSS 파일을 추가하지 않는다.
- 테마 저장 키, reduced-motion, 키보드 이동과 스킵 링크를 유지한다.
- 모든 공용 UI는 DEVUP UI와 `devup.json` 토큰을 사용한다. `dist/`의 CSS·HTML은 비추적 배포 산출물이다.

## 검증

`pnpm verify`를 최종 변경본에서 수행한다. 경로·전역 UI 변경은 [UI 점검표](ui-smoke-checklist.md)의 full 수준을 확인한다. `git ls-files '*.html' '*.css'`가 0개인지, 빌드된 `dist/`에 16개 HTML과 JS·DEVUP CSS·모든 프로젝트 이미지가 있는지 검사한다. CI는 검증 후 `dist/`를 `portfolio-static-dist` 아티팩트로 업로드한다. 배포 담당 파이프라인은 이 아티팩트를 받아 게시하거나 현장에서 `pnpm install --frozen-lockfile`과 `pnpm build`를 실행해야 한다. `.openai/hosting.json`은 배포 디렉터리 지정일 뿐 이 절차를 자동화하지 않는다. PR 생성·업로드는 전역 `full-pr` Gate를 따른다.
