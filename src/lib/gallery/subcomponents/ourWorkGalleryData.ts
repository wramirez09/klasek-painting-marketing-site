import { galleryRoutes } from '$lib/common/routing/routes';
import type { GalleryPreviewGridData } from './GalleryPreviewGrid.svelte';
import pastSmall1 from '$images/galleries/past-projects/klasek-painting-past-project-1.webp';
import pastSmall2 from '$images/galleries/past-projects/klasek-painting-past-project-2.webp';
import pastLarge from '$images/galleries/past-projects/klasek-painting-past-project-3.webp';
import brickSmall1 from '$images/galleries/brick-painting/brick-painting-1.webp';
import brickSmall2 from '$images/galleries/brick-painting/brick-painting-2.webp';
import brickLarge from '$images/galleries/brick-painting/brick-painting-3.webp';
import stuccoRepairPaintSmall1 from '$images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-1.webp';
import stuccoRepairPaintSmall2 from '$images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-2.webp';
import stuccoRepairPaintLarge from '$images/galleries/stucco-siding-repair-paint/stucco-siding-paint-and-repair-3.webp';
import stuccoTrimSmall1 from '$images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-1.webp';
import stuccoTrimSmall2 from '$images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-2.webp';
import stuccoTrimLarge from '$images/galleries/stucco-and-trim/klasek-painting-stucco-and-trim-3.webp';
import cedarReplacementSmall1 from '$images/galleries/cedar-replacement/klasek-painting-cedar-replacement-1.webp';
import cedarReplacementSmall2 from '$images/galleries/cedar-replacement/klasek-painting-cedar-replacement-2.webp';
import cedarReplacementLarge from '$images/galleries/cedar-replacement/klasek-painting-cedar-replacement-3.webp';
import hardieSmall1 from '$images/galleries/exterior-hardie-board/exterior-hardie-board-1.webp';
import hardieSmall2 from '$images/galleries/exterior-hardie-board/exterior-hardie-board-2.webp';
import hardieLarge from '$images/galleries/exterior-hardie-board/exterior-hardie-board-3.webp';
import trimSmall1 from '$images/galleries/trim/klasek-painting-trim-1.webp';
import trimSmall2 from '$images/galleries/trim/klasek-painting-trim-2.webp';
import trimLarge from '$images/galleries/trim/klasek-painting-trim-3.webp';
import stuccoCedarSmall1 from '$images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-1.webp';
import stuccoCedarSmall2 from '$images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-2.webp';
import stuccoCedarLarge from '$images/galleries/stucco-and-cedar-siding/stucco-and-cedar-siding-3.webp';
import victorianSmall1 from '$images/galleries/victorian-homes/klasek-painting-victorian-homes-1.webp';
import victorianSmall2 from '$images/galleries/victorian-homes/klasek-painting-victorian-homes-2.webp';
import victorianLarge from '$images/galleries/victorian-homes/klasek-painting-victorian-homes-3.webp';
import cedarSidingSmall1 from '$images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-1.webp';
import cedarSidingSmall2 from '$images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-2.webp';
import cedarSidingLarge from '$images/galleries/cedar-siding-repair-paint/cedar-siding-repair-paint-3.webp';
import whiteCedarSmall1 from '$images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-1.webp';
import whiteCedarSmall2 from '$images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-2.webp';
import whiteCedarLarge from '$images/galleries/white-cedar-siding/klasek-painting-white-cedar-siding-3.webp';
import sidingRepairSmall1 from '$images/galleries/siding-repair/klasek-painting-siding-repair-1.webp';
import sidingRepairSmall2 from '$images/galleries/siding-repair/klasek-painting-siding-repair-2.webp';
import sidingRepairLarge from '$images/galleries/siding-repair/klasek-painting-siding-repair-3.webp';
import sidingStuccoSmall1 from '$images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-1.webp';
import sidingStuccoSmall2 from '$images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-2.webp';
import sidingStuccoLarge from '$images/galleries/siding-and-stucco/klasek-painting-siding-and-stucco-3.webp';
import cedarShingleSmall1 from '$images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-1.webp';
import cedarShingleSmall2 from '$images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-2.webp';
import cedarShingleLarge from '$images/galleries/cedar-shingle-and-stucco-repair/cedar-shingle-and-stucco-repair-3.webp';
import stuccoRepairSmall1 from '$images/galleries/stucco-repair/klasek-painting-stucco-repair-1.webp';
import stuccoRepairSmall2 from '$images/galleries/stucco-repair/klasek-painting-stucco-repair-2.webp';
import stuccoRepairLarge from '$images/galleries/stucco-repair/klasek-painting-stucco-repair-3.webp';

const ourWorkGalleryData = [
	{
		name: 'Past Projects',
		href: galleryRoutes['past-projects'].href,
		images: {
			small1: pastSmall1,
			small2: pastSmall2,
			large: pastLarge
		}
	},
	{
		name: 'Brick Painting',
		href: galleryRoutes['brick-painting'].href,
		images: {
			small1: brickSmall1,
			small2: brickSmall2,
			large: brickLarge
		}
	},
	{
		name: 'Stucco Repair & Paint',
		href: galleryRoutes['stucco-repair-paint'].href,
		images: {
			small1: stuccoRepairPaintSmall1,
			small2: stuccoRepairPaintSmall2,
			large: stuccoRepairPaintLarge
		}
	},
	{
		name: 'Stucco & Trim',
		href: galleryRoutes['stucco-trim'].href,
		images: {
			small1: stuccoTrimSmall1,
			small2: stuccoTrimSmall2,
			large: stuccoTrimLarge
		}
	},
	{
		name: 'Cedar Replacement',
		href: galleryRoutes['cedar-replacement'].href,
		images: {
			small1: cedarReplacementSmall1,
			small2: cedarReplacementSmall2,
			large: cedarReplacementLarge
		}
	},
	{
		name: 'Exterior Hardie Board',
		href: galleryRoutes['hardie-board'].href,
		images: {
			small1: hardieSmall1,
			small2: hardieSmall2,
			large: hardieLarge
		}
	},
	{
		name: 'Trim',
		href: galleryRoutes['trim'].href,
		images: {
			small1: trimSmall1,
			small2: trimSmall2,
			large: trimLarge
		}
	},
	{
		name: 'Stucco & Cedar Siding',
		href: galleryRoutes['stucco-cedar-siding'].href,
		images: {
			small1: stuccoCedarSmall1,
			small2: stuccoCedarSmall2,
			large: stuccoCedarLarge
		}
	},
	{
		name: 'Victorian Homes',
		href: galleryRoutes['victorian'].href,
		images: {
			small1: victorianSmall1,
			small2: victorianSmall2,
			large: victorianLarge
		}
	},
	{
		name: 'Cedar Siding Repair & Paint',
		href: galleryRoutes['cedar-siding'].href,
		images: {
			small1: cedarSidingSmall1,
			small2: cedarSidingSmall2,
			large: cedarSidingLarge
		}
	},
	{
		name: 'White Cedar Siding',
		href: galleryRoutes['white-cedar-siding'].href,
		images: {
			small1: whiteCedarSmall1,
			small2: whiteCedarSmall2,
			large: whiteCedarLarge
		}
	},
	{
		name: 'Siding Repair',
		href: galleryRoutes['siding-repair'].href,
		images: {
			small1: sidingRepairSmall1,
			small2: sidingRepairSmall2,
			large: sidingRepairLarge
		}
	},
	{
		name: 'Siding & Stucco',
		href: galleryRoutes['siding-stucco'].href,
		images: {
			small1: sidingStuccoSmall1,
			small2: sidingStuccoSmall2,
			large: sidingStuccoLarge
		}
	},
	{
		name: 'Cedar Shingle & Stucco Repair',
		href: galleryRoutes['cedar-shingle-stucco-repair'].href,
		images: {
			small1: cedarShingleSmall1,
			small2: cedarShingleSmall2,
			large: cedarShingleLarge
		}
	},
	{
		name: 'Stucco Repair',
		href: galleryRoutes['stucco-repair'].href,
		images: {
			small1: stuccoRepairSmall1,
			small2: stuccoRepairSmall2,
			large: stuccoRepairLarge
		}
	}
] satisfies GalleryPreviewGridData[];

export default ourWorkGalleryData;
