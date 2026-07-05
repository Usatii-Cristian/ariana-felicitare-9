"use client";

import { useEffect, useState } from "react";
import { getElapsedTime, zeroElapsed, type ElapsedTime } from "./time";

/**
 * Live-ticking elapsed time since `start`. Starts at zero on both server and
 * first client render (to avoid a hydration mismatch caused by `now()`
 * differing between the two), then syncs to the real value after mount and
 * updates every second.
 */
export function useLiveElapsed(start: Date): { elapsed: ElapsedTime; mounted: boolean } {
  const [elapsed, setElapsed] = useState<ElapsedTime>(zeroElapsed);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setElapsed(getElapsedTime(start));
    const id = setInterval(() => setElapsed(getElapsedTime(start)), 1000);
    return () => clearInterval(id);
  }, [start]);

  return { elapsed, mounted };
}
