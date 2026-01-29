'use client';

import React from 'react';
import { Container, SectionTitle, AnimatedElement, Icon } from '@/components/common';
import { partnersContent } from '@/data/content';
import styles from './Partners.module.scss';

export function Partners() {
  return (
    <section id="partners" className={styles.partners}>
      <Container>
        <SectionTitle
          badge={partnersContent.badge}
          title={partnersContent.title}
          description={partnersContent.description}
          light
        />

        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {partnersContent.partners.map((partner, index) => (
              <AnimatedElement
                key={index}
                animation="fadeInUp"
                delay={index * 50}
              >
                <div className={styles.partnerCard}>
                  <div className={styles.partnerContent}>
                    <span className={styles.partnerName}>{partner.name}</span>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement animation="fadeInUp" delay={500}>
            <div className={styles.viewAll}>
              <button className={styles.viewAllBtn}>
                View All 1000+ Partners
                <Icon name="arrow-right" size={16} />
              </button>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  );
}

export default Partners;
