<script lang="ts">
	import type { TestimonialData } from './testimonialsData';
	import google from '$images/logos/Google-G-logo.svg';
	import yelp from '$images/logos/yelp.svg';
	import fiveStars from '$images/5-stars.svg';

	export let data: TestimonialData;
	export let gapClass = '';
	export let showOverflow = true;

	let open = false;

	const overflow = data.quote.length > 200;
</script>

<div class={`${gapClass} max-w-[403px] mx-auto`}>
	<div
		class="p-4 pb-8 bg-white flex flex-col gap-2 select-none relative rounded-lg shadow-lg border"
	>
		<!-- Author section -->
		<div class="flex gap-4 w-full relative items-center">
			<!-- Profile picture -->
			<img class="size-12 rounded-full" src={data.avatar} alt="" loading="lazy" />

			<div class="flex flex-col">
				<!-- Name -->
				<span class="font-semibold block mr-8">{data.name}</span>

				<!-- 5 stars -->
				<img class="w-[83px] h-[15px]" src={fiveStars} alt="Five stars" loading="lazy" />
			</div>

			<!-- Yelp or google -->
			<img
				class="size-6 absolute right-0 top-0"
				src={data.source === 'google' ? google : yelp}
				alt="Google"
				loading="lazy"
			/>
		</div>

		<!-- Review -->
		<p
			class:!line-clamp-none={open}
			class:!max-h-[1000px]={open}
			class:h-[120px]={!open}
			class="duration-400 transition-all max-h-[120px]"
		>
			{data.quote}
		</p>

		{#if showOverflow && overflow}
			<button on:click={() => (open = !open)} class="absolute bottom-2 text-sm text-gray-600">
				{open ? 'Read less' : 'Read more'}
			</button>
		{/if}
	</div>
</div>

<style>
	p {
		display: -webkit-box;
		line-clamp: 5;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
