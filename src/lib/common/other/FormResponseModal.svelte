<script lang="ts">
	import * as Dialog from '$components/dialog';
	import { scale } from 'svelte/transition';
	import type { InfoCard } from '../types/info-card';

	export let open: boolean;
	export let copy: InfoCard;
</script>

<Dialog.Root bind:open>
	<Dialog.Content
		transition={scale}
		class="sm:max-w-lg xs:max-w-[calc(100%-theme(margin.6))] max-w-[calc(100%-theme(margin.4))] sm:overflow-visible overflow-x-clip bg-secondary text-white border-4 border-primary"
	>
		<Dialog.Header class="flex flex-col items-center justify-center gap-2">
			<Dialog.Title class="w-fit md:text-5xl text-4xl heading-accent text-center">
				{copy.title}
			</Dialog.Title>
			<Dialog.Description class="text-white font-medium text-center xs:text-lg w-4/5">
				{copy.description}
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
