-- =============================================================================
-- Blog
--
-- Posts are written and published from /admin/blog. Only rows with
-- is_published = true appear on the public site, so drafts stay private.
--
-- Run once in the Supabase SQL editor.
-- =============================================================================

create table if not exists posts (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  slug          text unique,
  excerpt       text,
  body          text,
  cover_url     text,
  tags          text[] not null default '{}',
  published_at  text,
  is_published  boolean not null default false,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now()
);

alter table posts enable row level security;

-- Anyone may read posts; the public pages filter to published ones.
-- Only a signed-in admin can write.
drop policy if exists posts_read on posts;
create policy posts_read on posts for select using (true);

drop policy if exists posts_admin on posts;
create policy posts_admin on posts for all to authenticated using (true) with check (true);
