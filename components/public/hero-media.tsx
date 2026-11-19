"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import desktopVideo from "@/public/media/esclare-hero-no-logo-v4-desktop-lite.mp4";
import mobileVideo from "@/public/media/esclare-hero-no-logo-v4-mobile.mp4";
import initialPoster from "@/public/images/optimized/clinic/esclare-hero-poster-v4.webp";
import initialPoster1440 from "@/public/images/optimized/clinic/esclare-hero-poster-v4-1440.webp";
import finalFrame from "@/public/images/optimized/clinic/esclare-hero-final-frame-v4.webp";
import finalFrame1440 from "@/public/images/optimized/clinic/esclare-hero-final-frame-v4-1440.webp";
import mobileInitialPoster from "@/public/images/optimized/clinic/esclare-hero-poster-v4-mobile-hd.webp";
import mobileFinalFrame from "@/public/images/optimized/clinic/esclare-hero-final-frame-v4-mobile-hd.webp";

const INITIAL_POSTER = initialPoster.src;
const FINAL_FRAME = finalFrame.src;
const MOBILE_INITIAL_POSTER = mobileInitialPoster.src;
const MOBILE_FINAL_FRAME = mobileFinalFrame.src;
const INITIAL_POSTER_SRCSET = `${initialPoster1440.src} 1440w, ${INITIAL_POSTER} ${initialPoster.width}w`;
const FINAL_FRAME_SRCSET = `${finalFrame1440.src} 1440w, ${FINAL_FRAME} ${finalFrame.width}w`;
const VIDEO_START_DELAY_MS = 250;

type MotionPreference = "unknown" | "allow" | "reduce";
type PlaybackState = "poster" | "playing" | "complete" | "fallback";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playbackBlockedRef = useRef(false);
  const interactionRetryUsedRef = useRef(false);
  const canPlayRef = useRef(false);
  const isInViewportRef = useRef(true);
  const completedRef = useRef(false);
  const [motionPreference, setMotionPreference] = useState<MotionPreference>("unknown");
  const [playbackState, setPlaybackState] = useState<PlaybackState>("poster");
  const [videoSource, setVideoSource] = useState<string>();

  const attemptPlayback = useCallback(async () => {
    const video = videoRef.current;
    if (
      !video ||
      motionPreference !== "allow" ||
      document.hidden ||
      !isInViewportRef.current ||
      completedRef.current
    ) {
      return;
    }

    try {
      video.muted = true;
      await video.play();
      playbackBlockedRef.current = false;
      setPlaybackState("playing");
    } catch {
      playbackBlockedRef.current = !interactionRetryUsedRef.current;
      setPlaybackState("fallback");
    }
  }, [motionPreference]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setMotionPreference(mediaQuery.matches ? "reduce" : "allow");
      if (mediaQuery.matches) {
        setVideoSource(undefined);
        videoRef.current?.pause();
        setPlaybackState("poster");
      }
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (motionPreference !== "allow") return;

    const enableVideo = () => {
      window.clearTimeout(startTask);
      // Assign exactly one src after hydration. Inserting multiple <source>
      // elements can start the desktop download before mobile selection settles.
      setVideoSource(window.matchMedia("(max-width: 767px)").matches ? mobileVideo : desktopVideo);
    };
    // Give the preloaded poster a head start without waiting for unrelated page assets.
    const startTask = window.setTimeout(enableVideo, VIDEO_START_DELAY_MS);

    document.addEventListener("pointerdown", enableVideo, { once: true });
    document.addEventListener("keydown", enableVideo, { once: true });
    return () => {
      window.clearTimeout(startTask);
      document.removeEventListener("pointerdown", enableVideo);
      document.removeEventListener("keydown", enableVideo);
    };
  }, [motionPreference]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || motionPreference !== "allow" || !videoSource) return;

    const retryAfterInteraction = () => {
      if (playbackBlockedRef.current && !interactionRetryUsedRef.current) {
        interactionRetryUsedRef.current = true;
        playbackBlockedRef.current = false;
        void attemptPlayback();
      }
    };
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (canPlayRef.current) {
        void attemptPlayback();
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewportRef.current = entry?.isIntersecting ?? true;
        if (!isInViewportRef.current) {
          video.pause();
        } else if (canPlayRef.current) {
          void attemptPlayback();
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(video);
    document.addEventListener("pointerdown", retryAfterInteraction);
    document.addEventListener("keydown", retryAfterInteraction);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", retryAfterInteraction);
      document.removeEventListener("keydown", retryAfterInteraction);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [attemptPlayback, motionPreference, videoSource]);

  useEffect(() => {
    if (playbackState !== "playing") return;
    const endingImage = new Image();
    if (window.matchMedia("(max-width: 767px)").matches) {
      endingImage.src = MOBILE_FINAL_FRAME;
    } else {
      endingImage.sizes = "100vw";
      endingImage.srcset = FINAL_FRAME_SRCSET;
      endingImage.src = FINAL_FRAME;
    }
  }, [playbackState]);

  const videoVisible = playbackState === "playing";
  const posterSrcSet = playbackState === "complete" ? FINAL_FRAME_SRCSET : INITIAL_POSTER_SRCSET;
  const mobilePosterSource =
    playbackState === "complete" ? MOBILE_FINAL_FRAME : MOBILE_INITIAL_POSTER;

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={MOBILE_INITIAL_POSTER}
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={INITIAL_POSTER}
        imageSrcSet={INITIAL_POSTER_SRCSET}
        imageSizes="100vw"
        media="(min-width: 768px)"
        fetchPriority="high"
      />
      <div className="hero-media" data-playback-state={playbackState} aria-hidden="true">
        <picture className="hero-media-poster">
          <source media="(min-width: 768px)" srcSet={posterSrcSet} sizes="100vw" />
          <img src={mobilePosterSource} alt="" fetchPriority="high" />
        </picture>
        <video
          ref={videoRef}
          src={videoSource}
          className={`hero-media-video${videoVisible ? " is-visible" : ""}`}
          autoPlay
          muted
          playsInline
          preload="none"
          disablePictureInPicture
          tabIndex={-1}
          onCanPlay={() => {
            canPlayRef.current = true;
            void attemptPlayback();
          }}
          onPlaying={() => {
            if (completedRef.current) {
              videoRef.current?.pause();
              return;
            }
            playbackBlockedRef.current = false;
            setPlaybackState("playing");
          }}
          onEnded={() => {
            videoRef.current?.pause();
            completedRef.current = true;
            canPlayRef.current = false;
            setPlaybackState("complete");
          }}
          onError={() => {
            canPlayRef.current = false;
            playbackBlockedRef.current = false;
            setPlaybackState("fallback");
          }}
        />
      </div>
    </>
  );
}
