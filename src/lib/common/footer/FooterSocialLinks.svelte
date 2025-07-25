<script lang="ts">
	import googleBusiness from '$images/logos/footer/google-business.svg';
	import yelp from '$images/logos/footer/yelp.svg';
	import type { Image } from '../types/image';

	const socialLinks: ({ href: string } & Image)[] = [
		{
			href: 'https://goo.gl/maps/PwcWAZd8Bdr5Ded5A',
			src: googleBusiness,
			alt: 'Google Business'
		},
		{
			href: 'https://www.yelp.com/biz/klasek-painting-lyons',
			src: yelp,
			alt: 'Yelp'
		}
	];
</script>

<ul class="flex items-center justify-center gap-6">
	{#each socialLinks as { href, src, alt }}
		<li>
			<a {href} target="_blank">
				<img class="size-6" {src} {alt} loading="lazy" />
			</a>
		</li>
	{/each}
</ul>
