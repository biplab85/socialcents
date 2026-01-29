'use client';

import React from 'react';
import { Container, Button, Icon } from '@/components/common';
import { ctaContent } from '@/data/content';
import styles from './CTA.module.scss';

export function CTA() {
  return (
    <section id="apply" className={styles.cta}>
      <div className={styles.background}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
      </div>

      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>{ctaContent.title}</h2>
          <p className={styles.subtitle}>{ctaContent.subtitle}</p>
          <p className={styles.description}>{ctaContent.description}</p>
          <Button href="#" size="lg" variant="ghost">
            {ctaContent.cta}
            <Icon name="arrow-right" size={20} />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
