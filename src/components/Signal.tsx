import type { Role } from '../roles';

/**
 * Each role gets the instrument from its own discipline: a calibration target
 * for vision, a control chart for analytics, crop marks for design, and a
 * deployment topology for the Business Brain role. Same system, same palette,
 * different tool.
 */
export function Signal({ kind }: { kind: Role['signal'] }) {
  const common = {
    width: '100%',
    viewBox: '0 0 120 120',
    fill: 'none',
    'aria-hidden': true as const,
    className: 'block',
  };

  if (kind === 'calibration') {
    return (
      <svg {...common}>
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) =>
            (row + col) % 2 === 0 ? (
              <rect
                key={`${row}-${col}`}
                x={12 + col * 24}
                y={12 + row * 24}
                width={24}
                height={24}
                fill="var(--color-edge-blue)"
                opacity={0.09}
              />
            ) : null,
          ),
        )}
        <circle cx="60" cy="60" r="15" stroke="var(--color-edge-blue)" strokeWidth="1" />
        <path d="M60 33v54M33 60h54" stroke="var(--color-edge-blue)" strokeWidth="1" opacity="0.5" />
        <circle cx="60" cy="60" r="2.5" fill="var(--color-edge-blue)" />
      </svg>
    );
  }

  if (kind === 'timeseries') {
    return (
      <svg {...common}>
        <rect x="12" y="44" width="96" height="32" fill="var(--color-ice)" opacity="0.16" />
        <path d="M12 60h96" stroke="var(--color-edge-blue)" strokeWidth="1" opacity="0.4" strokeDasharray="2 4" />
        <path
          d="M12 66l12-8 12 5 12-12 12 9 12-16 12 11 12-6"
          stroke="var(--color-edge-blue)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx="72" cy="44" r="3" fill="var(--color-paper)" stroke="var(--color-edge-blue)" strokeWidth="1.5" />
        <path d="M12 88h96M12 32h96" stroke="var(--color-rule-strong)" strokeWidth="1" />
      </svg>
    );
  }

  if (kind === 'network') {
    // A small deployment topology: a central hub wired out to field devices
    // and PLC blocks — our system standing up on a plant floor.
    return (
      <svg {...common}>
        <path
          d="M60 60L24 28M60 60L96 24M60 60L26 96M60 60L96 96"
          stroke="var(--color-edge-blue)"
          strokeWidth="1"
          opacity="0.45"
        />
        {/* field nodes */}
        <circle cx="24" cy="28" r="5" fill="var(--color-paper)" stroke="var(--color-edge-blue)" strokeWidth="1.5" />
        <circle cx="26" cy="96" r="5" fill="var(--color-paper)" stroke="var(--color-edge-blue)" strokeWidth="1.5" />
        {/* PLC / controller blocks */}
        <rect x="88" y="16" width="16" height="16" fill="var(--color-edge-blue)" opacity="0.12" stroke="var(--color-edge-blue)" strokeWidth="1.5" />
        <rect x="88" y="88" width="16" height="16" fill="var(--color-edge-blue)" opacity="0.12" stroke="var(--color-edge-blue)" strokeWidth="1.5" />
        {/* central hub — our system */}
        <circle cx="60" cy="60" r="12" fill="var(--color-ice)" opacity="0.18" />
        <circle cx="60" cy="60" r="12" stroke="var(--color-edge-blue)" strokeWidth="1" />
        <circle cx="60" cy="60" r="3" fill="var(--color-edge-blue)" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="30" y="30" width="60" height="60" stroke="var(--color-edge-blue)" strokeWidth="1" opacity="0.5" />
      <rect x="42" y="42" width="36" height="36" fill="var(--color-ice)" opacity="0.2" />
      {/* crop marks */}
      <path
        d="M30 14v10M14 30h10M90 14v10M106 30h-10M30 106v-10M14 90h10M90 106v-10M106 90h-10"
        stroke="var(--color-edge-blue)"
        strokeWidth="1.5"
      />
      <path d="M60 42v36M42 60h36" stroke="var(--color-edge-blue)" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}
