import { expect, test } from "@playwright/test";

test("treatment clips play and emit consented GA4 milestones from the gallery", async ({
  page,
}) => {
  await page.route(/google-analytics\.com|googletagmanager\.com/, (route) => route.abort());
  await page.addInitScript(() => {
    localStorage.setItem(
      "esclare-privacy-consent-v1",
      JSON.stringify({
        version: 1,
        analytics: true,
        marketing: false,
        updatedAt: new Date().toISOString(),
      }),
    );
  });
  await page.goto("/treatments");
  await expect(page.locator("script#google-analytics-config")).toHaveCount(1);

  for (const id of ["pico-face-05", "exilis-02", "diode-05"]) {
    const video = page.locator('video[src="/media/treatment-clips/' + id + '.mp4"]');
    await video.scrollIntoViewIfNeeded();
    await video.evaluate(async (element: HTMLVideoElement) => {
      element.playbackRate = 8;
      await element.play();
    });
    await expect
      .poll(() => video.evaluate((element: HTMLVideoElement) => element.ended), { timeout: 30000 })
      .toBe(true);
    const events = await page.evaluate((videoId) => {
      const analyticsWindow = window as Window & { dataLayer?: ArrayLike<unknown>[] };
      return (analyticsWindow.dataLayer ?? [])
        .map((entry) => Array.from(entry))
        .filter(
          (entry) =>
            entry[0] === "event" && (entry[2] as { video_id?: string })?.video_id === videoId,
        )
        .map((entry) => entry[1]);
    }, id);
    expect(events).toEqual([
      "treatment_video_start",
      "treatment_video_halfway",
      "treatment_video_complete",
    ]);
  }
});
