const STEPS = ['Your details', 'Screening', 'Voice note'] as const;

/**
 * The progress indicator is a measurement rail rather than three circles:
 * the parts are a scale you move along, and the ticks make the position
 * readable at a glance.
 */
export function StepRail({ current }: { current: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="t-label">
          Part {String(current + 1).padStart(2, '0')} of {String(STEPS.length).padStart(2, '0')}
        </p>
        <p className="t-readout text-[color:var(--color-muted)]">{STEPS[current]}</p>
      </div>

      <ol className="mt-3 grid grid-cols-3 gap-2" role="list">
        {STEPS.map((label, index) => {
          const state = index < current ? 'done' : index === current ? 'current' : 'ahead';
          return (
            <li key={label} aria-current={state === 'current' ? 'step' : undefined}>
              <div
                className="h-[3px] w-full transition-colors duration-300"
                style={{
                  background:
                    state === 'ahead' ? 'var(--color-rule)' : 'var(--color-edge-blue)',
                  opacity: state === 'done' ? 0.42 : 1,
                }}
              />
              <div className="tick-row mt-1.5" aria-hidden>
                {Array.from({ length: 6 }).map((_, tick) => (
                  <span key={tick} className="tick" data-major={tick === 0} />
                ))}
              </div>
              <p
                className="t-readout mt-1 hidden sm:block"
                style={{
                  color:
                    state === 'ahead' ? 'var(--color-muted)' : 'var(--color-edge-blue)',
                }}
              >
                {label}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
