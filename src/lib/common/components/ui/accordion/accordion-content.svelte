<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/common/utils.js';

	type $$Props = AccordionPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = slide;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};
	export { className as class };
</script>

<AccordionPrimitive.Content
	class={cn('overflow-hidden transition-all md:px-8 px-3 leading-relaxed', className)}
	{transition}
	{transitionConfig}
	{...$$restProps}
>
	<div class="lg:p-6 p-4 pt-3 bg-secondary text-white rounded-b-lg">
		<slot />
	</div>
</AccordionPrimitive.Content>
