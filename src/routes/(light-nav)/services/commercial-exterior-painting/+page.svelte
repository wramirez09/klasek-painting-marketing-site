<script lang="ts">
	import RootServiceHero from '$lib/services/root/RootServiceHero.svelte';
	import WhyChooseUsSection from '$lib/home/WhyChooseUsSection.svelte';
	import ServiceAreaSection from '$lib/common/sections/ServiceAreaSection.svelte';
	import src from '$images/services/new-exteior-commercial-painting-job-klasek-painting.webp';
	import PaintingPromisesSection from '$lib/services/PaintingPromisesSection.svelte';
	import commercial from '$images/services/exterior-commercial-painting-service.webp?enhanced';
	import OtherServicesSection from '$lib/common/sections/OtherServicesSection.svelte';
	import ViewOurWorkSection from '$lib/home/ViewOurWorkSection.svelte';
	import CtaBannerSection from '$lib/common/sections/CtaBannerSection.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
</script>

<RootServiceHero
	data={{
		h1: '#1 Exterior Commercial Painter in Cook\xa0County,\xa0IL',
		listItems: [
			'Simple, Straight-Forward Pricing',
			'Long-Lasting Results',
			'100% Satisfaction Guaranteed',
			'Free Design Consultation & Quote'
		],
		image: {
			src,
			alt: 'New exterior commercial painting job'
		}
	}}
/>

<ColumnTemplateSection class="bg-off-white">
	<div slot="left-column" class="lg:order-first order-last">
		<enhanced:img
			class="bord max-w-[400px] w-full h-auto rounded-lg mx-auto"
			src={commercial}
			alt="Exterior commercial painting job"
		/>
	</div>

	<div slot="right-column">
		<h2>Commercial Exterior Painting Services in Cook County</h2>

		<p>
			Enhance your property's curb appeal and protect it from the elements with Klasek Painting's
			expert commercial exterior painting services. Our skilled team understands the unique needs of
			businesses and works diligently to deliver exceptional results tailored to your property. From
			small storefronts to large office complexes, we're here to make your building stand out.
		</p>
	</div>
</ColumnTemplateSection>

<CtaBannerSection />

<WhyChooseUsSection class="bg-off-white" />

<PaintingPromisesSection />

<ViewOurWorkSection class="bg-off-white" />

<ServiceAreaSection />

<OtherServicesSection />
