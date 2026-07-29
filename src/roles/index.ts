import { businessBrainAssociate } from './business-brain-associate';
import { computerVisionEngineer } from './computer-vision-engineer';
import { dataEngineer } from './data-engineer';
import { dataScientist } from './data-scientist';
import { frontendEngineer } from './frontend-engineer';
import { graphicDesigner } from './graphic-designer';
import type { Role } from './types';
import type { RoleSlug } from './slugs';

export const ROLES: Record<RoleSlug, Role> = {
  'computer-vision-engineer-7f3ac1': computerVisionEngineer,
  'data-scientist-4b9e26': dataScientist,
  'graphic-designer-d8c105': graphicDesigner,
  'business-brain-associate-5c1a7e': businessBrainAssociate,
  'frontend-engineer-a7f3d2': frontendEngineer,
  'data-engineer-b4e8c1': dataEngineer,
};

export type { Role } from './types';
export { ROLE_SLUGS } from './slugs';
export type { RoleSlug } from './slugs';
