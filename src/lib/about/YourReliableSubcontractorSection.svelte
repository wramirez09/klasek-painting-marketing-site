<script lang="ts">
	import RibbonWrapper from '$lib/common/other/RibbonWrapper.svelte';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';

	const listItems = [
		'Design & Color Consultation',
		'Surface Repair & Preparation',
		'Brick, Siding, & Stucco Refinishing',
		'Paint, Limewash, & Stain',
		'Professional Communication'
	];
</script>

<section class="bg-white p-y p-x">
	<div class="container grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 gap-4">
		<RibbonWrapper class="lg:col-span-2 lg:mx-auto">
			<h2 class="lg:text-5xl sm:text-4xl text-3xl lg:px-6 font-semibold">
				Your Reliable Contractor
			</h2>
		</RibbonWrapper>

		<!-- Paragraphs -->
		<div class="flex flex-col gap-4">
			<p>
				You can rely on our team of experts to bring your home to life. Klasek Painting has been in
				the Chicago painting business for over 30 years. We are most well-known for our high quality
				work, dependable service, superior products, satisfaction guarantee, and the ability to meet
				your deadline. We also give the best warranty in the business. We are committed to providing
				you superior exterior painting services at competitive pricing. You can rely on our team of
				experts to bring your home to life.
			</p>

			<p>
				At Klasek Painting we offer reliable, professional painting services for exterior surfaces.
				Our company was established in 1992 and with over 30 years of experience, our company
				continues to provide top-quality work for residential projects. We use the most
				state-of-the-art materials from Sherwin Williams to assure a long-lasting paint job. We work
				from 7am to 5pm to complete your project in a timely fashion.
			</p>
		</div>

		<!-- List -->
		<div>
			<HeadingAccent
				><h3 class="lg:text-3xl sm:text-2xl text-xl font-semibold text-left">
					Our work encompasses:
				</h3></HeadingAccent
			>
			<ul
				class="font-semibold text-secondary-dark lg:text-2xl text-lg flex flex-col mt-4 lg:gap-4 gap-2 xl:w-3/4 lg:w-full sm:w-3/4 w-full"
			>
				{#each listItems as item}
					<li class="disc lg:[--top:14px] [--top:12px]">{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
