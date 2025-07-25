<script lang="ts" context="module">
	import type { Image } from '$lib/common/types/image';
	import GoogleProof from '$lib/common/other/GoogleProof.svelte';
	import Button from '$components/button/button.svelte';

	export type RootServiceHeroData = {
		h1: string;
		listItems: string[];
		image: Image;
	};
</script>

<script lang="ts">
	export let data: RootServiceHeroData;
</script>

<section class="lg:bg-gradient-to-b from-off-white bg-white to-white md:py-6 p-y p-x">
	<div class="container md:grid md:grid-cols-2 flex flex-col xl:gap-16 gap-8">
		<!-- Copy column -->
		<div class="flex flex-col lg:gap-6 gap-4 md:py-8">
			<h1
				class="sm:text-4xl xs:text-3xl text-2xl text-secondary font-semibold"
				data-testid="page-heading"
			>
				{data.h1}
			</h1>

			<ul class="flex flex-col gap-2 text-secondary-dark font-semibold xs:text-lg">
				{#each data.listItems as item}
					<li class="disc xs:[--top:12px] [--top:10px]">{item}</li>
				{/each}
			</ul>

			<Button class="w-fit" href="/contact-us">Get Free Estimate</Button>
		</div>

		<!-- Image column -->
		<div class="flex flex-col gap-2 md:items-center order-last">
			<div
				class="size-full bg-gray-100 rounded-lg bg-cover bg-center bord md:block hidden"
				style={`background-image: url(${data.image.src});`}
				aria-label={data.image.alt}
			/>

			<GoogleProof textClasses="text-gray-600" />
		</div>
	</div>
</section>
