<script lang="ts">
	import { cn } from '../utils';

	let classes = '';
	export { classes as class };
</script>

<div
	class={cn(
		classes,
		`
    relative w-fit 
    before:absolute before:content-[''] before:h-full before:w-[15px] before:ribbon-left before:right-full before:top-0 before:bg-primary-dark before:[--r:.75rem] before:lg:block before:hidden
    after:absolute after:content-[''] after:h-full after:w-[15px] after:ribbon-right after:left-full after:top-0 after:bg-primary-dark after:[--r:.75rem] after:lg:block after:hidden
`
	)}
>
	<slot />
</div>
