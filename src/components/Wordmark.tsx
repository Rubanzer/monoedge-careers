/**
 * The supplied mark plus the name set in the display face.
 *
 * Assets are generated from brand/logo-source.jpeg by crop-logo.mjs — the
 * original has a wide white margin that would leave the mark tiny at header
 * size. Re-run that script if the source is ever replaced.
 *
 * `nested` means the page sits one level below the site root (a role page),
 * which decides both the asset path and whether the mark links back to the
 * careers index.
 */
export function Wordmark({ nested = false }: { nested?: boolean }) {
  const content = (
    <>
      <img
        src={nested ? '../monoedge-mark.png' : './monoedge-mark.png'}
        alt=""
        width={30}
        height={20}
        className="h-5 w-auto shrink-0"
      />
      <span className="t-display text-[0.9375rem] tracking-[0.02em]">MonoEdge</span>
      <span className="sr-only">MonoEdge Systems</span>
    </>
  );

  if (!nested) {
    return <div className="flex items-center gap-2.5">{content}</div>;
  }

  return (
    <a href="../" className="flex items-center gap-2.5 no-underline transition-opacity hover:opacity-70">
      {content}
    </a>
  );
}
