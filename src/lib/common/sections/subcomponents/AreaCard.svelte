<script lang="ts">
	import ClickToCall from '$lib/common/other/ClickToCall.svelte';
	import Map from '../../other/Map.svelte';
	import LocationIcon from '$images/icons/LocationIcon.svelte';
</script>

<div
	class="grid grid-cols-1 lg:grid-rows-[minmax(300px)_auto] grid-rows-[250px_auto] w-full max-w-screen-sm mx-auto"
>
	<div>
		<Map lazy={true} />
	</div>

	<div class="lg:py-4 py-2 flex flex-col sm:gap-4 gap-2">
		<span class="font-semibold lg:text-2xl text-xl flex gap-2 items-center">
			<LocationIcon class="size-6 inline text-primary-dark" />
			Lyons, Illinois
		</span>

		<hr class="border-secondary border-[1px] w-full" />

		<div class="flex sm:flex-row flex-col lg:items-center justify-between lg:gap-12 gap-4">
			<p class="lg:text-lg">
				4415&nbsp;S.&nbsp;Custer, <br />Lyons,&nbsp;IL&nbsp;60534
			</p>

			<ClickToCall variant="outline" class="text-secondary-dark lg:w-full sm:w-fit" />
		</div>
	</div>
</div>
