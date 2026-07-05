export type ElapsedTime = {
  totalDays: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const zeroElapsed: ElapsedTime = {
  totalDays: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

/**
 * Calendar-accurate breakdown (like an age calculator): months/days count
 * full calendar units since `start`, hours/minutes/seconds are the remainder
 * within the current "anniversary day" — so they tick live and stay correct
 * across month-length differences and DST.
 */
export function getElapsedTime(start: Date, now: Date = new Date()): ElapsedTime {
  if (now.getTime() <= start.getTime()) return zeroElapsed;

  const totalDays = Math.floor((now.getTime() - start.getTime()) / 86_400_000);

  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  let anchor = new Date(start);
  anchor.setMonth(anchor.getMonth() + months);
  if (anchor.getTime() > now.getTime()) {
    months -= 1;
    anchor = new Date(start);
    anchor.setMonth(anchor.getMonth() + months);
  }

  let remainderMs = now.getTime() - anchor.getTime();

  const days = Math.floor(remainderMs / 86_400_000);
  remainderMs -= days * 86_400_000;

  const hours = Math.floor(remainderMs / 3_600_000);
  remainderMs -= hours * 3_600_000;

  const minutes = Math.floor(remainderMs / 60_000);
  remainderMs -= minutes * 60_000;

  const seconds = Math.floor(remainderMs / 1_000);

  return { totalDays, months, days, hours, minutes, seconds };
}

export function formatLongDate(date: Date): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

