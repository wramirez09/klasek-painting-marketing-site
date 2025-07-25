<script lang="ts">
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import { routes } from '$lib/common/routing/routes';
	import Button from '$components/button/button.svelte';
	import src from '$images/home/klasek-before-after-gallery.webp';
	import { cn } from '$lib/common/utils';
	import { inview, type Options } from 'svelte-inview';

	let classes = '';
	export { classes as class };

	// Inview setup
	let isInView = false;
	const options: Options = {
		rootMargin: '200px',
		unobserveOnEnter: true
	};
</script>

<section
	use:inview={options}
	on:inview_enter={() => (isInView = true)}
	class={cn('p-y p-x bg-white', classes)}
>
	<div class="container grid lg:grid-cols-2 lg:gap-12 gap-4">
		<!-- Copy container -->
		<div class="flex flex-col lg:gap-6 gap-4">
			<HeadingAccent extend={true}
				><h2 class="lg:text-4xl xs:text-3xl text-2xl">View Our Work</h2></HeadingAccent
			>

			<p>
				At Klasek Painting, we pride ourselves on delivering exceptional painting and repair
				services that transform spaces and exceed our clients' expectations. Our photo gallery
				showcases the remarkable transformations we achieve through our attention to detail and
				commitment to quality. Each project reflects our dedication to enhancing the beauty and
				value of every property we work on.
			</p>

			<p>
				Our before and after photos illustrate the skill and craftsmanship that define Klasek
				Painting. Let these images inspire your next painting project and give you confidence in our
				ability to deliver outstanding results.
			</p>

			<Button class="text-secondary-dark w-fit" variant="outline" href={routes['gallery'].href}
				>View Our Gallery</Button
			>
		</div>

		<!-- Image container -->
		<div class="w-full lg:h-full h-[250px]">
			{#if isInView}
				<div
					style={`background-image: url(${src});`}
					class="bg-cover bg-center bord rounded-lg size-full"
				/>
			{/if}
		</div>
	</div>
</section>
