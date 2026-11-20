-- =============================================================================
-- Adds Cryptox at the top of the portfolio and moves existing rows down.
-- Equivalent to pressing Import in the admin. Run once.
-- =============================================================================

update portfolio_items set sort_order = sort_order + 1;

insert into portfolio_items (title, category, description, image_url, link, is_video, sort_order) values
('Cryptox','Websites','A finance team will not move company money onto a trading platform that was designed for a retail speculator. Cryptox is the product site for one built for businesses, and the page is organised around the objections a treasurer raises: who can approve a trade, whether it passes compliance, what it costs, and who answers at 3am. Role-based permissions and shared wallets, KYC and AML workflows with exportable audit reports, transparent pricing with no hidden spread, a named account manager, and a first-quarter plan laid out week by week from onboarding to scale.','/portfolio/websites/cryptox.webp','https://cryptox-omega-nine.vercel.app',false,0);

select count(*) as total from portfolio_items;
