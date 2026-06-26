<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { galleryRoutes, routes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/aluminum-siding-painting-service.webp?enhanced';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question: 'How do I know if aluminum siding painting is the right choice for my home?',
			answer:
				"If your aluminum siding is in good condition but looks faded or worn, a fresh coat of paint can significantly enhance your home's exterior and curb appeal. Quality painting by professional painters can revitalize your siding, making it look new and protecting it from the elements."
		},
		{
			question: 'What makes a good aluminum siding paint job?',
			answer:
				'A good aluminum siding paint job involves thorough surface preparation, including cleaning and priming, followed by applying high-quality paint. Chicago painters who specialize in exterior painting ensure that every step is meticulously performed to achieve a long-lasting, flawless finish.'
		},
		{
			question: 'How long does an aluminum siding paint job last?',
			answer:
				'With proper preparation and the use of top-rated, high-quality paint, an aluminum siding paint job can last between 10-15 years. Hiring an experienced exterior painting company ensures that the work is done correctly, maximizing the lifespan of the paint.'
		},
		{
			question: 'Can painting professionals work with all colors for aluminum siding?',
			answer:
				"Yes, painting professionals can work with a wide range of colors to match your aesthetic preferences. Consulting with a top-rated professional painter will help you choose the best color to complement your home's exterior and enhance its curb appeal."
		},
		{
			question: 'Why should I hire a professional painter for aluminum siding?',
			answer:
				'Hiring a professional painter ensures that your aluminum siding is properly prepped, primed, and painted with high-quality materials. Experienced Chicago painters have the skills and equipment needed to deliver a durable and attractive finish, saving you time and ensuring a superior result.'
		},
		{
			question: 'What should I look for in an exterior painting company?',
			answer:
				"Look for an exterior painting company with a strong reputation, verified customer reviews, and examples of previous work. Quality painting companies will provide detailed estimates, use top-rated materials, and employ skilled painting professionals to ensure your home's exterior looks its best."
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Aluminum Siding Painting Company',
		listItems: [
			'Simple, Straight-Forward Pricing',
			'Meticulous Surface Care',
			'Long-Lasting Results',
			'Free Design & Consultation'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="!justify-normal">
		<h2>How Painting Aluminum Siding Can Transform Your House</h2>

		<p>
			Aluminum siding looks beautiful when it's new, but once it starts to age, it can appear tired
			and faded. The good news is you can turn back the hands of time with a little elbow grease,
			cleaning, and a few good coats of paint. Aluminum siding is prevalent in our Chicago suburbs
			because it's insulating against the frigid winters. Plus, it's low maintenance - but not
			maintenance-free. You still need to keep it clean and repair any damage right away.
		</p>
	</div>

	<div slot="right-column">
		<enhanced:img
			class="w-full h-auto max-w-[550px] mx-auto"
			{src}
			alt="Before and after aluminum painting project by Klasek Painting"
		/>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Klasek Painting For Professional Exterior Painting</h2>
	</HeadingAccent>

	<p>
		<a href="/">Klasek Painting</a> has been servicing the beautiful Chicago suburbs for over 25
		years. Owner, Pete Klasek, is available to answer any questions you may have about your aluminum
		siding. Our company is known for its high-quality work, superior products, dependable service,
		satisfaction guarantee, and on-time completion. If you have a home or commercial property you
		would like to have stained or painted,
		<a href={routes['contact'].href}>contact Pete Klasek</a> today.
	</p>

	<GalleryLinkBlock data={[galleryRoutes['past-projects']]} />
</BasicTemplateSection>

<FaqSection {faqData} />
