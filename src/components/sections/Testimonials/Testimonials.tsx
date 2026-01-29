'use client';

import React from 'react';
import { Container, SectionTitle, Icon, AnimatedElement } from '@/components/common';
import { testimonialsContent } from '@/data/content';
import styles from './Testimonials.module.scss';

function StarRating() {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={styles.star}>
          <Icon name="star" size={16} />
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className={styles.testimonials}>
      {/* Premium Dark Background */}
      <div className={styles.background}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.pattern} />
      </div>

      <div className={styles.contentWrapper}>
        <Container>
          <SectionTitle
            badge={testimonialsContent.badge}
            title={testimonialsContent.title}
            description={testimonialsContent.description}
            light
          />

          <div className={styles.grid}>
            {testimonialsContent.testimonials.map((testimonial, index) => (
              <AnimatedElement
                key={index}
                animation="fadeInUp"
                delay={index * 150}
                className={styles.cardWrapper}
              >
                <div className={styles.card}>
                  <div className={styles.quoteIcon}>
                    <Icon name="quote" size={40} />
                  </div>

                  <StarRating />

                  <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>

                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      <span>{testimonial.author.charAt(0)}</span>
                    </div>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{testimonial.author}</span>
                      <span className={styles.authorRole}>{testimonial.role}</span>
                      <span className={styles.followers}>{testimonial.followers}</span>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}

            {/* Trust Indicators - beside Jason R. */}
            <AnimatedElement animation="fadeInUp" delay={600} className={styles.trustWrapper}>
              <div className={styles.trustBadge}>
                <h3 className={styles.trustTitle}>Trusted by Creators Worldwide</h3>
                <div className={styles.trustStats}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustValue}>4.9</span>
                    <span className={styles.trustLabel}>App Rating</span>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustValue}>50K+</span>
                    <span className={styles.trustLabel}>Happy Creators</span>
                  </div>
                  <div className={styles.trustItem}>
                    <span className={styles.trustValue}>$2M+</span>
                    <span className={styles.trustLabel}>Rewards Paid</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Testimonials;
