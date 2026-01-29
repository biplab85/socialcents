'use client';

import React from 'react';
import styles from './SectionTitle.module.scss';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export function SectionTitle({
  badge,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const classes = [
    styles.sectionTitle,
    styles[align],
    light ? styles.light : '',
    isVisible ? styles.visible : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default SectionTitle;
