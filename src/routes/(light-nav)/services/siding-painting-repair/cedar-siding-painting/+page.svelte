<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { galleryRoutes, routes, serviceRoutes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/cedar-siding-painting-service.webp?enhanced';
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
		h1: '#1 Cedar Siding Painting Company',
		listItems: [
			'Clear Communication',
			'Simple, Straight-Forward Pricing',
			'Meticulous Surface Care',
			'Durable Finishes'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="!justify-normal">
		<h2>Superior Cedar Siding Painting</h2>

		<p>
			At Klasek Painting, we offer top-tier cedar siding painting services that outshine the
			competition. Our expert team uses the highest quality materials and techniques to ensure a
			flawless finish. We take pride in delivering long-lasting results that protect and beautify
			your home, making us the best choice for your cedar siding needs.
		</p>
	</div>

	<div slot="right-column">
		<enhanced:img class="w-full h-auto max-w-[500px] mx-auto" {src} alt="" />
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent class="sm:w-fit" extend={true}>
		<h2>Benefits of Choosing Cedar&nbsp;Siding</h2>
	</HeadingAccent>

	<p>
		Cedar siding is a popular choice in Cook County due to its natural beauty and durability. Here's
		why you should consider cedar siding painting for your home:
	</p>

	<ul>
		<li>
			<strong>Enhanced Curb Appeal:</strong> Cedar siding adds a timeless and elegant look to any home
		</li>
		<li>
			<strong>Natural Insulation:</strong> Cedar wood provides excellent insulation, keeping your home
			cooler in the summer and warmer in the winter
		</li>
		<li>
			<strong>Durability:</strong> With proper maintenance, cedar siding can last for decades, standing
			up to the elements
		</li>
		<li>
			<strong>Pest Resistant:</strong> Cedar wood's natural oils make it resistant to insects and other
			pests
		</li>
		<li>
			<strong>Eco-Friendly:</strong> Cedar is a renewable resource, making it a sustainable choice for
			your home
		</li>
		<li>
			<strong>Increased Home Value:</strong> Well-maintained cedar siding can increase the overall value
			of your property
		</li>
	</ul>

	<p>
		Choosing cedar siding for your home in Cook County means investing in a beautiful, durable, and
		eco-friendly material. Our expert painting services ensure that your cedar siding remains in
		peak condition, providing long-lasting protection and aesthetic appeal. Trust Klasek Painting to
		bring out the best in your cedar siding, enhancing both the look and value of your home.
	</p>
</BasicTemplateSection>

<BasicTemplateSection class="pb-0">
	<HeadingAccent class="sm:w-fit" extend={true}>
		<h2>Our Cedar Siding Painting Process</h2>
	</HeadingAccent>

	<p>
		At Klasek Painting, we believe that attention to detail and using the highest quality materials
		are key to being the best <a href={serviceRoutes['siding-painting-repair'].href}
			>siding painting company</a
		>. Our experienced team follows a meticulous process to ensure a beautiful, long-lasting finish
		for your cedar siding. Here's how we achieve outstanding results:
	</p>

	<ol>
		<li>
			<strong>Initial Inspection:</strong> We thoroughly inspect the cedar siding to identify any damage
			or areas that need special attention
		</li>
		<li>
			<strong>Surface Preparation:</strong> We clean the surface, remove any loose paint, and sand rough
			areas to create a smooth base
		</li>
		<li>
			<strong>Primer Application:</strong> We apply a high-quality stain-blocking primer to ensure excellent
			paint adhesion and to prevent tannin bleed-through
		</li>
		<li>
			<strong>Painting:</strong> We use top-tier acrylic latex paint, applying two coats for optimal
			coverage and durability
		</li>
		<li>
			<strong>Final Inspection:</strong> We conduct a final inspection to ensure a flawless finish and
			complete customer satisfaction
		</li>
	</ol>

	<p>
		Our professional painters are dedicated to providing excellent performance on every project. We
		take pride in our work and strive to exceed your expectations, delivering outstanding results
		that enhance the beauty and durability of your cedar siding. <a href={routes['contact'].href}
			>Contact Klasek Painting</a
		> today to get a free estimate for your cedar siding painting project.
	</p>

	<GalleryLinkBlock
		data={[
			galleryRoutes['cedar-replacement'],
			galleryRoutes['cedar-siding'],
			galleryRoutes['white-cedar-siding'],
			galleryRoutes['cedar-shingle-stucco-repair']
		]}
	/>
</BasicTemplateSection>

<FaqSection {faqData} />
