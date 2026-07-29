import { useEffect } from 'react';
import { ROLES, ROLE_SLUGS } from '../roles';
import { Signal } from './Signal';
import { Wordmark } from './Wordmark';
import { useReveal, useSmoothScroll } from '../lib/hooks';
import { roleCountWord } from '../lib/count';

function RoleRow({ slug }: { slug: (typeof ROLE_SLUGS)[number] }) {
  const role = ROLES[slug];
  const ref = useReveal<HTMLLIElement>();

  return (
    <li ref={ref} className="reveal border-t rule">
      <a
        href={`./${slug}/`}
        className="group grid gap-6 py-8 no-underline sm:grid-cols-[minmax(0,1fr)_88px] sm:items-center lg:py-10"
      >
        <div>
          <p className="t-label">{role.eyebrow}</p>
          <h2 className="t-display mt-3 text-[clamp(1.5rem,3.2vw,2.125rem)] transition-colors group-hover:text-[color:var(--color-edge-blue)]">
            {role.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-[color:var(--color-muted)]">
            {role.summary}
          </p>
          <p className="t-readout mt-4 text-[color:var(--color-edge-blue)]">
            {role.location.split(',')[0]} · {role.employment}
            <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
          </p>
        </div>
        <div className="hidden w-[88px] opacity-60 transition-opacity group-hover:opacity-100 sm:block" aria-hidden>
          <Signal kind={role.signal} />
        </div>
      </a>
    </li>
  );
}

export function CareersPage() {
  useSmoothScroll();

  useEffect(() => {
    document.title = 'Careers · MonoEdge';
  }, []);

  const count = roleCountWord();
  const countTitle = count.charAt(0).toUpperCase() + count.slice(1);

  return (
    <>
      <header className="relative overflow-hidden border-b rule">
        <div className="grid-field" />
        <div className="scan-line" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-8 pb-16 sm:px-10 lg:pb-20">
          <div className="flex items-center justify-between gap-6">
            <Wordmark />
            <span className="t-label hidden sm:block">Pune</span>
          </div>

          <div className="mt-20 lg:mt-28">
            <p className="t-label">Careers</p>
            <h1 className="t-display mt-5 max-w-3xl text-[clamp(2rem,5.4vw,3.75rem)]">
              {countTitle} roles. One plant floor at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-[color:var(--color-muted)]">
              MonoEdge builds an intelligence layer for Indian mid-market manufacturing — software that
              behaves like an always-on analyst rather than another dashboard to manage. We are
              bootstrapped, small, and hiring people who work directly with the Founder — senior
              individual contributors, and a set of graduate engineers building the next generation of
              the product.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <p className="t-label">Open roles</p>
            <p className="t-readout mt-3 text-[color:var(--color-muted)]">
              All {count} are Pune-based, full-time, with travel to partner plants across India.
            </p>
          </aside>

          <ul className="border-b rule">
            {ROLE_SLUGS.map((slug) => (
              <RoleRow key={slug} slug={slug} />
            ))}
          </ul>
        </div>

        <section className="mt-20 border-t rule pt-8">
          <h2 className="t-display text-[1.375rem]">How we hire</h2>
          <div className="t-prose mt-5 text-[1.0625rem] leading-relaxed text-[color:var(--color-muted)]">
            <p>
              Every role has the same three-part application: your details, a short set of screening
              questions, and one written question we read properly. It takes about ten minutes.
            </p>
            <p>
              If it is a fit, you will hear from us within two weeks. If you do not hear back in that
              window, it means we have gone another way — we would rather say that plainly than leave
              you waiting.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t rule">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <Wordmark />
          <p className="t-readout text-[color:var(--color-muted)]">
            krishna@monoedge.in · 9730922589 · Pune
          </p>
        </div>
      </footer>
    </>
  );
}
