<script lang="ts">
	import HeadingAccent from '../other/HeadingAccent.svelte';
	import { routes } from '../routing/routes';
	import RibbonWrapper from '../other/RibbonWrapper.svelte';
	import { cn } from '../utils';

	export let showExteriorPainting = true;
	export let showSidingPaintingRepair = true;
	export let showBrick = true;
	export let showStucco = true;
	export let showDesignConsultation = true;

	let classes = '';
	export { classes as class };
</script>

<section class={cn('p-y p-x bg-white main-container', classes)}>
	<div class="container max-w-screen-lg">
		<RibbonWrapper class="lg:px-4 mx-auto"
			><h2 class="xs:text-4xl text-3xl">Other Services We Offer</h2></RibbonWrapper
		>

		<p class="text-center max-w-screen-md mx-auto mb-4">
			At Klasek painting, we offer a variety of exterior painting and repair services for your home
			that have been providing long-last results to the Chicagoland area for over 30 years.
		</p>

		<!-- Exterior painting services -->
		{#if showExteriorPainting}
			<HeadingAccent extend={true} class="w-fit"><h3>Exterior Home Painting</h3></HeadingAccent>
			<ul>
				<li>
					<strong>Historic House Painting:</strong> Klasek Painting specializes in
					<a href={routes['historic-house-painting'].href}
						>restoring and preserving historic homes</a
					>, using premium materials and techniques that honor architectural details while
					refreshing the exterior for lasting beauty.
				</li>

				<li>
					<strong>Exterior Paint Contractor:</strong>
					Choose Klasek Painting to be your
					<a href={routes['exterior-paint-contractor'].href}>exterior paint contractor</a>. We
					provide a seamless, weather-resistant finish that enhances curb appeal and protects your
					home from the elements.
				</li>
			</ul>
		{/if}

		<!-- Siding painting services -->
		{#if showSidingPaintingRepair}
			<HeadingAccent extend={true} class="w-fit mt-4"><h3>Siding Painting</h3></HeadingAccent>
			<ul>
				<li>
					<strong>Hardie Board Painting:</strong>
					Klasek Painting offers expert
					<a href={routes['hardie-painting'].href}>hardie board painting services</a> that deliver a
					long-lasting, vibrant finish while ensuring optimal protection against the elements for your
					home's exterior.
				</li>

				<li>
					<strong>Aluminum Siding Painting:</strong>
					Refresh the appearance of your home with our
					<a href={routes['aluminum-painting'].href}>aluminum siding painting services</a>, designed
					to enhance aesthetics while offering robust protection against harsh weather conditions.
				</li>

				<li>
					<strong>Cedar Siding Painting:</strong>
					With Klasek Painting's expertise in
					<a href={routes['cedar-painting'].href}>cedar siding painting</a>, you can enhance the
					natural beauty of your wood while applying a protective finish that endures the elements
					and keeps your home looking its best.
				</li>

				<li>
					<strong>Vinyl Siding Painting:</strong>
					Transform your home’s exterior by choosing us for your
					<a href={routes['vinyl-painting'].href}>vinyl siding painting</a>, a service that
					revitalizes your siding’s appearance while providing a durable finish that resists fading
					and weather damage.
				</li>
			</ul>

			<!-- Siding repair services -->
			<HeadingAccent extend={true} class="w-fit mt-4"><h3>Siding Repair</h3></HeadingAccent>
			<ul>
				<li>
					<strong>Hardie Board Repair:</strong>
					When it comes to maintaining your home, Klasek Painting offers exceptional services in
					<a href={routes['hardie-repair'].href}>repairing hardie board</a>, ensuring a solid
					defense against moisture and enhancing the overall longevity of your siding.
				</li>

				<li>
					<strong>Aluminum Siding Repair:</strong>
					Trust Klasek Painting to expertly handle your
					<a href={routes['aluminum-repair'].href}>aluminum siding repair</a>, restoring your home’s
					exterior while ensuring a protective finish that stands up to the elements and enhances
					curb appeal.
				</li>

				<li>
					<strong>Cedar Siding Repair:</strong>
					With a commitment to quality, Klasek Painting focuses on enhancing your home's protection against
					moisture and pests while preserving its aesthetic charm through our extensive
					<a href={routes['cedar-repair'].href}>cedar siding repair service</a>.
				</li>

				<li>
					<strong>Vinyl Siding Repair:</strong>
					Klasek Painting offers reliable
					<a href={routes['vinyl-repair'].href}>vinyl siding repair</a> that not only restores the integrity
					of your exterior but also ensures it remains vibrant and resistant to weather damage for years
					to come.
				</li>
			</ul>
		{/if}

		<!-- Brick services -->
		{#if showBrick}
			<HeadingAccent extend={true} class="w-fit mt-4"><h3>Brick Services</h3></HeadingAccent>
			<ul>
				<li>
					<strong>Exterior Brick Painting:</strong>
					Enhance your home’s curb appeal with Klasek Painting's
					<a href={routes['brick-painting'].href}>exterior brick painting</a>, a service that
					revitalizes your brickwork while providing a protective finish against the elements.
				</li>

				<li>
					<strong>Exterior Brick Staining:</strong>
					We also specialize in <a href={routes['brick-staining'].href}>exterior brick staining</a>,
					offering a stunning transformation that enhances your brick's natural texture while
					providing lasting protection against weathering and fading.
				</li>

				<li>
					<strong>Exterior Brick Repair:</strong>
					Trust Klasek Painting for expert
					<a href={routes['brick-repair'].href}>exterior brick repair</a> that restores the structural
					integrity of your home while preserving its aesthetic charm and protecting it from moisture
					damage.
				</li>
			</ul>
		{/if}

		<!-- Stucco services -->
		{#if showStucco}
			<HeadingAccent extend={true} class="w-fit mt-4"><h3>Stucco Services</h3></HeadingAccent>
			<ul>
				<li>
					<strong>Stucco Painting:</strong>
					Refresh your home's appearance with Klasek Painting's
					<a href={routes['stucco-painting'].href}>stucco painting services</a>, designed to enhance
					the texture and color of your exterior while providing a durable finish that withstands
					the elements.
				</li>

				<li>
					<strong>Stucco Repair:</strong>
					Klasek Painting offers professional
					<a href={routes['stucco-repair'].href}>stucco repair services</a> to restore the integrity
					of your exterior, ensuring a seamless finish that enhances durability and protects against
					moisture intrusion.
				</li>
			</ul>
		{/if}

		{#if showDesignConsultation}
			<HeadingAccent extend={true} class="w-fit mt-4"><h3>Design & Color Service</h3></HeadingAccent
			>
			<ul>
				<li>
					<strong>Design & Color Consultation:</strong>
					Not sure which color or style to choose? Klasek Painting offers
					<a href={routes['design-consultation'].href}>design and color consultation services</a> to
					help you select the perfect palette that enhances your home’s aesthetic and creates a cohesive
					look.
				</li>
			</ul>
		{/if}
	</div>
</section>

<style lang="postcss">
	@import './subcomponents/template-styles.css';
</style>
