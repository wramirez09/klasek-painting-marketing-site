<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import { routes, galleryRoutes } from '$lib/common/routing/routes';
	import src from '$images/services/cedar-siding-repair-service.webp?enhanced';
	import project from '$images/services/cedar-siding-repair-project.webp?enhanced';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question:
				'What are the benefits of cedar siding compared to other materials like fiber cement siding?',
			answer:
				'Cedar siding, particularly western red cedar, offers a natural, rustic charm and is a top-rated choice for home exteriors. It is known for its durability and aesthetic appeal compared to fiber cement siding.'
		},
		{
			question: 'How often should I repaint my cedar siding to ensure it protects your home?',
			answer:
				'A fresh coat of paint every 5 to 7 years is recommended for cedar siding. This helps to maintain its appearance and protective qualities, extending its lifespan up to 15 years or more with proper maintenance.'
		},
		{
			question: 'What prep work is necessary before repairing and repainting cedar siding?',
			answer:
				'Proper prep work includes cleaning the siding, removing damaged siding sections, sanding rough areas, and applying a primer. This ensures the fresh coat of paint adheres well and provides a high-quality finish.'
		},
		{
			question: 'Can cedar siding be matched with other building materials on my home?',
			answer:
				'Yes, cedar siding can be seamlessly integrated with other building materials like lap siding or fiber cement siding to create a unique and attractive home exterior.'
		},
		{
			question: 'What should I do if I notice damaged siding on my cedar exterior?',
			answer:
				'Address damaged siding promptly by contacting a top-rated painting company or siding specialist. Early intervention can prevent further deterioration and costly repairs.'
		},
		{
			question: 'How does a paint job help in protecting my cedar siding?',
			answer:
				'A high-quality paint job creates a barrier against moisture, UV rays, and pests, effectively protecting your wood siding and prolonging its life.'
		},
		{
			question: 'Is it necessary to use a specific type of paint for cedar siding in Chicago IL?',
			answer:
				'Yes, using paints formulated for wood exteriors and designed to withstand the Chicago IL climate is crucial. This ensures longevity and maintains the aesthetic appeal of your cedar siding.'
		},
		{
			question: 'What makes western red cedar a preferred choice for siding?',
			answer:
				'Western red cedar is favored for its natural resistance to decay and insects, as well as its rustic charm. It provides a timeless look that enhances the value and beauty of your home.'
		},
		{
			question:
				'How do I find a reliable painting company for my cedar siding repair and repainting needs?',
			answer:
				'Look for a painting company with a reputation for quality work, preferably one with experience in cedar siding and high customer ratings. Checking reviews and asking for references can also help.'
		},
		{
			question: 'Can I repair and paint my cedar siding myself, or should I hire professionals?',
			answer:
				'While DIY repair and painting can be cost-effective, hiring professionals ensures high-quality work, especially for extensive damage or when aiming for a long-lasting paint job that protects your home effectively.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Cedar Siding Repair Service',
		listItems: [
			'Curb Appeal Boost',
			'Attention to Detail',
			'Meticulous Surface Care',
			'Durable Finishes'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="lg:order-first order-last">
		<enhanced:img class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg" {src} alt="" />
	</div>

	<div slot="right-column">
		<h2>Cedar Siding Repair In Cook&nbsp;County</h2>

		<p>
			Over time, even the most beautiful cedar siding can show signs of wear from exposure to the
			elements. Whether you’re looking to refresh your siding with a one-time facelift or seeking
			regular maintenance to keep your cedar siding, decks, and porches in top condition, Klasek
			Painting is here to help.
		</p>

		<p>
			Our expert cedar siding repair services in <a href={routes['service-area'].href}
				>Cook County</a
			> are designed to restore and maintain the natural beauty of your home’s exterior, ensuring it
			continues to impress year after year.
		</p>
	</div>
</ColumnTemplateSection>

<ColumnTemplateSection class="bg-off-white">
	<div slot="right-column">
		<enhanced:img
			class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"
			src={project}
			alt="Cedar siding repair project completed by Klasek Painting"
			loading="lazy"
		/>
	</div>

	<div slot="left-column">
		<h2>Why Should I Invest in Cedar Siding Repair?</h2>

		<p>
			Illinois weather can take a toll on your once-gorgeous redwood surfaces, leaving them faded,
			rough, and vulnerable to damage. Delaying repairs can lead to serious issues like water
			damage, splintering, and weakened infrastructure. To maintain the beauty and safety of your
			home, it's crucial to address these problems promptly. <a href={routes['contact'].href}
				>Klasek Painting</a
			> offers professional redwood siding repairs that not only restore the look of your wood but also
			ensure it remains strong, secure, and splinter-free for years to come.
		</p>

		<GalleryLinkBlock
			data={[
				galleryRoutes['cedar-replacement'],
				galleryRoutes['cedar-siding'],
				galleryRoutes['white-cedar-siding'],
				galleryRoutes['cedar-shingle-stucco-repair']
			]}
		/>
	</div>
</ColumnTemplateSection>

<FaqSection {faqData} />
