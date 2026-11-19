# PageSpeed optimization — 19 November 2026

## Evidence and scope

Source report: https://pagespeed.web.dev/analysis/https-esclareph-com/yub88p7uaz
Both mobile and desktop score 99 performance, 100 accessibility, 100 best practices and 100 SEO. These are Lighthouse laboratory results; the report has no Chrome UX Report field data.

Desktop: FCP 0.3 s, LCP 0.6 s, TBT 20 ms, CLS 0, Speed Index 1.2 s.
Mobile: FCP 1.1 s, LCP 1.9 s, TBT 30 ms, CLS 0, Speed Index 3.1 s.

## IMPORTANT — verified findings and changes

1. Google's mobile run downloaded both hero videos: desktop 1,636,786 bytes and mobile 876,029 bytes. Google reports 2,907 KiB total mobile page transfer. Select one video URL on the client before assigning the video src; remove the explicit load() restart. Expected saving on mobile: 1,636,786 bytes (~1.56 MiB), approximately 55% of the reported total page payload. The original behavior is intermittent: a normal Chromium run selected only the mobile response. The patch removes the multi-source selection race; verify actual outgoing requests rather than DOM source counts alone.
2. Hero video and poster responses on Hostinger have no Cache-Control header. Live HEAD requests confirm this. Hostinger intercepts the public media URLs before Next config headers apply; the deployed /_next/static CSS response already has public, max-age=31536000, immutable. Import hero assets into the build so their content-hashed /_next/static/media URLs use that working asset pipeline. Content hashes change on file edits, preventing stale permanent URLs. No private routes, authentication rules or API caches change.
3. Desktop poster is larger than needed at Google's 1350 px viewport (113.1 KiB, 56.6 KiB estimated savings). Add a 1440 px WebP candidate (68,196 bytes versus 115,786; 41% smaller) with responsive srcset and matching preload. Retain the original full-resolution candidate for high-density screens. Apply the same sizing to the ending frame. No color grading, treatment-photo replacements or video re-encoding.

## OPTIONAL — intentionally retained

- The 17.7 KiB stylesheet is render-blocking (Google estimates 150 ms on mobile). It supplies initial layout and visual stability. Do not asynchronously hide it for a score increase.
- Google's 12 KiB legacy JS and 47 KiB unused JS opportunities include framework compatibility/runtime code. Removing browser support or changing the framework solely for these small opportunities is not justified by a 99 score.
- Collect real-user Core Web Vitals when enough traffic is available; laboratory scores cannot establish real-user performance.

## Verification

- Lint passes (one existing MFA navigation warning outside this change).
- Typecheck and production build pass. Build retains existing Supabase Edge-runtime warning and a local standalone tracing warning caused by the shared node_modules junction; the deployment installs its own dependencies.
- 26 unit suites / 139 tests pass using the threads pool. The default forks pool initially timed out starting one Windows worker; its 25 completed suites passed, and the full threads rerun passed.
- All 27 homepage/media browser cases pass across desktop Chromium, mobile Chromium and mobile WebKit after adapting the network assertion for Windows WebKit, which does not always issue MP4 requests. Real iOS hardware playback remains unverified.
- Local production browser requests confirm exactly one correct hero video per viewport; desktop and mobile playback both start. Hero video and image responses have public, max-age=31536000, immutable, with video byte-range responses (206).
- At 1350 px / DPR 1 the browser selects the 68,196-byte poster; the mobile 56,004-byte HD poster is preserved. Screenshots confirm the existing composition and color treatment.
- No new PageSpeed score is claimed until a new measurement exists.

## Build and rollback

The project already builds with Webpack. The dev command now explicitly uses Webpack too, so the MP4 asset/resource rule works in both development and production. The imported files remain same-origin and retain existing reduced-motion, visibility pause, autoplay-failure and one-shot final-frame behavior.

Rollback: revert this optimization commit or redeploy the preceding production revision a28eae97e67b121563e9918902dabdb383a30d5f. Original public hero files are retained. Existing local security patch work is isolated in its separate worktree and is not included here.
