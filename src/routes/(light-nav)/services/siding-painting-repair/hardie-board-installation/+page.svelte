<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { routes, galleryRoutes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/galleries/exterior-hardie-board/exterior-hardie-board-1.webp?enhanced';
	import { isMobileStore } from '$lib/stores/isMobileStore';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question: 'What is Hardie Board siding?',
			answer:
				'Hardie Board is a fiber cement siding made by James Hardie. It combines the look of wood siding with far greater durability — it resists rot, pests, fire, and the freeze-thaw cycles that wear out other siding materials in the Chicago area.'
		},
		{
			question: 'Is Hardie Board a good choice for Chicago-area homes?',
			answer:
				"Yes — it's one of the best. Fiber cement handles our region's temperature swings, snow, and humidity far better than vinyl or wood, holding its appearance for decades with minimal upkeep."
		},
		{
			question: 'How long does Hardie Board siding last?',
			answer:
				'With professional installation, Hardie Board siding routinely lasts 30 to 50 years. James Hardie backs its products with industry-leading warranties, and we back our installation with a 100% satisfaction guarantee.'
		},
		{
			question: 'Can you replace just part of my siding with Hardie Board?',
			answer:
				'Yes. We handle everything from full-home re-siding to replacing damaged sections, color-matched and blended with your existing exterior.'
		},
		{
			question: 'Do you paint the new siding as well?',
			answer:
				'We do. As exterior painting specialists, we can finish your new Hardie Board in any color you choose — one team handles the entire project from installation through final coat.'
		},
		{
			question: 'How much does Hardie Board installation cost?',
			answer:
				'Cost depends on the size of your home and the scope of the project. Every project starts with a free, written estimate that lays out your options and pricing clearly — no surprises.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Hardie Board Siding Installation Company',
		listItems: [
			'Fiber Cement Siding Experts',
			'High-Quality Materials',
			'Experienced Installers',
			'100% Satisfaction Guaranteed'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="lg:row-start-1 row-start-2">
		<enhanced:img
			class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"
			{src}
			alt="New Hardie board siding installation by Klasek Painting"
			loading={$isMobileStore ? 'lazy' : 'eager'}
		/>
	</div>

	<div slot="right-column">
		<h2>Upgrade Your Home with Hardie Board Siding</h2>

		<p>
			Hardie Board fiber cement siding gives your home the warmth of wood with the durability to
			stand up to decades of Chicagoland weather. At Klasek Painting, we install new Hardie Board
			siding and replace aging or damaged siding, transforming your home's exterior with a material
			built to last. From full re-siding projects to targeted replacement, our experienced team
			delivers a precise fit and a flawless finish.
		</p>

		<p>
			Ready to see what Hardie Board can do for your home? <a href={routes['contact'].href}
				>Contact us</a
			> for a free design consultation and written estimate.
		</p>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Why Homeowners Choose Hardie Board</h2>
	</HeadingAccent>

	<p>
		There's a reason Hardie Board is one of the most popular siding upgrades in the Chicago suburbs
		— it solves the problems other siding materials create:
	</p>

	<ul>
		<li>
			<strong>Built for our climate:</strong> fiber cement shrugs off freeze-thaw cycles, snow, and humidity
			that crack and warp lesser materials
		</li>
		<li>
			<strong>Decades of service life:</strong> properly installed Hardie Board lasts 30–50 years, backed
			by industry-leading manufacturer warranties
		</li>
		<li>
			<strong>Low maintenance:</strong> resists rot, pests, and fire — no constant scraping, patching,
			or worrying
		</li>
		<li>
			<strong>Timeless curb appeal:</strong> crisp lines and a wide range of styles and colors that elevate
			any architecture, from historic homes to new construction
		</li>
		<li>
			<strong>Lasting value:</strong> siding replacement consistently ranks among the highest-return exterior
			improvements you can make
		</li>
	</ul>
</BasicTemplateSection>

<BasicTemplateSection class="pb-0">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Our Hardie Board Installation Process</h2>
	</HeadingAccent>

	<p>
		Great siding starts with great installation. Fiber cement only delivers on its promise when it's
		fitted, fastened, and sealed correctly — and that's where our experience shows:
	</p>

	<ol>
		<li>
			<strong>Free Consultation:</strong> we assess your current siding, walk you through style and color
			options, and provide a clear written estimate
		</li>
		<li>
			<strong>Preparation:</strong> we remove old or damaged siding and make sure the structure beneath
			is sound before anything new goes up
		</li>
		<li>
			<strong>Precision Installation:</strong> every board is cut, fitted, fastened, and flashed to James
			Hardie's specifications for a weather-tight exterior
		</li>
		<li>
			<strong>Sealing & Finishing:</strong> joints and edges are sealed, and trim is finished for clean
			lines around windows, doors, and corners
		</li>
		<li>
			<strong>Final Walkthrough:</strong> we inspect every detail with you and don't call it done until
			you're completely satisfied
		</li>
	</ol>

	<p>
		Because we're also <a href={routes['hardie-painting'].href}>Hardie Board painting specialists</a
		>, one team can take your project from bare walls to a beautifully finished exterior. Already
		have Hardie siding that needs attention? See our
		<a href={routes['hardie-repair'].href}>Hardie Board repair services</a>.
	</p>

	<GalleryLinkBlock data={[galleryRoutes['hardie-board'], galleryRoutes['siding-repair']]} />
</BasicTemplateSection>

<FaqSection {faqData} />
