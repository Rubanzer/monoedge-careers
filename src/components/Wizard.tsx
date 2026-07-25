import { useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { Role } from '../roles';
import { Field } from './Field';
import { StepRail } from './StepRail';
import { VoiceRecorder, type Recording } from './VoiceRecorder';
import { fileToBase64, submitApplication, type Submission } from '../lib/submit';

const EXPERIENCE = ['Under 2 years', '2–4 years', '4–6 years', '6–9 years', '9+ years'];
const NOTICE = ['Immediate', 'Within 15 days', '30 days', '60 days', '90 days or more'];
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

type Details = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  employer: string;
  notice: string;
  links: string;
};

const EMPTY_DETAILS: Details = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  experience: '',
  employer: '',
  notice: '',
  links: '',
};

const transition = { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const };

export function Wizard({ role }: { role: Role }) {
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState<Details>(EMPTY_DETAILS);
  const [resume, setResume] = useState<File | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recording, setRecording] = useState<Recording | null>(null);
  const [recorderUnsupported, setRecorderUnsupported] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'editing' | 'sending' | 'sent'>('editing');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const openedAt = useMemo(() => Date.now(), []);
  const topRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Details>(key: K, value: Details[K]) => {
    setDetails((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const goTo = (next: number) => {
    setStep(next);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  function validateDetails(): boolean {
    const found: Record<string, string> = {};
    if (!details.fullName.trim()) found.fullName = 'Enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(details.email.trim()))
      found.email = 'Enter an email address we can reply to.';
    if (details.phone.replace(/\D/g, '').length < 10)
      found.phone = 'Enter a phone number with at least 10 digits.';
    if (!details.location.trim()) found.location = 'Tell us where you are based.';
    if (!details.experience) found.experience = 'Select your years of experience.';
    if (!details.notice) found.notice = 'Select your notice period.';
    if (!details.links.trim()) found.links = 'Add at least one link — LinkedIn, GitHub, or a portfolio.';

    if (!resume) {
      found.resume = 'Attach your CV as a PDF or Word file.';
    } else if (resume.size > MAX_RESUME_BYTES) {
      found.resume = 'That file is over 5 MB. Attach a smaller one.';
    }

    setErrors(found);
    return Object.keys(found).length === 0;
  }

  function validateScreening(): boolean {
    const found: Record<string, string> = {};
    for (const question of role.screening) {
      const value = answers[question.id]?.trim();
      if (!value) {
        found[question.id] =
          question.kind === 'choice' ? 'Choose one option.' : 'This one needs an answer.';
      }
    }
    setErrors(found);
    return Object.keys(found).length === 0;
  }

  async function handleSubmit() {
    if (!recording && !recorderUnsupported) {
      setErrors({ voice: 'Record the paragraph before you submit.' });
      return;
    }

    setStatus('sending');
    setSubmitError(null);

    try {
      const payload: Submission = {
        roleId: role.id,
        roleTitle: role.title,
        details: { ...details },
        answers,
        website: honeypot,
        openedAt,
        resume: resume
          ? {
              name: resume.name,
              mimeType: resume.type || 'application/octet-stream',
              data: await fileToBase64(resume),
            }
          : null,
        voiceNote: recording
          ? {
              name: `voice-note.${recording.mimeType.includes('mp4') ? 'm4a' : 'webm'}`,
              mimeType: recording.mimeType,
              data: await fileToBase64(recording.blob),
            }
          : null,
      };

      await submitApplication(payload);
      setStatus('sent');
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      setStatus('editing');
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'sent') {
    return (
      <section id="apply" className="border-t rule bg-[color:var(--color-haze)]">
        <div ref={topRef} className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-10">
          <p className="t-label">Application received</p>
          <h2 className="t-display mt-4 text-[clamp(1.75rem,4vw,2.5rem)]">Thank you, {details.fullName.split(' ')[0]}.</h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-[color:var(--color-muted)]">
            Your application for {role.title} is with us, voice note included. We read every one.
          </p>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-[color:var(--color-muted)]">
            If it is a fit, you will hear from us within two weeks. If you do not hear back in that
            window, it means we have gone another way for this role — we would rather say that plainly
            than leave you waiting.
          </p>
          <p className="t-readout mt-8 text-[color:var(--color-muted)]">
            Questions: krishna@monoedge.in · 9730922589
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="border-t rule bg-[color:var(--color-haze)]">
      <div ref={topRef} className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 lg:py-24">
        <p className="t-label">Apply</p>
        <h2 className="t-display mt-4 text-[clamp(1.75rem,4vw,2.5rem)]">Apply for this role</h2>
        <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-[color:var(--color-muted)]">
          Three parts, about ten minutes. The last one asks you to record a short paragraph, so find a
          quiet spot before you start.
        </p>

        <div className="mt-12 border rule bg-[color:var(--color-paper)] p-6 sm:p-9">
          <StepRail current={step} />

          <div className="mt-9">
            {/* Keyed on the step so each part animates in on mount. No exit
                animation: a stalled exit would leave the wizard showing the
                previous part forever. */}
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transition}
            >
                {step === 0 ? (
                  <div className="space-y-6">
                    <h3 className="t-display text-[1.25rem]">Your details</h3>

                    <Field id="fullName" label="Full name" error={errors.fullName}>
                      <input
                        id="fullName"
                        className="field-input"
                        value={details.fullName}
                        autoComplete="name"
                        aria-invalid={!!errors.fullName}
                        onChange={(event) => set('fullName', event.target.value)}
                      />
                    </Field>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="email" label="Email" error={errors.email}>
                        <input
                          id="email"
                          type="email"
                          className="field-input"
                          value={details.email}
                          autoComplete="email"
                          aria-invalid={!!errors.email}
                          onChange={(event) => set('email', event.target.value)}
                        />
                      </Field>

                      <Field id="phone" label="Phone" error={errors.phone}>
                        <input
                          id="phone"
                          type="tel"
                          className="field-input"
                          value={details.phone}
                          autoComplete="tel"
                          aria-invalid={!!errors.phone}
                          onChange={(event) => set('phone', event.target.value)}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="location" label="Current location" error={errors.location}>
                        <input
                          id="location"
                          className="field-input"
                          placeholder="City"
                          value={details.location}
                          aria-invalid={!!errors.location}
                          onChange={(event) => set('location', event.target.value)}
                        />
                      </Field>

                      <Field id="experience" label="Years of experience" error={errors.experience}>
                        <select
                          id="experience"
                          className="field-input"
                          value={details.experience}
                          aria-invalid={!!errors.experience}
                          onChange={(event) => set('experience', event.target.value)}
                        >
                          <option value="">Select</option>
                          {EXPERIENCE.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="employer" label="Current employer" optional>
                        <input
                          id="employer"
                          className="field-input"
                          value={details.employer}
                          onChange={(event) => set('employer', event.target.value)}
                        />
                      </Field>

                      <Field id="notice" label="Notice period" error={errors.notice}>
                        <select
                          id="notice"
                          className="field-input"
                          value={details.notice}
                          aria-invalid={!!errors.notice}
                          onChange={(event) => set('notice', event.target.value)}
                        >
                          <option value="">Select</option>
                          {NOTICE.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field
                      id="links"
                      label="Links"
                      hint={
                        role.id === 'DESIGN'
                          ? 'Portfolio first, please — plus LinkedIn or Behance if you have them.'
                          : 'LinkedIn, GitHub, or anything else that shows your work.'
                      }
                      error={errors.links}
                    >
                      <input
                        id="links"
                        className="field-input"
                        placeholder="https://"
                        value={details.links}
                        aria-invalid={!!errors.links}
                        onChange={(event) => set('links', event.target.value)}
                      />
                    </Field>

                    <Field id="resume" label="CV" hint="PDF or Word, up to 5 MB." error={errors.resume}>
                      <input
                        id="resume"
                        type="file"
                        className="field-input"
                        accept=".pdf,.doc,.docx,application/pdf"
                        aria-invalid={!!errors.resume}
                        onChange={(event) => {
                          setResume(event.target.files?.[0] ?? null);
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.resume;
                            return next;
                          });
                        }}
                      />
                    </Field>

                    {/* Anti-spam. Hidden from people, tempting to bots. */}
                    <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(event) => setHoneypot(event.target.value)}
                      />
                    </div>
                  </div>
                ) : null}

                {step === 1 ? (
                  <div className="space-y-9">
                    <h3 className="t-display text-[1.25rem]">Screening questions</h3>
                    {role.screening.map((question, index) => (
                      <div key={question.id}>
                        <p className="t-label">Question {String(index + 1).padStart(2, '0')}</p>
                        <p className="mt-2 text-[1.0625rem] font-medium leading-relaxed">
                          {question.question}
                        </p>

                        {question.kind === 'choice' ? (
                          <div
                            role="radiogroup"
                            aria-label={question.question}
                            className="mt-4 space-y-2.5"
                          >
                            {question.options.map((option) => {
                              const selected = answers[question.id] === option.id;
                              return (
                                <button
                                  key={option.id}
                                  type="button"
                                  role="radio"
                                  aria-checked={selected}
                                  data-selected={selected}
                                  className="choice"
                                  onClick={() => {
                                    setAnswers((prev) => ({ ...prev, [question.id]: option.id }));
                                    setErrors((prev) => {
                                      const next = { ...prev };
                                      delete next[question.id];
                                      return next;
                                    });
                                  }}
                                >
                                  <span className="choice-key">{option.id}</span>
                                  <span className="text-[0.9375rem] leading-relaxed">{option.text}</span>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="mt-4">
                            <textarea
                              id={question.id}
                              rows={5}
                              maxLength={question.maxLength}
                              className="field-input resize-y"
                              value={answers[question.id] ?? ''}
                              aria-invalid={!!errors[question.id]}
                              onChange={(event) => {
                                const value = event.target.value;
                                setAnswers((prev) => ({ ...prev, [question.id]: value }));
                                setErrors((prev) => {
                                  const next = { ...prev };
                                  delete next[question.id];
                                  return next;
                                });
                              }}
                            />
                            <div className="mt-1.5 flex justify-between">
                              <p className="text-[0.8125rem] text-[color:var(--color-muted)]">
                                {question.hint}
                              </p>
                              <p className="t-readout text-[color:var(--color-muted)]">
                                {(answers[question.id] ?? '').length}/{question.maxLength}
                              </p>
                            </div>
                          </div>
                        )}

                        {errors[question.id] ? (
                          <p role="alert" className="t-readout mt-2 text-[color:var(--color-edge-blue)]">
                            {errors[question.id]}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}

                {step === 2 ? (
                  <div className="space-y-6">
                    <h3 className="t-display text-[1.25rem]">Voice note</h3>
                    <p className="text-[0.9375rem] leading-relaxed text-[color:var(--color-muted)]">
                      {role.voice.brief}
                    </p>

                    <blockquote className="border-l-2 border-[color:var(--color-edge-blue)] bg-[color:var(--color-haze)] py-4 pl-5 pr-4">
                      {role.voice.paragraph.map((line, index) => (
                        <p
                          key={index}
                          className="text-[1rem] leading-relaxed text-[color:var(--color-void)] [&+p]:mt-3"
                        >
                          {line}
                        </p>
                      ))}
                    </blockquote>

                    <VoiceRecorder
                      recording={recording}
                      onChange={(next) => {
                        setRecording(next);
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.voice;
                          return copy;
                        });
                      }}
                      onUnsupported={setRecorderUnsupported}
                    />

                    {errors.voice ? (
                      <p role="alert" className="t-readout text-[color:var(--color-edge-blue)]">
                        {errors.voice}
                      </p>
                    ) : null}
                  </div>
                ) : null}
            </motion.div>
          </div>

          {submitError ? (
            <p role="alert" className="t-readout mt-6 border-l-2 border-[color:var(--color-edge-blue)] pl-3">
              {submitError}
            </p>
          ) : null}

          <div className="mt-10 flex items-center justify-between gap-4 border-t rule pt-6">
            <button
              type="button"
              className="btn btn-quiet"
              onClick={() => goTo(step - 1)}
              disabled={step === 0 || status === 'sending'}
              style={{ visibility: step === 0 ? 'hidden' : 'visible' }}
            >
              Back
            </button>

            {step < 2 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const valid = step === 0 ? validateDetails() : validateScreening();
                  if (valid) goTo(step + 1);
                }}
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Submit application'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
