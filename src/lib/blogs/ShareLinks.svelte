<script lang="ts" context="module">
	export type ShareLinksData = {
		icon: string;
		label: string;
		href: string;
	};
</script>

<script lang="ts">
	export let data: ShareLinksData;
</script>

<li>
	<a href={data.href} aria-label={data.label} target="_blank">
		<img class="size-6" src={data.icon} alt="" />
	</a>
</li>
