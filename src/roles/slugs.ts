// Slugs carry a random suffix so the three pages are not guessable siblings.
// Changing a slug changes the public URL — treat these as published values.
export const ROLE_SLUGS = [
  'computer-vision-engineer-7f3ac1',
  'data-scientist-4b9e26',
  'graphic-designer-d8c105',
  'business-brain-associate-5c1a7e',
  'frontend-engineer-a7f3d2',
  'data-engineer-b4e8c1',
] as const;

export type RoleSlug = (typeof ROLE_SLUGS)[number];
