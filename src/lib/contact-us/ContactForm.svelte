<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";

  // Form data type
  type FormData = {
    "First Name": string;
    "Last Name": string;
    Email: string;
    Phone: string;
    City: string;
    "Zip Code": string;
    Description: string;
  };

  // Form state
  let formData: FormData = {
    "First Name": "",
    "Last Name": "",
    Email: "",
    Phone: "",
    City: "",
    "Zip Code": "",
    Description: "",
  };

  let submitStatus: "idle" | "submitting" | "success" | "error" = "idle";
  let submitMessage = "";

  // Zoho CRM Configuration
  const ZOHO_FORM_ID = "webform5683047000006693036";
  const ZOHO_FORM_ACTION = "https://crm.zoho.com/crm/WebToLeadForm";
  const ZOHO_FORM_FIELDS = {
    xnQsjsdp: "cdaf4fd904d1a76d463cfa7498f7083593f85a7ebaf6309bc04de2170f5c5221",
    xmIwtLD: "b63d7c69781dd958162b76c2f3ecab4ffd5b8b5d2d23c3e5ae5621f9cb4f47fc4fac4b525fe84a2d485aaabf4ef4373c",
    actionType: "TGVhZHM=",
    returnURL: "null",
    aG9uZXlwb3Q: "" // Added the hidden honeypot field
  };

  // Handle form submission
  async function handleSubmit(event: Event) {
    event.preventDefault();
    submitStatus = "submitting";

    try {
      // Basic validation
      const requiredFields: (keyof FormData)[] = [
        "First Name",
        "Last Name",
        "Phone",
        "Zip Code"
      ];
      
      for (const field of requiredFields) {
        if (!formData[field]?.trim()) {
          throw new Error(`${field} is required`);
        }
      }

      // Email validation (optional but must be valid if provided)
      if (formData.Email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.Email)) {
          throw new Error("Please enter a valid email address");
        }
      }

      // Prepare form data for Zoho
      const formDataToSend = new FormData();

      // Add Zoho required fields
      Object.entries(ZOHO_FORM_FIELDS).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Add form data
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          formDataToSend.append(key, value);
        }
      });

      // Submit to Zoho
      console.log(
        "Submitting form data:",
        Object.fromEntries(formDataToSend.entries()),
      );

      const response = await fetch(ZOHO_FORM_ACTION, {
        method: "POST",
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // Follow redirects
      });

      // For Zoho WebToLead, we need to check the response text
      const responseText = await response.text();
      
      // Check if the response indicates success (Zoho typically returns HTML with success message)
      if (response.ok || response.redirected || responseText.includes('Thank you') || responseText.includes('success')) {
        submitStatus = "success";
        submitMessage = "Thank you for your inquiry! We will contact you shortly.";

        // Reset form on success
        formData = {
          "First Name": "",
          "Last Name": "",
          Email: "",
          Phone: "",
          City: "",
          "Zip Code": "",
          Description: "",
        };

        // Hide success message after 5 seconds
        const timer = setTimeout(() => {
          submitStatus = "idle";
        }, 5000);

        // Clean up the timeout when the component is destroyed
        onDestroy(() => clearTimeout(timer));
      } else {
        console.error('Form submission failed:', response.status, response.statusText, responseText);
        throw new Error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      submitStatus = "error";
      submitMessage =
        "An error occurred while submitting the form. Please try again or contact us directly.";
    }
  }
</script>

<div class="contact-form">
  <!-- Success/Error Messages -->
  {#if submitStatus === "success"}
    <div class="message success" in:fade={{ duration: 200 }} role="alert">
      <div class="message-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm-1.5 17.5a1.5 1.5 0 0 1-3 0v-8a1.5 1.5 0 0 1 3 0zm-1.5-11a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/>
        </svg>
      </div>
      <span>{submitMessage}</span>
    </div>
  {/if}

  {#if submitStatus === "error"}
    <div class="message error" in:fade={{ duration: 200 }} role="alert">
      <div class="message-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 1 0 12 12A12.014 0 0 0 12 0zm-1 17a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0zm-1-9a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
        </svg>
      </div>
      <span>{submitMessage}</span>
    </div>
  {/if}

  <form on:submit={handleSubmit} class="space-y-6">
    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
      <!-- First Name -->
      <div class="form-group">
        <label for="First_Name" class="form-label">
          First Name <span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="First_Name"
          bind:value={formData["First Name"]}
          class="form-input"
          required
          aria-required="true"
          maxlength="40"
        />
      </div>

      <!-- Last Name -->
      <div class="form-group">
        <label for="Last_Name" class="form-label">
          Last Name <span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="Last_Name"
          bind:value={formData["Last Name"]}
          class="form-input"
          required
          aria-required="true"
          maxlength="80"
        />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="Email" class="form-label">
          Email
        </label>
        <input
          type="email"
          id="Email"
          bind:value={formData.Email}
          class="form-input"
          maxlength="100"
          autocomplete="email"
        />
      </div>

      <!-- Phone -->
      <div class="form-group">
        <label for="Phone" class="form-label">
          Phone <span class="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="Phone"
          bind:value={formData.Phone}
          class="form-input"
          required
          aria-required="true"
          maxlength="30"
        />
      </div>

      <!-- City -->
      <div class="form-group">
        <label for="City" class="form-label">
          Address
        </label>
        <input
          type="text"
          id="City"
          bind:value={formData.City}
          class="form-input"
          maxlength="100"
        />
      </div>

      <!-- Zip Code -->
      <div class="form-group">
        <label for="Zip_Code" class="form-label">
          Zip Code <span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="Zip_Code"
          bind:value={formData["Zip Code"]}
          class="form-input"
          required
          aria-required="true"
          maxlength="30"
        />
      </div>

      <!-- Job Details -->
      <div class="form-group sm:col-span-2">
        <label for="Description" class="form-label">
          Job Details
        </label>
        <textarea
          id="Description"
          bind:value={formData.Description}
          class="form-textarea"
          rows={4}
          aria-multiline="true"
        ></textarea>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="pt-4">
      <button
        type="submit"
        class={[
          "w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          submitStatus === "submitting" ? "opacity-70 cursor-not-allowed" : "",
        ].join(" ")}
        disabled={submitStatus === "submitting"}
        aria-busy={submitStatus === "submitting"}
      >
        {#if submitStatus === "submitting"}
          <span class="flex items-center">
            <svg
              class="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          </span>
        {:else}
          Submit
        {/if}
      </button>
    </div>
  </form>
</div>

<style>
  /* Form Messages */
  .message {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition: all 0.3s ease-in-out;
  }

  .message.success {
    background-color: #f0fdf4;
    border: 1px solid #bbf7d0;
    color: #166534;
  }

  .message.error {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    color: #991b1b;
  }

  .message-icon {
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  .message-icon svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .message.success .message-icon svg {
    color: #22c55e;
  }

  .message.error .message-icon svg {
    color: #ef4444;
  }

  /* Form Styles */
  .contact-form {
    max-width: 900px;
    margin: 0 auto;
    background-color: white;
    color: black;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #374151;
  }

  .form-input,
  .form-select,
  .form-textarea {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }

  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .form-textarea {
    min-height: 100px;
    resize: vertical;
  }

  /* Responsive adjustments */
  @media (min-width: 640px) {
    .sm\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
