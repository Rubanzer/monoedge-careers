declare global {
  interface Window {
    MONOEDGE?: { ENDPOINT?: string };
  }
}

export type SubmissionFile = {
  name: string;
  mimeType: string;
  /** base64, no data: prefix */
  data: string;
};

export type Submission = {
  roleId: string;
  roleTitle: string;
  details: Record<string, string>;
  answers: Record<string, string>;
  /** Anti-spam: must stay empty. */
  website: string;
  openedAt: number;
  resume: SubmissionFile | null;
};

export function endpoint(): string {
  return window.MONOEDGE?.ENDPOINT?.trim() ?? '';
}

export async function fileToBase64(file: Blob): Promise<string> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  // Chunked so large resumes don't blow the argument limit on String.fromCharCode.
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

/**
 * Apps Script Web Apps do not return CORS headers on preflighted requests, so
 * the body is sent as text/plain — a "simple" request that never preflights.
 * The script parses it as JSON on the other side.
 */
export async function submitApplication(payload: Submission): Promise<void> {
  const url = endpoint();
  if (!url) {
    throw new Error(
      'This form is not connected yet. Please email your application to krishna@monoedge.in.',
    );
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`We could not record your application (${response.status}). Please try again.`);
  }

  const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (!result?.ok) {
    throw new Error(result?.error ?? 'We could not record your application. Please try again.');
  }
}
