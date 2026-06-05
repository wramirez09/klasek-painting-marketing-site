<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { routes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/exterior-home-painting.webp?enhanced';
	import { isMobileStore } from '$lib/stores/isMobileStore';

	const faqData: FaqData[] = [
		{
			question: 'How do I know if my gutters need to be repaired or replaced?',
			answer:
				"Sagging sections, persistent leaks, rust, or water spilling over during rain are all signs your gutters need attention. During your free estimate, we inspect the entire system and give you a straightforward recommendation — repair what can be saved, and replace only what can't."
		},
		{
			question: 'Why does gutter condition matter for my siding and paint?',
			answer:
				"Failing gutters send water down your siding and trim, which leads to peeling paint, wood rot, and stucco damage. Keeping your gutters in good shape is one of the most cost-effective ways to protect your home's exterior — and any investment you've made in painting it."
		},
		{
			question: 'Do you replace gutters as part of an exterior painting project?',
			answer:
				'Yes. Many of our customers bundle gutter work with exterior painting or siding repair so everything is handled in one project, by one team, on one timeline.'
		},
		{
			question: 'How long does gutter installation take?',
			answer:
				'Most homes are completed in a single day. Larger homes or projects that include fascia or trim repair may take longer — we give you a clear timeline with your written estimate.'
		},
		{
			question: 'Do you offer free estimates for gutter work?',
			answer:
				'Yes. Every gutter project starts with a free, written estimate that walks you through your options and pricing — no surprises.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Gutter Installation & Repair Service',
		listItems: [
			'Simple, Straight-Forward Pricing',
			'Protects Siding, Trim & Paint',
			'Clear Communication',
			'100% Satisfaction Guaranteed'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column">
		<h2>Complete Gutter Services for Your Home</h2>

		<p>
			Your gutters are your home's first line of defense against water damage. When they fail, the
			damage rarely stays at the roofline — water finds its way into siding, trim, brick, and
			foundations. At Klasek Painting, we install, replace, and repair gutter systems so the
			exterior we've helped you maintain stays protected year-round.
		</p>

		<p>
			With over 30 years of experience caring for Chicagoland exteriors, we treat your gutters as
			part of the whole picture — not an afterthought. <a href={routes['contact'].href}>Contact us</a
			> for a free written estimate.
		</p>
	</div>

	<div slot="right-column">
		<enhanced:img
			class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"
			{src}
			alt="Home exterior with gutter installation by Klasek Painting"
			loading={$isMobileStore ? 'lazy' : 'eager'}
		/>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Gutter Installation & Replacement</h2>
	</HeadingAccent>

	<p>
		When gutters are past saving, replacement is the smart investment. We install quality gutter
		systems sized and pitched correctly for your roofline, so water goes where it should — away from
		your home.
	</p>

	<strong>What you get with new gutters from Klasek:</strong>

	<ul>
		<li>
			<strong>Protection for your exterior:</strong> properly routed water keeps paint, siding, and masonry
			looking newer for longer
		</li>
		<li>
			<strong>A system matched to your home:</strong> styles and colors that complement your exterior
			rather than clash with it
		</li>
		<li>
			<strong>Correct installation:</strong> securely fastened, properly pitched, and sealed at every
			seam
		</li>
		<li>
			<strong>One team, one timeline:</strong> easily bundled with exterior painting or siding work for
			a single, seamless project
		</li>
	</ul>
</BasicTemplateSection>

<BasicTemplateSection class="pb-0">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Gutter Repair & Cleaning</h2>
	</HeadingAccent>

	<p>
		Not every gutter problem calls for a full replacement. Our team repairs sagging runs, reseals
		leaking joints, re-secures loose hangers, and clears out the debris that causes overflows —
		restoring your system's performance at a fraction of replacement cost.
	</p>

	<p>
		Chicagoland weather is hard on gutters. Seasonal cleaning and small, timely repairs prevent the
		ice dams, overflows, and water damage that lead to expensive exterior repairs down the road. If
		you've noticed overflowing gutters, staining on your siding, or pooling water near your
		foundation, <a href={routes['contact'].href}>schedule a free estimate</a> — we'll tell you exactly
		what your system needs and what it will cost.
	</p>
</BasicTemplateSection>

<FaqSection {faqData} />
