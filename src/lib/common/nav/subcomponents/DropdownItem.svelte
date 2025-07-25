<script lang="ts">
	import type { Link } from '$lib/common/routing/routing';

	export let data: Link;

	export let navHidden = true;
</script>

<li class="relative">
	<a
		on:click={() => {
			navHidden = true;
		}}
		class="block py-4 lg:py-3 lg:px-2 font-semibold lg:text-lg text-xl lg:text-secondary-dark text-white lg:hover:underline underline-offset-2"
		href={data.href}
	>
		{data.text}
	</a>
</li>
