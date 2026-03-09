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

## Cloudflare Pages Deployment

이 프로젝트는 Cloudflare Pages용 `wrangler` 설정이 포함되어 있습니다.

### 1. Cloudflare 로그인

```bash
pnpm exec wrangler login
```

### 2. Pages 프로젝트 생성

처음 한 번만 실행하면 됩니다.

```bash
pnpm cf:project:create
```

다른 프로젝트명을 쓰고 싶으면 `wrangler.jsonc`의 `name` 값을 먼저 바꾸세요.

### 3. 미리보기 실행

Cloudflare Pages 환경으로 로컬 미리보기를 띄웁니다.

```bash
pnpm cf:preview
```

### 4. 배포

```bash
pnpm cf:deploy
```

배포가 끝나면 `https://<project-name>.pages.dev` 형태의 URL이 발급됩니다.

## Git Integration

Cloudflare 대시보드에서 GitHub 저장소를 연결해서 배포해도 됩니다. 그 경우 설정은 아래처럼 맞추면 됩니다.

- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: `/`
- Deploy command: 비워 두기

`npx wrangler deploy`는 Workers 배포 명령이라 Pages 프로젝트에서는 쓰면 안 됩니다. 배포 로그에 `Executing user deploy command: npx wrangler deploy`가 보이면 Cloudflare 설정에서 해당 값을 제거하세요.

## Direct Upload Or CI

Git 연동 대신 직접 업로드하거나 CI에서 배포할 때만 아래 명령을 사용합니다.

```bash
pnpm exec wrangler pages deploy dist --project-name wedding-appreciation-card
```

Node는 `.node-version` 기준으로 22 계열을 사용하도록 맞춰 두었습니다.
