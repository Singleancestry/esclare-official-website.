import { expect, test } from "@playwright/test";

test("public booking requires a name before opening Messenger", async ({ page, context }) => {
  await context.route("https://m.me/**", (route) => route.fulfill({ body: "Messenger" }));
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: async () => {} },
    });
  });
  await page.goto("/appointment-request");
  const submit = page.getByRole("button", { name: "Copy & Open Messenger" });
  await submit.click();
  await expect(page.locator("#booking-error")).toHaveText("Please enter your full name.");
  expect(context.pages()).toHaveLength(1);
  await page.getByLabel("Full name Required").fill("Sample Client");
  const [messenger] = await Promise.all([context.waitForEvent("page"), submit.click()]);
  await expect(messenger).toHaveURL("https://m.me/625552207599338");
  await expect(page.getByText("Request ready")).toBeVisible();
  await expect(page.getByText(/My name is Sample Client/)).toBeVisible();
  await expect(page.getByText(/Online saving is not configured yet/)).toBeVisible();
  await expect(page.getByText("No deposit is required.")).toBeVisible();
});

test("public booking copies visit details and opens the selected branch chat", async ({
  page,
  context,
}) => {
  await context.route("https://m.me/**", (route) => route.fulfill({ body: "Messenger" }));
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async (text: string) => sessionStorage.setItem("booking-test-clipboard", text),
      },
    });
  });
  await page.goto("/appointment-request");
  await page.getByLabel("Full name Required").fill("Sample Client");
  await page.getByLabel("Branch").selectOption("daet");
  const treatment = page.getByLabel("Treatment");
  await treatment.selectOption("korean-facial");
  const treatmentName = await treatment.locator("option:checked").innerText();
  const future = new Date();
  future.setDate(future.getDate() + 14);
  const date = future.toISOString().slice(0, 10);
  await page.getByLabel("Preferred date").fill(date);
  await page.getByLabel("Preferred time").fill("14:30");

  const [messenger] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "Copy & Open Messenger" }).click(),
  ]);
  await expect(messenger).toHaveURL("https://m.me/110985556908419");
  await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
  const draft = `Hello ESCLARE Daet. My name is Sample Client. Is there availability for an appointment for ${treatmentName} on ${date} at 14:30?`;
  expect(await page.evaluate(() => sessionStorage.getItem("booking-test-clipboard"))).toBe(draft);
  await expect(page.getByText(draft, { exact: true })).toBeVisible();
});

test("public booking keeps the draft available when clipboard access is blocked", async ({
  page,
  context,
}) => {
  await context.route("https://m.me/**", (route) => route.fulfill({ body: "Messenger" }));
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async () => {
          throw new DOMException("Clipboard access denied", "NotAllowedError");
        },
      },
    });
  });
  await page.goto("/appointment-request?branch=daet");
  await page.getByLabel("Full name Required").fill("Sample Client");
  await page.getByRole("button", { name: "Copy & Open Messenger" }).click();
  await expect(page.getByRole("alert").filter({ hasText: "Automatic copy" })).toContainText(
    "Select and copy the message above",
  );
  expect(context.pages()).toHaveLength(1);
  await expect(page.getByText(/My name is Sample Client/)).toBeVisible();
  await expect(page.getByRole("link", { name: "Facebook Messenger" })).toHaveAttribute(
    "href",
    "https://m.me/110985556908419",
  );
});

test("@staff development appointment inbox is protected and reports persistence state", async ({
  page,
}) => {
  await page.goto("/appointments");
  await expect(page.getByRole("heading", { name: "Public Request Inbox" })).toBeVisible();
  await expect(
    page.getByText(/Supabase is not configured in this local environment/),
  ).toBeVisible();
  await expect(page.getByText("No appointment requests")).toBeVisible();
});

test("branch page shows confirmed details and Daet exception", async ({ page }) => {
  await page.goto("/branches");
  await expect(page.getByRole("heading", { name: "ESCLARE Naga" })).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("link", { name: "+63 920 735 1379" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "ESCLARE Daet" })).toBeVisible();
  await expect(page.getByText(/does not offer Fractional Laser/)).toBeVisible();
});

test("Daet branch links preserve the selected booking branch", async ({ page }) => {
  await page.goto("/appointment-request?branch=daet");
  await expect(page.getByRole("combobox", { name: "Branch" })).toHaveValue("daet");
  await expect(page.getByRole("heading", { name: "Confirm with ESCLARE Daet" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Call 0939 142 1928" })).toHaveAttribute(
    "href",
    "tel:+639391421928",
  );
});
