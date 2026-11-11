import type { Route } from "next";
import Link from "next/link";

export function TreatmentVisitLinks({
  guide,
  video,
}: {
  guide?: { href: Route; label: string };
  video?: { href: Route; label: string };
}) {
  return (
    <section className="public-container py-10" aria-labelledby="plan-treatment-visit">
      <h2 id="plan-treatment-visit" className="public-subheading">
        Plan your clinic visit
      </h2>
      <p className="mt-4 max-w-[65ch] leading-7">
        Check branch hours and directions, then contact the clinic to confirm availability, current
        rates, and whether you need an assessment before booking.
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
        <li>
          <Link className="public-link" href="/branches/naga">
            Naga branch details
          </Link>
        </li>
        <li>
          <Link className="public-link" href="/branches/daet">
            Daet branch details
          </Link>
        </li>
        {guide && (
          <li>
            <Link className="public-link" href={guide.href}>
              {guide.label}
            </Link>
          </li>
        )}
        {video && (
          <li>
            <Link className="public-link" href={video.href}>
              {video.label}
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
