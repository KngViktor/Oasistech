-- =============================================================================
-- Portfolio screenshots moved from PNG to WebP (117MB -> 9.6MB).
--
-- The files in public/portfolio/ are now .webp, so the stored .png paths point
-- at files that no longer exist. Run this once, in the Supabase SQL editor,
-- against the portfolio project. Required with the deploy that ships WebP.
--
-- Safe to re-run: paths already ending in .webp are left alone.
-- =============================================================================

update portfolio_items
set image_url = regexp_replace(image_url, '\.(png|jpg|jpeg)$', '.webp')
where image_url like '/portfolio/%'
  and image_url ~* '\.(png|jpg|jpeg)$';

-- The social sharing card is now a purpose-built 1200x630 image.
update site_settings
set seo = jsonb_set(seo, '{ogImage}', '"/og.png"'::jsonb)
where id = 1;

-- Check: every portfolio image should now end in .webp.
select image_url from portfolio_items where image_url not like '%.webp' order by sort_order;
