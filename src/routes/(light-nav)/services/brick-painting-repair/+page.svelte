<script lang="ts">
	import RootServiceHero from '$lib/services/root/RootServiceHero.svelte';
	import RootServiceSection from '$lib/services/root/RootServiceSection.svelte';
	import { serviceRoutes } from '$lib/common/routing/routes';
	import WhyChooseUsSection from '$lib/home/WhyChooseUsSection.svelte';
	import ServiceAreaSection from '$lib/common/sections/ServiceAreaSection.svelte';
	import PaintingPromisesSection from '$lib/services/PaintingPromisesSection.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import src from '$images/services/brick-painting-staining-service.webp';
	import repair from '$images/services/exterior-brick-house-repair.webp';
	import OtherServicesSection from '$lib/common/sections/OtherServicesSection.svelte';
	import ViewOurWorkSection from '$lib/home/ViewOurWorkSection.svelte';
	import CtaBannerSection from '$lib/common/sections/CtaBannerSection.svelte';

	const paintingStainingService = [
		serviceRoutes['brick-painting'],
		serviceRoutes['brick-staining']
	];
</script>

<RootServiceHero
	data={{
		h1: 'Trusted Brick Painting & Repair Services for Chicago Homeowners',
		listItems: [
			'Detailed Prep Work',
			'Experienced Painters',
			'Curb Appeal Boost',
			'Long-Lasting Results'
		],
		image: {
			src,
			alt: 'New exterior brick painting project house with fresh coat of paint by Klasek Painting'
		}
	}}
/>

<ColumnTemplateSection class="bg-off-white">
	<div slot="left-column">
		<h2>Brick Painting & Staining&nbsp;Services</h2>

		<p>
			At Klasek Painting, we firmly believe that our brick painting & staining services are second
			to none in Illinois! We provide a wide selection of painting services and are dedicated to
			being #1.
		</p>
	</div>

	<div slot="right-column">
		<ul>
			{#each paintingStainingService as { text, href }}
				<li>
					<a {href}>{text}</a>
				</li>
			{/each}
		</ul>
	</div>
</ColumnTemplateSection>

<RootServiceSection
	class="bg-white"
	reverse={true}
	data={{
		heading: 'Brick Repair Services',
		description:
			'Choosing Klasek Painting for your brick repair services ensures that you receive top-quality workmanship and attention to detail. Our experienced team uses the best materials and techniques to restore your brick masonry to its original beauty and strength. We provide reliable, affordable services with a commitment to customer satisfaction and long-lasting results.',
		href: serviceRoutes['brick-repair'].href,
		image: repair
	}}
/>

<OtherServicesSection class="bg-off-white" showBrick={false} />

<CtaBannerSection />

<PaintingPromisesSection />

<ViewOurWorkSection class="bg-off-white" />

<WhyChooseUsSection />

<ServiceAreaSection />
