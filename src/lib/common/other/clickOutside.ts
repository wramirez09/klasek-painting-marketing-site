export function clickOutside(element: HTMLElement, callbackFunction: () => void) {
	function onClick(event: Event) {
		if (!element.contains(event.target as Node)) {
			callbackFunction();
		}
	}

	document.body.addEventListener('click', onClick);

	return {
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	};
}
