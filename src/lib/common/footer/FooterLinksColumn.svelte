<script lang="ts">
	export let title: string;
</script>

<div class="w-fit mx-auto text-white">
	<span class="block font-semibold lg:text-xl text-lg mb-4">{title}</span>

	<ul class="flex flex-col gap-2 [&_a]:underline [&_a]:underline-offset-4">
		<slot />
	</ul>
</div>
