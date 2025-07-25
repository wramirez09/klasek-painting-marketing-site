<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { galleryRoutes, routes, serviceRoutes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/exterior-brick-staining-service.webp?enhanced';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question: 'How does brick stain work?',
			answer:
				"When stain is applied to brick, it gets absorbed into the surface, similar to how wood stain is absorbed into wood. Brick stain also works on stone and, unlike paint, it won't peel or chip away."
		},
		{
			question: 'Can brick stain match existing brick or create a new look?',
			answer:
				"Yes, brick stain can match existing brick or create a new look. If you're unsure about the color, it's a good idea to get a few different samples and test them on loose bricks or in a hidden spot since bricks absorb the color."
		},
		{
			question: 'Does brick stain have a strong odor, and can it be applied in winter?',
			answer:
				"Brick stain does not have a strong odor, so there's no need to leave the house during application. It can be applied in winter as long as the temperature isn't too low. Be sure to follow the temperature guidelines on the can."
		},
		{
			question: 'Should I stain the mortar when staining bricks?',
			answer:
				"Yes, it's important to stain the mortar to match the newly stained brick for a consistent and even look. The same applies if you're painting brick or stone."
		},
		{
			question: 'Can I stain bricks that are covered with a non-porous sealant?',
			answer:
				"No, you can't stain bricks covered with a non-porous sealant like paint or varnish because the pores are closed, preventing the stain from penetrating. In this case, you can paint the bricks instead."
		},
		{
			question: 'How is the cost of brick staining determined?',
			answer:
				"The cost of brick staining depends on the job and contractor. Some contractors charge by the square foot, while others charge by the day or half-day. It's important to contact a trustworthy contractor who will give you a fair deal."
		},
		{
			question: 'Is it difficult to remove brick stain once applied?',
			answer:
				'Yes, brick stain is designed to be absorbed into the brick and mortar, making it difficult to remove. If you want to change the color later, you may need to apply a coat of paint over the stained brick.'
		},
		{
			question: 'How long does it take for brick stain to dry completely?',
			answer:
				"The drying time for brick stain can vary depending on the product and environmental conditions, but it typically takes 24 to 48 hours to dry completely. Make sure to follow the manufacturer's instructions for the best results."
		},
		{
			question: 'What are the steps to stain brick?',
			answer:
				'Staining brick involves several steps: 1) Clean the brick thoroughly to remove dirt and grime. 2) Test the stain on a small, hidden area. 3) Apply the stain evenly with a brush or sprayer. 4) Allow the stain to dry completely. 5) Repeat the application if necessary for a deeper color.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Exterior Brick Staining Company',
		listItems: [
			'Curb Appeal Boost',
			'Attention to Detail',
			'100% Satisfaction Guaranteed',
			'High-quality Materials'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="lg:order-first order-last">
		<enhanced:img
			class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"
			{src}
			alt="Halfway complete brick staining project, white stain on brick house by Klasek Painting"
		/>
	</div>

	<div slot="right-column">
		<h2>Most Trusted Brick Staining Services</h2>

		<p>
			Exterior brick staining is an excellent way to refresh and modernize the look of your home
			while preserving the natural texture of the brick. Unlike <a
				href={routes['brick-painting'].href}>painting brick</a
			>, staining penetrates the brick surface, providing a more natural and long-lasting finish. At
			Klasek Painting, we specialize in exterior brick staining, offering a variety of color options
			to enhance your home's curb appeal. Whether your home has traditional or contemporary
			architecture, our team can tailor the staining process to suit your style.
		</p>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Materials Needed For Staining Exterior Brick</h2>
	</HeadingAccent>

	<p>
		Staining exterior brick requires specific materials to achieve a uniform and durable finish.
	</p>

	<h3>Here are the essential materials we use:</h3>

	<ul>
		<li>
			<strong>Brick Cleaner:</strong> To thoroughly clean the brick and remove any dirt, mildew, or efflorescence
		</li>
		<li>
			<strong>Brick Stain:</strong> High-quality stain designed specifically for masonry surfaces
		</li>
		<li>
			<strong>Sealant:</strong> A weather-resistant sealant to protect the stained brick from moisture
			and other elements
		</li>
		<li>
			<strong>Brushes and Rollers:</strong> For applying the stain evenly and reaching all the brick's
			nooks and crannies
		</li>
		<li>
			<strong>Drop Cloths and Tape:</strong> To protect surrounding areas and ensure a clean, professional
			finish
		</li>
	</ul>

	<p>
		Using the right materials is crucial for achieving a beautiful and durable stained brick finish.
		At Klasek Painting, we ensure that every product we use meets the highest standards of quality.
		This attention to detail helps us deliver results that not only look stunning but also stand up
		to the test of time.
	</p>
</BasicTemplateSection>

<BasicTemplateSection class="pb-0">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Our Brick Staining Process</h2>
	</HeadingAccent>

	<p>
		At Klasek Painting, we follow a meticulous process to ensure that your exterior brick staining
		project is completed to the highest standard.
	</p>

	<h3>Here's how we achieve outstanding results:</h3>

	<ol>
		<li>
			<strong>Initial Consultation:</strong> We start with a
			<a href={serviceRoutes['design-consultation'].href}>comprehensive consultation</a> to understand
			your vision and assess the condition of your brick. This includes selecting the perfect stain color
			to complement your home's architecture.
		</li>
		<li>
			<strong>Surface Cleaning:</strong> Proper surface preparation is essential. We clean the brick
			thoroughly using a specialized brick cleaner to remove dirt, mildew, and efflorescence, ensuring
			the stain adheres properly.
		</li>
		<li>
			<strong>Stain Application:</strong> We apply the high-quality brick stain using brushes and rollers,
			ensuring even coverage and penetration into the brick. Multiple coats may be applied to achieve
			the desired color and depth.
		</li>
		<li>
			<strong>Sealing:</strong> After the stain has dried, we apply a weather-resistant sealant to protect
			the brick from moisture and other elements, ensuring a long-lasting finish.
		</li>
		<li>
			<strong>Final Inspection:</strong> We conduct a detailed final inspection to ensure the staining
			is flawless and meets your expectations. Our team checks for consistency, coverage, and overall
			quality to guarantee complete satisfaction.
		</li>
	</ol>

	<p>
		Our professional painters are dedicated to providing excellent performance on every project.
		With years of experience, we ensure that your exterior brick staining is handled with the utmost
		care and precision. Klasek Painting proudly serves Cook County and the surrounding areas,
		offering top-notch exterior brick staining services to enhance your home's appearance and
		durability. Trust us to deliver exceptional care and results for your brick staining project.
	</p>

	<GalleryLinkBlock data={[galleryRoutes['brick-painting']]} />
</BasicTemplateSection>

<FaqSection {faqData} />
