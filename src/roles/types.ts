import type { RoleSlug } from './slugs';

export type Section =
  | { heading: string; kind: 'prose'; body: string[] }
  | { heading: string; kind: 'list'; body: { lead?: string; text: string }[] };

export type ScreeningQuestion =
  | {
      id: string;
      kind: 'choice';
      question: string;
      options: { id: string; text: string }[];
    }
  | {
      id: string;
      kind: 'text';
      question: string;
      hint: string;
      maxLength: number;
    };

export type Role = {
  slug: RoleSlug;
  /** Short id used as the Sheet's role column. */
  id: string;
  title: string;
  /** Sits above the title in the hero. */
  eyebrow: string;
  location: string;
  employment: string;
  reportsTo: string;
  travel: string;
  /** One line for <meta description> and link previews. */
  summary: string;
  /** The motif drawn in the hero — each role gets its own instrument. */
  signal:
    | 'calibration'
    | 'timeseries'
    | 'frame'
    | 'network'
    | 'layout'
    | 'pipeline'
    | 'waveform'
    | 'roadmap';
  /**
   * The one-line standing shown in the page sidebar. Defaults to the senior
   * IC line; graduate and other roles override it.
   */
  positioning?: string;
  sections: Section[];
  screening: ScreeningQuestion[];
  /** Part 3 — the long-form answer we actually read. */
  written: {
    brief: string;
    prompt: string;
    hint: string;
    maxLength: number;
  };
};
