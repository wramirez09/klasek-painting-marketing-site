import type { BeforeAfterSliderData } from './BeforeAfterSlider.svelte';
import cedarSidingBefore from '$images/galleries/before-after/cedar-siding-replacement-before.webp?enhanced';
import cedarSidingAfter from '$images/galleries/before-after/cedar-siding-replacement-navy-after.webp?enhanced';
import brickPaintingBackBefore from '$images/galleries/before-after/brick-painting-back-of-the-house-before.webp?enhanced';
import brickPaintingBackAfter from '$images/galleries/before-after/brick-painting-back-of-the-house-after.webp?enhanced';
import stuccoRepairBackBefore from '$images/galleries/before-after/stucco-repair-paint-back-of-the-house-before.webp?enhanced';
import stuccoRepairBackAfter from '$images/galleries/before-after/stucco-repair-paint-back-of-the-house-after.webp?enhanced';
import stuccoRepairFrontBefore from '$images/galleries/before-after/stucco-repair-paint-front-of-the-house-before.webp?enhanced';
import stuccoRepairFrontAfter from '$images/galleries/before-after/stucco-repair-paint-front-of-the-house-after.webp?enhanced';
import stuccoTrimBefore from '$images/galleries/before-after/stucco-and-trim-before.webp?enhanced';
import stuccoTrimAfter from '$images/galleries/before-after/stucco-and-trim-after.webp?enhanced';
import limeWashBefore from '$images/galleries/before-after/stucco-lime-wash-before.webp?enhanced';
import limeWashAfter from '$images/galleries/before-after/stucco-lime-wash-after.webp?enhanced';
import stuccoRepairBackBefore2 from '$images/galleries/before-after/stucco-repair-paint-back-of-the-house-before-2.webp?enhanced';
import stuccoRepairBackAfter2 from '$images/galleries/before-after/stucco-repair-paint-back-of-the-house-after-2.webp?enhanced';
import stuccoRepairFrontBefore2 from '$images/galleries/before-after/stucco-repair-paint-front-of-the-house-before-2.webp?enhanced';
import stuccoRepairFrontAfter2 from '$images/galleries/before-after/stucco-repair-paint-front-of-the-house-after-2.webp?enhanced';
import brickPaintingFrontBefore from '$images/galleries/before-after/brick-painting-front-of-the-house-before.webp?enhanced';
import brickPaintingFrontAfter from '$images/galleries/before-after/brick-painting-front-of-the-house-after.webp?enhanced';
import stuccoRepairFrontBefore3 from '$images/galleries/before-after/stucco-repair-paint-front-of-the-house-before-3.webp?enhanced';
import stuccoRepairFrontAfter3 from '$images/galleries/before-after/stucco-repair-paint-front-of-the-house-after-3.webp?enhanced';
import stuccoRepairBackBefore3 from '$images/galleries/before-after/stucco-repair-paint-back-of-the-house-before-3.webp?enhanced';
import stuccoRepairBackAfter3 from '$images/galleries/before-after/stucco-repair-paint-back-of-the-house-after-3.webp?enhanced';

const beforeAfterGalleryData: BeforeAfterSliderData[] = [
	{
		title: 'Cedar Siding Replacement & Paint',
		before: cedarSidingBefore,
		after: cedarSidingAfter
	},
	{
		title: 'Brick Painting - Back of the House',
		before: brickPaintingBackBefore,
		after: brickPaintingBackAfter
	},
	{
		title: 'Stucco Repair & Paint - Back of the House',
		before: stuccoRepairBackBefore,
		after: stuccoRepairBackAfter
	},
	{
		title: 'Stucco Repair & Paint - Front of the House',
		before: stuccoRepairFrontBefore,
		after: stuccoRepairFrontAfter
	},
	{
		title: 'Stucco & Trim',
		before: stuccoTrimBefore,
		after: stuccoTrimAfter
	},
	{
		title: 'Stucco & Lime Wash',
		before: limeWashBefore,
		after: limeWashAfter
	},
	{
		title: 'Stucco Repair & Paint - Back of the House',
		before: stuccoRepairBackBefore2,
		after: stuccoRepairBackAfter2
	},
	{
		title: 'Stucco Repair & Paint - Front of the House',
		before: stuccoRepairFrontBefore2,
		after: stuccoRepairFrontAfter2
	},
	{
		title: 'Brick Painting - Front of the House',
		before: brickPaintingFrontBefore,
		after: brickPaintingFrontAfter
	},
	{
		title: 'Stucco Repair & Paint - Front of the House',
		before: stuccoRepairFrontBefore3,
		after: stuccoRepairFrontAfter3
	},
	{
		title: 'Stucco Repair & Paint - Back of the House',
		before: stuccoRepairBackBefore3,
		after: stuccoRepairBackAfter3
	}
];

export default beforeAfterGalleryData;
