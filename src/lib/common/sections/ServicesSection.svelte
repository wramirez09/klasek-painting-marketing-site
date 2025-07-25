<script lang="ts">
	import Service, { type ServiceData } from './subcomponents/Service.svelte';
	import { serviceRoutes } from '../routing/routes';

	const serviceData: ServiceData[] = [
		{
			title: 'Siding Painting &\xa0Repair',
			description: 'Wood, Vinyl, Aluminum, and Hardie Board - We make it look great.',
			href: serviceRoutes['siding-painting-repair'].href,
			icon: ''
		},
		{
			title: 'Brick Painting &\xa0Repair',
			description: 'For best results, our experts repair brick surfaces before painting.',
			href: serviceRoutes['brick-painting-repair'].href,
			icon: ''
		},
		{
			title: 'Stucco Painting &\xa0Repair',
			description: 'Our stucco crews are the best in the area, assuring incredible results.',
			href: serviceRoutes['stucco-painting-repair'].href,
			icon: ''
		}
	];
</script>

<section class="p-y lg:px-12 xs:px-4 px-2 bg-off-white">
	<div class="container lg:max-w-screen-lg max-w-[500px] flex flex-col items-center lg:gap-8 gap-4">
		<h2 class="lg:text-4xl xs:text-3xl text-2xl font-semibold">Painting & Repair Services</h2>

		<ul class="grid lg:grid-cols-3 gap-8">
			{#each serviceData as data}
				<Service {data} />
			{/each}
		</ul>
	</div>
</section>
