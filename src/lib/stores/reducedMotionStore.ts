import { readable } from 'svelte/store';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

export const reducedMotionStore = readable(true, function (set) {
	let stop = () => {
		// no behavior if not on browser
	};

	if (typeof window !== 'undefined') {
		const mediaQuery = window.matchMedia(reducedMotionQuery);

		const setMatches = () => set(mediaQuery.matches);

		setMatches();

		mediaQuery.addEventListener('change', setMatches);

		stop = () => mediaQuery.removeEventListener('change', setMatches);
	}

	return stop;
});
