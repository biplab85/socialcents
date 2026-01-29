'use client';

import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  startOnView = true,
}: UseCountUpOptions): [number, React.RefObject<HTMLElement>, boolean] {
  const [count, setCount] = useState(start);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();
      const startValue = start;
      const changeInValue = end - start;

      const easeOutQuart = (t: number): number => {
        return 1 - Math.pow(1 - t, 4);
      };

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime - delay;

        if (elapsed < 0) {
          requestAnimationFrame(updateCount);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentCount = Math.round(startValue + changeInValue * easedProgress);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setIsComplete(true);
        }
      };

      requestAnimationFrame(updateCount);
    };

    if (startOnView) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(element);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);

      return () => observer.disconnect();
    } else {
      const timeoutId = setTimeout(animate, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [start, end, duration, delay, startOnView]);

  return [count, ref, isComplete];
}

export default useCountUp;
