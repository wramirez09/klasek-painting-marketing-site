import { expect, test, type Locator, type Page } from "@playwright/test";

// Load the contact form on the page (scoped by its Zoho WebToLead id so the
// footer email-signup form on the same page doesn't ambiguate the locator).
const loadForm: (page: Page) => Promise<Locator> = async (page: Page) => {
  const form = page.locator("form#webform5683047000006693036");
  await form.waitFor({ state: "visible" });
  return form;
};

test.describe("Contact Us page", () => {
  test.use({ viewport: { width: 500, height: 500 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/contact-us");
  });

  // Load the form
  test("the form loads", async ({ page }) => {
    // Load form
    const form = await loadForm(page);

    // Expect the form to be visible
    await expect(form).toBeVisible();
  });

  // T1.2/T1.3 — the submit CTA is relabeled
  test('submit button reads "Get My Free Estimate"', async ({ page }) => {
    await loadForm(page);
    await expect(
      page.getByRole("button", { name: "Get My Free Estimate" }),
    ).toBeVisible();
  });

  // T1.3 — Last Name is no longer a required field (no asterisk), while
  // First Name still is — proving the required-field change took effect.
  // Scoped to the contact form; the footer signup reuses these field ids.
  test("Last Name is optional", async ({ page }) => {
    const form = await loadForm(page);
    await expect(form.locator('label[for="First_Name"]')).toContainText("*");
    await expect(form.locator('label[for="Last_Name"]')).not.toContainText("*");
  });
});

test.describe("Homepage hero quick form (T1.4)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders Name, Phone, Zip fields and the estimate CTA", async ({
    page,
  }) => {
    await expect(page.locator("#hero-name")).toBeVisible();
    await expect(page.locator("#hero-phone")).toBeVisible();
    await expect(page.locator("#hero-zip")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Get My Free Estimate" }).first(),
    ).toBeVisible();
  });

  test("happy path: submitting posts a lead to Zoho and shows success", async ({
    page,
  }) => {
    // Intercept the WebToLead POST so the test never hits the real CRM.
    await page.route("**/crm.zoho.com/crm/WebToLeadForm", (route) =>
      route.fulfill({ status: 200, body: "Thank you" }),
    );

    await page.locator("#hero-name").fill("Test Homeowner");
    await page.locator("#hero-phone").fill("7085551234");
    await page.locator("#hero-zip").fill("60534");
    await page
      .getByRole("button", { name: "Get My Free Estimate" })
      .first()
      .click();

    await expect(
      page.getByText("We'll reach out within 1 business day."),
    ).toBeVisible();
  });
});
