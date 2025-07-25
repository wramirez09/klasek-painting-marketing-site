<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/hardie-board-siding-repair-service.webp?enhanced';
	import { isMobileStore } from '$lib/stores/isMobileStore';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';
	import { galleryRoutes } from '$lib/common/routing/routes';

	const faqData: FaqData[] = [
		{
			question: 'What makes Hardie Board different from wood siding?',
			answer:
				'Hardie Board, or fiber cement siding, is more durable and requires less maintenance than traditional wood siding.'
		},
		{
			question: 'How long does a Hardie Board repair project usually take?',
			answer:
				'The duration of a Hardie Board siding repair project depends on the extent of the damage, but we aim to make it as hassle-free and quick as possible.'
		},
		{
			question: 'Can you match the paint color of my existing Hardie Board siding?',
			answer:
				'Yes, we can match the paint color to ensure the repaired area blends seamlessly with your existing siding material.'
		},
		{
			question: 'What are the benefits of choosing Hardie Board over vinyl siding?',
			answer:
				'Hardie Board offers superior durability and a longer lifespan compared to vinyl siding, making it a great long-term investment.'
		},
		{
			question: 'What types of siding do you work with besides Hardie Board?',
			answer:
				'We work with various siding options, including vinyl siding and wood siding, to suit different needs and preferences.'
		},
		{
			question: 'How do you ensure a hassle-free repair process?',
			answer:
				'We use our years of experience and detailed planning to provide efficient and hassle-free repair work, keeping disruptions to a minimum.'
		},
		{
			question: 'What is Hardie Board made of?',
			answer:
				'Hardie Board is made from a mix of cellulose fibers, cement, and sand, making it a sturdy and reliable siding material.'
		},
		{
			question: 'Do you offer both repair and replacement services for Hardie Board siding?',
			answer:
				'Yes, we provide both repair and replacement services, depending on the condition of your siding and your specific needs.'
		},
		{
			question: 'How do you handle customer service during a siding project?',
			answer:
				'We prioritize excellent customer service, keeping you informed and involved throughout your siding project to ensure satisfaction.'
		},
		{
			question: 'Why should I choose your team for Hardie Board repair?',
			answer:
				'With our expertise in James Hardie fiber cement siding and years of experience, we deliver top-notch repair work and reliable results for every siding project.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Hardie Board Repair Service',
		listItems: [
			'100% Satisfaction Guaranteed',
			'Clear Communication',
			'Long-Lasting Results',
			'Simple, Straight-Forward Pricing'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="lg:row-start-1 row-start-2">
		<enhanced:img
			class="bord rounded-lg max-w-[500px] mx-auto w-full h-auto"
			{src}
			alt="White paint Hardie board siding"
			loading={$isMobileStore ? 'lazy' : 'eager'}
		/>
	</div>

	<div slot="right-column">
		<h2>Comprehensive Hardie Siding Solutions</h2>

		<p>
			Hardie Board siding is a popular choice for its exceptional durability and stylish appearance,
			but even the best materials may need attention over time. At Klasek Painting, we specialize in
			both the repair and maintenance of Hardie siding, ensuring your home stays protected and looks
			its best. Our team brings extensive experience and expertise to every project, addressing
			issues with precision and care to restore the integrity of your siding and enhance your home's
			curb appeal.
		</p>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Our Hardie Board Repair Process</h2>
	</HeadingAccent>

	<p>
		Hardie Board, also known as fiber cement siding, is a popular choice for homes in our area due
		to its durability and stylish appearance. It's designed to withstand harsh weather conditions
		and requires minimal maintenance. With so many homes featuring Hardie Board, knowing how to
		properly repair it is essential.
	</p>

	<strong class="-mb-2">Our Repair Process:</strong>

	<ol>
		<li>
			<strong>Inspection:</strong> We start with a thorough inspection to assess the damage and identify
			any underlying issues.
		</li>
		<li>
			<strong>Preparation:</strong> Next, we prepare the area by removing damaged sections and cleaning
			the surface.
		</li>
		<li>
			<strong>Repair:</strong> We replace damaged boards with new Hardie Boards, ensuring a perfect fit
			and secure installation.
		</li>
		<li>
			<strong>Sealing:</strong> We seal the joints and edges to protect against moisture and ensure a
			smooth finish.
		</li>
		<li>
			<strong>Painting:</strong> Finally, we paint the repaired area to match your existing siding, leaving
			your home looking as good as new.
		</li>
	</ol>

	<p>
		With our extensive experience and attention to detail, we are the experts you can trust for
		Hardie Board repairs. Our skilled team is dedicated to providing top-quality service, ensuring
		your home stays protected and looking great. Let us handle your repairs for a seamless and
		hassle-free experience.
	</p>

	<GalleryLinkBlock data={[galleryRoutes['hardie-board'], galleryRoutes['siding-repair']]} />
</BasicTemplateSection>

<FaqSection {faqData} />
