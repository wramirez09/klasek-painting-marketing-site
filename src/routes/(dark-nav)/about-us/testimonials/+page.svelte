<script lang="ts">
	import Testimonial from '$lib/common/sections/subcomponents/Testimonial.svelte';
	import { testimonials } from '$lib/common/sections/subcomponents/testimonialsData';
	import ViewOurWorkSection from '$lib/home/ViewOurWorkSection.svelte';
</script>

<!-- Testimonials -->
<section
	class={`p-y !pb-0 lg:px-8 bg-off-white relative 
        before:absolute before:content-[''] before:w-full before:h-[500px] before:inset-0 before:hero-gradient
        after:absolute after:content-[''] after:w-full after:lg:h-16 after:md:h-12 after:h-8 after:bg-white after:bottom-0 after:left-0 after:z-0
    `}
>
	<div class="relative container sm:bg-white sm:rounded-lg sm:shadow-subtle z-10">
		<div class="lg:p-12 p-6 flex flex-col items-center lg:gap-6 gap-4">
			<h1
				class="lg:text-6xl xs:text-4xl text-3xl font-semibold sm:text-secondary-dark text-white text-center"
				data-testid="page-heading"
			>
				Community Love
			</h1>
		</div>

		<ul class="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:pt-0 lg:p-6">
			{#each testimonials as data}
				<Testimonial gapClass="lg:px-1 px-4 py-2" {data} />
			{/each}
		</ul>
	</div>
</section>

<ViewOurWorkSection />
