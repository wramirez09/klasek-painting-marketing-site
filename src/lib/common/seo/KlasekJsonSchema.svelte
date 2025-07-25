<script lang="ts">
	import { publicLogoUrl, destinationPhone, serviceAreaRadius } from '$lib/common/seo/siteData';
	import type { HousePainter, WithContext } from 'schema-dts';
	import { JsonLd } from 'svelte-meta-tags';
	import { page } from '$app/stores';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'HousePainter',
		name: 'Klasek Painting',
		description:
			'Klasek Painting is a team of licensed and fully certified painters offering homes in Cook County top-quality painting solutions. Call for a free estimate.',
		image: publicLogoUrl,
		logo: publicLogoUrl,
		url: $page.url.origin,
		telephone: destinationPhone,
		sameAs: ['https://www.facebook.com/peter.klasek.3/'],
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				opens: '00:00',
				closes: '23:59'
			}
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Exterior Home Painting Services',
			itemListElement: [
				// Exterior Home Painting Services
				{
					'@type': 'OfferCatalog',
					name: 'Exterior Home Painting Services',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Historic House Painting'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Exterior Paint Contractor'
							}
						}
					]
				},
				// Siding Painting Services
				{
					'@type': 'OfferCatalog',
					name: 'Siding Painting Services',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Hardie Board Painting'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Aluminum Siding Painting'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Cedar Siding Painting'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Vinyl Siding Painting'
							}
						}
					]
				},
				// Siding Repair Services
				{
					'@type': 'OfferCatalog',
					name: 'Siding Repair Services',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Hardie Board Repair'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Aluminum Siding Repair'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Cedar Siding Repair'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Vinyl Siding Repair'
							}
						}
					]
				},
				// Exterior Brick Services
				{
					'@type': 'OfferCatalog',
					name: 'Exterior Brick Services',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Exterior Brick Painting'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Exterior Brick Staining'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Exterior Brick Repair'
							}
						}
					]
				},
				// Stucco Services
				{
					'@type': 'OfferCatalog',
					name: 'Stucco Services',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Stucco Painting'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Stucco Repair'
							}
						}
					]
				}
			]
		},
		address: {
			'@type': 'PostalAddress',
			streetAddress: '4415 S. Custer',
			addressLocality: 'Lyons',
			addressRegion: 'IL',
			postalCode: '60534',
			addressCountry: 'US'
		},
		location: {
			'@type': 'Place',
			geo: {
				'@type': 'GeoCoordinates',
				latitude: '27.896240',
				longitude: '-81.863586'
			}
		},
		areaServed: [
			{
				'@type': 'GeoCircle',
				geoMidpoint: {
					'@type': 'GeoCoordinates',
					latitude: '41.81041',
					longitude: '-87.839737'
				},
				geoRadius: serviceAreaRadius
			}
		]
	} satisfies WithContext<HousePainter>;
</script>

<!-- LocalBusiness (HousePainter) schema markup -->
<JsonLd {schema} />
