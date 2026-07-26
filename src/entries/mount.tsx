import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { RolePage } from '../components/RolePage';
import { CareersPage } from '../components/CareersPage';
import { ROLES } from '../roles';
import type { RoleSlug } from '../roles';
import '../styles.css';

function render(node: ReactNode) {
  const container = document.getElementById('root');
  if (!container) throw new Error('Missing #root');
  createRoot(container).render(<StrictMode>{node}</StrictMode>);
}

export function mount(slug: RoleSlug) {
  render(<RolePage role={ROLES[slug]} />);
}

export function mountCareers() {
  render(<CareersPage />);
}
