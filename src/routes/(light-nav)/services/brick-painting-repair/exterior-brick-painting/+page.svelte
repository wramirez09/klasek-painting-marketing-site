<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import { routes } from '$lib/common/routing/routes';
	import src from '$images/services/brick-painting-service-before-and-after.webp?enhanced';

	const faqData: FaqData[] = [
		{
			question: 'How long does exterior brick painting last?',
			answer:
				"With proper preparation and high-quality paints, exterior brick painting can last 15 years or longer. Regular maintenance and occasional touch-ups will help preserve the paint's longevity, especially in areas exposed to harsh weather."
		},
		{
			question: 'Can I change the color of my brick with paint?',
			answer:
				'Yes, exterior brick painting allows you to completely change the color of your brick. Our team uses premium, breathable paints that not only give your brick a fresh look but also ensure long-lasting protection.'
		},
		{
			question: 'Will painting my brick cause damage over time?',
			answer:
				'No, as long as the correct types of paint are used. We apply breathable, masonry-specific paints that allow moisture to escape, preventing any long-term damage to the brick or mortar. This ensures both the beauty and integrity of your home remain intact.'
		},
		{
			question: 'How do you prepare brick for painting?',
			answer:
				'Proper preparation is key to a successful brick painting project. We thoroughly clean the brick surfaces, repair any damage, and use a primer designed for masonry to ensure that the paint adheres well and provides a durable finish.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Brick House Painting Service',
		listItems: [
			'Free Design & Consultation',
			'Experienced Painters',
			'Meticulous Surface Care',
			'Long-Lasting Results'
		]
	}}
/>

<ColumnTemplateSection class="pb-0 lg:pt-12 pt-4">
	<div slot="right-column">
		<!-- Image -->
		<enhanced:img class="w-full h-auto max-w-[450px] mx-auto" {src} alt="" />

		<small>
			<strong>Before & After Brick Home Transformation</strong>
			<p>
				Check out this amazing transformation from a recent job Klasek Painting did in the Chicago
				suburbs. As you can see there is quite a difference between the dreary old brick and the
				beautifully modern white exterior. <a href={routes['gallery'].href}
					>View more of our past work in our gallery.</a
				>
			</p>
		</small>
	</div>

	<div slot="left-column" class="!justify-normal">
		<h2>Professional Exterior Brick&nbsp;Painting</h2>

		<p>
			Brick exteriors are known for their timeless beauty and durability, but they do require <a
				href={routes['brick-repair'].href}>proper maintenance</a
			>
			to stay in top condition. If you're considering painting your brick home or commercial property,
			Klasek Painting offers <a href={routes['services'].href}>expert services</a> to enhance and protect
			your investment. Regular inspections are crucial, especially in older buildings, to identify and
			address any cracks or damage before painting. Our skilled team ensures that any necessary repairs
			are made, providing a flawless finish that not only revitalizes your brick exterior but also extends
			its lifespan.
		</p>

		<p>
			Ready to give your brick exterior a fresh, new look? <a href={routes['contact'].href}
				>Contact us</a
			> today to schedule a consultation with our expert team.
		</p>
	</div>
</ColumnTemplateSection>

<FaqSection {faqData} />
