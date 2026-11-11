import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TreatmentVideoPlayer } from "@/components/public/treatment-video-player";
import { PRIVACY_CONSENT_STORAGE_KEY } from "@/lib/privacy/consent";

const gtag = vi.fn();

beforeEach(() => {
  window.localStorage.clear();
  Object.assign(window, { gtag });
  gtag.mockClear();
});

afterEach(cleanup);

function allowAnalytics(analytics: boolean) {
  window.localStorage.setItem(
    PRIVACY_CONSENT_STORAGE_KEY,
    JSON.stringify({ version: 1, analytics, marketing: true, updatedAt: "2026-11-11" }),
  );
}

function player() {
  const view = render(<TreatmentVideoPlayer videoId="pico-face-05" surface="gallery" />);
  return view.container.querySelector("video")!;
}

describe("treatment video analytics", () => {
  it("requires analytics consent even when marketing is allowed", () => {
    allowAnalytics(false);
    const video = player();
    fireEvent.playing(video);
    fireEvent.ended(video);
    expect(gtag).not.toHaveBeenCalled();
  });

  it("counts each milestone once and allows playback after consent is withdrawn", () => {
    allowAnalytics(true);
    const video = player();
    Object.defineProperties(video, {
      duration: { value: 20, configurable: true },
      currentTime: { value: 10, configurable: true },
      paused: { value: false, configurable: true },
    });
    fireEvent.timeUpdate(video);
    expect(gtag).not.toHaveBeenCalled();
    fireEvent.playing(video);
    fireEvent.playing(video);
    fireEvent.timeUpdate(video);
    fireEvent.timeUpdate(video);
    allowAnalytics(false);
    fireEvent.ended(video);
    expect(gtag.mock.calls.map((call) => call[1])).toEqual([
      "treatment_video_start",
      "treatment_video_halfway",
    ]);
    allowAnalytics(true);
    fireEvent.ended(video);
    fireEvent.ended(video);
    expect(gtag).toHaveBeenCalledTimes(3);
    expect(gtag).toHaveBeenLastCalledWith("event", "treatment_video_complete", {
      video_id: "pico-face-05",
      video_surface: "gallery",
    });
  });
});
