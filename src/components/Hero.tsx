import type { Role } from '../roles';
import { Signal } from './Signal';
import { Wordmark } from './Wordmark';

const SPEC_KEYS = ['Location', 'Type', 'Reports to', 'Travel'] as const;

export function Hero({ role }: { role: Role }) {
  const spec: Record<(typeof SPEC_KEYS)[number], string> = {
    Location: role.location,
    Type: role.employment,
    'Reports to': role.reportsTo,
    Travel: role.travel,
  };

  return (
    <header className="relative overflow-hidden border-b rule">
      <div className="grid-field" />
      <div className="scan-line" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-8 pb-16 sm:px-10 lg:pb-24">
        <div className="flex items-center justify-between gap-6">
          <Wordmark />
          <span className="t-label hidden sm:block">Careers · Pune</span>
        </div>

        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-[minmax(0,1fr)_140px] lg:items-end">
          <div>
            <p className="t-label">{role.eyebrow}</p>
            <h1 className="t-display mt-5 text-[clamp(2.25rem,6.2vw,4.5rem)]">{role.title}</h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-[color:var(--color-muted)]">
              {role.summary}
            </p>
          </div>
          <div className="hidden w-[140px] lg:block" aria-hidden>
            <Signal kind={role.signal} />
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-1 border-t rule sm:grid-cols-2 lg:grid-cols-4">
          {SPEC_KEYS.map((key) => (
            <div key={key} className="border-b rule py-4 sm:border-r sm:last:border-r-0 sm:pr-6 lg:py-5">
              <dt className="t-label">{key}</dt>
              <dd className="t-readout mt-2 pr-4 text-[color:var(--color-void)]">{spec[key]}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <a href="#apply" className="btn btn-primary inline-block no-underline">
            Apply for this role
          </a>
        </div>
      </div>
    </header>
  );
}
