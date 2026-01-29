'use client';

import React from 'react';
import { Container } from '@/components/common';
import { useCountUp } from '@/hooks/useCountUp';
import { statsContent } from '@/data/content';
import styles from './Stats.module.scss';

function StatItem({ value, prefix = '', suffix = '', label }: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const [count, ref] = useCountUp({ end: value, duration: 2000 });

  return (
    <div className={styles.stat}>
      <span ref={ref as React.RefObject<HTMLSpanElement>} className={styles.value}>
        {prefix}{count}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export function Stats() {
  return (
    <section className={styles.stats}>
      <Container>
        <div className={styles.grid}>
          {statsContent.stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;
