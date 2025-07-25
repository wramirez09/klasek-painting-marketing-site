<script lang="ts">
	import RootServiceHero from '$lib/services/root/RootServiceHero.svelte';
	import RootServiceSection from '$lib/services/root/RootServiceSection.svelte';
	import { serviceRoutes } from '$lib/common/routing/routes';
	import WhyChooseUsSection from '$lib/home/WhyChooseUsSection.svelte';
	import ServiceAreaSection from '$lib/common/sections/ServiceAreaSection.svelte';
	import src from '$images/services/exterior-home-painting.webp';
	import PaintingPromisesSection from '$lib/services/PaintingPromisesSection.svelte';
	import historic from '$images/services/historic-house-painting.webp';
	import exterior from '$images/services/exterior-house-painting-services.webp';
	import OtherServicesSection from '$lib/common/sections/OtherServicesSection.svelte';
	import ViewOurWorkSection from '$lib/home/ViewOurWorkSection.svelte';
	import CtaBannerSection from '$lib/common/sections/CtaBannerSection.svelte';
</script>

<RootServiceHero
	data={{
		h1: 'Experienced House Painters in Cook\xa0County,\xa0IL',
		listItems: [
			'Over 30 Years of Experience',
			'Meticulous Surface Preparation',
			'Quality Materials & Workmanship',
			'Free Design Consultation & Quote'
		],
		image: {
			src,
			alt: 'Exterior Home Painting'
		}
	}}
/>

<RootServiceSection
	class="bg-white"
	reverse={true}
	data={{
		heading: 'Exterior House Painting\xa0Services',
		description:
			'At Klasek Painting, we dedicate our all to each project to ensure your vision comes true. We provide Industry-leading equipment and specially trained painters to deliver efficient and timely services.',
		href: serviceRoutes['exterior-paint-contractor'].href,
		image: exterior
	}}
/>

<RootServiceSection
	data={{
		heading: 'Historic House Painting\xa0Services',
		description:
			"When It comes to Historic Houses, Klasek knows how to provide top-notch painting services to your home's delicate exterior. Painting historic homes require attention to detail and finesse, that can be found at Klasek Painting.",
		href: serviceRoutes['historic-house-painting'].href,
		image: historic
	}}
/>

<OtherServicesSection showExteriorPainting={false} />

<WhyChooseUsSection class="bg-off-white" />

<CtaBannerSection />

<PaintingPromisesSection />

<ViewOurWorkSection class="bg-off-white" />

<ServiceAreaSection />
