<script lang="ts">
	import RootServiceHero from '$lib/services/root/RootServiceHero.svelte';
	import RootServiceSection from '$lib/services/root/RootServiceSection.svelte';
	import { routes } from '$lib/common/routing/routes';
	import WhyChooseUsSection from '$lib/home/WhyChooseUsSection.svelte';
	import ServiceAreaSection from '$lib/common/sections/ServiceAreaSection.svelte';
	import Button from '$components/button/button.svelte';
	import PaintingPromisesSection from '$lib/services/PaintingPromisesSection.svelte';
	import src from '$images/services/design-and-color-consultation-services.webp';
	import design from '$images/services/design-consultation-service.webp';
	import color from '$images/services/color-consultation-service.webp';
	import OtherServicesSection from '$lib/common/sections/OtherServicesSection.svelte';
	import ViewOurWorkSection from '$lib/home/ViewOurWorkSection.svelte';
	import CtaBannerSection from '$lib/common/sections/CtaBannerSection.svelte';
</script>

<RootServiceHero
	data={{
		h1: 'Free Design & Color Consultation by Curb Appeal Experts',
		listItems: [
			'Design Pros - 30+ Years of Experience',
			'Visualize the Best Version of Your Home',
			'Get a Free, Written Proposal with Pricing',
			"Increase Your Home's Value with Lasting Results"
		],
		image: {
			src: src,
			alt: 'White house with black accents, recently completed design consultation project by Klasek Painting'
		}
	}}
/>

<RootServiceSection
	data={{
		heading: 'Design Services',
		description:
			'Choose Klasek Painting for your design services and experience top-notch quality and attention to detail. Our pros work with you to create beautiful designs that make your home look and feel amazing. Our focus is giving you great service at a fair price, with results that last.',
		image: design
	}}
>
	<Button class="mt-2 lg:w-fit" href={routes['contact'].href}>Book Service</Button>
</RootServiceSection>

<RootServiceSection
	class="bg-white"
	reverse={true}
	data={{
		heading: 'Color Consultation Services',
		description:
			"Choose Klasek Painting for your color consultation and get expert advice and personal attention. Our team helps you pick the perfect colors to match your style and space. We offer reliable and affordable services, making sure you're happy with the stunning, long-lasting results. Klasek Painting has all your painting and design needs covered.",
		image: color
	}}
>
	<Button class="mt-2 lg:w-fit" href={routes['contact'].href}>Book Service</Button>
</RootServiceSection>

<OtherServicesSection class="bg-off-white" showDesignConsultation={false} />

<CtaBannerSection />

<ViewOurWorkSection class="bg-off-white" />

<PaintingPromisesSection />

<WhyChooseUsSection class="bg-off-white" />

<ServiceAreaSection />
