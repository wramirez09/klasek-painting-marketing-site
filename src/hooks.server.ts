import { routes, galleryRoutes, serviceAreaRoutes, legalRoutes } from '$lib/common/routing/routes';
import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

const redirectMap: Record<string, `/${string}`> = {
	'/about-us/faq': routes['faq'].href,
	'/about-us/photo-gallery': routes['gallery'].href,
	'/about-us/reviews': routes['testimonials'].href,
	'/contact': routes['contact'].href,
	// Before/after gallery routes
	'/about-us/before-and-after/before-after': routes['gallery'].href,
	'/about-us/before-and-after/before-after/cedar-siding-replacement-paint': routes['gallery'].href,
	'/about-us/before-and-after/before-after/brick-painting-back-of-the-house':
		routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-repair-pairt-back-of-the-house':
		routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-repair-paint-front-of-the-house':
		routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-trim': routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-trim2': routes['gallery'].href,
	'/about-us/before-and-after/before-after/hardy-board-siding-painting': routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-lime-wash': routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-repair-paint-back-of-the-house':
		routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-repair-paint-front-of-the-house2':
		routes['gallery'].href,
	'/about-us/before-and-after/before-after/brick-painting-front-of-the-house':
		routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-repair-paint-front-of-the-house3':
		routes['gallery'].href,
	'/about-us/before-and-after/before-after/stucco-repair-paint-back-of-the-house2':
		routes['gallery'].href,
	// Gallery routes
	'/about-us/photo-gallery/past-projects': galleryRoutes['past-projects'].href,
	'/about-us/photo-gallery/brick-painting': galleryRoutes['brick-painting'].href,
	'/about-us/photo-gallery/stucco-repair-paint': galleryRoutes['stucco-repair-paint'].href,
	'/about-us/photo-gallery/stucco-trim': galleryRoutes['stucco-trim'].href,
	'/about-us/photo-gallery/cedar-replacement': galleryRoutes['cedar-replacement'].href,
	'/about-us/photo-gallery/exterior-hardy-board': galleryRoutes['hardie-board'].href,
	'/about-us/photo-gallery/trim': galleryRoutes['trim'].href,
	'/about-us/photo-gallery/stucco-cedar-siding': galleryRoutes['stucco-cedar-siding'].href,
	'/about-us/photo-gallery/victorian-homes': galleryRoutes['victorian'].href,
	'/about-us/photo-gallery/cedar-siding-repair-paint': galleryRoutes['cedar-siding'].href,
	'/about-us/photo-gallery/white-cedar-siding': galleryRoutes['white-cedar-siding'].href,
	'/about-us/photo-gallery/siding-repair': galleryRoutes['siding-repair'].href,
	'/about-us/photo-gallery/siding-stucco': galleryRoutes['siding-stucco'].href,
	'/about-us/photo-gallery/cedar-shingle-stucco-repair':
		galleryRoutes['cedar-shingle-stucco-repair'].href,
	'/about-us/photo-gallery/stucco-repair': galleryRoutes['stucco-repair'].href,
	// Services routes
	'/interior-painting': routes['services'].href,
	'/home-remodeling': routes['services'].href,
	'/carpentry-services': routes['services'].href,
	'/exterior-painting': routes['exterior-home-painting'].href,
	'/exterior-painting/brick-house-painting-service-contractor': routes['brick-painting'].href,
	'/exterior-painting-contractors': routes['exterior-paint-contractor'].href,
	'/hardie-board-siding-painting': routes['hardie-painting'].href,
	'/services/siding-painting-repair/hardie-board-installation': routes['hardie-installation'].href,
	'/aluminum-siding-painting': routes['aluminum-painting'].href,
	'/exterior-brick-painting-staining': routes['brick-painting-repair'].href,
	'/historic-house-painting': routes['historic-house-painting'].href,
	'/cedar-siding-repair': routes['cedar-repair'].href,
	'/stucco-repair': routes['stucco-repair'].href,
	'/exterior-repair': routes['services'].href,
	'/wood-vinyl-siding-repair': routes['vinyl-repair'].href,
	// Service area routes
	'/service-areas': routes['service-area'].href,
	'/service-areas/burr-ridge': serviceAreaRoutes['burr-ridge'].href,
	'/service-areas/clarendon-hills': serviceAreaRoutes['clarendon-hills'].href,
	'/service-areas/berwyn': serviceAreaRoutes['berwyn'].href,
	'/service-areas/downers-grove': serviceAreaRoutes['downers-grove'].href,
	'/home-painters-riverside-il-60546': serviceAreaRoutes['riverside'].href,
	'/service-areas/la-grange': serviceAreaRoutes['la-grange'].href,
	'/home-painters-oak-park-il-60301': serviceAreaRoutes['oak-park'].href,
	'/service-areas/oak-brook': serviceAreaRoutes['oak-brook'].href,
	'/service-areas/orlando': serviceAreaRoutes['orland-park'].href,
	'/service-areas/westmont-painting-services': serviceAreaRoutes['westmont'].href,
	'/home-painters-forest-park-il-60131': serviceAreaRoutes['forest-park'].href,
	'/home-painters-river-forest-il-60305': serviceAreaRoutes['riverside'].href,
	'/home-painters-hinsdale-il-60521': serviceAreaRoutes['hinsdale'].href,
	'/home-painters-western-springs-il-60558': serviceAreaRoutes['western-springs'].href,
	'/service-areas/willowbrook': serviceAreaRoutes['willowbrook'].href,
	'/service-areas/westmont': serviceAreaRoutes['westmont'].href,
	'/privacy-policy': legalRoutes['privacy'].href,
	'/site-map': '/sitemap.xml'
};

export const handle: Handle = async ({ event, resolve }) => {
	let requestedPath = event.url.pathname;

	// Remove trailing '/' if present
	if (requestedPath.endsWith('/')) {
		requestedPath = requestedPath.slice(0, -1);
	}

	// If requested path exists in the redirect map, throw a 301 (permanent redirect)
	if (redirectMap[requestedPath]) redirect(301, redirectMap[requestedPath]);

	const response = await resolve(event);
	return response;
};
