<script lang="ts">
	import { page } from '$app/stores';
	import type { Link } from '$lib/common/routing/routing';
	import { cn } from '$lib/common/utils';

	let classes = '';
	export { classes as class };

	export let data: Link;
	export let navHidden = true;
</script>

<li class={cn('lg:p-0 py-4', classes)}>
	<div>
		<a
			aria-current={$page.url.pathname === data.href ? 'page' : false}
			on:click={() => {
				navHidden = true;
			}}
			class="flex items-center whitespace-nowrap text-white lg:text-lg text-2xl font-semibold w-fit lg:hover:underline"
			href={data.href}>{data.text}</a
		>
	</div>
</li>
