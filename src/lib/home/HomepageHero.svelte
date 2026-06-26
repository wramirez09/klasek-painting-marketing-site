<script lang="ts">
  import GoogleProof from "$lib/common/other/GoogleProof.svelte";
  import HeroQuickForm from "$lib/home/HeroQuickForm.svelte";
  import src from "$images/backgrounds/klasek-painting-professional-exterior-painters.webp";

  const listitems = [
    "Expert Craftsmanship - Every Time",
    "100% Satisfaction Guarantee",
    "Free Consultation from Design Pros",
    "Siding, Brick, & Stucco Experts",
  ];
</script>

<section class="p-x p-y hero-gradient">
  <div class="container grid lg:grid-cols-2 lg:gap-12 gap-6">
    <!-- Image container -->
    <div class="hidden lg:flex flex-col gap-2">
      <div
        style={`background-image: url(${src})`}
        class="size-full lg:rounded-lg rounded-b-lg bg-center bg-cover"
      />

      <GoogleProof />
    </div>

    <!-- Content container -->
    <div class="flex flex-col lg:gap-6 gap-4 text-white">
      <h1
        class="order-1 xl:text-5xl md:text-4xl xs:text-3xl text-2xl font-semibold"
        data-testid="page-heading"
      >
        Premium Exterior House&nbsp;Painting & Design&nbsp;Services
      </h1>

      <p class="order-2 lg:font-semibold">
        Klasek Painting has over 30 years of experience delivering beautiful,
        long-lasting results to homeowners in Chicago. Our mission is to be the
        area's most trusted exterior repair and exterior painting contractor, so
        we are committed to providing first class service at a fair price.
      </p>

      <ul
        class="lg:order-3 order-4 lg:text-lg lg:font-semibold flex flex-col gap-1"
      >
        {#each listitems as item}
          <li class="disc lg:[--top:12px] [--top:10px]">{item}</li>
        {/each}
      </ul>

      <div class="lg:order-4 order-3">
        <HeroQuickForm />
      </div>
    </div>
  </div>
</section>
