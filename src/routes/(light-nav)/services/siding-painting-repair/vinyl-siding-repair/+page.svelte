<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { routes, galleryRoutes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/vinyl-siding-repair-service.webp?enhanced';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question: 'Can vinyl siding be repaired or does it need to be replaced entirely?',
			answer:
				'Vinyl siding can often be repaired without the need for complete replacement. Small cracks and damages can be fixed using vinyl adhesive or by replacing specific panels. A skilled siding contractor can assess the damage and recommend the best course of action.'
		},
		{
			question: 'How do I match the color of my existing siding for repairs?',
			answer:
				'Matching the color of your existing siding is crucial for a seamless look. Siding contractors often use color-matched replacement panels. They can also take a piece of your siding to paint stores for a perfect match using paint samples from various paint brands.'
		},
		{
			question: 'What causes damage to vinyl siding?',
			answer:
				'Vinyl siding can be damaged by various factors including extreme weather, impact from objects, and prolonged exposure to the sun. Mold and mildew growth can also cause deterioration. Regular maintenance and inspections can help prevent severe damage.'
		},
		{
			question: 'Can I paint over repaired vinyl siding?',
			answer:
				"Yes, you can paint over repaired vinyl siding. It's important to use high-quality acrylic paint that adheres well to vinyl. Professional siding contractors can help you choose the best paint brands and colors to match your home's exterior."
		},
		{
			question: 'How does repairing vinyl siding improve curb appeal?',
			answer:
				"Repairing damaged vinyl siding enhances the overall appearance of your home, boosting curb appeal. Fixing cracks, replacing faded panels, and ensuring a consistent look with color-matched paint or panels can make a significant difference in your home's exterior."
		},
		{
			question: 'What should I look for in a siding contractor for vinyl siding repair?',
			answer:
				'When choosing a siding contractor, look for experience, good reviews, and proper licensing and insurance. Reputable siding companies will provide detailed estimates, use high-quality materials, and offer a warranty on their work.'
		},
		{
			question: 'How do I prevent mold and mildew on vinyl siding?',
			answer:
				'To prevent mold and mildew, keep your vinyl siding clean and dry. Regularly clean the siding with a mild detergent and water, and ensure proper ventilation around your home. Trim back any vegetation that can trap moisture against the siding.'
		},
		{
			question: 'What is the average cost of vinyl siding repair?',
			answer:
				'The cost of vinyl siding repair varies based on the extent of the damage and the materials used. On average, homeowners can expect to pay between $300 and $1,000 for minor repairs. A siding contractor can provide a more accurate estimate after inspecting your home.'
		},
		{
			question: 'How long does it take to repair vinyl siding?',
			answer:
				'The time required for vinyl siding repair depends on the extent of the damage. Minor repairs can be completed in a few hours, while more extensive repairs may take a couple of days. Your siding contractor will give you a timeline based on your specific needs.'
		},
		{
			question: 'Can I perform vinyl siding repairs myself?',
			answer:
				"While minor repairs might be possible for DIY enthusiasts, it's generally recommended to hire a professional siding contractor. They have the expertise and tools needed to ensure the repairs are done correctly and match the existing siding, maintaining the integrity and appearance of your home's exterior."
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Vinyl Siding Repair Service',
		listItems: [
			'Comprehensive Preparation',
			'High-Quality Materials',
			'Simple, Straight-Forward Pricing',
			'Long-Lasting Results'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="lg:order-first order-last">
		<enhanced:img
			class="w-full h-auto bord rounded-lg max-w-[500px] mx-auto"
			{src}
			alt="Vinyl siding repair project by Klasek Painting"
		/>
	</div>

	<div slot="right-column">
		<h2>Restore Your Chicago Home's Vinyl Siding</h2>

		<p>
			Chicago's homes often feature original vinyl siding that requires repair and restoration. Over
			time, chipped paint and damaged siding can diminish your home's beauty and reduce its value.
		</p>

		<p>
			Beyond aesthetics, deteriorating siding can also impact energy efficiency and create a poor
			first impression. Klasek Painting is here to help you revitalize your home's exterior. Whether
			you need <a href={routes['services'].href}>repairs, repainting, or staining,</a> our
			professional team delivers quality service backed by a satisfaction guarantee, ensuring your
			home looks beautiful and remains protected. <a href={routes['contact'].href}>Contact us</a> to
			book your service now!
		</p>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Preserve the Beauty of Your Vinyl Siding</h2>
	</HeadingAccent>

	<p>
		Vinyl siding is a popular choice for its durability and ease of maintenance, but over time, even
		the best materials can experience issues. Whether it's cracks, warping, or discoloration, Klasek
		Painting has the expertise to restore your vinyl siding to its original condition. We understand
		that damaged siding not only affects your home's appearance but can also lead to more serious
		problems if left unchecked.
	</p>

	<h3>What We Address:</h3>

	<ul>
		<li>
			<strong>Cracks and Gaps:</strong> Prevent water infiltration and energy loss by sealing cracks
			and gaps in your siding
		</li>
		<li>
			<strong>Warping and Buckling:</strong> Repair warping caused by heat or improper installation to
			restore a smooth, even surface
		</li>
		<li>
			<strong>Discoloration:</strong> Match colors accurately to refresh faded or discolored areas, ensuring
			a consistent look across your home's exterior
		</li>
	</ul>

	<h3>Our Approach:</h3>

	<ol>
		<li>
			<strong>Detailed Assessment:</strong> We start with a thorough inspection to identify all areas
			needing attention
		</li>
		<li>
			<strong>Seamless Repairs:</strong> Our team carefully matches the repair materials to your existing
			siding for a flawless finish
		</li>
		<li>
			<strong>Final Inspection:</strong> We ensure that the repairs not only look great but also enhance
			the overall durability of your siding
		</li>
	</ol>

	<p>
		Our professional painters are dedicated to providing excellent performance on every project.
		With years of experience, we ensure that your vinyl siding repairs are handled with the utmost
		care and precision. Klasek Painting proudly serves <a href={routes['service-area'].href}
			>Cook County and the surrounding areas</a
		>, offering top-notch
		<a href={routes['services'].href}>exterior painting and repair services</a> to keep your home looking
		its best. Trust us to deliver exceptional care and results for your vinyl siding.
	</p>

	<GalleryLinkBlock data={[galleryRoutes['past-projects'], galleryRoutes['siding-repair']]} />
</BasicTemplateSection>

<FaqSection {faqData} />
