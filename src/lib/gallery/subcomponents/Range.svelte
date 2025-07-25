<script lang="ts">
	import icon from '$images/icons/double-chevron.svg';

	export let currentPercent: number;

	const minMaxBuffer = 3;
</script>

<div class="absolute size-full inset-0 z-10">
	<!-- Line -->
	<div
		style={`left: calc(${currentPercent}% - 2px);`}
		class="h-full w-1 bg-primary top-0 absolute z-30 cursor-col-resize pointer-events-none"
		aria-hidden="true"
	/>
	<!-- Chevron -->
	<img
		style={`left: calc(${currentPercent}% - var(--offset));`}
		class="lg:size-8 size-6 lg:[--offset:16px] [--offset:12px] pointer-events-none absolute top-1/2 -translate-y-1/2 z-50 select-none cursor-col-resize"
		src={icon}
		alt=""
		aria-hidden="true"
	/>

	<input
		aria-label="Before After Slider Range Input"
		min={minMaxBuffer}
		max={100 - minMaxBuffer}
		style={`--left: ${currentPercent}%;`}
		class="size-full bg-transparent lg:[--size:50px] [--size:40px] cursor-col-resize"
		type="range"
		bind:value={currentPercent}
	/>
</div>

<style>
	input[type='range'] {
		/* Disable default range styles */
		appearance: none;
		-webkit-appearance: none;
		&:focus {
			outline: none;
		}

		/* Thumb styles */
		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: var(--size);
			height: var(--size);
			background-color: hsl(var(--primary));
			border-radius: 100%;
			z-index: 20;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: calc(var(--left) - var(--size) / 2);
			border: 2px solid hsl(var(--primary));
			box-shadow: 0 3px 13px rgba(128, 128, 128, 0.8);
		}

		/* Disable default range styles */
		&::-webkit-slider-runnable-track {
			background: transparent;
		}
		&::-moz-range-track {
			background: transparent;
		}
		&::-ms-track {
			background: transparent;
			border-color: transparent;
			color: transparent;
		}
	}
</style>
