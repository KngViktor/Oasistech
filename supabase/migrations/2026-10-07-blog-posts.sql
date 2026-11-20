-- =============================================================================
-- Ten published posts for /blog.
--
-- Run AFTER 2026-10-07-blog.sql, which creates the table.
-- Every post is editable at /admin/blog: change the text, unpublish one, or
-- delete any that do not fit. Safe to re-run: posts are matched on slug.
-- =============================================================================

insert into posts (title, slug, excerpt, body, tags, published_at, is_published, sort_order) values
('What a POS system should actually do for a small shop','what-a-pos-system-should-do-for-a-small-shop','Most shops do not lose money to theft. They lose it to not knowing what sold, what is finished, and whether the drawer balanced at closing. Here is what to insist on before you pay for any point-of-sale system.','A shop owner once told me he knew his business was doing fine because the shop was busy. He could not tell me which products made that money, which ones had been out of stock for two weeks, or why Saturday''s cash was short by eleven thousand naira. The shop was busy. The business was leaking.

A point-of-sale system earns its cost by answering those three questions every single day. Everything else is decoration.

## It has to be faster than the notebook

This is the test most systems fail. If ringing up a customer takes longer than writing in a book, your staff will stop using it during the rush, which is exactly when the data matters. A sale should be three or four taps: find the product, confirm quantity, take payment, done.

Watch the person who will actually use it. If they hunt for products, the search is wrong. If they cannot find a product by its everyday name, the catalogue was set up by someone who does not work the counter.

## Stock has to move when a sale happens

Inventory that updates only when someone remembers to update it is not inventory. Every sale should reduce stock automatically, every delivery should increase it, and transfers between your shop and your store should be recorded as they happen.

What you want out of that is one screen: what is low, what is finished, what has not sold in sixty days. The first two protect your sales. The third protects your cash, because slow stock is money sitting on a shelf.

## The drawer has to balance against something

Open a shift, count the cash you start with, sell through the day, then count what is there at closing. The system tells you what should be there. The difference is a number you can actually ask about.

Without shifts, a shortage is an argument. With shifts, it is a specific amount, on a specific shift, with a specific person who counted it.

## Every payment method needs recording separately

Cash, transfer and card are three different stories. Transfers need checking against the bank, cards settle later, cash is in the drawer now. A system that lumps them into one total hides the one that is wrong.

## It must keep selling when the network drops

This is non-negotiable in Nigeria and a good idea everywhere. If the system stops when the network does, staff go back to the notebook and you lose the day''s data. The right behaviour is to keep taking sales locally and sync when the connection returns.

## Someone has to be accountable for changes

Prices get changed. Discounts get applied. Items get voided. None of that is suspicious on its own, but all of it should be recorded with a name and a time. An activity log is not about distrust. It is about being able to answer a question six weeks later without guessing.

## What you can skip at the start

Loyalty schemes, elaborate reporting dashboards, multi-currency, integrations with accounting software. Every one of them is reasonable later. None of them matters in month one, and chasing them is how shops end up paying for software they never finish setting up.

Start with: fast sales, automatic stock, shifts and cash-up, payment methods split out, an audit log. Run that for a month. The next thing you need will make itself obvious, and it will be something I could not have guessed from here.',array['POS','Retail','Inventory']::text[],'7 October 2026',true,0),
('Choosing a school management system without wasting a term','choosing-a-school-management-system','Schools rarely fail at buying software. They fail at the rollover, when last term''s data will not carry into this one. These are the questions to ask before you commit a session to any system.','Most school software demos look the same. Enrolment, attendance, results, fees, a parent portal. The differences only appear in week six, when a teacher cannot take a register on her phone, or at the end of term, when the report cards will not print correctly.

Here is what separates a system a school keeps from one it abandons.

## Does it understand terms and sessions, or did someone hard-code three terms?

Schools differ. Some run three terms, some two semesters, some have a mid-term break that affects attendance counts. If the structure is fixed in the code, every year you will fight it.

Ask directly: can I define my own sessions and terms, and what happens to last year''s data when I roll over? If the answer is vague, you will be re-entering pupils next September.

## Can a teacher take the register on the phone she owns?

Not the phone in the demo. The one in her pocket, on the school''s patchy wifi, in a classroom where she has four minutes between periods.

A register should be one screen, one pass, one save. If marking thirty pupils makes thirty separate requests, it will fail halfway through on a weak connection and she will keep a paper list instead. Once teachers keep paper, the system is already dead.

## Are grading rules settings, or are they code?

Continuous assessment weighting, exam weighting, grade bands, pass marks, position in class. Every school does these differently, and most schools change them at some point.

These must be settings an administrator can change. If a developer has to be called to change a pass mark from 40 to 45, you have bought a liability.

## Will the report card print properly on A4?

This sounds trivial and it is the single most common failure. Schools print. Parents expect a document. If the report card is designed only for a screen, somebody will spend the last week of term fighting with page breaks.

Ask to print one during the demo, on the paper you actually use.

## Does the fees side show you who still owes?

Billing is the easy half. The hard half is answering, in one screen: what did we bill, what has been collected, who is outstanding, and which invoices are part-paid. That is what the bursary needs on a Monday morning.

If payments are collected online, the gateways matter. In Nigeria, that usually means Paystack, Flutterwave and Remita, plus bank transfer with a reference the bursar can reconcile.

## Can a pupil or parent see their own record, and nothing else?

A portal is useful only if the isolation is real. A pupil should see their own attendance, results and invoices. A teacher should see their classes. An administrator should see their school, and if you are a group, one school''s staff must never see another school''s pupils.

Ask how that isolation is enforced. The answer you want involves the database refusing it, not the application remembering to filter.

## Is there a record of who changed what?

Marks get amended. Payments get recorded. Pupils get moved between arms. All legitimate, all worth logging with a name and a timestamp, because the alternative is a conversation that starts with "nobody touched it".

## The rollover question

Finish every evaluation with this: show me a school moving from one session to the next. Pupils promoted, arms re-assigned, outstanding fees carried over, last year''s results still readable.

Any system can enrol a pupil in September. The one worth paying for is the one that still works the following September.',array['Schools','Management systems','Fees']::text[],'7 October 2026',true,1),
('Why your restaurant is losing orders to a phone number','online-ordering-for-restaurants','A hungry person deciding where to eat wants to see the food, the price and how long delivery takes. If your answer is ''call us'', most of them call someone else instead.','Think about the last time you ordered food. You looked at pictures, you looked at prices, you checked the delivery fee, and you ordered. At no point did you want to speak to anyone.

Now think about what a restaurant with only a phone number asks of that same person: call a stranger, ask what is available, ask the price, repeat your address, and trust that the total you were told is the total you will pay. Every one of those is a reason to close the tab.

## The menu is the website

Not the story about your chef. Not the photo of the dining room. The menu, with prices, in the currency people pay in.

A menu that cannot be browsed is the most common and most expensive mistake I see in restaurant sites. If a visitor has to download a PDF to find out what jollof costs, you have lost them. Put every dish on the page, with a price, a photo and one honest line about what it is.

## Prices stop the phone calls that waste your time

Restaurants sometimes hide prices, thinking a call lets them sell. In practice it filters out the people who were ready to buy and keeps the ones who want to negotiate.

Show the price. Show the delivery fee, or the threshold for free delivery. Show the areas you deliver to. Each of those answers a question that would otherwise have been a phone call or a lost order.

## Three paths, not one

People arrive wanting different things, and the site should not force everyone down the same route:

- Order for delivery, with an address and a time
- Order for pickup, so they skip the queue at the counter
- Book a table, because they are coming to eat in

A site that offers only one of these is quietly turning away the other two.

## Make the kitchen''s promise explicit

"Fresh" means nothing. "We cook when you order, so it is twenty-five minutes, not five" means something. If you have a delivery guarantee, put it where the order button is. If food arrives cold, say what you do about it.

Specific beats impressive. People believe numbers and policies far more than adjectives.

## Let them track it

Most of the anxiety in food delivery happens between paying and eating. An order status that moves from received, to cooking, to on the way, removes nearly all of it, and removes the calls asking where the food is.

## Weekend deals belong on the page, not only on Instagram

A promotion that lives in a story is gone in a day and invisible in search. On the site it works every weekend, and it gives people a reason to come back directly rather than through a delivery platform taking a cut of every order.

## What this is really about

Every delivery platform charges you a commission and owns your customer. Your own ordering page costs you once and the customer stays yours. You will not replace the platforms overnight, and you do not need to. You need the regulars, the people who already know your food, to have somewhere direct to go.',array['Restaurants','Ordering','Delivery']::text[],'7 October 2026',true,2),
('Paystack, Flutterwave, Remita or Stripe: picking the right one','nigerian-payment-gateways-compared','The gateway question is rarely about fees. It is about who your customers are, what currency they pay in, and what happens on the day a payment succeeds but your system never hears about it.','Every project that takes money runs into this question, and most people answer it by comparing percentage fees. That is the least interesting difference between them.

## Start with who is paying

If your customers are Nigerian, paying in naira, with Nigerian cards and bank transfers, you want a Nigerian gateway. Paystack and Flutterwave both do this well, both support cards, bank transfer and USSD, and both settle to a Nigerian account.

If you are billing internationally, in dollars, from customers with foreign cards, Stripe is the straightforward answer and the one your overseas customers already trust.

If you are collecting on behalf of a school, a government body or anything with institutional reporting, Remita is often not a choice at all. It is a requirement handed to you.

Plenty of projects need two. A school that takes fees from local parents and donations from alumni abroad is a two-gateway project, and that is fine.

## The fee difference is smaller than the failure difference

A fraction of a percent matters when you process a lot. What matters more at any volume is how often a payment fails for a reason your customer does not understand, and what you can do when it does.

Ask instead: what does a failed card show the customer? How quickly can I see a specific transaction? Can I refund without emailing support? Those answers decide how much of your week goes on payment problems.

## Bank transfer is not a fallback, it is a primary method

Outside tech circles, a large share of Nigerian customers prefer transfers, and some will abandon a card form rather than type their details. Treat transfer as a first-class option: show the account, generate a reference, and give someone a way to confirm it.

The work here is reconciliation. A transfer that lands with no reference is money you cannot match to an order, which means a human matching it by hand. Build the reference in from the start.

## Pay on delivery is a business decision, not a technical one

It converts well and it loses money to failed deliveries. If you offer it, the system has to track the cash from the rider back to the till, otherwise you have a leak nobody can see.

## The part everyone skips: webhooks

A customer pays, the gateway confirms, your system hears about it. That last step fails sometimes. The network drops, your server restarts, the request times out.

If your system only learns about payment from the customer''s browser redirecting back, you will have paid-but-unrecorded orders. Verify every payment server-side against the gateway''s API, and handle the webhook arriving twice for the same payment without creating two orders. That one detail separates systems that need a human babysitting them from ones that do not.

## What I would do on a new project

Nigerian customers paying in naira: Paystack or Flutterwave, bank transfer enabled, references generated per order, webhooks verified server-side.

International customers: Stripe, and keep the local gateway if you also sell at home.

Institutional collection: whatever the institution requires, and budget more time than you think for reconciliation.

Then make the thing you can actually control excellent: a checkout that does not ask for anything it does not need, a clear message when something fails, and a receipt that arrives without being asked for.',array['Payments','Paystack','Flutterwave','Nigeria']::text[],'7 October 2026',true,3),
('Building apps that survive a bad network','apps-that-work-on-bad-networks','Software built on fast wifi breaks in the places it gets used: a classroom, a shop counter, a delivery van. Designing for the bad connection is not an optimisation, it is the requirement.','Most software is built in conditions its users will never experience. Good laptop, fast connection, one browser tab that matters. Then it ships to a teacher marking a register in a classroom with one bar, or a cashier at a counter when the router has gone down.

If the app stops when the network does, people stop using the app. They go back to paper, and the data you were collecting disappears.

## Decide what must work offline

Not everything needs to. Be specific about the few actions that cannot be allowed to fail:

- Taking a payment at a till
- Marking attendance
- Recording a delivery
- Writing a note at a patient''s bedside

These are moments where the person cannot wait, cannot try again later, and will not come back to redo it. Everything else, reports, settings, browsing history, can reasonably require a connection.

## Write locally first, sync second

The pattern that works: the action completes against local storage immediately, the interface confirms it, and a background process pushes it to the server when there is a connection. The user never waits on the network for the thing they must do.

This introduces conflicts, and you have to decide the rules in advance. For a till, the sale is final and sync order does not matter. For a register, the last edit wins. For stock counts across two devices, you need a rule that a human can understand, because a human will have to explain it to someone.

## Save in one request, not thirty

A register of thirty pupils should be one save, not one request per pupil. On a weak connection, thirty requests means some succeed and some do not, and you end up with a half-marked register and no clear way to tell which half.

Batch the work. One request either lands or it does not, and retrying it is safe.

## Make retries safe to repeat

Any request that moves money or creates a record should carry an identifier the server can recognise, so that the same request arriving twice creates one record, not two. Without this, every retry risks a duplicate sale.

## Show the truth about state

People tolerate a slow connection. They do not tolerate uncertainty. Show what is saved, what is queued, and what failed. A small indicator saying three sales waiting to sync is enough, and it stops the panic that makes someone enter the same sale again.

## Keep the payload small

Large images, uncompressed responses and chatty APIs are what turn a weak connection into a broken one. Send less. Compress what you send. Load the heavy parts only when asked.

This also decides whether your app works on the phone your user actually owns, which is usually a mid-range Android two or three years old, not the latest device on your desk.

## Test on the real thing

Throttle your connection. Turn wifi off halfway through a save. Try it on a cheap phone. The bugs that matter only appear under those conditions, and they are the bugs that decide whether people keep using what you built.',array['Apps','Offline','Mobile']::text[],'7 October 2026',true,4),
('What a website or app actually costs, and why nobody will quote you','what-a-website-or-app-actually-costs','The honest answer to ''how much for a website'' is another question, and here is why. Also: how to describe what you want so that any developer can price it properly.','Ask three developers what a website costs and you will get three ranges that do not overlap. That is not evasion. A five-page company site and a system that takes payments, manages stock and has three types of user are both called websites, and they are not the same job.

Here is what actually moves the price, so you can judge a quote rather than guess.

## What drives cost

**Does it have accounts?** The moment there are users who log in, there are roles, permissions, password resets, and the question of who can see what. That is a significant step up from a site that only presents information.

**Does money move through it?** Payments bring gateways, failed transactions, refunds, receipts and reconciliation. All of it has to be right, because being wrong costs real money.

**How many kinds of user are there?** A pupil, a teacher, a bursar and an administrator are four interfaces with four sets of permissions, not one interface with a switch.

**Where does the content come from?** If you want to change text and images yourself, that needs an admin. Worth it, but it is work.

**What does it integrate with?** Every external system, accounting, delivery, SMS, an existing database, is a point of failure that needs handling.

**What happens after launch?** Hosting, domains, fixes, and the things that only appear with real users. Anybody quoting a build without this is quoting half the job.

## How to describe what you want

You do not need a specification. You need to answer three questions clearly:

- Who uses this, and what is each of them trying to get done?
- What does the business lose today because it does not exist?
- What must be true on launch day for this to be worth paying for?

That third one is the most useful question in the whole process. It separates what you need from what you would like, and it is usually the difference between a project that ships and one that drifts.

## Fixed scope or ongoing

Two sensible shapes. **Fixed scope**: a defined piece of work, a timeline, a price agreed before anything starts. Good when you know what you want and it will not change much.

**Retainer**: continuous work, releasing as you go. Good when the thing will keep evolving, which is true of most systems that run a business.

What you want to avoid is the middle: an open-ended project with no defined end, billed by the hour, where neither side can say what done means.

## Questions worth asking any developer

- Who owns the code when it is finished?
- What happens if I want to change the text next month, do I pay for that?
- What exactly is included after launch, and for how long?
- Can I see something working before the end, or only at the end?

That last one matters more than people realise. Seeing the thing in pieces as it comes together is how you catch a misunderstanding in week two rather than week ten.

## The cheapest project is the one scoped honestly

Most expensive projects are not expensive because of the day rate. They are expensive because nobody wrote down what was being built, so it was built twice.',array['Pricing','Scoping','Projects']::text[],'7 October 2026',true,5),
('What patients actually look for on a hospital website','hospital-and-clinic-website-essentials','A patient choosing a hospital has three questions and limited patience. Most clinic websites answer none of them and lead with a photo of the building instead.','When someone lands on a hospital website, they are rarely browsing. They have a symptom, a referral, or a worry about a family member, and three questions:

Can I see the right specialist? Will my cover pay for it? How soon can I be seen?

Answer those and you have a patient. Lead with a stock photo of a smiling receptionist and a paragraph about your commitment to excellence, and they are already looking at the next result.

## List your consultants by what they treat

Not an alphabetical staff directory. A patient with chest pain is looking for cardiology, and they want to know a named consultant exists, what they specialise in, and when they hold clinic.

Credentials matter here more than almost anywhere else on the web. Fellowships, training, years in practice. This is one of the few industries where listing qualifications is not boasting, it is the information the reader came for.

## Say which insurers and HMOs you accept

Plainly, as a list, on a page someone can find without calling. This single piece of information decides whether a patient comes to you or somewhere else, and leaving it off generates phone calls that your reception has to answer all day.

## Let them book without a referral, if that is true

If a patient can book directly, say so where the booking button is. If a referral is required for some services and not others, say which. Ambiguity costs you the appointment.

The booking form should ask for the minimum: who they are, how to reach them, what they need, and when. Everything else can be collected at the desk. Every extra field is another chance to abandon.

## Be specific about diagnostics and turnaround

"Modern facilities" means nothing. "CT, MRI, ultrasound and an on-site pathology lab, with most results released within 24 hours" means something, and it is the detail that wins a patient who is comparing two hospitals.

## Put the emergency number where panic can find it

In the header, on every page, tappable on a phone. Someone in an emergency is not navigating a menu. If you have 24/7 emergency cover, that line should be visible without scrolling.

## Health content earns the visit before it is needed

Articles written by your own consultants do two jobs. They bring in people searching symptoms, which is how most healthcare journeys start online, and they demonstrate the expertise of the person who would be treating them.

Write what patients actually ask about. What a blood pressure reading means. What happens in the first ninety minutes of a heart attack. When a fever needs A&E rather than a clinic. Put the consultant''s name on it.

## Say what you are licensed by

Regulatory licences, accreditations, certifications. In healthcare, trust signals are not decoration; they are part of the decision, and a patient choosing between two unfamiliar hospitals will use them.

## The test

Open your hospital website on a phone. Can you find a cardiologist, confirm your HMO is accepted, and request an appointment, in under a minute, without calling anyone?

If not, that is the entire project.',array['Healthcare','Booking','Websites']::text[],'7 October 2026',true,6),
('Selling on Instagram? Here is what the DMs are costing you','from-instagram-dms-to-a-real-storefront','Instagram is where customers find you. It is a terrible place to sell to them. Every ''price?'' comment is a sale that needed an answer eight hours ago.','Instagram is good at one thing: putting your product in front of someone who was not looking for it. It is bad at nearly everything after that.

A buyer sees a bag they like. They comment asking the price. You reply four hours later. They ask if you have it in black. You reply the next morning. By then they have bought something else. The product was fine. The process lost the sale.

## What the DM actually costs

**The buyer who will not ask.** For every person who comments "price?", several looked, found no price, and left. You never see them, which is why this cost stays invisible.

**Your evenings.** Answering the same three questions all day is a job, and it is a job that does not scale past a certain number of orders.

**Trust.** A stranger asking you to send money to a personal account, with no order record and no return policy, is asking for a leap of faith. Some people will take it. Most will not.

**Everything you cannot see.** Which products get viewed and not bought. What people search for and you do not stock. Which posts actually lead to sales.

## What a storefront changes

A proper shop page answers, without you: what it costs, whether it is in stock, what sizes or colours exist, what delivery costs, how long it takes, and what happens if it is wrong.

That is it. That is the whole difference. The customer gets answers at the moment they are deciding, which is almost never the moment you are free to reply.

## The things that actually close the sale online

**Prices on everything.** Hiding price to drive enquiries filters out buyers and keeps hagglers.

**Real photos from several angles.** Not just the styled shot. Buyers want to see the thing.

**Payment options people trust.** Card and transfer through a proper gateway, so there is a record. Pay on delivery if your margins allow it, because it removes the last objection for a first-time buyer.

**Delivery stated upfront.** Cost, areas, timeframe. Surprise delivery charges at the end are the single biggest cause of abandoned carts.

**A returns policy in plain words.** Most people never use it. Everyone checks it exists.

**Reviews from real customers.** The closest thing to the friend''s recommendation that made Instagram work in the first place.

## Keep Instagram, change its job

This is not an argument for abandoning social. Instagram stays the top of the funnel: the product shots, the behind-the-scenes, the reels that reach new people. The link in the bio stops being a DM invitation and becomes a shop.

You will still answer questions. You will answer the interesting ones, from people who have already seen the price and decided they want it.

## What to build first

Resist the full platform. Start with: a product catalogue with real prices and stock, a checkout with one trusted payment method, a delivery policy, and an order confirmation that reaches the customer by email or WhatsApp.

Sell through that for a month, then look at what people actually asked for. It will not be what you expected, and that is the point.',array['E-commerce','Small business','Payments']::text[],'7 October 2026',true,7),
('Hotels: every booking platform sale costs you twice','direct-booking-versus-commission','Travel platforms bring guests you would not otherwise reach, and charge for it twice: the commission, and the fact that the guest becomes theirs, not yours.','Booking platforms are not the enemy. They put a small property in front of travellers who would never find it otherwise, and for a new property that reach is worth paying for.

The problem is what happens to the guest afterwards. They booked through the platform, so the platform has their email, their preferences and their loyalty. When they return to the city, they return to the platform, and you pay the commission again on a guest you already earned.

Direct booking is how you keep the second visit.

## Why guests book direct when they do

Not patriotism, and rarely price alone. People book direct when the direct option is obviously better and visibly safe:

- The rate is the same or better, and that is stated plainly
- Availability is real, not an enquiry form that takes a day to answer
- The photos are better and more honest than the platform''s
- Something is included that the platform cannot offer: late checkout, breakfast, airport pickup, a room preference

That last one is the lever most properties never pull. You control it entirely and the platform cannot match it.

## Photography is the product

Nobody books a room from a description. The gallery is the decision, and it needs to show what a guest actually wants to know: what the room really looks like, the bathroom, the view, the breakfast, the pool if you have one, and the entrance so they recognise it when they arrive.

Shoot every room type. A guest comparing two properties will choose the one they could picture themselves in.

## Availability or nothing

An enquiry form is not a booking. If a guest has to send a message and wait, they will book the platform where they can confirm in ninety seconds and then sleep.

If you cannot run live availability yet, at least be honest and fast: say you respond within an hour, and then actually do.

## One property or several

If you run several properties under one brand, the group site and the property sites do different jobs. The group site builds the brand and helps someone choose between locations. Each property needs its own page or site with its own gallery, its own facilities and its own booking path, because a guest deciding on one location does not want to wade through the others.

## The things that decide a booking and cost nothing to state

Check-in and check-out times. Whether there is parking. Whether the power supply is backed up. Whether the wifi actually works for a video call. Whether children are welcome. Whether the restaurant serves dinner.

Each one is a question somebody would otherwise ask by phone, or quietly decide against you on.

## The realistic goal

You are not going to leave the platforms, and you should not try. The goal is a steady share of bookings coming direct, especially from returning guests and from people who found you on a platform and then checked your own site before booking.

That share is the most profitable business you have, and it only exists if your own site is good enough to earn it.',array['Hospitality','Booking','Websites']::text[],'7 October 2026',true,8),
('Custom system or off-the-shelf software: how to decide','custom-system-or-off-the-shelf','Custom is not automatically better, and SaaS is not automatically cheaper. The decision comes down to how unusual your process really is, and how much of it you are willing to change.','Every business believes its process is unique. Most are not, and that is good news, because off-the-shelf software is cheaper, available today, and maintained by somebody else.

But some businesses genuinely are unusual, and for them, forcing the business to match the software is more expensive than building software that matches the business.

Here is how to tell which one you are.

## Buy off-the-shelf when

**Your process is ordinary and you are willing to adapt.** If you keep standard records and run a standard workflow, the existing product is better than anything built for you in a month, because thousands of businesses have already found its bugs.

**You need it now.** Subscribing takes an afternoon. Building takes weeks at minimum.

**The budget is small and uncertain.** A monthly fee you can stop beats a build you have to finish.

**Nobody will maintain it.** Custom software needs someone when it breaks. If you have no plan for that, buy.

## Build custom when

**The process is genuinely yours, and it is why you are competitive.** If the way you do the work is the advantage, software that forces you into someone else''s way is expensive in a way that never shows on an invoice.

**Nothing on the market fits without three workarounds.** Watch for the tell: spreadsheets alongside the software, to hold what the software cannot. Those spreadsheets are the specification for what you actually needed.

**You are paying per user for a fraction of the features.** Fifty staff on a per-seat plan, using four features out of forty, is a steadily growing bill for software that still does not fit.

**Integration is the whole job.** Sometimes the real need is to connect three things you already use. That is a custom build, and usually a small one.

**Your data cannot leave, or must live somewhere specific.** Regulatory or contractual constraints sometimes settle the question before anything else.

## The middle road most people miss

You rarely have to choose for the whole business. Use standard tools for standard things, accounting, email, payroll, and build only the part that is actually yours.

A restaurant does not need custom accounting. It might need its own ordering flow. A school does not need a custom email system. It might need its own results and fees logic, because that is where its rules live.

Build the core. Buy the edges.

## The costs people forget on both sides

**Off-the-shelf:** per-user pricing as you grow, paying for a tier to unlock one feature, data you cannot easily export, and the price rising on someone else''s schedule.

**Custom:** hosting, maintenance, the fixes that appear with real users, and dependence on whoever built it. Mitigate that last one by owning the code and keeping it in a language more than one person can read.

## The question that usually settles it

What does the business do today that the software would have to stop you doing?

If the answer is nothing important, buy. If the answer is the thing that makes the business work, build that part, and buy the rest.',array['Management systems','Buying software','Strategy']::text[],'7 October 2026',true,9)
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  body = excluded.body,
  tags = excluded.tags,
  published_at = excluded.published_at,
  is_published = excluded.is_published,
  sort_order = excluded.sort_order;

select count(*) as published_posts from posts where is_published;
