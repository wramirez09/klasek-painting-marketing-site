<script lang="ts" context="module">
	export type Gallery = 'our-work' | 'before-after';
</script>

<script lang="ts">
	import Button from '$components/button/button.svelte';

	export let activeTab: Gallery;
</script>

<section class="py-8 bg-secondary p-x">
	<div
		class={`
            container max-w-screen-sm flex md:justify-between justify-center md:gap-0 xs:gap-12 gap-6 items-center xs:text-2xl text-xl font-semibold relative md:w-full w-fit
            before:absolute before:content-[''] before:h-1 before:bg-white before:rounded-full before:top-full 
            ${activeTab === 'our-work' ? 'before:left-0 xs:before:w-[118px] before:w-[98px]' : 'xs:before:left-[calc(100%-170px)] xs:before:w-[170px] before:left-[calc(100%-142px)] before:w-[142px]'}
        `}
	>
		<div class="size-fit tab">
			<Button on:click={() => (activeTab = 'our-work')} class="no-underline" variant="link"
				>Our Work</Button
			>
		</div>

		<div class="size-fit tab">
			<Button on:click={() => (activeTab = 'before-after')} class="no-underline" variant="link"
				>Before & After</Button
			>
		</div>
	</div>
</section>

<style lang="postcss">
	.tab {
		@apply relative before:absolute before:content-[''] before:h-1 before:w-full before:top-full before:bg-white before:opacity-20 before:rounded-full before:hover:opacity-40 before:duration-200;
	}
</style>
