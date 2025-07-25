<script lang="ts">
	let classes = '';
	export { classes as class };

	export let extend = false;
</script>

<div
	class={`
    ${classes}
    ${extend ? 'extend-heading-ribbon' : 'sm:pl-6'}
    size-fit  text-white [&>*]:!text-white font-semibold bg-primary-dark px-1 [&>*]:py-1 relative w-[calc(100%-25px)]
    before:absolute before:content-[''] before:h-full before:w-[25px] before:left-[calc(100%-4px)] before:top-0 before:ribbon-right before:bg-primary-dark before:[--r:1rem]
    after:lg:hidden after:absolute after:content-[''] after:h-full after:w-[400px] after:right-[calc(100%-4px)] after:top-0 after:bg-primary-dark
`}
>
	<slot />
</div>

{#if extend}
	<style lang="postcss">
		.extend-heading-ribbon > * {
			@apply relative;

			&::before {
				@apply top-0 right-full absolute content-[''] bg-primary-dark w-[100vw] h-full;
			}
		}
	</style>
{/if}
