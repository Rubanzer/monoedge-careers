import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RolePage } from '../components/RolePage';
import { ROLES } from '../roles';
import type { RoleSlug } from '../roles';
import '../styles.css';

export function mount(slug: RoleSlug) {
  const container = document.getElementById('root');
  if (!container) throw new Error('Missing #root');

  createRoot(container).render(
    <StrictMode>
      <RolePage role={ROLES[slug]} />
    </StrictMode>,
  );
}
