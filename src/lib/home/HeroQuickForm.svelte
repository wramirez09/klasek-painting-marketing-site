<script lang="ts">
  import Button from "$components/button/button.svelte";
  import { submitLeadToZoho, splitName } from "$lib/contact-us/zoho";
  import { routes } from "$lib/common/routing/routes";
  import { fade } from "svelte/transition";

  // 60-second estimate: Name, Phone, Zip → same Zoho WebToLead pipeline as the
  // full contact form, tagged so hero leads are attributable in the CRM (T1.4).
  const LEAD_SOURCE = "Homepage Hero";

  let name = "";
  let phone = "";
  let zip = "";
  let honeypot = ""; // bots fill this; humans never see it

  type Status = "idle" | "submitting" | "success" | "error";
  let status: Status = "idle";
  let message = "";

  async function handleSubmit() {
    if (status === "submitting") return;
    if (honeypot) return; // silently drop bot submissions

    if (!name.trim() || !phone.trim() || !zip.trim()) {
      status = "error";
      message = "Please enter your name, phone, and zip code.";
      return;
    }

    status = "submitting";
    const { firstName, lastName } = splitName(name);

    const ok = await submitLeadToZoho({
      "First Name": firstName,
      "Last Name": lastName,
      Phone: phone,
      "Zip Code": zip,
      Description: `Lead Source: ${LEAD_SOURCE}`,
    }).catch(() => false);

    if (ok) {
      status = "success";
      message = "Thanks! We'll reach out within 1 business day.";
      name = phone = zip = "";
    } else {
      status = "error";
      message = "Something went wrong — please call us or use the full form.";
    }
  }
</script>

<!--
  Degrades gracefully: with no JS the native form GETs /contact-us so the
  visitor still reaches a working estimate form.
-->
<form
  action={routes["contact"].href}
  method="GET"
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col gap-2 rounded-lg bg-white p-4 text-secondary-dark shadow-subtle"
>
  <p class="font-semibold">Get your free estimate in 60 seconds</p>

  <!-- Honeypot (anti-spam) — visually hidden, off the tab order -->
  <input
    type="text"
    name="company_website"
    tabindex="-1"
    autocomplete="off"
    aria-hidden="true"
    bind:value={honeypot}
    class="absolute -left-[9999px] h-0 w-0 opacity-0"
  />

  <label class="sr-only" for="hero-name">Name</label>
  <input
    id="hero-name"
    name="name"
    type="text"
    placeholder="Name"
    autocomplete="name"
    bind:value={name}
    class="w-full rounded-md border border-gray-300 px-3 py-2"
  />

  <div class="flex flex-col gap-2 sm:flex-row">
    <div class="flex-1">
      <label class="sr-only" for="hero-phone">Phone</label>
      <input
        id="hero-phone"
        name="phone"
        type="tel"
        placeholder="Phone"
        autocomplete="tel"
        bind:value={phone}
        class="w-full rounded-md border border-gray-300 px-3 py-2"
      />
    </div>
    <div class="sm:w-32">
      <label class="sr-only" for="hero-zip">Zip Code</label>
      <input
        id="hero-zip"
        name="zip"
        type="text"
        inputmode="numeric"
        placeholder="Zip"
        autocomplete="postal-code"
        bind:value={zip}
        class="w-full rounded-md border border-gray-300 px-3 py-2"
      />
    </div>
  </div>

  <Button type="submit" class="w-full" disabled={status === "submitting"}>
    {status === "submitting" ? "Sending…" : "Get My Free Estimate"}
  </Button>

  {#if status === "success" || status === "error"}
    <p
      in:fade={{ duration: 200 }}
      role="alert"
      class="text-sm font-medium {status === 'success'
        ? 'text-green-700'
        : 'text-red-700'}"
    >
      {message}
    </p>
  {/if}

  <p class="text-xs text-gray-500">
    No obligation. We reply within 1 business day.
  </p>
</form>
