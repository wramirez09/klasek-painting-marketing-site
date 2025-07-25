<script lang="ts">
	import Map from '$lib/common/other/Map.svelte';
	import { serviceAreaRoutes } from '$lib/common/routing/routes';
	import Button from '$components/button/button.svelte';
	import LocationIcon from '$images/icons/LocationIcon.svelte';
	import ClickToCall from '$lib/common/other/ClickToCall.svelte';
	import PhoneIcon from '$images/icons/PhoneIcon.svelte';
	import { googleMapsHref } from '$lib/common/seo/siteData';
</script>

<section class="p-y lg:px-12 xs:px-4 px-2 hero-gradient">
	<div class="container grid lg:grid-cols-2 lg:gap-12 gap-6">
		<!-- Text cell -->
		<div
			class="flex flex-col justify-center lg:gap-6 gap-4 text-secondary-dark bg-white rounded-lg lg:p-12 xs:px-6 px-4 py-6"
		>
			<h1
				class="lg:text-5xl xs:text-4xl text-3xl lg:font-normal font-semibold"
				data-testid="page-heading"
			>
				Service Areas
			</h1>

			<p class="leading-relaxed text-foreground">
				Klasek Painting has over 30 years of experience delivering beautiful, long-lasting results
				to homeowners in Chicago. Our mission is to be the area's most trusted exterior repair and
				exterior painting contractor, so we are commited to providing first class service at a fair
				price.
			</p>

			<hr class="border-[2px] w-full border-primary-dark" />

			<div class="flex items-center gap-4">
				<LocationIcon class="size-8 text-primary-dark" />
				<a
					href={googleMapsHref}
					target="_blank"
					class="underline underline-offset-2 lg:text-lg font-semibold"
					>4415&nbsp;S.&nbsp;Custer, Lyons,&nbsp;IL&nbsp;60534</a
				>
			</div>

			<div class="flex items-center gap-4">
				<PhoneIcon class="size-8 text-primary-dark" />
				<ClickToCall class="text-secondary-dark" variant="outline" />
			</div>
		</div>

		<!-- Map cell -->
		<Map class="lg:size-full w-full h-[250px]" />

		<!-- Service Areas -->
		<ul
			class="lg:col-span-2 grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-2 mx-auto lg:gap-x-16"
		>
			{#each Object.values(serviceAreaRoutes) as { text, href }}
				<li class="disc lg:[--top:12px] [--top:10px] lg:text-lg">
					<Button {href} variant="link">{text}</Button>
				</li>
			{/each}
		</ul>
	</div>
</section>
