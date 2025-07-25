<script lang="ts">
	let classes = '';
	export { classes as class };
	export let href = '/';
</script>

<li class={classes}>
	<a {href}>
		<slot />
	</a>
</li>
