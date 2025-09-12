<script lang="ts">
  import ContactForm from "$lib/contact-us/ContactForm.svelte";
  import Map from "$lib/common/other/Map.svelte";
  import LocationIcon from "$images/icons/LocationIcon.svelte";
  import ClickToCall from "$lib/common/other/ClickToCall.svelte";
  import { serviceAreaRoutes } from "$lib/common/routing/routes";
</script>

<section class="bg-off-white py-8 lg:px-12 xs:px-4 px-2">
  <div class="container grid lg:grid-cols-2 gap-12 w-full">
    <div
      class="flex flex-col lg:gap-3 gap-2 lg:p-6 lg:rounded-lg lg:shadow-subtle lg:border lg:bg-white"
    >
      <h1
        class="xl:text-5xl xs:text-4xl text-3xl w-full font-semibold text-secondary-dark"
        data-testid="page-heading"
      >
        Sign Up for a Free&nbsp;Estimate
      </h1>

      <p>
        If you're considering an upgrade to the exterior of your home, contact
        the experts at Klasek Painting.
      </p>

      <p>
        At no cost to you, we'll view your property, assess needs, provide
        design consultation, and submit a simple, written quote.
      </p>

      <p>
        You can count on us for quality service, honest expectation setting, and
        excellent communication throughout the entire project. Complete the
        form, or call us at <ClickToCall
          class="text-secondary-dark hover:text-primary-dark !font-semibold"
          variant="link"
        />!
      </p>

      <div
        class="bg-white lg:mt-0 mt-2 lg:p-0 p-2 pt-0 rounded-lg lg:shadow-none shadow-subtle"
      >
        <ContactForm />
      </div>
    </div>

    <div class="flex flex-col items-center lg:gap-8 gap-6">
      <!-- Map element -->
      <div class="grid grid-cols-1 grid-rows-[350px_auto] w-full">
        <Map
          class="rounded-t-sm rounded-b-none border-b-secondary-dark [&>*]:rounded-none"
        />

        <!-- Color banner -->
        <div
          class="bg-secondary-dark py-4 lg:px-12 px-4 rounded-b-lg flex sm:flex-row flex-col items-center sm:justify-between sm:gap-0 gap-4"
        >
          <div class="flex items-center gap-2">
            <LocationIcon class="size-8 text-primary-dark" />
            <p class="leading-tight text-white text-sm">
              4415&nbsp;S.&nbsp;Custer,<br />Lyons,&nbsp;IL&nbsp;60534
            </p>
          </div>

          <ClickToCall variant="outline" />
        </div>
      </div>

      <!-- Service areas -->
      <ul
        class="grid grid-cols-2 lg:gap-x-12 gap-x-4 gap-y-2 w-fit font-semibold text-secondary-dark underline underline-offset-2 sm:text-lg xs:text-base text-sm"
      >
        {#each Object.values(serviceAreaRoutes) as { text, href }}
          <li class="disc sm:[--top:12px] [--top:10px]">
            <a {href}>{text}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
