<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { galleryRoutes, routes, serviceRoutes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/exterior-stucco-painting-service.webp?enhanced';
	import { isMobileStore } from '$lib/stores/isMobileStore';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question: 'What type of paint is best for exterior stucco?',
			answer:
				"High-quality acrylic latex paint is the best for exterior stucco. It provides a durable, flexible, and water-resistant coat of paint that adheres well to stucco's porous surface."
		},
		{
			question: 'What are the drying times for stucco paint?',
			answer:
				'The drying times for stucco paint depend on weather conditions but generally range from 4 to 6 hours for the paint to be dry to the touch. Full curing can take up to 30 days.'
		},
		{
			question: 'How do I prepare stucco for painting?',
			answer:
				'Proper prep work is essential. This includes cleaning the surface with soap and water, repairing any cracks, and applying a primer to ensure the paint adheres well to the porous surface.'
		},
		{
			question: 'What are the best painting techniques for stucco?',
			answer:
				'Spray painting is a common technique for stucco because it provides even coverage. However, brush and roller methods can also be effective, especially for detailed work.'
		},
		{
			question: 'Can stucco be painted in a wide range of colors?',
			answer:
				'Yes, stucco can be painted in a wide range of colors. High-quality paint allows for vibrant and long-lasting color options.'
		},
		{
			question: 'How does weather affect stucco painting?',
			answer:
				"Weather significantly impacts stucco painting. It's best to paint in mild, dry conditions to ensure optimal drying times and adhesion."
		},
		{
			question: 'Is painted stucco easy to maintain?',
			answer:
				'Painted stucco is relatively easy to maintain. Regular cleaning with soap and water helps keep the surface looking fresh.'
		},
		{
			question: 'How often should exterior stucco be painted?',
			answer:
				'Exterior stucco should be painted every 5 to 10 years, depending on the quality of the previous paint job and environmental factors.'
		},
		{
			question: 'Why is it important to use a primer on stucco?',
			answer:
				'Using a primer on stucco is crucial because it seals the porous surface, ensuring better paint adhesion and a more even finish.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Stucco Painting Company',
		listItems: [
			'Free Design & Consultation',
			'Detailed Prep Work',
			'Experienced Painters',
			'Durable Finishes'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="lg:row-start-1 row-start-2">
		<enhanced:img
			class="w-full h-auto max-w-[500px] bord rounded-lg"
			{src}
			alt="White exterior stucco painting project in progress by Klasek Painting"
			loading={$isMobileStore ? 'lazy' : 'eager'}
		/>
	</div>

	<div slot="right-column">
		<h2>Reliable Stucco Painting Services</h2>

		<p>
			Stucco painting is an excellent way to refresh and protect the exterior of homes with stucco
			finishes. This type of painting is commonly found on Spanish, Mediterranean, and
			Southwestern-style homes, providing a unique and attractive appearance. At Klasek Painting, we
			specialize in stucco painting, ensuring that your home's exterior remains beautiful and
			well-protected against the elements. Our skilled team is experienced in handling all types of
			stucco surfaces, guaranteeing a flawless and durable finish.
		</p>

		<p>
			Interested in revitalizing your stucco exterior? <a href={routes['contact'].href}
				>Contact us</a
			> today to discuss your project with our expert painters.
		</p>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>How We Prepare for Stucco Painting</h2>
	</HeadingAccent>

	<p>
		Proper preparation is essential for a successful stucco painting project. At Klasek Painting, we
		are dedicated to providing exceptional <a href={serviceRoutes['stucco-painting-repair'].href}
			>stucco painting and repair services</a
		>. Our meticulous preparation process ensures that your stucco surface is ready for a flawless
		paint job.
	</p>

	<h3>Here's a detailed look at the process:</h3>

	<ol>
		<li>
			<strong>Initial Inspection:</strong> We begin with a thorough inspection of the stucco surface
			to identify any cracks, holes, or areas that need repair.
		</li>
		<li>
			<strong>Cleaning:</strong> The stucco is cleaned using a power washer to remove dirt, mold, and
			loose particles. This step ensures that the paint adheres properly to the surface.
		</li>
		<li>
			<strong>Repairing Cracks and Holes:</strong> Any cracks or holes in the stucco are filled with
			a high-quality stucco patching compound. This helps to create a smooth and even surface for painting.
		</li>
		<li>
			<strong>Surface Priming:</strong> We apply a specialized primer designed for stucco surfaces. This
			primer helps the paint adhere better and provides a more uniform finish.
		</li>
		<li>
			<strong>Masking and Covering:</strong> We cover windows, doors, and other areas that should not
			be painted. This step ensures clean lines and protects your home's features from paint splatters.
		</li>
		<li>
			<strong>Final Inspection:</strong> Before painting, we conduct a final inspection to ensure that
			all repairs are complete and the surface is perfectly prepared for painting.
		</li>
	</ol>
</BasicTemplateSection>

<BasicTemplateSection class="pb-0">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Our Painting Process</h2>
	</HeadingAccent>

	<p>
		At Klasek Painting, we believe that achieving exceptional results starts with a meticulous
		process and the highest quality materials. Our goal is to ensure your stucco looks fantastic and
		is protected against the elements.
	</p>

	<h3>Here's how we achieve outstanding results:</h3>

	<ol>
		<li>
			<strong>Initial Consultation:</strong> We begin with a thorough consultation to understand your
			needs and preferences. This includes a detailed inspection of your stucco to identify any areas
			that need special attention or repair.
		</li>
		<li>
			<strong>Surface Preparation:</strong> Proper preparation is key to a successful stucco painting
			project. We clean the surface thoroughly to remove dirt, mildew, and any loose or flaking paint.
			This ensures that the new paint will adhere properly and look smooth.
		</li>
		<li>
			<strong>Priming:</strong> For stucco, we use a specialized primer designed to bond with the stucco
			surface. This primer helps the paint adhere better and ensures a more durable finish.
		</li>
		<li>
			<strong>Painting:</strong> We apply high-quality acrylic latex paint, specifically formulated for
			exterior stucco surfaces. This paint is durable, flexible, and resistant to peeling and cracking.
			We apply two coats to ensure complete coverage and a rich, even finish.
		</li>
		<li>
			<strong>Final Inspection:</strong> After painting, we conduct a meticulous final inspection to
			ensure every detail is perfect. Our team checks for consistency, coverage, and overall quality.
			We take pride in our work and strive to deliver complete customer satisfaction.
		</li>
	</ol>

	<p>
		Our professional painters are dedicated to providing excellent performance on every project.
		With years of experience, we ensure that your stucco painting and repairs are handled with the
		utmost care and precision. Klasek Painting proudly serves <a href={routes['service-area'].href}
			>Cook County and the surrounding areas</a
		>, offering top-notch
		<a href={routes['stucco-painting-repair'].href}>stucco painting and repair services</a>
		to keep your home looking its best. <a href={routes['contact'].href}>Contact us</a> today for a free
		consultation.
	</p>

	<GalleryLinkBlock
		data={[
			galleryRoutes['stucco-repair-paint'],
			galleryRoutes['stucco-trim'],
			galleryRoutes['stucco-cedar-siding'],
			galleryRoutes['siding-stucco'],
			galleryRoutes['cedar-shingle-stucco-repair'],
			galleryRoutes['stucco-repair']
		]}
	/>
</BasicTemplateSection>

<FaqSection {faqData} />
