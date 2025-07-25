import type { Picture } from 'vite-imagetools';

export type Image = {
	src: string;
	alt: string;
};

export type EnhancedImage = {
	src: Picture;
	alt: string;
};

export type Icon = {
	icon: string;
};
