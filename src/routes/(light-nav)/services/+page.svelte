<script lang="ts">
	import RootServiceHero from '$lib/services/root/RootServiceHero.svelte';
	import ServiceGridSection from '$lib/services/ServiceGridSection.svelte';
	import WhyChooseUsSection from '$lib/home/WhyChooseUsSection.svelte';
	import TestimonialsSection from '$lib/common/sections/TestimonialsSection.svelte';
	import ServiceAreaSection from '$lib/common/sections/ServiceAreaSection.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import RibbonWrapper from '$lib/common/other/RibbonWrapper.svelte';
	import { routes } from '$lib/common/routing/routes';
	import PaintingPromisesSection from '$lib/services/PaintingPromisesSection.svelte';
	import src from '$images/services/expert-exterior-home-painting-klasek-painting.webp';
	import OtherServicesSection from '$lib/common/sections/OtherServicesSection.svelte';
</script>

<RootServiceHero
	data={{
		h1: 'Expert Painting & Repair Services',
		listItems: [
			'Free Design & Consultation',
			'High-Quality Materials',
			'Experience Painters',
			'Curb Appeal Boost'
		],
		image: {
			src,
			alt: 'House with new exterior stucco repair and paint service by Klasek Painting'
		}
	}}
/>

<ServiceGridSection />

<OtherServicesSection />

<WhyChooseUsSection class="bg-off-white" />

<BasicTemplateSection class="[&>div]:max-w-screen-xl">
	<RibbonWrapper class="mx-auto"
		><h2 class="lg:px-7">
			Exterior Painting Solutions in Cook&nbsp;County & Surrouding Areas
		</h2></RibbonWrapper
	>

	<p>
		When you hire Klasek Painting, you are hiring a local company that genuinely cares. We want to
		work with you to find the perfect solution for your specific goals, property requirements, and
		budget. Our insured and fully certified team believes in exceeding industry standards at every
		turn—going above and beyond to deliver timely, cost-effective, and pristine results.
	</p>

	<h3>Precise, Beautiful & Long-Lasting Results</h3>

	<p>
		With over 30 years of experience, we have helped thousands of properties in Cook County. <a
			href={routes['gallery'].href}>View our gallery</a
		> to see some examples of our work.
	</p>
</BasicTemplateSection>

<PaintingPromisesSection class="pb-0" />

<TestimonialsSection />

<ServiceAreaSection class="pt-0" />
