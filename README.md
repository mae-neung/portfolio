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

`dist/`는 Git에서 추적하지 않습니다. CI는 `pnpm verify`로 빌드까지 검증한 뒤 `portfolio-static-dist` 아티팩트로 `dist/`를 7일간 보관합니다. 실제 배포 단계는 이 CI 아티팩트를 받아 정적 파일로 게시하거나, 배포 현장에서 `pnpm install --frozen-lockfile`과 `pnpm build`를 실행해 만든 `dist/`를 게시해야 합니다. `.openai/hosting.json`은 정적 디렉터리 `dist/`만 지정하며 CI 아티팩트 수령·빌드·배포를 자동으로 연결하지 않습니다. 사용하는 호스팅 파이프라인이 어느 방식으로 `dist/`를 확보하는지 별도로 확인해야 합니다.

페이지 본문은 `src/data/content.ts`와 `src/data/overview.ts`의 구조화 데이터 및 `src/pages/`의 TSX에서 관리합니다. 스타일은 `src/theme/styles.tsx`의 DEVUP UI 코드와 `devup.json`의 토큰을 사용합니다. 원본 이미지는 `public/assets/projects/`에 있습니다. Git에 추적되는 `.html`·`.css` 파일은 0개입니다. `dist/`의 HTML·CSS는 빌드할 때만 생성됩니다.

기여·검증 기준은 [AGENTS.md](AGENTS.md)와 [오케스트레이션 문서](docs/orchestration/README.md)를 참고합니다.

