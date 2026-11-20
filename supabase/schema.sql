-- =============================================================================
-- Victor Abah portfolio — Supabase schema (Phase 2: admin CMS backend)
--
-- Run this in the Supabase SQL editor after creating a project. Each table
-- mirrors an export in src/content/site.ts, so switching the public site from
-- static content to live data is a drop-in replacement.
--
-- Security model:
--   * Public site reads content tables anonymously (RLS: read-only to anon).
--   * Only authenticated admins can write content / read submissions.
--   * The contact form inserts into `submissions` anonymously (insert-only).
-- =============================================================================

-- ---------- Content tables ----------------------------------------------------

create table if not exists site_settings (
  id            int primary key default 1,
  profile       jsonb not null default '{}'::jsonb,  -- name, email, phone, socials…
  hero          jsonb not null default '{}'::jsonb,  -- eyebrow, headline, subtext, stats
  about         jsonb not null default '{}'::jsonb,  -- eyebrow, headline, body
  contact       jsonb not null default '{}'::jsonb,  -- headline, whatsapp message
  seo           jsonb not null default '{}'::jsonb,  -- meta + AEO summary
  updated_at    timestamptz not null default now(),
  constraint singleton check (id = 1)
);

create table if not exists experience (
  id          uuid primary key default gen_random_uuid(),
  role        text not null,
  company     text not null,
  location    text,
  dates       text,
  highlights  text[] not null default '{}',
  sort_order  int not null default 0
);

create table if not exists education (
  id           uuid primary key default gen_random_uuid(),
  degree       text not null,
  institution  text not null,
  year         text,
  sort_order   int not null default 0
);

create table if not exists services (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text,
  icon        text,
  sort_order  int not null default 0
);

create table if not exists skills (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  level       int not null check (level between 0 and 100),
  sort_order  int not null default 0
);

create table if not exists portfolio_items (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  category      text not null check (category in ('Websites','App Development')),
  description   text,
  image_url     text,
  video_url     text,
  link          text,
  is_video      boolean not null default false,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now()
);

create table if not exists testimonials (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  title       text,
  company     text,
  quote       text not null,
  photo_url   text,
  sort_order  int not null default 0
);

create table if not exists clients (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  logo_url    text,
  sort_order  int not null default 0
);

create table if not exists certifications (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  issuer        text,
  date          text,
  credential_id text,
  url           text,
  sort_order    int not null default 0
);

create table if not exists pricing_tiers (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  price        text,
  blurb        text,
  features     text[] not null default '{}',
  highlighted  boolean not null default false,
  sort_order   int not null default 0
);

-- ---------- Contact submissions ----------------------------------------------

create table if not exists submissions (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  phone         text,
  project_type  text,
  budget        text,
  message       text not null,
  is_read       boolean not null default false,
  created_at    timestamptz not null default now()
);

-- ---------- Row Level Security -----------------------------------------------

alter table site_settings   enable row level security;
alter table experience      enable row level security;
alter table education       enable row level security;
alter table services        enable row level security;
alter table skills          enable row level security;
alter table portfolio_items enable row level security;
alter table testimonials    enable row level security;
alter table clients         enable row level security;
alter table certifications  enable row level security;
alter table pricing_tiers   enable row level security;
alter table submissions     enable row level security;

-- Public read access to content tables
do $$
declare t text;
begin
  foreach t in array array[
    'site_settings','experience','education','services','skills',
    'portfolio_items','testimonials','clients','certifications','pricing_tiers'
  ] loop
    execute format('create policy %I on %I for select using (true);', t || '_read', t);
    execute format('create policy %I on %I for all to authenticated using (true) with check (true);', t || '_admin', t);
  end loop;
end $$;

-- Anyone can submit the contact form; only admins can read/manage it.
create policy submissions_insert on submissions for insert with check (true);
create policy submissions_admin  on submissions for select using (auth.role() = 'authenticated');
create policy submissions_update on submissions for update to authenticated using (true) with check (true);
create policy submissions_delete on submissions for delete to authenticated using (true);

-- ---------- Storage bucket for media uploads ---------------------------------

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- Public read; authenticated admins can upload / update / delete.
create policy "media_public_read"
  on storage.objects for select using (bucket_id = 'media');
create policy "media_admin_insert"
  on storage.objects for insert to authenticated with check (bucket_id = 'media');
create policy "media_admin_update"
  on storage.objects for update to authenticated using (bucket_id = 'media');
create policy "media_admin_delete"
  on storage.objects for delete to authenticated using (bucket_id = 'media');
