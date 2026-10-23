# 포트폴리오 Gate

## 변경 전

- 현재 branch, HEAD, 작업 트리를 확인하고 다른 작업자의 변경을 보존한다.
- 원본 콘텐츠와 이미지가 `src/content/`, `src/styles/`, `public/assets/`에 있는지 확인한 뒤 `dist/`를 빌드한다.
- UI 방향 변경인지, 기존 디자인을 보존하는 구현 변경인지 구분한다.

## 구현

- 새 경로는 `src/data/routes.ts`와 물리적 HTML 엔트리, Vite 입력을 일치시킨다.
- 페이지별 title·description, 상대 링크·이미지 경로를 유지한다.
- HTML 조각은 로컬 정적 콘텐츠만 사용한다. 안전 검사 테스트의 금지 패턴을 우회하지 않는다.
- 테마 저장 키, reduced-motion, 키보드 이동과 스킵 링크를 유지한다.
- 기존 CSS는 점진 이전 예외다. 새로운 공용 UI는 `devup.json` 토큰을 사용한다.

## 검증

`pnpm verify`를 최종 변경본에서 수행한다. 경로·전역 UI 변경은 [UI 점검표](ui-smoke-checklist.md)의 full 수준을 확인하고, `dist/`의 16개 HTML과 모든 프로젝트 이미지가 생성됐는지 검사한다. PR 생성·업로드는 전역 `full-pr` Gate를 따른다.
