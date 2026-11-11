"use client";

import { useRef, type ComponentProps } from "react";
import { readPrivacyConsent } from "@/lib/privacy/consent";

type VideoEvent = "treatment_video_start" | "treatment_video_halfway" | "treatment_video_complete";
type VideoSurface = "gallery" | "watch_page";
type AnalyticsWindow = Window & {
  gtag?: (
    command: "event",
    event: VideoEvent,
    parameters: { video_id: string; video_surface: VideoSurface },
  ) => void;
};

type Props = Pick<ComponentProps<"video">, "aria-label" | "className"> & {
  videoId: string;
  surface: VideoSurface;
};

export function TreatmentVideoPlayer({ videoId, surface, ...props }: Props) {
  const sent = useRef(new Set<VideoEvent>());

  function track(event: VideoEvent) {
    if (sent.current.has(event) || !readPrivacyConsent()?.analytics) return;
    const gtag = (window as AnalyticsWindow).gtag;
    if (!gtag) return;
    sent.current.add(event);
    gtag("event", event, { video_id: videoId, video_surface: surface });
  }

  return (
    <video
      {...props}
      controls
      playsInline
      preload="none"
      poster={"/media/treatment-clips/" + videoId + ".webp"}
      src={"/media/treatment-clips/" + videoId + ".mp4"}
      onPlaying={() => track("treatment_video_start")}
      onTimeUpdate={({ currentTarget: { duration, currentTime, paused, seeking } }) => {
        if (
          sent.current.has("treatment_video_start") &&
          !paused &&
          !seeking &&
          Number.isFinite(duration) &&
          duration > 0 &&
          currentTime >= duration / 2
        )
          track("treatment_video_halfway");
      }}
      onEnded={() => {
        if (sent.current.has("treatment_video_start")) track("treatment_video_complete");
      }}
    />
  );
}
