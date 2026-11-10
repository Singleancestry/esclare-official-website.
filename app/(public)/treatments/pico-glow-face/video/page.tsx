import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/public/json-ld";
import { siteUrl } from "@/lib/seo/site";

const title = "Pico Laser Face at ESCLARE";
const description =
  "A silent clinic clip showing the Pico laser handpiece positioned near the side of the face while the client wears protective eyewear.";
const media = "/media/treatment-clips/pico-face-05";
const canonical = "/treatments/pico-glow-face/video";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
};

export default function PicoFaceVideoPage() {
  return (
    <main className="public-container py-12 sm:py-16">
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: title,
          description,
          thumbnailUrl: `${siteUrl}${media}.webp`,
          contentUrl: `${siteUrl}${media}.mp4`,
          uploadDate: "2026-11-10",
          duration: "PT27S",
        }}
      />
      <h1 className="public-heading text-balance">{title}</h1>
      <figure className="mt-6 max-w-sm">
        <video
          aria-label={title}
          controls
          playsInline
          preload="none"
          className="block aspect-[4/5] w-full rounded-lg bg-[#32101E] object-contain"
          poster={`${media}.webp`}
          src={`${media}.mp4`}
        />
        <figcaption className="mt-3 text-sm leading-6">{description}</figcaption>
      </figure>
      <Link
        className="public-link mt-6 inline-block font-semibold"
        href="/treatments/pico-glow-face"
      >
        Read about Pico Glow Face and assessment
      </Link>
    </main>
  );
}
