import type { Role } from '../roles';
import { useReveal } from '../lib/hooks';
import { roleCountWord } from '../lib/count';

function Section({ section }: { section: Role['sections'][number] }) {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal border-t rule pt-8">
      <h2 className="t-display text-[1.375rem] sm:text-[1.5rem]">{section.heading}</h2>

      {section.kind === 'prose' ? (
        <div className="t-prose mt-5 text-[1.0625rem] leading-relaxed text-[color:var(--color-muted)]">
          {section.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <ul className="t-prose mt-5 space-y-3.5">
          {section.body.map((item, i) => (
            <li key={i} className="flex gap-3.5">
              <span
                aria-hidden
                className="mt-[0.6875rem] h-px w-4 shrink-0 bg-[color:var(--color-rule-strong)]"
              />
              <span className="text-[1.0625rem] leading-relaxed text-[color:var(--color-muted)]">
                {item.lead ? (
                  <strong className="font-semibold text-[color:var(--color-void)]">{item.lead} </strong>
                ) : null}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function JobBody({ role }: { role: Role }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
      <div className="grid gap-12 py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-20">
        <aside className="lg:sticky lg:top-10 lg:self-start">
          <p className="t-label">The role</p>
          <p className="t-readout mt-3 text-[color:var(--color-muted)]">
            {role.positioning ?? 'Senior individual contributor.'} One of {roleCountWord()} open roles at MonoEdge.
          </p>
          <a href="#apply" className="btn btn-quiet mt-6 inline-block no-underline">
            Apply
          </a>
        </aside>

        <div className="space-y-14">
          {role.sections.map((section) => (
            <Section key={section.heading} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
