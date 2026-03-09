# Wedding Appreciation Card

React + TypeScript + Vite로 만든 감사 카드 페이지입니다.

## Local Development

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
```

빌드 결과물은 `dist/`에 생성됩니다.

## Cloudflare Worker Deployment

이 프로젝트는 Cloudflare Worker의 정적 자산 배포 방식으로 설정되어 있습니다. `wrangler.jsonc`에서 `dist/`를 Worker assets 디렉터리로 지정해 두었기 때문에 Worker 엔트리 파일 없이도 `wrangler deploy`가 동작합니다.

### 로컬에서 Worker 방식으로 미리보기

```bash
pnpm run worker:preview
```

### 로컬에서 실제 배포

```bash
pnpm build
pnpm run deploy
```

### Cloudflare 대시보드 설정

Workers Builds 화면이라면 아래처럼 맞추면 됩니다.

- Build command: `pnpm build`
- Deploy command: `pnpm run deploy`

이 설정이면 Cloudflare가 먼저 `dist/`를 만들고, 이어서 `wrangler deploy`가 `dist/`를 Worker assets로 업로드합니다.

배포가 완료되면 기본적으로 `https://wedding-appreciation-card.<your-subdomain>.workers.dev` 형태의 주소로 열립니다.

## Notes

- Node는 `.node-version` 기준으로 22 계열을 사용하도록 맞춰 두었습니다.
- 커스텀 도메인이나 route를 붙이고 싶으면 나중에 `wrangler.jsonc`에 `routes` 또는 `domains`를 추가하면 됩니다.
