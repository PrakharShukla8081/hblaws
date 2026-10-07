'use client';

import { useEffect, useState } from 'react';
import { weeklySchedule } from '@/lib/data';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const SHORT: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function fmt(hour: number) {
  const h = hour % 12 === 0 ? 12 : hour % 12;
  return `${h}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
}

function getStatus() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date());

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0';
  const day = SHORT[get('weekday')] ?? 0;
  const minutes = (Number(get('hour')) % 24) * 60 + Number(get('minute'));

  const today = weeklySchedule[day];
  if (today && minutes >= today[0] * 60 && minutes < today[1] * 60) {
    return { open: true, text: `Open now \u00b7 closes ${fmt(today[1])}` };
  }

  if (today && minutes < today[0] * 60) {
    return { open: false, text: `Closed \u00b7 opens today ${fmt(today[0])}` };
  }

  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const slot = weeklySchedule[d];
    if (slot) {
      const label = i === 1 ? 'tomorrow' : DAYS[d];
      return { open: false, text: `Closed \u00b7 opens ${label} ${fmt(slot[0])}` };
    }
  }
  return { open: false, text: 'Closed' };
}

export function OpenStatus({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Render nothing on the server to avoid a hydration mismatch
  if (!status) return null;

  return (
    <p className={`flex items-center gap-2 text-sm font-medium ${className}`}>
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 rounded-full ${status.open ? 'bg-emerald-500' : 'bg-red-500'}`}
      />
      <span className="text-foreground">{status.text}</span>
    </p>
  );
}
