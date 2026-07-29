import { ROLE_SLUGS } from '../roles/slugs';

const WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];

/** The number of open roles, spelled out ("six"), so copy never drifts from
 * the actual role list. Falls back to digits past ten. */
export function roleCountWord(): string {
  return WORDS[ROLE_SLUGS.length] ?? String(ROLE_SLUGS.length);
}
