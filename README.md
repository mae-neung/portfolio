# 이강욱 포트폴리오

React·Next.js 프론트엔드 개발자 이강욱의 개인 포트폴리오입니다. 기존 정적 사이트의 콘텐츠와 디자인을 유지하면서 [프론트엔드 템플릿](https://github.com/mae-neung/frontend_template)의 공통 기술 기반으로 이전했습니다.

## 실행

Node.js 24.15.0 이상과 pnpm 10.23.0을 사용합니다.

```powershell
pnpm install
pnpm dev
```

`pnpm verify`는 lint, 테스트, TypeScript 검사와 production 빌드를 수행합니다. `pnpm preview`로 `dist/` 산출물을 확인할 수 있습니다.

## 배포와 경로

Vite의 다중 HTML 입력으로 홈, 프로젝트 목록, 14개 상세 페이지를 물리적 `index.html`로 생성하고 React 서버 렌더로 본문을 각 HTML에 미리 포함합니다. 브라우저에서는 hydration으로 테마와 모션을 활성화합니다. 자산 경로는 상대 경로이므로 루트 호스팅과 `/portfolio/` 같은 하위 경로에서 직접 진입할 수 있습니다. `.openai/hosting.json`은 `dist/`를 정적 배포 디렉터리로 지정합니다. 기존 배포 호환성을 위해 현재 `dist/` 산출물을 추적합니다.

페이지 본문은 `src/content/`의 로컬 정적 HTML 조각에 있으며 React가 공통 헤더, 푸터, 라우팅, 테마와 모션을 담당합니다. 이미지는 `public/assets/projects/`, 기존 CSS는 `src/styles/`에 있습니다. 새 UI는 DEVUP UI와 `devup.json`의 포트폴리오 색상을 기준으로 추가합니다.

기여·검증 기준은 [AGENTS.md](AGENTS.md)와 [오케스트레이션 문서](docs/orchestration/README.md)를 참고합니다.

