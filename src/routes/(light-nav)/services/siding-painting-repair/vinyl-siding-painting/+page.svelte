<script lang="ts">
	import SubServiceHero from '$lib/services/SubServiceHero.svelte';
	import ColumnTemplateSection from '$lib/common/sections/ColumnTemplateSection.svelte';
	import FaqSection from '$lib/common/sections/FaqSection.svelte';
	import type { FaqData } from '$lib/common/sections/subcomponents/Faq.svelte';
	import BasicTemplateSection from '$lib/common/sections/BasicTemplateSection.svelte';
	import { galleryRoutes, routes } from '$lib/common/routing/routes';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import src from '$images/services/vinyl-painting-service.webp?enhanced';
	import { isMobileStore } from '$lib/stores/isMobileStore';
	import GalleryLinkBlock from '$lib/services/GalleryLinkBlock.svelte';

	const faqData: FaqData[] = [
		{
			question: 'Can you paint vinyl siding, and is it a good idea?',
			answer:
				"Yes, you can paint vinyl siding, and it can be a great idea if your siding is in good condition but has become faded or you want to change the paint color. Painting vinyl siding is a cost-effective way to refresh your home's exterior without the expense of a full replacement. A quality painting job using the right materials can extend the life of your vinyl siding and enhance its appearance."
		},
		{
			question: 'What type of paint should be used on vinyl siding?',
			answer:
				"For vinyl siding, it's essential to use 100% acrylic paint. Acrylic paint is durable, flexible, and adheres well to vinyl surfaces. It also resists fading and cracking, which is crucial for maintaining a fresh look in varying weather conditions. A semi-gloss finish is often recommended for vinyl siding because it provides a nice sheen and is easy to clean, making maintenance simple."
		},
		{
			question: 'How do I choose the right paint color for my vinyl siding?',
			answer:
				"When choosing a paint color for your vinyl siding, consider the style of your home, the surrounding environment, and your personal preferences. It's important to select a color that complements your home's architectural features and blends well with the neighborhood. Consulting with a painting company like Klasek Painting, which has years of experience, can help you make the best choice. They can provide color samples and expert advice to ensure you get the desired look."
		},
		{
			question: 'What preparation is needed before painting vinyl siding?',
			answer:
				'Proper preparation is crucial for a successful vinyl siding painting project. The siding must be thoroughly cleaned to remove dirt, mildew, and chalking. This is typically done by power washing or pressure washing the surface. Any repairs should be made before painting. A high-quality primer designed for vinyl siding should be applied to ensure the paint adheres properly and lasts longer.'
		},
		{
			question: 'How does weather condition affect the painting of vinyl siding?',
			answer:
				"Weather conditions play a significant role in the outcome of a vinyl siding painting project. Ideally, painting should be done in mild, dry weather conditions. Extreme temperatures, high humidity, or rain can affect the paint's adhesion and drying process. It's best to avoid painting during very hot or cold weather to achieve the best results. A professional painting company will monitor the weather and schedule the painting during optimal conditions."
		},
		{
			question: 'How long does paint last on vinyl siding?',
			answer:
				'When done correctly, a quality painting job on vinyl siding can last anywhere from 5 to 10 years. This depends on the quality of the paint used, the application process, and the weather conditions in your area. Regular maintenance, such as cleaning the siding and addressing any minor issues promptly, can also help extend the life of the paint job.'
		},
		{
			question: 'Is it necessary to use a primer before painting vinyl siding?',
			answer:
				'Yes, using a primer before painting vinyl siding is essential for ensuring that the paint adheres properly and provides a uniform finish. A high-quality acrylic primer designed for vinyl surfaces will help the paint bond to the siding and improve durability. It also helps to block stains and provides a better base for the topcoat, resulting in a more vibrant and lasting paint color.'
		}
	];
</script>

<SubServiceHero
	data={{
		h1: '#1 Vinyl Siding Painting Company',
		listItems: [
			'Experienced Painters',
			'100% Satisfaction Guaranteed',
			'Free Design & Consultation',
			'Meticulous Surface Care'
		]
	}}
/>

<ColumnTemplateSection class="lg:pt-12 pt-4">
	<div slot="left-column" class="lg:row-start-1 row-start-2">
		<enhanced:img
			class="w-full h-auto bord rounded-lg max-w-[500px] mx-auto"
			{src}
			alt=""
			loading={$isMobileStore ? 'lazy' : 'eager'}
		/>
	</div>

	<div slot="right-column">
		<h2>Dependable Vinyl Siding Painting In Cook County</h2>

		<p>
			Vinyl siding painting is a cost-effective way to refresh the exterior of your home, giving it
			a new, vibrant look without the need for a full replacement. Vinyl siding is commonly found on
			suburban homes, offering durability and low maintenance. At Klasek Painting, we understand the
			unique properties of vinyl and have tailored our painting process to accommodate every type of
			house, ensuring a seamless and lasting finish. Whether your home is a cozy bungalow or a
			spacious two-story, our team has the expertise to handle it all.
		</p>
	</div>
</ColumnTemplateSection>

<BasicTemplateSection class="bg-off-white">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Our Painting Process</h2>
	</HeadingAccent>

	<p>
		At Klasek Painting, we know that great results come from careful planning and using the best
		materials. Our aim is to make sure your vinyl siding not only looks amazing but also stands up
		to the weather. Here's how we make that happen:
	</p>

	<ol>
		<li class="marker:!text-lg text-secondary-dark">
			<strong class="text-lg">Initial Consultation</strong>
			<p>
				We begin with a thorough consultation to understand your needs and preferences. This
				includes a detailed inspection of your vinyl siding to identify any areas that need special
				attention or repair.
			</p>
		</li>
		<li class="marker:!text-lg text-secondary-dark">
			<strong class="text-lg">Surface Preparation</strong>
			<p>
				Proper preparation is key to a successful vinyl siding painting project. We clean the
				surface thoroughly to remove dirt, mildew, and any loose or flaking paint. This ensures that
				the new paint will adhere properly and look smooth.
			</p>
		</li>
		<li class="marker:!text-lg text-secondary-dark">
			<strong class="text-lg">Primer Application</strong>
			<p>
				For vinyl siding, we use a specialized primer designed to bond with the vinyl surface. This
				primer helps the paint adhere and ensures a more durable finish.
			</p>
		</li>
		<li class="marker:!text-lg text-secondary-dark">
			<strong class="text-lg">Painting</strong>
			<p>
				We apply high-quality acrylic latex paint, specifically formulated for exterior vinyl
				surfaces. This paint is durable, flexible, and resistant to peeling and cracking. We apply
				two coats to ensure complete coverage and a rich, even finish.
			</p>
		</li>
		<li class="marker:!text-lg text-secondary-dark">
			<strong class="text-lg">Final Inspection</strong>
			<p>
				After painting, we conduct a meticulous final inspection to ensure every detail is perfect.
				Our team checks for consistency, coverage, and overall quality. We take pride in our work
				and strive to deliver complete customer satisfaction.
			</p>
		</li>
	</ol>
</BasicTemplateSection>

<BasicTemplateSection class="pb-0">
	<HeadingAccent extend={true} class="sm:w-fit">
		<h2>Exterior Surface Cleaning Staining and Painting</h2>
	</HeadingAccent>

	<p>
		One of the best ways we restore and repair siding is thorough cleaning. We remove dirt, cobwebs,
		and any mold or mildew. Depending upon the condition, careful power washing may be all that's
		needed. Sometimes we use a product like Simple Green. As exterior siding contractors, we know
		how to:
	</p>

	<ul>
		<li>patch vinyl siding</li>
		<li>replace house siding</li>
		<li>repair shingles</li>
		<li><a href={routes['cedar-repair'].href}>repair wood siding</a></li>
	</ul>

	<h3>Our Outside Preparation Process Includes:</h3>

	<ul>
		<li>Power washing and/or power sanding</li>
		<li>Scraping off loose and peeling or chipping old paint</li>
		<li>Removing damaged or defective caulking</li>
		<li>Sanding and smoothing surfaces so paint will adhere</li>
		<li>Repairing any chipped home siding or shingles</li>
		<li>Replacing rotted or damaged wood, material, or cedar shingles</li>
		<li>Replacing or repairing any damaged vinyl siding</li>
		<li>Install new siding if needed</li>
		<li>Completing any additional installation or required carpentry work</li>
		<li>Closing gaps in lap siding with caulking or puttying</li>
		<li>Caulking seams and casings</li>
		<li>Priming any bare wood or metal for a longer lasting paint job</li>
		<li>Hardware and light fixtures not to be painted are removed or protected</li>
		<li>All plants and outdoor furniture is be moved or covered</li>
		<li>Sidewalks, pools, and vehicles covered and protected</li>
		<li>All windows and doors are masked completely</li>
	</ul>

	<h3>Stain and Paint Colors</h3>

	<p>
		Color is critical in setting the tone and mood of a home. It is also the most important factor
		in curb appeal. We can customize your <a href={routes['design-consultation'].href}
			>exterior paint color scheme</a
		> to compliment your home and reflect your style. We are also able to match your existing paint,
		stain, or siding colors.
	</p>

	<p>
		Most of all, to ensure we give you the best job possible, we only use the highest quality
		products from Sherwin-Williams and Benjamin Moore. With premium paint products your home's
		exterior will withstand Chicago's winter and summer extremes. Your outside wall and trim colors
		will go from sun-bleached to beautiful.
	</p>

	<h3>Application of Exterior Paint & Stain</h3>

	<p>
		After all of the cleaning, repairing and preparation, now it's time for paint or sealing &
		staining. We are careful to apply all products evenly so the exterior has a uniform finish and
		color.
	</p>

	<p>
		Depending upon the condition of your home, you will need one or two coats of the finish colors.
		We will let you know when we provide you with a free written estimate.
	</p>

	<h3>Klasek Painting Company in Chicago</h3>

	<p>
		Our satisfaction-guaranteed services offer a cost-efficient way to add a durable coating that
		makes your residence look stunning and new. There is nothing average about Klasek Painting.
	</p>

	<p>
		In conclusion, we ensure that all painting projects are completed on time, within budget and to
		your satisfaction. <a href={routes['contact'].href}>Reach out today</a> and we'll make your home
		the envy of the neighborhood.
	</p>

	<GalleryLinkBlock data={[galleryRoutes['past-projects'], galleryRoutes['siding-repair']]} />
</BasicTemplateSection>

<FaqSection {faqData} />
