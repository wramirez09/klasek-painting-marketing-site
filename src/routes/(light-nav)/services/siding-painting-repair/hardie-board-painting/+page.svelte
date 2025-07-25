<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { galleryRoutes, routes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/hardie-board-siding-painting-before-after-service.webp?enhanced';
	import { isMobileStore } from '$lib/stores/isMobileStore';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question: 'What is Hardie Board siding made of?',
			answer:
				"Hardie Board is a type of fiberboard composed of mechanical pulp and is known for its durability. It's also referred to as Hardie Plank siding, concrete siding, cement-fiber siding, and fiber cement cladding."
		},
		{
			question: 'Do I need to prime new Hardie Board before painting?',
			answer:
				"Yes, even though new Hardie Board comes with a factory primer, it's essential to apply a high-quality primer to ensure proper coverage, especially on the edges. We recommend using Loxon Masonry Primer by Sherwin-Williams."
		},
		{
			question: 'What type of paint should I use on Hardie Board siding?',
			answer:
				'For the best results, use a high-quality acrylic latex exterior paint from reputable brands like Sherwin Williams, Benjamin Moore, or Behr. These paints offer superior protection and longevity for your siding.'
		},
		{
			question: 'Can I roll on paint when painting Hardie Board?',
			answer:
				'While you can use a roller, spraying the paint is the preferred method. Spraying ensures that the paint gets into all the cracks and covers every surface thoroughly.'
		},
		{
			question: 'How should I prepare faded Hardie Board for painting?',
			answer:
				'To prepare faded Hardie Board, ensure thorough preparation by setting any popped nails, scraping off loose or peeling paint, and caulking significant gaps. Repair or replace any sections in direct contact with the ground to prevent deterioration.'
		},
		{
			question: 'What are the best practices for painting Hardie Board trim?',
			answer:
				'Before painting trim, make sure all preparation steps are complete. This includes sanding, scraping off loose paint, caulking large cracks, and replacing any dry rot. For trim, doors, spindles, columns, or porch areas, apply a primer coat if they are weathered. Use semi-gloss paint for trim as it looks best and stays cleaner longer.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Hardie Board Siding Painting Company',
		listItems: [
			'Attention to Detail',
			'Experienced Painters',
			'Clear Communication',
			'100% Satisfaction Guaranteed'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column">
		<h2>All About Painting Exterior Hardie Board Siding</h2>

		<p>
			Hardie Board is a heavy type of fiberboard made from mechanical pulp. It's also called Hardie
			Plank siding, concrete siding, cement-fiber siding, and fiber cement cladding. You'll see this
			siding on many homes in the Chicago suburbs, and, more recently, some artists even use it as a
			canvas. You can find Hardie Board siding in various finishes, thicknesses, and types to mimic
			coarse chipboard, plywood, or real wood. Its preparation for painting depends on usage.
		</p>

		<p>
			Hardie Board colors vary as the siding almost always comes pre-primed to protect it during
			shipment. When ordering new, it's smart to get a shade close to the color you want your home
			to be. Cut edges, factory primed and unprimed boards require priming before painting. Read on
			to learn more about this popular siding material.
		</p>
	</div>

	<div slot="right-column">
		<enhanced:img
			class="w-full h-auto max-w-[550px] mx-auto"
			{src}
			alt="Hardie board siding project before and after by Klasek Painting"
			loading={$isMobileStore ? 'lazy' : 'eager'}
		/>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true}>
		<h2>New Hardie Board Painting Recommendations</h2>
	</HeadingAccent>

	<p>
		New Hardie Board may come with factory primer applied, but the coating is thin and doesn't cover
		the edges, so applying an additional primer layer is still necessary. You can use a product like <a
			href="https://www.sherwin-williams.com/painting-contractors/products/families/loxon-professional-products"
			target="_blank">Loxon</a
		>
		Masonry Primer by Sherwin-Williams. When it comes to the top-coat,
		<a href="/">Klasek Painting</a> always uses a high-quality acrylic latex exterior paint. It's essential
		to use a good brand of paint like Sherwin Williams, Benjamin Moore, or Behr. That way, your siding
		is protected, and your paint job will last much longer.
	</p>

	<p>
		For application, although you can roll on the paint, it's best to spray the boards to get the
		paint into all the cracks and make sure the entire surface is covered.
	</p>

	<h3>Faded Hardie Board Painting Recommendations</h3>

	<p>
		One of the reasons Hardie Board is so popular is because it is “hardy.” But the color can fade
		in the intense heat of our Chicago area. That's why it's important to use good quality paint
		that resists fading. When it comes time to paint, make sure preparation is thorough. That
		includes setting any popped nails, scraping any loose or peeling paint, and caulking any
		significant gaps. On an <a href={routes['exterior-home-painting'].href}>exterior wall</a>,
		Hardie Board wicks moisture like a champ, but if it has direct contact with the ground, there
		can be deterioration. In that case, the damaged section would need
		<a href={routes['siding-painting-repair'].href}>repairing or replacing before painting.</a>
	</p>

	<h3>Tips For Painting Trim</h3>

	<p>
		Once all of the siding is painted, the icing on the cake is the trim work. Make sure the
		preparation is complete before you apply any paint. Prepping trim can include sanding and
		scraping off loose paint, caulking any large cracks, and replacing any dry rot. If the trim,
		doors, spindles, columns, or porch are weathered, it helps to add a primer coat. And for any
		bare wood or metal, priming is a must. For paint sheen on trim, semi-gloss looks best and stays
		cleaner too.
	</p>

	<h3>Klasek Painting Serving Chicagoland</h3>

	<p>
		Klasek Painting has been servicing the beautiful Chicago suburbs for over 30 years. Owner, Pete
		Klasek, is available to answer any questions you may have about having your Hardie Board siding
		painting project. Our company is known for its high-quality work, superior products, dependable
		service, satisfaction guarantee, and on-time completion. We provide and exterior painting
		services at competitive pricing. If you have a home or commercial property you'd like to have
		stained or painted, <a href={routes['contact'].href}>contact Klasek Painting</a> today.
	</p>

	<GalleryLinkBlock data={[galleryRoutes['hardie-board']]} />
</BasicTemplateSection>

<FaqSection {faqData} />
