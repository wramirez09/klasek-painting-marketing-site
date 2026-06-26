<script lang="ts">
  import { fade } from "svelte/transition";
  import Button from "$components/button/button.svelte";

  type FormData = {
    name: string;
    email: string;
    phone: string;
    position: string;
    experience: string;
    availability: string;
    hasTransportation: boolean;
    authorizedToWork: boolean;
    message: string;
    // Honeypot — hidden from users, bots tend to fill it.
    company: string;
  };

  const empty: FormData = {
    name: "",
    email: "",
    phone: "",
    position: "Painter & Repair Technician",
    experience: "",
    availability: "",
    hasTransportation: false,
    authorizedToWork: false,
    message: "",
    company: "",
  };

  let formData: FormData = { ...empty };

  type SubmitStatus = "idle" | "submitting" | "success" | "error";
  let submitStatus: SubmitStatus = "idle";
  let submitMessage = "";

  $: isSubmitting = submitStatus === "submitting";

  function validate(): boolean {
    if (!formData.name.trim()) {
      submitMessage = "Please enter your name.";
      return false;
    }
    if (!formData.phone.trim()) {
      submitMessage = "Please enter a phone number so we can reach you.";
      return false;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      submitMessage = "Please enter a valid email address.";
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (isSubmitting) return;
    if (!validate()) {
      submitStatus = "error";
      return;
    }

    submitStatus = "submitting";
    submitMessage = "";

    try {
      const res = await fetch("/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          message?: string;
        };
        throw new Error(data.message || "Submission failed");
      }

      submitStatus = "success";
      submitMessage =
        "Thanks for applying! We've received your application and will be in touch soon.";
      formData = { ...empty };
    } catch (e) {
      submitStatus = "error";
      submitMessage =
        e instanceof Error && e.message !== "Submission failed"
          ? e.message
          : "Something went wrong. Please try again in a moment.";
    }
  }

  const inputClass =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-secondary-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
  const labelClass = "block mb-1 font-semibold text-secondary-dark text-sm";
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="w-full max-w-screen-sm mx-auto flex flex-col gap-5"
  novalidate
>
  {#if submitStatus === "success"}
    <div
      in:fade={{ duration: 200 }}
      role="alert"
      class="rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800"
    >
      {submitMessage}
    </div>
  {/if}

  {#if submitStatus === "error" && submitMessage}
    <div
      in:fade={{ duration: 200 }}
      role="alert"
      class="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-red-800"
    >
      {submitMessage}
    </div>
  {/if}

  <!-- Honeypot field: visually hidden, off-screen, not focusable -->
  <div class="absolute -left-[9999px]" aria-hidden="true">
    <label for="company">Company</label>
    <input
      id="company"
      name="company"
      type="text"
      tabindex="-1"
      autocomplete="off"
      bind:value={formData.company}
    />
  </div>

  <div class="grid sm:grid-cols-2 gap-5">
    <div>
      <label class={labelClass} for="name">Full Name *</label>
      <input
        id="name"
        type="text"
        class={inputClass}
        bind:value={formData.name}
        required
        maxlength="80"
      />
    </div>
    <div>
      <label class={labelClass} for="phone">Phone *</label>
      <input
        id="phone"
        type="tel"
        class={inputClass}
        bind:value={formData.phone}
        required
        maxlength="30"
      />
    </div>
  </div>

  <div class="grid sm:grid-cols-2 gap-5">
    <div>
      <label class={labelClass} for="email">Email</label>
      <input
        id="email"
        type="email"
        class={inputClass}
        bind:value={formData.email}
        maxlength="100"
      />
    </div>
    <div>
      <label class={labelClass} for="position">Position</label>
      <select id="position" class={inputClass} bind:value={formData.position}>
        <option>Painter & Repair Technician</option>
        <option>Painter</option>
        <option>Repair / Carpentry</option>
        <option>Other</option>
      </select>
    </div>
  </div>

  <div class="grid sm:grid-cols-2 gap-5">
    <div>
      <label class={labelClass} for="experience">Years of Experience</label>
      <input
        id="experience"
        type="text"
        class={inputClass}
        bind:value={formData.experience}
        placeholder="e.g. 5 years"
        maxlength="50"
      />
    </div>
    <div>
      <label class={labelClass} for="availability">Availability</label>
      <input
        id="availability"
        type="text"
        class={inputClass}
        bind:value={formData.availability}
        placeholder="e.g. Full-time, can start immediately"
        maxlength="100"
      />
    </div>
  </div>

  <div class="flex flex-col gap-3">
    <label class="flex items-center gap-3 text-secondary-dark">
      <input
        type="checkbox"
        class="size-4 accent-primary"
        bind:checked={formData.hasTransportation}
      />
      I have reliable transportation to job sites
    </label>
    <label class="flex items-center gap-3 text-secondary-dark">
      <input
        type="checkbox"
        class="size-4 accent-primary"
        bind:checked={formData.authorizedToWork}
      />
      I am legally authorized to work in the U.S.
    </label>
  </div>

  <div>
    <label class={labelClass} for="message"
      >Tell us about your experience</label
    >
    <textarea
      id="message"
      class="{inputClass} min-h-[120px]"
      bind:value={formData.message}
      placeholder="Painting, siding, stucco, carpentry, references, etc."
    ></textarea>
  </div>

  <Button type="submit" class="w-full sm:w-auto" disabled={isSubmitting}>
    {isSubmitting ? "Submitting…" : "Submit Application"}
  </Button>
</form>
