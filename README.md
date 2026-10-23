# 이강욱 포트폴리오

React·Next.js 프론트엔드 개발자 이강욱의 개인 포트폴리오입니다. [프론트엔드 템플릿](https://github.com/mae-neung/frontend_template)의 공통 기술 기반과 DEVUP UI로 구성했습니다.

## 실행

Node.js 24.15.0 이상과 pnpm 10.23.0을 사용합니다.

```powershell
pnpm install
pnpm dev
```

`pnpm verify`는 lint, 테스트, TypeScript 검사와 production 빌드를 수행합니다. `pnpm preview`로 `dist/` 산출물을 확인할 수 있습니다.

## 배포와 경로

Vite의 단일 루트 `index.html`을 빌드한 뒤 프리렌더가 홈, 프로젝트 목록, 14개 상세 페이지의 물리적 `index.html`을 `dist/`에 생성합니다. 각 HTML에 React 본문과 고유 제목·설명을 미리 포함하고 브라우저에서 hydration으로 테마를 활성화합니다. 상대 자산 경로는 루트 호스팅과 `/portfolio/` 같은 하위 경로의 직접 진입을 지원합니다. `.openai/hosting.json`은 `dist/`를 정적 배포 디렉터리로 지정하며, 현재 산출물을 추적합니다.

페이지 본문은 `src/data/content.ts`와 `src/data/overview.ts`의 구조화 데이터 및 `src/pages/`의 TSX에서 관리합니다. 스타일은 `src/theme/styles.tsx`의 DEVUP UI 코드와 `devup.json`의 토큰을 사용합니다. 원본 이미지는 `public/assets/projects/`에 있습니다. 작성하는 CSS 파일과 추가 HTML 엔트리는 없으며, `dist/`의 CSS·HTML은 빌드 산출물입니다.

기여·검증 기준은 [AGENTS.md](AGENTS.md)와 [오케스트레이션 문서](docs/orchestration/README.md)를 참고합니다.

