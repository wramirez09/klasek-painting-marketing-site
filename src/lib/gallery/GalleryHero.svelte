<script lang="ts">
	import src from '$images/home/klasek-before-after-gallery.webp';
</script>

<section class="lg:pt-12 py-6 lg:px-12 xs:px-4 px-2 hero-gradient">
	<div class="container grid lg:grid-cols-2 gap-6">
		<!-- Image column -->
		<div
			style={`background-image: url(${src});`}
			class="lg:size-full rounded-lg bg-cover bg-center border-2 border-primary lg:block hidden"
		/>

		<!-- Copy column -->
		<div class="flex flex-col gap-4 bg-white lg:py-8 lg:px-12 xs:p-6 p-4 rounded-lg">
			<span class="lg:text-xl text-lg text-primary-dark font-semibold">PHOTO GALLERY</span>
			<h1
				class="lg:text-5xl xs:text-4xl text-3xl text-secondary lg:font-normal font-semibold"
				data-testid="page-heading"
			>
				Ready To Get Started On Your&nbsp;Project?
			</h1>
			<p class="leading-loose">
				Klasek Painting has over 30 years of experience delivering beautiful, long-lasting results
				to homeowners in Chicago. Our mission is to be the area's most trusted exterior repair and
				exterior painting contractor, so we are committed to providing first class service at a fair
				price.
			</p>
		</div>
	</div>
</section>
