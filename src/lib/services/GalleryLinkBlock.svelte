<script lang="ts">
	import type { Link } from '$lib/common/routing/routing';

	export let data: Link[];
</script>

<div class="flex flex-col !gap-2">
	<h3>See More Photos of Our Work!</h3>

	<ul class="!gap-1">
		{#each data as { text, href }}
			<li><a {href}>{text} Gallery</a></li>
		{/each}
	</ul>
</div>
