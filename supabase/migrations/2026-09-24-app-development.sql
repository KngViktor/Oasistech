-- =============================================================================
-- Portfolio categories: Websites + App Development
--
-- The original schema only allowed 'Websites', 'Graphic Design', 'Logos' and
-- 'Videos', so importing an App Development project fails with a check
-- constraint violation. This migration widens the list, then drops the
-- graphic-design work now that the site is positioned as web and app
-- development.
--
-- Run it once in the Supabase SQL editor (Dashboard -> SQL Editor -> New query).
-- Step 2 DELETES those rows permanently; skip it if you want to keep them.
-- =============================================================================

-- 1. Allow the new category (and keep the old ones valid until step 2 runs).
alter table portfolio_items drop constraint if exists portfolio_items_category_check;
alter table portfolio_items add constraint portfolio_items_category_check
  check (category in ('Websites','App Development','Graphic Design','Logos','Videos'));

-- 2. Remove the graphic design and logo projects.
delete from portfolio_items where category in ('Graphic Design','Logos');

-- 3. Close the list to the two categories the site now uses.
alter table portfolio_items drop constraint portfolio_items_category_check;
alter table portfolio_items add constraint portfolio_items_category_check
  check (category in ('Websites','App Development'));

-- 4. Renumber what is left so sort_order has no gaps.
with ranked as (
  select id, row_number() over (order by sort_order) - 1 as pos
  from portfolio_items
)
update portfolio_items p set sort_order = ranked.pos
from ranked where ranked.id = p.id;
