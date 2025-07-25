<script lang="ts">
	import Button from '$components/button/button.svelte';
	import HeadingAccent from '$lib/common/other/HeadingAccent.svelte';
	import { routes } from '$lib/common/routing/routes';
	import { cn } from '$lib/common/utils';
	import src from '$images/backgrounds/why-choose-klasek-painting.webp';
	import { inview, type Options } from 'svelte-inview';

	let classes = '';
	export { classes as class };

	let isInView = false;
	const options: Options = {
		rootMargin: '300px',
		unobserveOnEnter: true
	};
</script>

<section class={cn('p-y p-x bg-white', classes)}>
	<div
		class="container grid lg:grid-cols-[6fr_5fr] grid-cols-1 lg:grid-rows-1 xs:grid-rows-[auto_325px] grid-rows-[auto_250px]"
	>
		<!-- Image container -->
		<div
			use:inview={options}
			on:inview_enter={() => (isInView = true)}
			class="w-full lg:h-full xs:h-[325px] h-[250px] bord border-primary-dark lg:max-w-none max-w-[500px] mx-auto rounded-lg overflow-clip bg-gray-100 lg:order-first order-last"
		>
			{#if isInView}
				<div style={`background-image: url(${src});`} class="size-full bg-cover bg-center" />
			{/if}
		</div>

		<!-- Content container -->
		<div class="flex flex-col lg:gap-6 gap-4 lg:py-6 pb-6 [&>*]:sm:ml-12">
			<HeadingAccent class="lg:!w-[calc(100%-25px)] sm:!ml-0 sm:!pl-12 w-fit">
				<h2 class="lg:text-4xl xs:text-3xl text-2xl">Why Choose Us?</h2>
			</HeadingAccent>

			<p
				class="leading-relaxed [&>a]:font-semibold [&>a]:underline [&>a]:underline-offset-2 [&>a]:text-secondary-dark [&>a]:whitespace-nowrap"
			>
				At Klasek Painting, we are passionate about helping properties in our community look their
				best. From <a href={routes['exterior-home-painting'].href}>exterior painting</a> to
				<a href={routes['stucco-painting-repair'].href}>stucco services</a>
				and <a href={routes['cedar-repair'].href}>cedar siding repair</a>, our team of experts are
				here to help. We work exclusively with the best materials on the market and pair them with
				time-tested methods to deliver results that last.
			</p>

			<p class="leading-relaxed">
				Our trusted contractors start every customized service with a free, written estimate,
				walking you through all of your options, so you can make the best decision for your
				property. We understand the value of your home, which is why we treat you and your space
				with the utmost care and respect.
			</p>

			<Button variant="outline" class="w-fit text-secondary-dark" href={routes['about'].href}>
				About Us
			</Button>
		</div>
	</div>
</section>
