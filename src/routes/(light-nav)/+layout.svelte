<script lang="ts">
	import NavBar from '$lib/common/nav/NavBar.svelte';
	import Footer from '$lib/common/footer/Footer.svelte';
</script>

<NavBar lightNav={true} />
<slot />
<Footer />
