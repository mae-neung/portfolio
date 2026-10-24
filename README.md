# 이강욱 포트폴리오

React·Next.js 프론트엔드 개발자 이강욱의 개인 포트폴리오입니다. [프론트엔드 템플릿](https://github.com/mae-neung/frontend_template)의 공통 기술 기반과 DEVUP UI로 구성했습니다.

## 실행

Node.js 24.15.0 이상과 pnpm 10.23.0을 사용합니다.

```powershell
pnpm install
pnpm dev
```

`pnpm verify`는 lint, 테스트, TypeScript 검사와 production 빌드를 수행합니다. `pnpm preview`로 빌드된 `dist/` 산출물을 확인할 수 있습니다.

## 배포와 경로

개발 서버의 문서 셸은 `src/document.ts`에서 생성됩니다. 빌드는 HTML 입력 없이 `src/main.tsx`를 번들링하고 `scripts/prerender.ts`가 홈, 프로젝트 목록, 14개 상세 페이지의 물리적 `index.html`을 `dist/`에 생성합니다. 각 HTML에 React 본문과 고유 제목·설명을 미리 포함하고 브라우저에서 hydration으로 테마를 활성화합니다. 상대 자산 경로는 루트 호스팅과 `/portfolio/` 같은 하위 경로의 직접 진입을 지원합니다.

`dist/`는 Git에 포함하는 정적 SSG 배포 산출물입니다. 소스를 바꾼 뒤 `pnpm build`를 실행하고 변경된 `dist/`도 함께 커밋해야 합니다. CI는 PR에서 `pnpm verify` 후 재생성한 `dist/`와 커밋된 결과가 일치하는지 검사하며 배포하지 않습니다. `main`에 push하거나 `main`에서 수동 실행하면 같은 검증을 거친 뒤 기존 GitHub Pages의 legacy `gh-pages` 브랜치 루트에 `dist/` 내용을 게시합니다. `.openai/hosting.json`은 로컬 정적 배포 입력을 지정할 뿐 GitHub Pages 게시를 수행하지 않습니다.

페이지 본문은 `src/data/content.ts`와 `src/data/overview.ts`의 구조화 데이터 및 `src/pages/`의 TSX에서 관리합니다. 스타일은 `src/theme/styles.tsx`의 DEVUP UI 코드와 `devup.json`의 토큰을 사용합니다. 원본 이미지는 `public/assets/projects/`에 있습니다. 작성 소스의 `.html`·`.css` 파일은 0개이며, Git에 포함된 `dist/`의 HTML·CSS는 빌드가 생성합니다.

기여·검증 기준은 [AGENTS.md](AGENTS.md)와 [오케스트레이션 문서](docs/orchestration/README.md)를 참고합니다.

