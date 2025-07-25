<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { Action } from 'svelte/action';
	import type { RenderParameters } from 'turnstile-types';
	import SITE_KEY from './siteKey';

	// Token generated flag
	export let tokenGenerated = false;

	const dispatch = createEventDispatcher<{
		'turnstile-callback': { token: string };
		'turnstile-error': (() => void) | undefined;
		'turnstile-expired': (() => void) | undefined;
		'turnstile-timeout': (() => void) | undefined;
	}>();

	let mounted = false;
	let loaded = hasTurnstile();

	let widgetId: string;

	// Check if the Turnstile script is already loaded
	function hasTurnstile() {
		if (typeof window == 'undefined') return null;
		return 'turnstile' in window;
	}

	// Callback for when the Turnstile script is loaded
	function loadCallback() {
		loaded = true;
	}

	function error() {
		dispatch('turnstile-error', undefined);
	}

	function expired() {
		dispatch('turnstile-expired', undefined);
	}

	function timeout() {
		dispatch('turnstile-timeout', undefined);
	}

	function callback(token: string) {
		tokenGenerated = true;
		dispatch('turnstile-callback', { token });
	}

	export function reset(): void {
		window.turnstile.reset(widgetId);
	}

	onMount(() => {
		mounted = true;

		return () => {
			mounted = false;
		};
	});

	const turnstile: Action = (node) => {
		const id = window.turnstile.render(node, {
			'timeout-callback': timeout,
			'expired-callback': expired,
			'error-callback': error,
			callback,

			sitekey: SITE_KEY,

			// Name of form field containing response token
			'response-field-name': 'cf-turnstile-response',
			// Interval to retry expired challenges
			'retry-interval': 8000,
			'response-field': true,
			tabindex: 0,
			appearance: 'always',
			execution: 'render',
			language: 'auto',
			retry: 'auto',
			theme: 'auto',
			size: 'normal'
			// action: undefined,
			// cData: undefined,
		} satisfies RenderParameters);

		widgetId = id;

		return {
			destroy: () => {
				window.turnstile.remove(id);
			}
		};
	};
</script>

<svelte:head>
	{#if mounted && !loaded}
		<script
			id="cf-turnstile-script"
			src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
			on:load={loadCallback}
			async
		></script>
	{/if}
</svelte:head>

<div class="min-h-[63px] min-w-[298px]">
	{#if loaded && mounted}
		<div use:turnstile />
	{/if}
</div>
