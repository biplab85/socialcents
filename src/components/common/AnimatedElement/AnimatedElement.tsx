'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './AnimatedElement.module.scss';

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function AnimatedElement({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  className = '',
}: AnimatedElementProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold });

  const classes = [
    styles.animatedElement,
    styles[animation],
    isVisible ? styles.visible : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    '--animation-delay': `${delay}ms`,
    '--animation-duration': `${duration}ms`,
  } as React.CSSProperties;

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}

export default AnimatedElement;
