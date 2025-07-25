<script lang="ts">
	import src from '$images/about/about-klasek-painting.webp';
</script>

<section class="p-b p-x bg-secondary-dark hero-gradient">
	<div class="container flex flex-col items-center gap-6">
		<div
			style={`background-image: url(${src})`}
			class="relative lg:w-3/4 sm:w-[90%] w-full grid place-items-center lg:py-36 sm:py-24 py-16 bg-black/50 bg-blend-multiply bg-cover bg-top ribbon-bottom"
		>
			<h1 data-testid="page-heading" class="lg:text-6xl text-4xl text-white font-semibold">
				About Us
			</h1>
		</div>

		<div class="font-semibold">
			<p
				class="lg:text-4xl xs:text-2xl text-xl text-primary text-center mb-4 lg:w-full xs:w-4/5 mx-auto"
			>
				“Our painting company continues to prove <br class="lg:inline hidden" /> its quality work for
				residential projects.”
			</p>
			<p class="w-full text-right text-white lg:text-xl text-lg">— Peter Klasek</p>
		</div>
	</div>
</section>
