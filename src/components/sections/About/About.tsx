'use client';

import React from 'react';
import { Container, Icon, AnimatedElement } from '@/components/common';
import { aboutContent } from '@/data/content';
import styles from './About.module.scss';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.backgroundElements}>
        <div className={styles.glowOrb} />
        <div className={styles.glowOrb} />
        <div className={styles.glowOrb} />
      </div>

      <Container>
        <div className={styles.content}>
          <AnimatedElement animation="fadeInUp">
            <div className={styles.header}>
              <span className={styles.badge}>{aboutContent.badge}</span>
              <h2 className={styles.title}>
                {aboutContent.title.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === aboutContent.title.split(' ').length - 1 ? (
                      <span className={styles.titleHighlight}>{word}</span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </h2>
              <p className={styles.description}>{aboutContent.description}</p>
            </div>
          </AnimatedElement>

          <div className={styles.grid}>
            {aboutContent.points.map((point, index) => (
              <AnimatedElement
                key={index}
                animation="fadeInUp"
                delay={index * 100}
              >
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrapper}>
                        <Icon name={point.icon} size={26} />
                      </div>
                      <span className={styles.cardNumber}>0{index + 1}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{point.title}</h3>
                    <p className={styles.cardDescription}>{point.description}</p>
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

export default About;
