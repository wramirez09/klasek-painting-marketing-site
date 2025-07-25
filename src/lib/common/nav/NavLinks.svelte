<script lang="ts">
	import NavItem from './subcomponents/NavItem.svelte';
	import Dropdown from './subcomponents/Dropdown.svelte';
	import DropdownItem from './subcomponents/DropdownItem.svelte';
	import { routes, aboutUsRoutes, serviceAreaRoutes } from '$lib/common/routing/routes';
</script>

<!-- About us -->
<Dropdown data={routes['about']} class="xl:block lg:hidden block">
	<DropdownItem data={aboutUsRoutes['testimonials']} />
	<DropdownItem data={aboutUsRoutes['blog']} />
	<DropdownItem data={aboutUsRoutes['faq']} />
</Dropdown>

<!-- Exterior painting -->
<Dropdown data={routes['exterior-home-painting']}>
	<DropdownItem
		data={{ text: 'Paint Contractor', href: routes['exterior-paint-contractor'].href }}
	/>
	<DropdownItem data={routes['historic-house-painting']} />
	<DropdownItem data={{ text: 'Brick Painting', href: routes['brick-painting'].href }} />
	<DropdownItem data={routes['stucco-painting']} />
	<DropdownItem data={routes['hardie-painting']} />
	<DropdownItem data={routes['aluminum-painting']} />
	<DropdownItem data={routes['cedar-painting']} />
	<DropdownItem data={routes['vinyl-painting']} />
	<DropdownItem data={routes['commercial']} />
</Dropdown>

<!-- Exteior Repair -->
<Dropdown data={{ text: 'Exterior Repair', href: routes['siding-painting-repair'].href }}>
	<DropdownItem data={{ text: 'Brick Repair', href: routes['brick-repair'].href }} />
	<DropdownItem data={routes['stucco-repair']} />
	<DropdownItem data={routes['hardie-repair']} />
	<DropdownItem data={routes['aluminum-repair']} />
	<DropdownItem data={routes['cedar-repair']} />
	<DropdownItem data={routes['vinyl-repair']} />
</Dropdown>

<!-- Service Area -->
<Dropdown data={aboutUsRoutes['service-area']}>
	{#each Object.values(serviceAreaRoutes) as data}
		<DropdownItem {data} />
	{/each}
</Dropdown>

<!-- Gallery -->
<NavItem data={routes['gallery']} class="xl:block lg:hidden block" />
