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

<!-- Services -->
<Dropdown data={routes['services']}>
	<DropdownItem data={routes['exterior-home-painting']} />
	<DropdownItem data={routes['siding-painting-repair']} />
	<DropdownItem data={routes['hardie-installation']} />
	<DropdownItem data={routes['brick-painting-repair']} />
	<DropdownItem data={routes['stucco-painting-repair']} />
	<DropdownItem data={routes['gutters']} />
	<DropdownItem data={routes['design-consultation']} />
	<DropdownItem data={routes['commercial']} />
</Dropdown>

<!-- Service Area -->
<Dropdown data={aboutUsRoutes['service-area']}>
	{#each Object.values(serviceAreaRoutes) as data}
		<DropdownItem {data} />
	{/each}
</Dropdown>

<!-- Gallery -->
<NavItem data={routes['gallery']} class="xl:block lg:hidden block" />
