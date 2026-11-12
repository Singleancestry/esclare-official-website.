import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { december2026Promos, december2026PromoTerms } from "@/lib/content/promos";

export const metadata: Metadata = {
  title: "Ongoing Promos",
  description:
    "See the December 2026 treatment promos, package inclusions and terms for ESCLARE Naga.",
  alternates: { canonical: "/promos" },
};

export default function PromosPage() {
  return (
    <section className="public-container py-16 sm:py-24" aria-labelledby="promos-heading">
      <h1 id="promos-heading" className="public-heading">
        Ongoing Promos
      </h1>
      <section className="mt-8 sm:mt-12" aria-labelledby="december-promos">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#D8C9B4] pb-6">
          <div>
            <p className="public-eyebrow">ESCLARE Naga</p>
            <h2 id="december-promos" className="public-subheading mt-2">
              December 2026 Promos
            </h2>
          </div>
          <Link href="/appointment-request?branch=naga" className="luxury-button">
            Ask about availability
          </Link>
        </div>

        <aside
          className="mt-6 border-l-2 border-[#B98A4D] bg-[#F4E8DA] p-5 sm:p-6"
          aria-labelledby="promo-terms"
        >
          <h3 id="promo-terms" className="font-semibold text-[#59141D]">
            Important Promo Terms &amp; Conditions
          </h3>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#62595C]">
            {december2026PromoTerms}
          </p>
        </aside>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {december2026Promos.map((group) => (
            <article key={group.title} className="editorial-card self-start overflow-hidden">
              <div className="relative aspect-[16/9] bg-[#F4E8DA]">
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  fill
                  sizes="(min-width: 1320px) 620px, (min-width: 1024px) 45vw, 95vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-[#59141D]">{group.title}</h3>
                <ul className="mt-4 divide-y divide-[#D8C9B4]">
                  {group.offers.map(({ name, prices, inclusions, freebies }) => (
                    <li key={name} className="py-4">
                      <h4 className="font-sans font-semibold">{name}</h4>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {prices.map((price) => (
                          <li
                            key={price}
                            className="rounded bg-[#F4E8DA] px-2.5 py-1 text-sm font-semibold text-[#59141D]"
                          >
                            {price}
                          </li>
                        ))}
                      </ul>
                      {inclusions && (
                        <p className="mt-2 text-sm leading-6 text-[#62595C]">{inclusions}</p>
                      )}
                      {freebies && (
                        <div className="mt-3 text-sm leading-6 text-[#62595C]">
                          <p className="font-semibold text-[#59141D]">Additional freebies</p>
                          <ul className="mt-1 list-disc space-y-1 pl-5">
                            {freebies.map((freebie) => (
                              <li key={freebie}>{freebie}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
