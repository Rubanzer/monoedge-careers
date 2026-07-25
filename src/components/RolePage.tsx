import { useEffect } from 'react';
import type { Role } from '../roles';
import { Hero } from './Hero';
import { JobBody } from './JobBody';
import { Wizard } from './Wizard';
import { Wordmark } from './Wordmark';
import { useSmoothScroll } from '../lib/hooks';

export function RolePage({ role }: { role: Role }) {
  useSmoothScroll();

  useEffect(() => {
    document.title = `${role.title} · MonoEdge`;
  }, [role.title]);

  return (
    <>
      <Hero role={role} />
      <main>
        <JobBody role={role} />
        <Wizard role={role} />
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
