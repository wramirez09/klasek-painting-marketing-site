<script lang="ts">
	import { cn } from '../utils';

	let classes = '';
	export { classes as class };
</script>

<section class={cn('bg-white p-y p-x relative', classes)}>
	<div class="container max-w-screen-lg main-container z-10 flex flex-col lg:gap-6 gap-4">
		<slot />
	</div>
</section>

<style>
	@import './subcomponents/template-styles.css';
</style>
