import type { RouteMap } from './routing';

export const aboutUsRoutes: RouteMap = {
	'service-area': { text: 'Service Area', href: '/about-us/service-area' },
	testimonials: { text: 'Testimonials', href: '/about-us/testimonials' },
	blog: { text: 'Blog', href: '/blog' },
	faq: { text: 'FAQs', href: '/about-us/faqs' }
};

export const serviceAreaRoutes: RouteMap = {
	'burr-ridge': { text: 'Burr Ridge', href: '/about-us/service-area/burr-ridge-house-painting' },
	hinsdale: { text: 'Hinsdale', href: '/about-us/service-area/hinsdale-house-painting' },
	'oak-brook': { text: 'Oak Brook', href: '/about-us/service-area/oak-brook-house-painting' },
	'western-springs': {
		text: 'Western Springs',
		href: '/about-us/service-area/western-springs-house-painting'
	},
	'la-grange': { text: 'La Grange', href: '/about-us/service-area/la-grange-house-painting' },
	'clarendon-hills': {
		text: 'Clarendon Hills',
		href: '/about-us/service-area/clarendon-hills-house-painting'
	},
	'downers-grove': {
		text: 'Downers Grove',
		href: '/about-us/service-area/downers-grove-house-painting'
	},
	'orland-park': { text: 'Orland Park', href: '/about-us/service-area/orland-park-house-painting' },
	riverside: { text: 'Riverside', href: '/about-us/service-area/riverside-house-painting' },
	'oak-park': { text: 'Oak Park', href: '/about-us/service-area/oak-park-house-painting' },
	berwyn: { text: 'Berwyn', href: '/about-us/service-area/berwyn-house-painting' },
	westmont: { text: 'Westmont', href: '/about-us/service-area/westmont-house-painting' },
	willowbrook: { text: 'Willowbrook', href: '/about-us/service-area/willowbrook-house-painting' },
	'willow-springs': {
		text: 'Willow Springs',
		href: '/about-us/service-area/willow-springs-house-painting'
	},
	'forest-park': { text: 'Forest Park', href: '/about-us/service-area/forest-park-house-painting' }
};

export const serviceRoutes: RouteMap = {
	// Exterior home painting
	'exterior-home-painting': {
		text: 'Exterior Painting',
		href: '/services/exterior-home-painting'
	},
	'historic-house-painting': {
		text: 'Historic House Painting',
		href: '/services/exterior-home-painting/historic-house-painting'
	},
	'exterior-paint-contractor': {
		text: 'Exterior Paint Contractor',
		href: '/services/exterior-home-painting/exterior-paint-contractor'
	},
	// Siding painting
	'siding-painting-repair': {
		text: 'Siding Painting & Repair',
		href: '/services/siding-painting-repair'
	},
	'hardie-painting': {
		text: 'Hardie Board Painting',
		href: '/services/siding-painting-repair/hardie-board-painting'
	},
	'aluminum-painting': {
		text: 'Aluminum Siding Painting',
		href: '/services/siding-painting-repair/aluminum-siding-painting'
	},
	'cedar-painting': {
		text: 'Cedar Siding Painting',
		href: '/services/siding-painting-repair/cedar-siding-painting'
	},
	'vinyl-painting': {
		text: 'Vinyl Siding Painting',
		href: '/services/siding-painting-repair/vinyl-siding-painting'
	},
	'hardie-repair': {
		text: 'Hardie Board Repair',
		href: '/services/siding-painting-repair/hardie-board-repair'
	},
	'aluminum-repair': {
		text: 'Aluminum Siding Repair',
		href: '/services/siding-painting-repair/aluminum-siding-repair'
	},
	'cedar-repair': {
		text: 'Cedar Siding Repair',
		href: '/services/siding-painting-repair/cedar-siding-repair'
	},
	'vinyl-repair': {
		text: 'Vinyl Siding Repair',
		href: '/services/siding-painting-repair/vinyl-siding-repair'
	},
	// Brick painting
	'brick-painting-repair': {
		text: 'Brick Painting & Repair',
		href: '/services/brick-painting-repair'
	},
	'brick-painting': {
		text: 'Exterior Brick Painting',
		href: '/services/brick-painting-repair/exterior-brick-painting'
	},
	'brick-staining': {
		text: 'Exterior Brick Staining',
		href: '/services/brick-painting-repair/exterior-brick-staining'
	},
	'brick-repair': {
		text: 'Exterior Brick Repair',
		href: '/services/brick-painting-repair/exterior-brick-repair'
	},
	// Stucco painting
	'stucco-painting-repair': {
		text: 'Stucco Painting & Repair',
		href: '/services/stucco-painting-repair'
	},
	'stucco-repair': {
		text: 'Stucco Repair',
		href: '/services/stucco-painting-repair/stucco-repair'
	},
	'stucco-painting': {
		text: 'Stucco Painting',
		href: '/services/stucco-painting-repair/stucco-painting'
	},
	'hardie-installation': {
		text: 'Hardie Board Services',
		href: '/services/siding-painting-repair/hardie-board-services'
	},
	// Gutter services
	gutters: {
		text: 'Gutter Installation & Repair',
		href: '/services/gutter-installation-repair'
	},
	// Design consultation
	'design-consultation': {
		text: 'Design Consultation',
		href: '/services/design-color-consultation'
	},
	// Commercial Exterior Painting
	commercial: {
		text: 'Commercial Painting',
		href: '/services/commercial-exterior-painting'
	}
};

export const galleryRoutes: RouteMap = {
	'past-projects': { text: 'Past Projects', href: '/photo-gallery/past-projects' },
	'brick-painting': { text: 'Brick Painting', href: '/photo-gallery/brick-painting' },
	'stucco-repair-paint': {
		text: 'Stucco Siding Repair & Paint',
		href: '/photo-gallery/stucco-siding-repair-paint'
	},
	'stucco-trim': { text: 'Stucco & Trim', href: '/photo-gallery/stucco-and-trim' },
	'cedar-replacement': { text: 'Cedar Replacement', href: '/photo-gallery/cedar-replacement' },
	'hardie-board': { text: 'Exterior Hardie Board', href: '/photo-gallery/exterior-hardie-board' },
	trim: { text: 'Trim', href: '/photo-gallery/trim' },
	'stucco-cedar-siding': {
		text: 'Stucco & Cedar Siding',
		href: '/photo-gallery/stucco-and-cedar-siding'
	},
	victorian: { text: 'Victorian Homes', href: '/photo-gallery/victorian-homes' },
	'cedar-siding': {
		text: 'Cedar Siding Repair & Paint',
		href: '/photo-gallery/cedar-siding-repair-paint'
	},
	'white-cedar-siding': { text: 'White Cedar Siding', href: '/photo-gallery/white-cedar-siding' },
	'siding-repair': { text: 'Siding Repair', href: '/photo-gallery/siding-repair' },
	'siding-stucco': { text: 'Siding & Stucco', href: '/photo-gallery/siding-and-stucco' },
	'cedar-shingle-stucco-repair': {
		text: 'Cedar Shingle & Stucco Repair',
		href: '/photo-gallery/cedar-shingle-and-stucco-repair'
	},
	'stucco-repair': { text: 'Stucco Repair', href: '/photo-gallery/stucco-repair' }
};

export const legalRoutes: RouteMap = {
	privacy: { text: 'Privacy Policy', href: '/legal/privacy-policy' }
};

export const routes: RouteMap = {
	gallery: { text: 'Photo Gallery', href: '/photo-gallery' },
	contact: { text: 'Contact Us', href: '/contact-us' },
	about: { text: 'About', href: '/about-us' },
	services: { text: 'Services', href: '/services' },
	careers: { text: 'Careers', href: '/careers' },
	...aboutUsRoutes,
	...serviceRoutes,
	...legalRoutes
};
