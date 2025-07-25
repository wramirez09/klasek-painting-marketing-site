<script lang="ts">
	import stars from '$images/5-stars.svg';
	import google from '$images/logos/Google-name-logo.svg';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import Testimonial from './subcomponents/Testimonial.svelte';
	import type { TestimonialData } from './subcomponents/testimonialsData';
	import ArrowIcon from '$lib/images/icons/ArrowIcon.svelte';
	import { inview, type Options } from 'svelte-inview';
	import { aboutUsRoutes } from '../routing/routes';
	import paintTop from '$images/backgrounds/gray-paint-top.webp';
	import paintBottom from '$images/backgrounds/gray-paint-bottom.webp';

	/* svelte-inview set up */
	let isInView: boolean;
	const options: Options = {
		rootMargin: '200px',
		unobserveOnEnter: false
	};

	let testimonials: TestimonialData[];

	const initializeSwiper = async () => {
		testimonials = (await import('./subcomponents/shortTestimonials')).shortTestimonials;

		let Swiper = (await import('swiper')).default;
		let Navigation = (await import('swiper/modules')).Navigation;
		let Pagination = (await import('swiper/modules')).Pagination;

		isInView = true;

		new Swiper('.testimonial-swiper', {
			modules: [Navigation, Pagination],
			navigation: {
				nextEl: '.testimonial-swiper-button-next',
				prevEl: '.testimonial-swiper-button-prev'
			},
			pagination: {
				el: '.testimonials-swiper-pagination'
			},
			slidesPerView: 1,
			breakpoints: {
				640: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3,
					pagination: false
				}
			}
		});
	};
</script>

<section
	use:inview={options}
	on:inview_enter={() => void initializeSwiper()}
	class="relative bg-white"
>
	<!-- Top Texture -->
	<div
		style={`background-image: url(${isInView ? paintTop : ''});`}
		class="w-full h-[100px] bg-cover bg-top max-w-[2440px] mx-auto"
	/>

	<div class="bg-off-white lg:px-12 pt-2">
		<div class="container relative">
			<!-- Google heading -->
			<div class="flex flex-col gap-1 w-fit mx-auto">
				<div class="text-lg font-semibold text-gray-800 flex items-center gap-2">
					<span>Review us</span>
					<img class="w-[100px] h-[18px]" src={stars} alt="Five stars" loading="lazy" />
					<span>on</span>
				</div>

				<img class="w-[218px] h-[69px]" src={google} alt="Google" loading="lazy" />
			</div>

			<!-- Testimonial carousel -->
			<div class:custom-loader={!testimonials} class="relative xl:px-0 sm:px-8 min-h-[248px]">
				<div class="swiper testimonial-swiper">
					<div class="swiper-wrapper py-3">
						{#if isInView}
							{#each testimonials as data}
								<div class="swiper-slide">
									<Testimonial gapClass="px-2" {data} showOverflow={false} />
								</div>
							{/each}
						{/if}
					</div>

					<!-- Pagination -->
					<div class="testimonials-swiper-pagination lg:hidden mt-2" />
				</div>

				<!-- Prev button -->
				<button
					class="testimonial-swiper-button-prev absolute top-[calc(248px_/_2)] xl:-left-12 sm:-left-2 left-1/3 -translate-x-1/2"
					aria-label="previous"
				>
					<ArrowIcon class="arrow-icon rotate-180" />
				</button>

				<!-- Next button -->
				<button
					class="testimonial-swiper-button-next absolute top-[calc(248px_/_2)] xl:-right-12 sm:-right-2 sm:translate-x-0 right-1/3 translate-x-1/2"
					aria-label="next"
				>
					<ArrowIcon class="arrow-icon" />
				</button>
			</div>

			<div class="mx-auto w-fit lg:mt-0 mt-4">
				<a
					class="text-sm text-primary-dark underline font-semibold"
					href={aboutUsRoutes['testimonials'].href}>View All Testimonials</a
				>
			</div>
		</div>
	</div>

	<!-- Bottom Texture -->
	<div
		style={`background-image: url(${isInView ? paintBottom : ''});`}
		class="w-full h-[100px] bg-cover bg-top 2xl:bg-bottom max-w-[2440px] mx-auto"
	/>
</section>

<style lang="postcss">
	:global(.arrow-icon) {
		@apply text-gray-400 lg:size-8 duration-200 lg:block hidden;
	}

	:global(
			.testimonial-swiper-button-prev:disabled > .arrow-icon,
			.testimonial-swiper-button-next:disabled > .arrow-icon
		) {
		@apply text-gray-100;
	}

	:global(.testimonials-swiper-pagination) {
		display: flex;
		justify-content: center;
		gap: 12px;
		width: fit;
	}

	:global(.testimonials-swiper-pagination > .swiper-pagination-bullet) {
		background: rgba(159, 159, 159, 1);
	}

	:global(.testimonials-swiper-pagination > .swiper-pagination-bullet-active) {
		color: #fff;
		@apply bg-primary;
	}

	.custom-loader {
		@apply animate-pulse grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 lg:pb-8 before:content-[''] before:bg-off-white before:rounded-lg before:size-full after:content-[''] after:bg-off-white after:rounded-lg after:size-full;

		& > div {
			@apply content-[''] bg-off-white size-full rounded-lg col-start-2;
		}
	}
</style>
