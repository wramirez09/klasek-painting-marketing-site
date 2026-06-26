<script lang="ts">
  import GoogleProof from "$lib/common/other/GoogleProof.svelte";
  import pdca from "$images/logos/trusted-brands/pdca.png?enhanced";
  import leadSafe from "$images/logos/trusted-brands/lead-safe.png?enhanced";
  import ShieldCheckIcon from "$images/icons/ShieldCheckIcon.svelte";

  let classes = "";
  export { classes as class };
</script>

<!--
  Trust block shown beside/above the contact form (T1.2). Surfaces the proof
  the bare form strips out: Google rating + a real testimonial (GoogleProof),
  a 100% satisfaction guarantee, and the Lead-Safe + PDCA credentials.
-->
<div class="flex flex-col gap-3 {classes}">
  <GoogleProof class="bg-white rounded-lg border p-3 sm:p-4" />

  <div
    class="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-white p-3 sm:p-4"
  >
    <div class="flex items-center gap-2 text-secondary-dark">
      <ShieldCheckIcon class="size-6 text-primary-dark flex-shrink-0" />
      <span class="font-semibold leading-tight"
        >100% Satisfaction Guarantee</span
      >
    </div>

    <div class="flex items-center gap-4">
      <enhanced:img
        class="h-9 w-auto sm:h-10"
        src={leadSafe}
        alt="EPA Lead-Safe Certified Firm"
        loading="lazy"
      />
      <enhanced:img
        class="h-9 w-auto sm:h-10"
        src={pdca}
        alt="PDCA Member"
        loading="lazy"
      />
    </div>
  </div>
</div>
