import { computerVisionEngineer } from './computer-vision-engineer';
import { dataScientist } from './data-scientist';
import { graphicDesigner } from './graphic-designer';
import type { Role } from './types';
import type { RoleSlug } from './slugs';

export const ROLES: Record<RoleSlug, Role> = {
  'computer-vision-engineer-7f3ac1': computerVisionEngineer,
  'data-scientist-4b9e26': dataScientist,
  'graphic-designer-d8c105': graphicDesigner,
};

export type { Role } from './types';
export { ROLE_SLUGS } from './slugs';
export type { RoleSlug } from './slugs';
