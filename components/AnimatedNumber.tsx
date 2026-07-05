"use client";

import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({
  value,
  duration,
  pad = 0,
}: {
  value: number;
  duration?: number;
  pad?: number;
}) {
  const [display, setDisplay] = useState(0);
  const prevValue = useRef(0);
  const hasMounted = useRef(false);

  useEffect(() => {
    const from = prevValue.current;
    const controls = animate(from, value, {
      duration: duration ?? (hasMounted.current ? 0.6 : 1.4),
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Math.round(latest));
      },
    });
    prevValue.current = value;
    hasMounted.current = true;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{String(display).padStart(pad, "0")}</>;
}
