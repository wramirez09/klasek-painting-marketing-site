<script lang="ts">
	export let open: boolean;

	let hamburger: HTMLElement;

	const handleClick = () => {
		if (document) {
			// If closing, focus on the hamburger
			if (open) {
				hamburger.focus();
			}

			open = !open;
		}
	};
</script>

<button
	bind:this={hamburger}
	on:click={handleClick}
	class="xs:p-6 p-4"
	aria-label="Hamburger menu"
	aria-expanded={open}
	aria-controls="menu"
>
	<div class="hamburger" class:open>
		<div class="burger burger1" />
		<div class="burger burger2" />
		<div class="burger burger3" />
	</div>
</button>

<style>
	.hamburger {
		width: 32px;
		height: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.burger {
		width: 32px;
		height: 3px;
		background: hsl(var(--primary));
		border-radius: 10px;
		transition: all 0.2s linear;
		position: relative;
		transform-origin: 1px;
	}

	.hamburger.open .burger1 {
		transform: rotate(45deg) translate(1px, 0);
	}

	.hamburger.open .burger2 {
		opacity: 0;
		transform: translateX(20px);
	}

	.hamburger.open .burger3 {
		transform: rotate(-45deg) translate(-1px, 0);
	}
</style>
