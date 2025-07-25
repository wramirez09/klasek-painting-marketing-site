<script lang="ts">
	import Button from '$components/button/button.svelte';
	import type { Props } from '$components/button';
	import { destinationPhone } from '../seo/siteData';

	export let variant: Props['variant'] = 'default';
	let classes = '';
	export { classes as class };

	const href = `tel:${destinationPhone}`;

	const handleClick = () => {
		// eslint is not picking up the app.d.ts types where gtag is defined
		// eslint-disable-next-line no-undef
		gtag('event', 'conversion', {
			send_to: 'AW-998511498/REDUCIO9oOMZEIqnkNwD'
		});
		return false;
	};
</script>

<Button on:click={handleClick} class={classes} {href} {variant}>
	<slot />

	<!-- If no default slot provided -->
	{#if !$$slots.default}
		{destinationPhone}
	{/if}
</Button>
