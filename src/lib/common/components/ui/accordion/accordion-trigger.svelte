<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { cn } from '$lib/common/utils.js';

	type $$Props = AccordionPrimitive.TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export let level: AccordionPrimitive.HeaderProps['level'] = 3;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			`flex sm:flex-row flex-row-reverse sm:items-center sm:justify-between justify-end gap-2 sm:text-center text-left sm:py-4 py-3 sm:px-6 px-2 font-semibold transition-all sm:rounded-full rounded-lg bg-white border border-secondary/20 w-full hover:underline 
			[&[data-state=open]]:bg-primary-dark [&[data-state=open]]:text-white [&[data-state=open]]:border-primary-dark
			[&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-white`,
			className
		)}
		{...$$restProps}
		on:click
	>
		<slot />
		<ChevronDown
			class="sm:size-8 size-6 flex-shrink-0 text-secondary transition-transform duration-200"
		/>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
