<script lang="ts">
  import { onDestroy } from "svelte";
  import { fade } from "svelte/transition";

  // Form data type
  type FormData = {
    [key: string]: string;
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

  type SubmitStatus = "idle" | "submitting" | "success" | "error";
  let submitStatus: SubmitStatus = "idle";
  let submitMessage = "";
  let isSubmitting = false;

  // Zoho WebToLead Configuration
  const ZOHO_FORM_ID = "webform5683047000006693036";
  const ZOHO_FORM_ACTION = "https://crm.zoho.com/crm/WebToLeadForm";

  // Zoho form fields
  const ZOHO_FIELDS = {
    xnQsjsdp:
      "cdaf4fd904d1a76d463cfa7498f7083593f85a7ebaf6309bc04de2170f5c5221",
    xmIwtLD:
      "b63d7c69781dd958162b76c2f3ecab4ffd5b8b5d2d23c3e5ae5621f9cb4f47fc4fac4b525fe84a2d485aaabf4ef4373c",
    actionType: "TGVhZHM=",
    returnURL: "null",
    aG9uZXlwb3Q: "", // Honeypot field
  };

  function validateEmail(email: string): boolean {
    if (!email) return true; // Email is optional
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function checkMandatory(): boolean {
    const requiredFields: (keyof FormData)[] = [
      "First Name",
      "Last Name",
      "Phone",
      "Zip Code",
    ];
    for (const field of requiredFields) {
      if (!formData[field]?.trim()) {
        submitStatus = "error";
        submitMessage = `${field} is required`;
        return false;
      }
    }

    if (!validateEmail(formData.Email)) {
      submitStatus = "error";
      submitMessage = "Please enter a valid email address";
      return false;
    }

    return true;
  }

  async function handleSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (!checkMandatory() || isSubmitting) return;

    isSubmitting = true;
    submitStatus = "submitting";

    try {
      // Convert form data to URLSearchParams
      const params = new URLSearchParams();

      // Add Zoho form fields
      Object.entries(ZOHO_FIELDS).forEach(([key, value]) => {
        params.append(key, value);
      });

      // Add form data
      Object.entries(formData).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });

      const response = await fetch(ZOHO_FORM_ACTION, {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const responseText = await response.text();
      
      // Try to parse JSON response
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = null;
      }

      if (
        response.ok ||
        response.redirected ||
        responseText.includes("Thank you") ||
        responseText.includes("success") ||
        responseData?.actionsubmit === "Splash Message"
      ) {
        // Reset form
        formData = {
          "First Name": "",
          "Last Name": "",
          Email: "",
          Phone: "",
          City: "",
          "Zip Code": "",
          Description: "",
        };

        // Show inline success message
        submitStatus = "success";
        
        // Use actionvalue from response if available, otherwise use default message
        if (responseData?.actionvalue) {
          submitMessage = responseData.actionvalue;
        } else {
          submitMessage = "Thank you for your inquiry! We will contact you shortly.";
        }

        // Hide success message after 5 seconds
        const timer = setTimeout(() => {
          submitStatus = "idle";
        }, 5000);

        onDestroy(() => clearTimeout(timer));
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      submitStatus = "error";
      submitMessage =
        "An error occurred while submitting the form. Please try again.";
    } finally {
      isSubmitting = false;
    }
  }
</script>

<!-- Zoho WebToLead Form -->
<div
  id="crmWebToEntityForm"
  class="zcwf_lblLeft crmWebToEntityForm"
  style="background-color: white; color: black; max-width: 600px; margin: 0 auto; padding: 20px;"
>
  <!-- Success/Error Messages -->
  {#if submitStatus === "success"}
    <div
      class="message success"
      in:fade={{ duration: 200 }}
      role="alert"
      style="background-color: #F5FAF5; color: #132C14; padding: 15px; margin-bottom: 20px; border-radius: 4px; border: 1px solid #A9D3AB; display: flex; align-items: center;"
    >
      <div
        style="background-color: #12AA67; border-radius: 50%; width: 20px; height: 20px; margin-right: 10px; display: flex; align-items: center; justify-content: center;"
      >
        <div
          style="width: 5px; height: 10px; border-right: 2px solid white; border-bottom: 2px solid white; transform: rotate(45deg) translate(-1px, -1px);"
        ></div>
      </div>
      <span>{submitMessage}</span>
    </div>
  {/if}

  {#if submitStatus === "error"}
    <div
      class="message error"
      in:fade={{ duration: 200 }}
      role="alert"
      style="background-color: #FDF4F5; color: #7F1D1D; padding: 15px; margin-bottom: 20px; border-radius: 4px; border: 1px solid #F8B4B4; display: flex; align-items: center;"
    >
      <div
        style="background-color: #DC2626; border-radius: 50%; width: 20px; height: 20px; margin-right: 10px; display: flex; align-items: center; justify-content: center;"
      >
        <div
          style="color: white; font-weight: bold; font-size: 14px; margin-top: -2px;"
        >
          !
        </div>
      </div>
      <span>{submitMessage}</span>
    </div>
  {/if}

  <div
    class="zcwf_title"
    style="font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #1F2937;"
  >
    Contact Us
  </div>

  <form
    id={ZOHO_FORM_ID}
    name="WebToLeads{ZOHO_FORM_ID}"
    on:submit|preventDefault={handleSubmit}
  >
    <!-- Hidden Zoho Fields -->
    <input type="hidden" name="xnQsjsdp" value={ZOHO_FIELDS.xnQsjsdp} />
    <input type="hidden" name="xmIwtLD" value={ZOHO_FIELDS.xmIwtLD} />
    <input type="hidden" name="actionType" value={ZOHO_FIELDS.actionType} />
    <input type="hidden" name="returnURL" value={ZOHO_FIELDS.returnURL} />
    <input type="hidden" name="aG9uZXlwb3Q" value="" />

    <div class="zcwf_row" style="margin: 15px 0;">
      <div
        class="zcwf_col_lab"
        style="width: 30%; margin-right: 10px; float: left;"
      >
        <label for="First_Name" style="font-size: 14px;"
          >First Name <span style="color: red;">*</span></label
        >
      </div>
      <div class="zcwf_col_fld" style="float: left; width: 60%;">
        <input
          type="text"
          id="First_Name"
          name="First Name"
          bind:value={formData["First Name"]}
          maxlength="40"
          aria-required="true"
          style="width: 100%; padding: 8px; border: 1px solid #D1D5DB; border-radius: 4px;"
        />
      </div>
      <div style="clear: both;"></div>
    </div>

    <div class="zcwf_row" style="margin: 15px 0;">
      <div
        class="zcwf_col_lab"
        style="width: 30%; margin-right: 10px; float: left;"
      >
        <label for="Last_Name" style="font-size: 14px;"
          >Last Name <span style="color: red;">*</span></label
        >
      </div>
      <div class="zcwf_col_fld" style="float: left; width: 60%;">
        <input
          type="text"
          id="Last_Name"
          name="Last Name"
          bind:value={formData["Last Name"]}
          maxlength="80"
          aria-required="true"
          style="width: 100%; padding: 8px; border: 1px solid #D1D5DB; border-radius: 4px;"
        />
      </div>
      <div style="clear: both;"></div>
    </div>

    <div class="zcwf_row" style="margin: 15px 0;">
      <div
        class="zcwf_col_lab"
        style="width: 30%; margin-right: 10px; float: left;"
      >
        <label for="Email" style="font-size: 14px;">Email</label>
      </div>
      <div class="zcwf_col_fld" style="float: left; width: 60%;">
        <input
          type="email"
          id="Email"
          name="Email"
          bind:value={formData.Email}
          maxlength="100"
          style="width: 100%; padding: 8px; border: 1px solid #D1D5DB; border-radius: 4px;"
        />
      </div>
      <div style="clear: both;"></div>
    </div>

    <div class="zcwf_row" style="margin: 15px 0;">
      <div
        class="zcwf_col_lab"
        style="width: 30%; margin-right: 10px; float: left;"
      >
        <label for="Phone" style="font-size: 14px;"
          >Phone <span style="color: red;">*</span></label
        >
      </div>
      <div class="zcwf_col_fld" style="float: left; width: 60%;">
        <input
          type="tel"
          id="Phone"
          name="Phone"
          bind:value={formData.Phone}
          maxlength="30"
          aria-required="true"
          style="width: 100%; padding: 8px; border: 1px solid #D1D5DB; border-radius: 4px;"
        />
      </div>
      <div style="clear: both;"></div>
    </div>

    <div class="zcwf_row" style="margin: 15px 0;">
      <div
        class="zcwf_col_lab"
        style="width: 30%; margin-right: 10px; float: left;"
      >
        <label for="City" style="font-size: 14px;">Address</label>
      </div>
      <div class="zcwf_col_fld" style="float: left; width: 60%;">
        <input
          type="text"
          id="City"
          name="City"
          bind:value={formData.City}
          maxlength="100"
          style="width: 100%; padding: 8px; border: 1px solid #D1D5DB; border-radius: 4px;"
        />
      </div>
      <div style="clear: both;"></div>
    </div>

    <div class="zcwf_row" style="margin: 15px 0;">
      <div
        class="zcwf_col_lab"
        style="width: 30%; margin-right: 10px; float: left;"
      >
        <label for="Zip_Code" style="font-size: 14px;"
          >Zip Code <span style="color: red;">*</span></label
        >
      </div>
      <div class="zcwf_col_fld" style="float: left; width: 60%;">
        <input
          type="text"
          id="Zip_Code"
          name="Zip Code"
          bind:value={formData["Zip Code"]}
          maxlength="30"
          aria-required="true"
          style="width: 100%; padding: 8px; border: 1px solid #D1D5DB; border-radius: 4px;"
        />
      </div>
      <div style="clear: both;"></div>
    </div>

    <div class="zcwf_row" style="margin: 15px 0;">
      <div
        class="zcwf_col_lab"
        style="width: 30%; margin-right: 10px; float: left;"
      >
        <label for="Description" style="font-size: 14px;">Job Details</label>
      </div>
      <div class="zcwf_col_fld" style="float: left; width: 60%;">
        <textarea
          id="Description"
          name="Description"
          bind:value={formData.Description}
          style="width: 100%; min-height: 100px; padding: 8px; border: 1px solid #D1D5DB; border-radius: 4px;"
        ></textarea>
      </div>
      <div style="clear: both;"></div>
    </div>

    <div class="zcwf_row" style="margin: 25px 0 15px 0; text-align: right;">
      <button
        type="reset"
        class="zcwf_button"
        style="background: #F3F4F6; border: 1px solid #D1D5DB; color: #374151; padding: 8px 16px; border-radius: 4px; margin-right: 10px; cursor: pointer;"
      >
        Reset
      </button>
      <button
        type="submit"
        class="formsubmit zcwf_button"
        style="background: #3B82F6; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  </form>
</div>

<style>
  /* Zoho WebToLead Form Styles */
  .zcwf_lblLeft {
    font-family: Arial, sans-serif;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .zcwf_title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }

  .zcwf_row {
    margin: 15px 0;
    clear: both;
  }

  .zcwf_col_lab {
    width: 30%;
    float: left;
    padding-right: 10px;
    box-sizing: border-box;
  }

  .zcwf_col_fld {
    width: 70%;
    float: left;
  }

  .zcwf_button {
    background: #f0f0f0;
    border: 1px solid #ccc;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .formsubmit {
    background: #3b82f6 !important;
    color: white !important;
    border: none !important;
  }

  .formsubmit:hover {
    background: #2563eb !important;
  }

  /* Success/Error Messages */
  .message {
    padding: 12px 16px;
    margin-bottom: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }

  .message.success {
    background-color: #f0fdf4;
    border: 1px solid #86efac;
    color: #166534;
  }

  .message.error {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    color: #991b1b;
  }

  /* Responsive Design */
  @media (max-width: 640px) {
    .zcwf_col_lab,
    .zcwf_col_fld {
      width: 100%;
      float: none;
      padding-right: 0;
    }

    .zcwf_col_fld {
      margin-top: 8px;
    }
  }

  /* Form Elements */
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 14px;
    margin-bottom: 1rem;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  /* Buttons */
  button[type="submit"]:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  /* Responsive adjustments */
  @media (min-width: 640px) {
    .zcwf_row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }

    .zcwf_col_lab,
    .zcwf_col_fld {
      padding: 0 10px;
      width: 50%;
    }
  }
</style>
