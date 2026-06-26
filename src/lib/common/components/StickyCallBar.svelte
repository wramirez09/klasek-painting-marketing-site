<script lang="ts">
  import Button from "$components/button/button.svelte";
  import ClickToCall from "$lib/common/other/ClickToCall.svelte";
  import PhoneIcon from "$images/icons/PhoneIcon.svelte";
  import { routes } from "$lib/common/routing/routes";
</script>

<!--
	Sticky mobile call bar (< lg). Two ≥48px tap targets: tel: call (fires the
	GA conversion via ClickToCall) + a "Get Free Estimate" link to /contact-us.
	Hidden on desktop; bottom padding respects iOS safe-area insets.
-->
<div
  class="lg:hidden fixed bottom-0 inset-x-0 z-[100] bg-white border-t shadow-[0_-6px_24px_rgba(20,18,55,.14)]"
>
  <div
    class="grid grid-cols-2 gap-2 p-2.5"
    style="padding-bottom:calc(0.625rem + env(safe-area-inset-bottom));"
  >
    <ClickToCall
      variant="secondary"
      class="min-h-[48px] gap-2 bg-secondary-dark hover:bg-secondary text-white"
    >
      <PhoneIcon class="size-4" />
      Call
    </ClickToCall>
    <Button href={routes["contact"].href} class="min-h-[48px]"
      >Get Free Estimate</Button
    >
  </div>
</div>
