<script lang="ts" context="module">
	export type GalleryPreviewData = {
		title: string;
		href: string;
		src: string;
	};
</script>

<script lang="ts">
	export let data: GalleryPreviewData;
</script>

<li class="relative group overflow-clip rounded-lg">
	<a href={data.href} class="lg:min-h-[400px] w-full grid grid-rows-2">
		<!-- Background element -->
		<div
			class="absolute size-full inset-0 bg-black/65 bg-blend-multiply bg-center bg-cover z-0 group-hover:scale-105 duration-100"
			style={`background-image: url(${data.src})`}
			aria-hidden="true"
		/>

		<div
			class="row-start-2 flex flex-col gap-4 pt-4 lg:px-6 text-white font-bold [&>*]:z-10 pointer-events-none"
		>
			<p class="lg:text-2xl">{data.title}</p>

			<hr class="border-[1px] border-primary-dark w-12" />

			<span class="group-hover:underline underline-offset-2">View Gallery</span>
		</div>
	</a>
</li>
