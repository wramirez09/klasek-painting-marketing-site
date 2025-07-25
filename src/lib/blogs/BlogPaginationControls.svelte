<script lang="ts">
	import { isMobileStore } from '$lib/stores/isMobileStore';
	import ArrowIcon from '$images/icons/ArrowIcon.svelte';
	import { goto } from '$app/navigation';

	export let currentPage: number;
	export let maxPage: number;

	let inputError = false;
	let value: number;

	const handleSubmit = async () => {
		if (value < 1 || value > maxPage) {
			inputError = true;
			return;
		}

		inputError = false;

		// Redirect to the new page
		await goto(`/blog?page=${value}`);
	};
</script>

<!-- Desktop pagination controls -->
<div
	role="navigation"
	aria-label="Pagination for blog posts"
	class="flex justify-center items-center gap-2 lg:text-primary text-gray-800 relative min-h-[50px]"
>
	<!-- Prev button -->
	{#if currentPage !== 1}
		<a
			class="pagination-button"
			href={`/blog?page=${currentPage - 1}`}
			aria-label={`Page ${currentPage - 1}`}
		>
			<ArrowIcon class="size-8 rotate-180 text-primary" />
		</a>
	{:else}
		<div class="pagination-button">
			<ArrowIcon class="size-8 rotate-180 text-gray-200" />
		</div>
	{/if}

	{#if $isMobileStore}
		<!-- Mobile page numbers -->
		<form class="lg:hidden" on:submit|preventDefault={handleSubmit}>
			<input
				bind:value
				id="page-number"
				class="w-[30px] py-1 border-2 rounded-sm text-center"
				type="number"
				placeholder={currentPage.toString()}
				min="1"
				max={maxPage}
			/>
			<label for="page-number" hidden>Enter page number</label>
			{#if inputError}
				<span
					class="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-red-500"
					>Invalid page number</span
				>
			{/if}
		</form>

		<span class="lg:hidden">of {maxPage}</span>
	{:else}
		<!-- Desktop page numbers -->
		{#each Array.from({ length: maxPage }, (_, i) => i + 1) as page}
			<a
				class:active-page={page === currentPage}
				class:disable-pagination-button={page === currentPage}
				class="page-number lg:block hidden"
				href={`/blog?page=${page}`}
			>
				<span class="leading-none">{page}</span>
			</a>
		{/each}
	{/if}

	<!-- Next button -->
	{#if currentPage !== maxPage}
		<a
			class="pagination-button"
			href={`/blog?page=${currentPage + 1}`}
			aria-label={`Page ${currentPage + 1}`}
		>
			<ArrowIcon class="size-8 text-primary" />
		</a>
	{:else}
		<ArrowIcon class="size-8 text-gray-200" />
	{/if}
</div>

<style lang="postcss">
	.page-number {
		@apply border-2 border-secondary-dark text-white size-12 grid place-items-center rounded-full text-xl font-semibold hover:bg-secondary bg-secondary-dark;
	}

	.active-page {
		@apply pointer-events-none opacity-50;
	}

	.pagination-button {
		@apply mx-1;
	}
</style>
