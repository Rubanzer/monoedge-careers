import type { ReactNode } from 'react';

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
};

export function Field({ id, label, hint, error, optional, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="t-label block">
        {label}
        {optional ? (
          <span className="ml-2 normal-case tracking-normal text-[color:var(--color-muted)]">
            optional
          </span>
        ) : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[0.8125rem] text-[color:var(--color-muted)]">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="t-readout mt-2 text-[color:var(--color-edge-blue)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
