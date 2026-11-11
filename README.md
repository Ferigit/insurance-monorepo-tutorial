# Insurance Monorepo Tutorial

A fictional Persian RTL insurance frontend in a pnpm/Turborepo workspace for learning. It is not affiliated with any insurance provider. The example form is local only: it sends and stores nothing and does not create an insurance request. Do not enter real personal information.

## Getting started

Install Node.js 22 or later and enable Corepack, then run `corepack pnpm install --frozen-lockfile`. Copy `apps/web/.env.example` to `apps/web/.env.local` and set an API URL before running `corepack pnpm dev`. The example URL is intentionally nonfunctional, but can be used to explore the demo because it makes no requests. Open http://localhost:3000. Alternatively install the pnpm version pinned in `package.json` and run `pnpm` directly. Run `pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm format:check` before submitting changes. `pnpm --filter @tutorial/web start` starts the production build.

## Layout and architecture

- `apps/web`: Next.js App Router, application styles, and feature-owned code. Client components are limited to interactive features.
- `packages/ui`: small shared React components, imported only through its public package entry point.
- `packages/typescript-config` and `packages/eslint-config`: shared compiler and lint configuration.
- `turbo.json`: dependency-aware package tasks and build caching. Each package owns its scripts.
- `.github/workflows/ci.yml`: automated checks; it does not deploy.

Add a feature under `apps/web/src/features/<name>`, keep its UI and tests together, and compose it from a route. Promote code to a shared package only when it is actually shared. A new package must have a unique name, explicit exports, declared dependencies, and its own applicable scripts. Avoid imports into another feature's internals.

## API and deployment

There is no backend, authentication, telemetry, or API integration yet. `NEXT_PUBLIC_API_BASE_URL` is the single public API endpoint for the current build. Set it to the actual **staging** URL in the staging deployment and the actual **production** URL in the production deployment. The placeholder in the example and CI is not a real endpoint. `next dev` and `next build` fail if the value is missing or invalid. URLs must be absolute HTTP(S), without credentials, a query, or a fragment; a path prefix such as `/api` is supported.

Next.js loads local environment files from `apps/web`, not the repository root. Use the ignored `apps/web/.env.local` for local work; deployment systems should supply the value through their own environment configuration. Never commit real secrets or personal data. This URL is public to browser code, so it must never contain credentials. Future API code can import `getApiBaseUrl()` from `apps/web/src/config/api-base-url.ts`; the demo form does not call it or send requests.

Next.js inlines `NEXT_PUBLIC_` variables at **build time**. Build separately for staging and production with the corresponding URL; changing the variable after `next build` will not change an existing client bundle. Turborepo includes the variable and the web app's `.env*` files in its build cache inputs so a different value does not reuse the wrong build. Do not set `NODE_ENV=staging`: Next.js uses its standard development, production, and test modes independently of deployment environment names.

When an API contract exists, add a feature-owned typed client and runtime response validation, keep secrets server-side, and add integration tests for success and failure. Confirm HTTPS, CORS, authentication, and endpoint ownership for each deployment environment.

The production build is portable to a compatible Node host, but deployment requires an approved hosting target, its environment and security configuration, monitoring, a real API, and product acceptance. Re-run all checks and smoke-test the deployed environment before release.

## Skills

The selected Codex skills are [Turborepo](https://skills.sh/vercel/turborepo/turborepo) for workspace tasks and caching, [React best practices](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) for performance, [composition patterns](https://skills.sh/vercel-labs/agent-skills/vercel-composition-patterns) for component APIs, and [web design guidelines](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines) for accessibility and interface review. Consult version-matched framework documentation as well. Skills are optional developer tools and are not application dependencies.
