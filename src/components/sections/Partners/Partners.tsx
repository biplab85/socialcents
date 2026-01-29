'use client';

import React from 'react';
import { Container, SectionTitle, AnimatedElement, Icon } from '@/components/common';
import { partnersContent } from '@/data/content';
import styles from './Partners.module.scss';

export function Partners() {
  // Double the partners array for seamless infinite scroll
  const partnersRow1 = [...partnersContent.partners, ...partnersContent.partners];
  const partnersRow2 = [...partnersContent.partners.slice().reverse(), ...partnersContent.partners.slice().reverse()];

  return (
    <section id="partners" className={styles.partners}>
      <Container>
        <div className={styles.content}>
          <SectionTitle
            badge={partnersContent.badge}
            title={partnersContent.title}
            description={partnersContent.description}
            light
          />
        </div>
      </Container>

      {/* Infinite Marquee - Row 1 */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {partnersRow1.map((partner, index) => (
            <div key={`row1-${index}`} className={styles.partnerCard}>
              <div className={styles.partnerGlow} />
              <span className={styles.partnerName}>{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Infinite Marquee - Row 2 (Reverse direction) */}
        <div className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}>
          {partnersRow2.map((partner, index) => (
            <div key={`row2-${index}`} className={styles.partnerCard}>
              <div className={styles.partnerGlow} />
              <span className={styles.partnerName}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Container>
        {/* Stats */}
        <AnimatedElement animation="fadeInUp" delay={200}>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statValue}>1000+</span>
              <span className={styles.statLabel}>Brand Partners</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>50M+</span>
              <span className={styles.statLabel}>Products Available</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>$10M+</span>
              <span className={styles.statLabel}>Rewards Paid</span>
            </div>
          </div>
        </AnimatedElement>

        {/* View All Button */}
        <AnimatedElement animation="fadeInUp" delay={300}>
          <div className={styles.viewAll}>
            <button className={styles.viewAllBtn}>
              <span>Explore All Partners</span>
              <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </AnimatedElement>
      </Container>
    </section>
  );
}

export default Partners;
