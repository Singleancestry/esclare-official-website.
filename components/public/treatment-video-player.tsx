"use client";

import { useRef, useState, type ComponentProps } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { readPrivacyConsent } from "@/lib/privacy/consent";

type VideoEvent = "treatment_video_start" | "treatment_video_halfway" | "treatment_video_complete";
type VideoSurface = "gallery" | "watch_page" | "signature" | "catalog";
type AnalyticsWindow = Window & {
  gtag?: (
    command: "event",
    event: VideoEvent,
    parameters: { video_id: string; video_surface: VideoSurface },
  ) => void;
};

type Props = Pick<ComponentProps<"video">, "aria-label" | "className" | "poster"> & {
  videoId: string;
  surface: VideoSurface;
  posterSizes?: string;
};

export function TreatmentVideoPlayer({ videoId, surface, poster, posterSizes, ...props }: Props) {
  const sent = useRef(new Set<VideoEvent>());
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const [playback, setPlayback] = useState<"ready" | "loading" | "started" | "failed">("ready");
  const usesPlayButton = surface === "signature" || surface === "catalog";
  const showPlayButton = usesPlayButton && playback !== "started";
  const responsivePoster =
    surface === "catalog" || (usesPlayButton && posterSizes) ? poster : undefined;

  function track(event: VideoEvent) {
    if (sent.current.has(event) || !readPrivacyConsent()?.analytics) return;
    const gtag = (window as AnalyticsWindow).gtag;
    if (!gtag) return;
    sent.current.add(event);
    gtag("event", event, { video_id: videoId, video_surface: surface });
  }

  const player = (
    <video
      {...props}
      ref={videoRef}
      controls={!showPlayButton}
      tabIndex={showPlayButton ? -1 : undefined}
      playsInline
      preload="none"
      poster={
        responsivePoster ? undefined : (poster ?? "/media/treatment-clips/" + videoId + ".webp")
      }
      src={"/media/treatment-clips/" + videoId + ".mp4"}
      onPlaying={() => {
        if (showPlayButton) {
          if (document.activeElement === playButtonRef.current) videoRef.current?.focus();
          setPlayback("started");
        }
        track("treatment_video_start");
      }}
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

  if (!usesPlayButton) return player;

  return (
    <div className="relative size-full">
      {player}
      {showPlayButton && responsivePoster && (
        <Image
          src={responsivePoster}
          alt=""
          fill
          sizes={posterSizes ?? "(min-width: 1024px) 23vw, (min-width: 640px) 43vw, 85vw"}
          className="pointer-events-none object-cover"
        />
      )}
      {showPlayButton && (
        <button
          ref={playButtonRef}
          type="button"
          aria-busy={playback === "loading"}
          aria-label={"Play " + props["aria-label"]}
          className="absolute bottom-4 left-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#43201E] px-4 text-sm font-semibold text-white hover:bg-[#59141D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => {
            if (playback === "loading") return;
            setPlayback("loading");
            void videoRef.current?.play().catch(() => setPlayback("failed"));
          }}
        >
          <Play size={16} aria-hidden="true" />
          {playback === "loading" ? "Loading video…" : "Play video"}
        </button>
      )}
      {playback === "failed" && (
        <p
          role="status"
          className="absolute inset-x-4 bottom-20 rounded bg-white p-2 text-sm text-[#43201E]"
        >
          Video could not start. Please try again.
        </p>
      )}
    </div>
  );
}
