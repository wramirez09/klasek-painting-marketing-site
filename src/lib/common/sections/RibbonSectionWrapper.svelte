<script lang="ts">
	let classes = '';
	export { classes as class };
</script>

<section
	class="lg:px-6 xs:px-4 px-2 bg-white lg:pb-4 pb-16 relative before:absolute before:w-full before:h-12 before:content-[''] before:bg-secondary before:left-0 before:top-0"
>
	<div class="shadow-filter">
		<div
			class="lg:container w-full lg:max-w-screen-xl max-w-screen-sm mx-auto relative lg:py-8 lg:ribbon bg-white {classes}"
		>
			<slot />
		</div>
	</div>
</section>
