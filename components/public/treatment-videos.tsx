import Link from "next/link";

const treatmentVideoGroups = [
  {
    title: "Pico Laser Face",
    href: "/treatments/pico-glow-face",
    clips: [["pico-face-05", "Side view of the Pico handpiece"]],
  },
  {
    title: "Exilis",
    clips: [["exilis-02", "Wider view of the Exilis treatment setup"]],
  },
  {
    title: "Diode Laser Hair Removal",
    href: "/diode-laser",
    clips: [["diode-05", "Diode laser handpiece during underarm treatment"]],
  },
] as const;

export function TreatmentVideos() {
  return (
    <section className="public-container py-14 sm:py-20" aria-labelledby="treatment-videos-heading">
      <h2 id="treatment-videos-heading" className="public-subheading scroll-mt-36 text-balance">
        Treatment videos
      </h2>
      <p className="mt-4 max-w-[65ch] text-pretty leading-7 text-[#62595C]">
        See the equipment and treatment setup at ESCLARE. Select a clip to play it.
      </p>
      <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {treatmentVideoGroups.map((group) => (
          <section
            key={group.title}
            aria-label={group.title}
            className="mt-10 border-t border-[#D8C9B4] pt-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-serif text-2xl text-[#481827]">{group.title}</h3>
              {"href" in group && (
                <Link href={group.href} className="public-link text-sm font-semibold">
                  View {group.title} details
                </Link>
              )}
            </div>
            <div className="mt-5">
              {group.clips.map(([file, label]) => {
                const path = `/media/treatment-clips/${file}`;
                return (
                  <figure
                    key={file}
                    className="overflow-hidden rounded-lg border border-[#D8C9B4] bg-white"
                  >
                    <video
                      aria-label={`${group.title}: ${label}`}
                      className="block aspect-[4/5] w-full bg-[#32101E] object-contain"
                      controls
                      playsInline
                      preload="none"
                      poster={`${path}.webp`}
                      src={`${path}.mp4`}
                    />
                    <figcaption className="px-4 py-3 text-sm font-semibold text-[#481827]">
                      {label}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
