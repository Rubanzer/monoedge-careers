import { useCallback, useEffect, useRef, useState } from 'react';
import { useElapsed } from '../lib/hooks';

const MAX_SECONDS = 90;
const TARGET_MIN = 30;

export type Recording = { blob: Blob; mimeType: string; seconds: number };

function pickMimeType(): string | null {
  if (typeof MediaRecorder === 'undefined') return null;
  const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) ?? null;
}

function format(seconds: number): string {
  const whole = Math.floor(seconds);
  return `${String(Math.floor(whole / 60)).padStart(2, '0')}:${String(whole % 60).padStart(2, '0')}`;
}

type Props = {
  recording: Recording | null;
  onChange: (recording: Recording | null) => void;
  onUnsupported: (unsupported: boolean) => void;
};

export function VoiceRecorder({ recording, onChange, onUnsupported }: Props) {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [playbackUrl, setPlaybackUrl] = useState<string | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startedAtRef = useRef(0);

  const elapsed = useElapsed(isRecording);
  const supported =
    typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && !!pickMimeType();

  useEffect(() => {
    onUnsupported(!supported);
  }, [supported, onUnsupported]);

  useEffect(() => {
    if (!recording) {
      setPlaybackUrl(null);
      return;
    }
    const url = URL.createObjectURL(recording.blob);
    setPlaybackUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [recording]);

  const releaseStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => releaseStream, [releaseStream]);

  const stop = useCallback(() => {
    recorderRef.current?.state === 'recording' && recorderRef.current.stop();
  }, []);

  // Hard stop so a forgotten tab doesn't produce a 20-minute file.
  useEffect(() => {
    if (isRecording && elapsed >= MAX_SECONDS) stop();
  }, [isRecording, elapsed, stop]);

  const start = useCallback(async () => {
    setError(null);
    const mimeType = pickMimeType();
    if (!mimeType) {
      setError('This browser cannot record audio. Try Chrome, Edge, or Safari.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];

      const recorder = new MediaRecorder(stream, { mimeType });
      recorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const seconds = (performance.now() - startedAtRef.current) / 1000;
        const blob = new Blob(chunksRef.current, { type: mimeType });
        setIsRecording(false);
        releaseStream();
        if (blob.size > 0) onChange({ blob, mimeType, seconds });
      };

      startedAtRef.current = performance.now();
      recorder.start();
      setIsRecording(true);
    } catch {
      releaseStream();
      setError(
        'We could not access your microphone. Check the browser permission and try again.',
      );
    }
  }, [onChange, releaseStream]);

  if (!supported) {
    return (
      <div className="border rule bg-[color:var(--color-haze)] p-5">
        <p className="t-label">Recording unavailable</p>
        <p className="mt-2 text-[0.9375rem] text-[color:var(--color-muted)]">
          This browser cannot record audio, so you can submit without the voice note. If you can, open
          this page in Chrome, Edge, or Safari — otherwise email your recording to{' '}
          <a className="text-[color:var(--color-edge-blue)] underline" href="mailto:krishna@monoedge.in">
            krishna@monoedge.in
          </a>
          .
        </p>
      </div>
    );
  }

  const tooShort = recording !== null && recording.seconds < TARGET_MIN;

  return (
    <div className="border rule p-5">
      <div className="flex flex-wrap items-center gap-4">
        {!isRecording ? (
          <button type="button" onClick={start} className="btn btn-primary">
            {recording ? 'Record again' : 'Start recording'}
          </button>
        ) : (
          <button type="button" onClick={stop} className="btn btn-primary">
            Stop recording
          </button>
        )}

        <div className="t-readout tabular-nums" aria-live="polite">
          {isRecording ? (
            <span className="flex items-center gap-2 text-[color:var(--color-edge-blue)]">
              <span
                aria-hidden
                className="inline-block h-2 w-2 animate-pulse rounded-full bg-[color:var(--color-edge-blue)]"
              />
              {format(elapsed)} · recording
            </span>
          ) : recording ? (
            <span className="text-[color:var(--color-muted)]">{format(recording.seconds)} · recorded</span>
          ) : (
            <span className="text-[color:var(--color-muted)]">00:00 · aim for 30–45 seconds</span>
          )}
        </div>
      </div>

      {isRecording ? (
        <div className="mt-4 h-[3px] w-full bg-[color:var(--color-rule)]">
          <div
            className="h-full bg-[color:var(--color-edge-blue)] transition-[width] duration-100"
            style={{ width: `${Math.min(100, (elapsed / 45) * 100)}%` }}
          />
        </div>
      ) : null}

      {playbackUrl ? (
        <div className="mt-4">
          <audio controls src={playbackUrl} className="w-full" />
        </div>
      ) : null}

      {tooShort ? (
        <p className="t-readout mt-3 text-[color:var(--color-edge-blue)]">
          That is under 30 seconds. You can send it as is, or record again.
        </p>
      ) : null}

      {error ? (
        <p role="alert" className="t-readout mt-3 text-[color:var(--color-edge-blue)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
