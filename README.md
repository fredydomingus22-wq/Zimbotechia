# Zimbotechia Monorepo

Monorepo for the Zimbotechia platform using **pnpm** workspaces. It contains:

- `apps/web`: Next.js 14 (App Router) with TypeScript and Tailwind CSS.
- `apps/api`: NestJS with TypeScript for the backend API.
- `supabase/migrations`: Database migrations for Supabase/PostgreSQL.

## Getting started

1. Install dependencies (uses the pinned pnpm version defined in `package.json`):
   ```bash
   corepack enable
   pnpm install
   ```

2. Set up environment variables by copying the examples:
   ```bash
   cp apps/web/.env.example apps/web/.env
   cp apps/api/.env.example apps/api/.env
   ```

   - Web (Next.js): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - API (NestJS): `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

3. Run the apps:
   ```bash
   pnpm dev:web   # Next.js
   pnpm dev:api   # NestJS
   ```

## Supabase client SDK

The Supabase JavaScript SDK (`@supabase/supabase-js`) is already declared in both the web and API packages. If you need to reinstall manually, run:

```bash
cd apps/web && pnpm add @supabase/supabase-js && cd ../..
cd apps/api && pnpm add @supabase/supabase-js && cd ../..
```

## Database schema

The initial schema is defined in `supabase/migrations/0001_initial_schema.sql`, creating tables for `clientes`, `agentes`, and `conversas` with UUID primary keys, relationships, and basic indexes.
