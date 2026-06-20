<script lang="ts">
  import { onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { submitLeadToZoho, splitName } from "$lib/contact-us/zoho";

  /** Options for the "service interest" select. */
  export let serviceOptions: string[] = [];
  /** Where this lead came from — folded into the Zoho Description. */
  export let leadSource = "Estimate form";
  export let heading = "Get your free siding estimate.";
  export let subcopy =
    "Tell us about your home and we'll schedule a walk-through, then deliver a free, written estimate for you to evaluate. Same crew from quote to clean-up.";

  const phone = "(708) 267-0682";
  const phoneHref = "tel:+17082670682";

  let name = "";
  let phoneVal = "";
  let email = "";
  let service = "";
  let address = "";

  type Status = "idle" | "submitting" | "success" | "error";
  let status: Status = "idle";
  let message = "";
  let timer: ReturnType<typeof setTimeout>;

  async function handleSubmit() {
    if (status === "submitting") return;
    if (!name.trim() || !phoneVal.trim()) {
      status = "error";
      message = "Please enter your name and phone number.";
      return;
    }
    status = "submitting";
    const { firstName, lastName } = splitName(name);
    const description = [
      service && `Service interest: ${service}`,
      address && `Property: ${address}`,
      `Submitted via ${leadSource}`,
    ]
      .filter(Boolean)
      .join(" · ");

    try {
      const ok = await submitLeadToZoho({
        "First Name": firstName,
        "Last Name": lastName || name.trim(),
        Email: email,
        Phone: phoneVal,
        Description: description,
      });
      if (!ok) throw new Error("submit failed");
      status = "success";
      message = "Thanks! We'll reach out to schedule your free walk-through.";
      name = phoneVal = email = service = address = "";
      clearTimeout(timer);
      timer = setTimeout(() => (status = "idle"), 6000);
    } catch (e) {
      console.error("Estimate form error:", e);
      status = "error";
      message = `Something went wrong. Please call ${phone} or try again.`;
    } finally {
      if (status === "submitting") status = "idle";
    }
  }

  onDestroy(() => clearTimeout(timer));
</script>

<section id="estimate" class="bg-off-white py-14 sm:py-16 scroll-mt-24 p-x">
  <div class="container">
    <div
      class="bg-white rounded-2xl shadow-subtle border overflow-hidden grid lg:grid-cols-[1fr_1.15fr]"
    >
      <!-- pitch side -->
      <div
        class="relative overflow-hidden bg-secondary-dark text-white p-8 sm:p-10 flex flex-col justify-center"
      >
        <div
          class="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-primary/15 blur-2xl"
          aria-hidden="true"
        />
        <span class="tab self-start mb-5">Free · No obligation</span>
        <h2
          class="relative text-3xl sm:text-4xl leading-[1.08] font-extrabold text-white"
        >
          {heading}
        </h2>
        <p class="relative mt-4 text-white/75 leading-relaxed max-w-sm">
          {subcopy}
        </p>
        <a
          href={phoneHref}
          class="relative mt-6 inline-flex items-center gap-2.5 font-bold text-xl text-white hover:text-primary transition w-fit"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(var(--primary))"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
            /></svg
          >
          {phone}
        </a>
      </div>

      <!-- form side -->
      <div class="p-7 sm:p-10">
        {#if status === "success"}
          <div
            class="rounded-lg bg-[#F5FAF5] border border-[#A9D3AB] text-[#132C14] px-4 py-3 mb-5 font-semibold"
            in:fade={{ duration: 200 }}
            role="alert"
          >
            {message}
          </div>
        {:else if status === "error"}
          <div
            class="rounded-lg bg-[#FDF4F5] border border-[#F8B4B4] text-[#7F1D1D] px-4 py-3 mb-5 font-semibold"
            in:fade={{ duration: 200 }}
            role="alert"
          >
            {message}
          </div>
        {/if}

        <form
          class="grid grid-cols-1 sm:grid-cols-2 gap-4"
          on:submit|preventDefault={handleSubmit}
        >
          <div>
            <label class="label" for="est-name">Name</label>
            <input
              id="est-name"
              class="field"
              bind:value={name}
              placeholder="Jane Smith"
              autocomplete="name"
              required
            />
          </div>
          <div>
            <label class="label" for="est-phone">Phone</label>
            <input
              id="est-phone"
              class="field"
              type="tel"
              bind:value={phoneVal}
              placeholder="(708) 555-0123"
              autocomplete="tel"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label class="label" for="est-email">Email</label>
            <input
              id="est-email"
              class="field"
              type="email"
              bind:value={email}
              placeholder="jane@email.com"
              autocomplete="email"
            />
          </div>
          {#if serviceOptions.length}
            <div class="sm:col-span-2">
              <label class="label" for="est-service">Service interest</label>
              <select id="est-service" class="field" bind:value={service}>
                <option value="" disabled selected>Select a service…</option>
                {#each serviceOptions as opt}
                  <option>{opt}</option>
                {/each}
              </select>
            </div>
          {/if}
          <div class="sm:col-span-2">
            <label class="label" for="est-address">Property address</label>
            <input
              id="est-address"
              class="field"
              bind:value={address}
              placeholder="Street, City, ZIP"
              autocomplete="street-address"
            />
          </div>
          <button
            type="submit"
            class="sm:col-span-2 w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-lg py-4 transition disabled:opacity-70"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Request My Free Estimate"}
          </button>
          <p class="sm:col-span-2 text-center text-xs text-gray-500">
            By submitting you agree to be contacted about your project. We never
            share your info.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .tab {
    display: inline-flex;
    align-items: center;
    background: hsl(var(--primary-dark));
    color: white;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 0.375rem 1.75rem 0.375rem 1rem;
    clip-path: polygon(0 0, 100% 0, calc(100% - 13px) 50%, 100% 100%, 0 100%);
  }
  .label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: hsl(var(--secondary-dark));
    margin-bottom: 0.375rem;
  }
  .field {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid hsl(var(--border));
    background: white;
    padding: 0.75rem 1rem;
    font-size: 15px;
    color: hsl(var(--secondary-dark));
    outline: none;
    transition:
      border-color 0.15s,
      box-shadow 0.15s;
  }
  .field:focus {
    border-color: hsl(var(--primary));
    box-shadow: 0 0 0 2px hsl(var(--primary) / 0.25);
  }
</style>
