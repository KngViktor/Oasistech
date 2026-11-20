-- =============================================================================
-- Three more posts: SEO and AEO (getting found, and getting cited by AI).
--
-- Run AFTER 2026-10-07-blog.sql. Safe to re-run: posts are matched on slug.
-- =============================================================================

insert into posts (title, slug, excerpt, body, tags, published_at, is_published, sort_order) values
('SEO for a business website, without the jargon','seo-basics-for-a-business-website','Most small business sites are invisible for one of three reasons, and none of them require an agency to fix. Here is what actually moves you up the page, in the order worth doing it.','Search engine optimisation has a reputation for being dark arts sold by the month. Most of it is not. For a business with one site and a handful of services, the work that matters is specific, finite, and something you can check yourself.

Here is what I do on every site I build, in the order I do it.

## Decide what you want to be found for, in the customer''s words

This is the step people skip, and skipping it makes everything after it pointless.

You are not trying to rank for your company name. People who search your name already know you. You are trying to be found by someone who has a problem and does not yet know you exist.

So write down what that person types. Not "innovative hospitality solutions", but "hotel in Wuse with parking". Not "bespoke retail technology", but "POS software for a small shop". Say your service out loud to a customer, then write down the words they use back to you. Those are your keywords.

## One page per thing you sell

Google ranks pages, not websites. A single page that mentions eight services ranks for none of them, because it is not clearly about any of them.

If you offer four services, you need four pages, each one about a single service, each with its own title, its own URL and its own content. This is the biggest structural win available to most business sites, and it usually doubles the number of searches you can appear in.

The same applies to locations. If you serve three cities meaningfully differently, that is three pages, not one page listing three cities.

## Title and description are an advert, not a label

The title is the blue link in search results. The description is the grey text under it. Together they decide whether someone clicks you or the result below you.

- Title: around 55 characters, the primary phrase near the front, no stuffing
- Description: around 155 characters, say what the reader gets, in plain language
- Different on every page, always

A technically perfect page with a title that says "Home | Company Ltd" throws away the click it earned.

## Say it on the page, in the first hundred words

If you want to be found for "school management system", the page needs to say school management system, early and naturally. Not forty times. Once or twice near the top, then written like a human wrote it.

This feels obvious and is routinely missed, because businesses write about themselves in their internal language rather than the customer''s.

## Make it fast, especially on a phone

Most of your visitors are on a mid-range phone on mobile data. Speed is a ranking factor and, more importantly, a patience factor.

The usual culprits are images. A 6MB photo that displays at 400 pixels wide is the single most common performance problem on business sites. Resize them, serve modern formats, and let images below the fold load lazily.

## Prove it with structured data

Structured data is a block of machine-readable facts in the page: who you are, what you offer, where you work, what your customers said. It is how your result gets the extra detail that makes it stand out, and it is how AI assistants understand you.

If you only do one thing here, describe your organisation and your services.

## Link your own pages together

A page nobody links to is a page search engines barely value. Link from your homepage to each service page, from service pages to the relevant work, and from your articles to the service they relate to. Use real words in the link, not "click here".

## The boring checklist that catches most problems

- Every page has one H1, and it says what the page is about
- Every image has alt text describing the image
- The site is on HTTPS, with one canonical version (pick www or not and redirect the other)
- There is a sitemap.xml and it lists every page you want found
- robots.txt does not accidentally block anything important
- Search Console is set up and the sitemap is submitted

## What to expect, honestly

Nothing happens in a week. Changes get crawled over days, rankings move over weeks, and a new site competing for a competitive phrase can take months. Anyone promising page one by Friday is selling something else.

What you can control is being genuinely the best answer to a specific question, and making that easy to find. The rest is patience.',array['SEO','Websites','Getting found']::text[],'7 October 2026',true,10),
('Getting your business cited by ChatGPT, Claude and Perplexity','how-to-get-cited-by-ai-assistants','More buyers are asking an assistant instead of searching. Being the answer it gives is a different job from ranking first, and most sites are accidentally bad at it.','Somebody looking for what you sell increasingly asks an assistant rather than a search engine. The assistant answers in a paragraph, names two or three businesses, and the conversation ends. If you are not in that paragraph, you were not considered at all, and no amount of ranking fourth on Google changes it.

This is what people now call AEO, answer engine optimisation, or GEO. The name matters less than the shift: you are optimising to be quoted, not to be clicked.

## How an assistant decides who to name

Broadly, three things:

- What it absorbed during training, which you cannot influence directly
- What it retrieves live from the web when asked
- What it can extract cleanly from your pages in a few seconds

That third one is where almost all the winnable work sits. An assistant skimming your site is looking for plain statements of fact: what you do, who for, where, what it costs, what proof exists. If those facts only exist inside a video, a carousel, or a sentence like "we are passionate about delivering excellence", there is nothing to extract and nothing to quote.

## Write the fact, not the feeling

Compare these two:

- "We deliver world-class software solutions tailored to your unique needs."
- "I build point-of-sale and inventory apps for retail businesses, school management systems, and booking sites, in React and React Native, remotely, billed in dollars or naira."

The first is unquotable. The second answers "who builds a POS app" in one line, and that line can be lifted directly into an answer.

Go through your site and ask of each paragraph: could an assistant quote this to someone who asked a question? If not, rewrite it as the fact underneath it.

## Answer the questions people actually ask

Assistants are answering questions, so pages built as question-and-answer are disproportionately useful to them. A visible FAQ, answering what a thing costs, how long it takes, what is included, what happens afterwards, gives an assistant something to work with and gives your reader the same.

Important: the answers must be visible on the page. Hiding answers in markup that visitors cannot see is both against search guidelines and useless, because the retrieval sees the page the way a reader does.

## Structured data is how you spell it out

Structured data tells a machine, without ambiguity, what your pages mean: this is a person, this is the service offered, this is the price, this is the review, this is the article and who wrote it.

For a business, the ones that earn their keep are organisation or person, your services, your products or projects, FAQs, and articles. It does not guarantee a citation. It removes the guesswork that loses you one.

## Add an llms.txt

A small but growing convention: a plain text file at yoursite.com/llms.txt that summarises who you are, what you offer, and links to your key pages, without navigation or markup getting in the way.

Think of it as the brief you would hand to someone describing your business in a sentence. It costs an hour and it is the cleanest possible version of your facts.

## Be mentioned in places the model already reads

Citations do not come only from your own site. Assistants lean on sources they consider reliable: directories, marketplaces, reputable publications, well-known communities, and your profiles on platforms that get crawled heavily.

A consistent description of your business across those places does two things. It increases the chance of being retrieved, and it makes the facts agree, which matters because contradictory information is a reason to cite someone else.

## Say the specific thing you want to be named for

Assistants answer narrow questions. "Who can build a school management system with Paystack integration" is a far easier question to be the answer to than "who is a good developer".

So state the specific things. The product types, the integrations, the industries, the constraints you handle. Specificity is not a limitation here, it is the entire mechanism.

## How to check whether it is working

Ask the assistants directly, in a fresh chat with no history: "who builds X for Y", or "recommend someone who can build Z". See who gets named and what gets said about them. Then ask about your own business by name and check what comes back is accurate.

That last check matters more than people expect. If an assistant describes your business using an old positioning, the fix is usually a stale page or profile somewhere still saying it.

## The short version

Say what you do in plain facts, answer real questions visibly, mark it up so machines are not guessing, keep the same story everywhere you appear, and check what the assistants say about you the way you would check your own search results.',array['AEO','AI search','SEO']::text[],'7 October 2026',true,11),
('Your site is not ranking: a diagnosis you can run yourself','seo-for-a-site-that-already-exists','Before paying anyone to fix your SEO, spend twenty minutes finding out which of the four common problems you actually have. Three of them are free to fix.','"We are not ranking" is a symptom, not a diagnosis. Underneath it is usually one of four problems, and they have different fixes. Here is how to tell them apart without buying anything.

## Problem one: Google cannot index you

Rare, but fatal, and worth eliminating first.

Search Google for `site:yourdomain.com`. That lists what it has indexed. If nothing comes back, nothing you do about keywords matters.

Common causes: the site was launched with a setting that blocks search engines and nobody turned it off, a robots.txt disallowing everything, pages marked noindex, or a site built so that content only appears after JavaScript runs and the crawler sees an empty page.

If a page is missing, paste its URL into Search Console''s URL Inspection and it will tell you plainly whether it is indexed and why not.

## Problem two: you are indexed, but for the wrong thing

Check what your result actually says. Search your business name and read the title and description Google shows.

If they describe something you no longer do, you are seeing a cached version from before a change. Request indexing in Search Console and it refreshes, usually within days.

If they are accurate but generic, that is a writing problem, not a technical one. Rewrite the title and description to say what you do, in the words a customer would use.

## Problem three: you have one page trying to do ten jobs

This is the most common, and it is structural.

Count your indexable pages. If your entire site is a homepage with sections, you have exactly one page competing for every phrase you care about, and it will win at most one of them.

The fix is pages: one per service, one per location you genuinely serve, one per significant project or case study, and articles answering the questions your customers ask. Each gets its own URL, title and purpose.

This is also the fix that takes real work, which is why it is the one most often skipped in favour of fiddling with keywords.

## Problem four: the competition is simply stronger

Search the phrase you want and look honestly at who is above you. If they are national brands with thousands of pages and years of links, you will not displace them for a broad phrase.

The answer is not to try harder on that phrase. It is to pick phrases where you can win: more specific, more local, more niche. "Developer" is unwinnable. "School management system with Paystack" is a question with few good answers, and the person asking it is much closer to buying.

Narrow until you can realistically be the best answer, then widen later from a position of strength.

## The twenty-minute check

1. `site:yourdomain.com` , are you indexed, and roughly how many pages?
2. Read your own title and description in the results. Do they sell?
3. Open your site on a phone. Does the first screen say what you do?
4. Search three phrases a customer would use. Where are you, and who beats you?
5. In Search Console, check Pages for anything excluded, and Queries for what you already get impressions on.

That last one is the most useful and least used report you have. It shows phrases where you already appear but rank low and nobody clicks. Those are the easiest wins available: you are already in the race, so improving the page or the title moves you up faster than starting from nothing.

## What to fix first

In order: anything blocking indexing, then titles and descriptions on your most important pages, then page speed if the site is heavy, then new pages for the things you sell. Links and content volume come after, not before.

Most sites get a meaningful lift from the first three, and those are a day of work, not a monthly retainer.',array['SEO','Audit','Troubleshooting']::text[],'7 October 2026',true,12)
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  body = excluded.body,
  tags = excluded.tags,
  published_at = excluded.published_at,
  is_published = excluded.is_published,
  sort_order = excluded.sort_order;

select count(*) as published_posts from posts where is_published;
