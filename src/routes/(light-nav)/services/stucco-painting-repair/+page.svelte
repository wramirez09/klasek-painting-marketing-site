<script lang="ts">
	import RootServiceHero from '$lib/services/root/RootServiceHero.svelte';
	import RootServiceSection from '$lib/services/root/RootServiceSection.svelte';
	import { serviceRoutes } from '$lib/common/routing/routes';
	import WhyChooseUsSection from '$lib/home/WhyChooseUsSection.svelte';
	import ServiceAreaSection from '$lib/common/sections/ServiceAreaSection.svelte';
	import PaintingPromisesSection from '$lib/services/PaintingPromisesSection.svelte';
	import src from '$images/services/stucco-painting-repair-services.webp';
	import painting from '$images/services/stucco-painting-service.webp';
	import repair from '$images/services/stucco-repair-service.webp';
	import OtherServicesSection from '$lib/common/sections/OtherServicesSection.svelte';
</script>

<RootServiceHero
	data={{
		h1: 'Reliable Stucco Painting & Repair Services for Chicago Homeowners',
		listItems: [
			'100% Satisfaction Guaranteed',
			'Quality Materials & Workmanship',
			'Over 30 Years of Experience',
			'Meticulous Surface Preparation'
		],
		image: {
			src,
			alt: 'Beautiful house with newly repair stucco and paint job done by Klasek Painting'
		}
	}}
/>

<RootServiceSection
	data={{
		heading: 'Stucco Painting Services',
		description:
			'Choosing Klasek Painting for your stucco painting services guarantees exceptional quality and meticulous attention to detail. Our skilled professionals use top-grade materials and techniques to enhance the beauty and durability of your stucco surfaces. We offer affordable services with a focus on customer satisfaction and long-lasting results.',
		href: serviceRoutes['stucco-painting'].href,
		image: painting
	}}
/>

<RootServiceSection
	class="bg-white"
	reverse={true}
	data={{
		heading: 'Stucco Repair Services',
		description:
			"Choosing Klasek Painting for your stucco repair services means you'll receive expert craftsmanship and careful attention to detail. We provide dependable, affordable services with a commitment to customer satisfaction and durable, long-lasting results. Klasek Painting can cover all of your painting needs.",
		href: serviceRoutes['stucco-repair'].href,
		image: repair
	}}
/>

<PaintingPromisesSection class="bg-off-white" />

<OtherServicesSection showStucco={false} />

<WhyChooseUsSection class="bg-off-white" />

<ServiceAreaSection />
