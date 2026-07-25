/**
 * Typographic lockup standing in for the supplied logo files. The mark in the
 * brand book is a symbol + wordmark; drop the SVG into /public and swap this
 * component when the asset is available.
 */
export function Wordmark() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden className="shrink-0">
        <rect x="0.5" y="0.5" width="19" height="19" stroke="var(--color-edge-blue)" fill="none" />
        <path d="M4 14V6l6 5 6-5v8" stroke="var(--color-edge-blue)" strokeWidth="1.6" fill="none" />
      </svg>
      <span className="t-display text-[0.9375rem] tracking-[0.02em]">
        MonoEdge
      </span>
      <span className="sr-only">MonoEdge Systems</span>
    </div>
  );
}
