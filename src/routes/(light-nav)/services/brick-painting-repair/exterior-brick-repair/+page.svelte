<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { galleryRoutes, routes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/exterior-brick-repair-service.webp?enhanced';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question: 'What is involved in brick repair and restoration?',
			answer:
				'Brick repair and restoration involve fixing damaged bricks, replacing missing mortar, and ensuring the structural integrity of the brick masonry. This process can include cleaning the brick face, filling cracks, and applying breathable sealants to prevent water penetration and further damage.'
		},
		{
			question: 'What type of mortar is used in brick masonry repairs?',
			answer:
				'The type of mortar used in brick masonry repairs is crucial for ensuring a strong bond and compatibility with the existing bricks. Typically, a mortar mix similar to the original is used, often containing lime and sand. This ensures the repair blends seamlessly with the original structure and maintains the integrity of the masonry.'
		},
		{
			question: 'How do you address water penetration issues in brick masonry?',
			answer:
				'To address water penetration issues in brick masonry, we first identify and repair any cracks or gaps in the mortar or bricks. We then apply breathable sealants that allow moisture to escape while preventing water from entering. Proper drainage around the foundation is also essential to divert water away from the brickwork.'
		},
		{
			question: 'Can damaged bricks be replaced without affecting the appearance of the wall?',
			answer:
				'Yes, damaged bricks can be replaced without affecting the appearance of the wall. By carefully selecting new bricks that match the color and texture of the existing brick face, and using the correct type of mortar, we ensure the repair blends seamlessly with the original masonry.'
		},
		{
			question: 'What are the common causes of structural damage in brick masonry?',
			answer:
				'Common causes of structural damage in brick masonry include water penetration, freeze-thaw cycles, poor construction practices, and the use of inappropriate materials. Load-bearing walls can also experience stress and cracks due to settling or shifting foundations.'
		},
		{
			question: 'How often should brick masonry be inspected for repairs?',
			answer:
				'Brick masonry should be inspected for repairs every few years or after severe weather events. Regular inspections can help identify minor issues before they become major problems, ensuring the longevity and safety of the brickwork.'
		},
		{
			question: 'Can you repair cracked brick faces, or do they need to be replaced?',
			answer:
				'Cracked brick faces can often be repaired using specialized fillers and sealants. However, if the damage is extensive or affects the structural integrity, it may be necessary to replace the affected bricks to ensure a durable and long-lasting repair.'
		},
		{
			question: 'Do you provide a free estimate for brick repair and restoration?',
			answer:
				'Yes, we provide a free estimate for all brick repair and restoration projects. This helps you understand the scope of the work needed and the associated costs before any repairs begin.'
		},
		{
			question: 'How do breathable sealants help in brick masonry repairs?',
			answer:
				"Breathable sealants are crucial in brick masonry repairs because they allow moisture to escape from the brickwork while preventing water from entering. This helps in maintaining the brick's durability and prevents issues related to water penetration and freeze-thaw cycles."
		},
		{
			question: 'Why is it important to use the correct type of mortar in masonry repairs?',
			answer:
				'Using the correct type of mortar in masonry repairs is important to ensure compatibility with the existing bricks and to maintain the structural integrity of the wall. Incorrect mortar can cause damage to the bricks and lead to future repairs. Matching the original mortar mix also helps in achieving a uniform appearance in the brickwork.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Exterior Brick Repair Service',
		listItems: [
			'Meticulous Surface Care',
			'Simple, Straight-Forward Pricing',
			'100% Satisfaction Guaranteed',
			'Long-Lasting Results'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="lg:order-first order-last">
		<enhanced:img
			class="w-full h-auto max-w-[500px] mx-auto bord rounded-lg"
			{src}
			alt="Front exterior of red brick house"
		/>
	</div>

	<div slot="right-column">
		<h2>Thorough Brick Repair Services</h2>

		<p>
			Brick exteriors are known for their durability and timeless appeal. However, even brick can
			show signs of wear and tear over time. At Klasek Painting, we specialize in repairing exterior
			brick to restore its beauty and structural integrity. Our skilled team has the expertise to
			handle <a href={routes['brick-painting-repair'].href}>all types of brick repairs</a>, ensuring
			your home looks its best and is well-protected from the elements.
		</p>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Common Causes For Brick Deterioration</h2>
	</HeadingAccent>

	<p>
		Understanding the common causes of brick deterioration can help prevent further damage and
		maintain the longevity of your brick exterior.
	</p>

	<h3>Here are some typical reasons bricks may deteriorate:</h3>

	<ul>
		<li>
			<strong>Weathering:</strong> Constant exposure to rain, snow, and extreme temperatures can cause
			bricks to crack, chip, or erode over time
		</li>
		<li>
			<strong>Moisture Infiltration:</strong> Water penetration due to poor drainage or damaged mortar
			can weaken bricks and lead to structural issues
		</li>
		<li>
			<strong>Salt Damage:</strong> In colder climates, deicing salts can cause brick surfaces to spall
			and crumble
		</li>
		<li>
			<strong>Biological Growth:</strong> Moss, mold, and mildew can grow on bricks, trapping moisture
			and causing decay
		</li>
		<li>
			<strong>Improper Repairs:</strong> Using the wrong materials or techniques for brick repairs can
			exacerbate damage and lead to further deterioration
		</li>
	</ul>
</BasicTemplateSection>

<BasicTemplateSection class="pb-0">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Our Brick Repairing Process</h2>
	</HeadingAccent>

	<p>
		At Klasek Painting, we follow a thorough and precise process to repair your exterior brick,
		ensuring a flawless finish and long-lasting results. Here's how we do it:
	</p>

	<ol>
		<li>
			<strong>Initial Inspection:</strong> We start with a detailed inspection of your brick exterior
			to identify any damage and assess the extent of the repairs needed.
		</li>
		<li>
			<strong>Surface Cleaning:</strong> We clean the brick thoroughly to remove dirt, biological growth,
			and loose mortar using specialized cleaning solutions and tools.
		</li>
		<li>
			<strong>Mortar Repair:</strong> Damaged or missing mortar is carefully removed and replaced with
			a matching mortar mix to restore the structural integrity of the brickwork.
		</li>
		<li>
			<strong>Brick Replacement:</strong> Severely damaged bricks are replaced with new ones that match
			the existing brick in color and texture.
		</li>
		<li>
			<strong>Sealing:</strong> We apply a high-quality sealant to the repaired areas to prevent moisture
			infiltration and protect the brick from future damage.
		</li>
		<li>
			<strong>Finishing Touches:</strong> Finally, we ensure all repairs blend seamlessly with the existing
			brickwork, providing a cohesive and aesthetically pleasing finish.
		</li>
	</ol>

	<p>
		Our professional painters are dedicated to providing excellent service on every project. With
		years of experience, we ensure that your exterior brick repairs are handled with the utmost care
		and precision. Klasek Painting proudly serves <a href={routes['service-area'].href}
			>Cook County and the surrounding areas</a
		>, offering top-notch
		<a href={routes['brick-painting-repair'].href}>exterior brick services</a> to keep your home looking
		its best. Trust us to deliver exceptional care and results for your brick exterior.
	</p>

	<GalleryLinkBlock data={[galleryRoutes['brick-painting']]} />
</BasicTemplateSection>

<FaqSection {faqData} />
