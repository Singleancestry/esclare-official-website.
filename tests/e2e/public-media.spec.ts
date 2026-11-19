import { expect, test } from "@playwright/test";

test("public home uses authentic clinic, attendant, logo, and diode assets", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("img", { name: "ESCLARE Naga logo wall and crystal chandelier" }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "ESCLARE 4D diode laser device visual in a prepared treatment room",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "ESCLARE clinic attendant in a professional muted light-maroon uniform",
    }),
  ).toBeVisible();
  await expect(
    page
      .getByRole("link", { name: "ESCLARE home" })
      .getByRole("img", { name: "Esclare Aesthetic Center" }),
  ).toBeVisible();
});

test("gallery and diode pages expose accurate launch content", async ({ page }) => {
  await page.goto("/gallery");
  await expect(
    page.getByRole("heading", { name: "A real look inside both clinics." }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "ESCLARE Naga reception logo wall beneath a crystal chandelier",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "ESCLARE Daet reception with the illuminated ESCLARE wall sign",
    }),
  ).toBeVisible();

  await page
    .getByRole("button", { name: "Open larger view of Daet reception, ESCLARE Daet" })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Daet reception" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();

  await page.goto("/diode-laser");
  await expect(
    page.getByRole("heading", { name: "Smoother routines, thoughtfully planned." }),
  ).toBeVisible();
  await expect(page.getByText("Results vary.")).toBeVisible();
  await expect(page.getByText("4D diode technology")).toBeVisible();
});

test("Daet branch page uses authentic photography and accurate details", async ({ page }) => {
  await page.goto("/branches/daet");
  await expect(page.getByRole("heading", { name: "ESCLARE DAET", exact: true })).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "The authentic ESCLARE Daet reception with the illuminated ESCLARE wordmark",
    }),
  ).toBeVisible();
  await expect(page.getByText("Tuesday-Sunday, 9:30 AM-6:00 PM")).toBeVisible();
  await expect(
    page.getByText("Approved, bookable treatments except Fractional Laser."),
  ).toBeVisible();
});

test("treatment gallery filters verified media and preserves booking selection", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "A closer look, with clinical honesty." }),
  ).toBeVisible();
  await expect(
    page.getByRole("tabpanel").getByRole("img", {
      name: "Pico laser facial treatment with protective eyewear",
      exact: true,
    }),
  ).toBeVisible();

  await page.getByRole("tab", { name: "Skin Support" }).click();
  await expect(
    page.getByRole("img", {
      name: "MCCM Exosome PDRN professional-use box and amber vial",
    }),
  ).toBeVisible();
  await page
    .getByRole("button", {
      name: "Open Skin Support image: MCCM Exosome PDRN",
    })
    .click();
  await expect(page.getByRole("dialog", { name: "Skin Support image viewer" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Skin Support image viewer" })).toBeHidden();

  await expect(page.getByRole("link", { name: "Book this treatment" })).toHaveCount(0);
});

test("premium homepage respects reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const hero = page.locator(".hero-media");
  await expect(hero.locator(".hero-media-poster img")).toBeVisible();
  await expect(hero).toHaveAttribute("data-playback-state", "poster");
  await expect(hero.locator("video")).not.toHaveAttribute("src");
});

test("hero retains its poster and actions when video playback fails", async ({
  page,
  browserName,
}) => {
  if (browserName !== "webkit") {
    await page.route("**/esclare-hero-no-logo-v4*.mp4*", (route) =>
      route.fulfill({ status: 503, contentType: "video/mp4", body: "" }),
    );
  }
  await page.goto("/");

  const hero = page.locator(".hero-media");
  const heroStage = page.locator(".hero-stage");
  let webkitStayedOnPoster = false;
  if (browserName === "webkit") {
    await expect(hero).toHaveAttribute("data-playback-state", /poster|playing|complete/);
    webkitStayedOnPoster = (await hero.getAttribute("data-playback-state")) === "poster";
    if (!webkitStayedOnPoster) {
      await hero.locator("video").evaluate((video: HTMLVideoElement) => {
        video.pause();
        video.querySelectorAll("source").forEach((source) => source.remove());
        video.src = "/media/forced-missing-video.mp4";
        video.load();
      });
    }
  }
  await expect(hero.locator(".hero-media-poster img")).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Professional Aesthetic and Laser Clinic in Naga City and Daet",
    }),
  ).toBeVisible();
  await expect(heroStage.getByRole("link", { name: "Explore treatments" })).toBeVisible();
  await expect(heroStage.getByRole("link", { name: "Request assessment" })).toBeVisible();
  await expect(hero).toHaveAttribute(
    "data-playback-state",
    webkitStayedOnPoster ? "poster" : "fallback",
  );
});

test("hero remains usable after route navigation on a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".hero-media-poster img")).toBeVisible();
  await page.goto("/treatments");
  await page.goBack();

  await expect(
    page.getByRole("heading", {
      name: "Professional Aesthetic and Laser Clinic in Naga City and Daet",
    }),
  ).toBeVisible();
  await expect(
    page.locator(".hero-stage").getByRole("link", { name: "Request assessment" }),
  ).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
});

test("hero completion exposes the pre-generated final frame without restarting", async ({
  page,
}) => {
  await page.goto("/");
  const hero = page.locator(".hero-media");
  const video = hero.locator("video");

  await expect(video).toHaveAttribute("src", /esclare-hero-no-logo-v4.*\.mp4/);
  await video.evaluate((element: HTMLVideoElement) => {
    element.dispatchEvent(new Event("ended"));
  });

  await expect(hero).toHaveAttribute("data-playback-state", "complete");
  await expect(video).not.toHaveClass(/is-visible/);
  await expect(hero.locator(".hero-media-poster img")).toHaveAttribute(
    "src",
    /esclare-hero-final-frame-v4-mobile-hd.*\.webp/,
  );
});

test("hero downloads exactly the viewport video and caches its build assets", async ({
  page,
  browserName,
}) => {
  const videos = new Set<string>();
  page.on("request", (request) => {
    if (/esclare-hero-no-logo-v4.*\.mp4/.test(request.url())) videos.add(request.url());
  });
  await page.goto("/");
  const video = page.locator(".hero-media video");
  const mobile = (page.viewportSize()?.width ?? 1280) < 768;
  await expect(video).toHaveAttribute("src", mobile ? /v4-mobile/ : /v4-desktop-lite/);
  const source = await video.getAttribute("src");
  expect(source).toContain("/_next/static/media/");
  if (browserName === "webkit" && process.platform === "win32") {
    // Windows WebKit may keep the poster without issuing an MP4 request.
    // Actual MP4 request selection is enforced in both Chromium projects.
    expect(videos.size).toBeLessThanOrEqual(1);
    await expect(page.locator(".hero-media-poster img")).toBeVisible();
  } else {
    await expect.poll(() => videos.size).toBe(1);
  }
  for (const url of videos) expect(url).toContain(mobile ? "v4-mobile" : "v4-desktop-lite");
  const response = await page.request.get(source!, { headers: { Range: "bytes=0-1023" } });
  expect([200, 206]).toContain(response.status());
  expect(response.headers()["cache-control"]).toContain("max-age=31536000");
  const poster = await page
    .locator(".hero-media-poster img")
    .evaluate((image: HTMLImageElement) => image.currentSrc);
  const imageResponse = await page.request.get(poster);
  expect(imageResponse.headers()["cache-control"]).toContain("max-age=31536000");
});
