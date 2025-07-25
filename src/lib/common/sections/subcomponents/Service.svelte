<script lang="ts" context="module">
	import type { InfoCardLink } from '$lib/common/types/info-card';
	import type { Icon } from '$lib/common/types/image';

	export type ServiceData = InfoCardLink & Icon;
</script>

<script lang="ts">
	import Button from '$components/button/button.svelte';

	export let data: ServiceData;
</script>

<li
	class="grid grid-cols-1 xs:grid-rows-[200px_auto] grid-rows-[150px_auto] rounded-lg bg-white overflow-clip shadow-subtle"
>
	<!-- Image container -->
	<div class="size-full bg-gray-100"></div>

	<!-- Content container -->
	<div class="flex flex-col gap-4 py-6 lg:px-8 xs:px-6 px-4">
		<h3 class="font-semibold lg:text-3xl text-2xl">{data.title}</h3>

		<p>{data.description}</p>

		<Button variant="outline" href={data.href} class="text-secondary-dark">View Service</Button>
	</div>
</li>
