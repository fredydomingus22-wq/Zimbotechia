-- Enable extensions required for UUID generation
create extension if not exists "pgcrypto";

-- Clientes: Clientes B2B da plataforma
create table if not exists public.clientes (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null unique,
  id_supabase uuid not null unique,
  plano_assinatura text not null default 'free',
  created_at timestamptz not null default now()
);

-- Agentes: Agentes de IA vinculados a um cliente
create table if not exists public.agentes (
  id uuid primary key default gen_random_uuid(),
  id_cliente uuid not null references public.clientes(id) on delete cascade,
  nome text not null,
  tipo_agente text not null,
  status text not null default 'ativo',
  created_at timestamptz not null default now()
);
create index if not exists idx_agentes_id_cliente on public.agentes(id_cliente);

-- Conversas: Mensagens trocadas pelos agentes
create table if not exists public.conversas (
  id uuid primary key default gen_random_uuid(),
  id_agente uuid not null references public.agentes(id) on delete cascade,
  "timestamp" timestamptz not null default now(),
  mensagem text not null,
  origem_canal text not null
);
create index if not exists idx_conversas_id_agente on public.conversas(id_agente);
