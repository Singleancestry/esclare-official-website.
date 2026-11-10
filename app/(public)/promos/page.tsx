import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { october2026Promos } from "@/lib/content/promos";

export const metadata: Metadata = {
  title: "Ongoing Promos",
  description: "Check for current ESCLARE clinic promotions.",
  alternates: { canonical: "/promos" },
};

export default function PromosPage() {
  return (
    <section className="public-container py-16 sm:py-24" aria-labelledby="promos-heading">
      <h1 id="promos-heading" className="public-heading">Ongoing Promos</h1>
      <div className="editorial-card mt-8 p-6 sm:p-8">
        <h2 className="public-subheading">Promos available</h2>
        <p className="mt-3">Contact your branch for current offers and availability.</p>
        <Link href="/branches" className="luxury-button mt-5">
          Find your branch
        </Link>
      </div>

      <section className="mt-14 sm:mt-20" aria-labelledby="october-promos">
        <p className="public-eyebrow">Past offers · for reference</p>
        <h2 id="october-promos" className="public-subheading mt-3">October 2026 Promos</h2>
        <p className="mt-4 max-w-[65ch] text-pretty leading-7">
          These are the October brochure rates. Check with your branch for current pricing.
          Treatments and packages are subject to clinic assessment, eligibility, scheduling,
          and applicable terms and conditions.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {october2026Promos.map((group) => (
            <article key={group.title} className="editorial-card self-start overflow-hidden">
              {group.image && (
                <figure>
                  <div className="relative aspect-[3/2] bg-[#F4E8DA]">
                    <Image
                      src={group.image.src}
                      alt={group.image.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 95vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="px-6 pt-3 text-xs text-[#765A44]">Treatment visual</figcaption>
                </figure>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-[#59141D]">{group.title}</h3>
                <ul className="mt-4 divide-y divide-[#D8C9B4]">
                  {group.offers.map(([name, prices, inclusions]) => (
                    <li key={name} className="py-4">
                      <h4 className="font-sans font-semibold">{name}</h4>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {prices.map((price) => (
                          <li key={price} className="rounded bg-[#F4E8DA] px-2.5 py-1 text-sm font-semibold text-[#59141D]">{price}</li>
                        ))}
                      </ul>
                      {inclusions && <p className="mt-2 text-sm leading-6 text-[#62595C]">{inclusions}</p>}
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
