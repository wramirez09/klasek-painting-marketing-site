import { readable } from 'svelte/store';

export const isMobileStore = readable(true, function (set) {
	let stop = () => {
		// no behavior if not on browser
	};

	if (typeof window !== 'undefined') {
		// True for screens below md tailwind breakpoint
		const mediaQuery = window.matchMedia('(max-width: 1023px)');

		const setMatches = () => set(mediaQuery.matches);

		setMatches();

		mediaQuery.addEventListener('change', setMatches);

		stop = () => mediaQuery.removeEventListener('change', setMatches);
	}

	return stop;
});
