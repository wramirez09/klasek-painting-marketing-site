<script lang="ts">
	import HomepageHero from '$lib/home/HomepageHero.svelte';
	import ViewOurWorkSection from '$lib/home/ViewOurWorkSection.svelte';
	import WhyChooseUsSection from '$lib/home/WhyChooseUsSection.svelte';
	import ServiceAreaSection from '$lib/common/sections/ServiceAreaSection.svelte';
	import TestimonialsSection from '$lib/common/sections/TestimonialsSection.svelte';
	import TrustedBrandsSection from '$lib/home/TrustedBrandsSection.svelte';
	import NavBar from '$lib/common/nav/NavBar.svelte';
	import CtaBannerSection from '$lib/common/sections/CtaBannerSection.svelte';
	import ServiceGridSection from '$lib/services/ServiceGridSection.svelte';
	import OtherServicesSection from '$lib/common/sections/OtherServicesSection.svelte';
	import Footer from '$lib/common/footer/Footer.svelte';
</script>

<NavBar />
<HomepageHero />
<WhyChooseUsSection />
<ServiceGridSection />
<OtherServicesSection />
<ServiceAreaSection />
<CtaBannerSection />
<ViewOurWorkSection class="pb-0" />
<TestimonialsSection />
<TrustedBrandsSection />
<Footer />
