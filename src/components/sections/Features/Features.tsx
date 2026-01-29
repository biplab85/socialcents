'use client';

import React from 'react';
import { Container, Icon, AnimatedElement } from '@/components/common';
import { featuresContent } from '@/data/content';
import styles from './Features.module.scss';

export function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.backgroundPattern} />
      <div className={styles.decorativeElements}>
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
      </div>

      <Container>
        <div className={styles.content}>
          <AnimatedElement animation="fadeInUp">
            <div className={styles.header}>
              <span className={styles.badge}>{featuresContent.badge}</span>
              <h2 className={styles.title}>
                Features That{' '}
                <span className={styles.titleHighlight}>Set Us Apart</span>
              </h2>
              <p className={styles.description}>{featuresContent.description}</p>
            </div>
          </AnimatedElement>

          <div className={styles.grid}>
            {featuresContent.features.map((feature, index) => (
              <AnimatedElement
                key={index}
                animation="fadeInUp"
                delay={index * 80}
              >
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                      <Icon name={feature.icon} size={28} />
                    </div>
                    <h3 className={styles.cardTitle}>
                      {feature.title}
                      <span className={styles.cardArrow}>
                        <Icon name="arrow-right" size={18} />
                      </span>
                    </h3>
                    <p className={styles.cardDescription}>{feature.description}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;
