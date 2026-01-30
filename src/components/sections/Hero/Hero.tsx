'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Button, Icon } from '@/components/common';
import { heroContent, siteConfig } from '@/data/content';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
        <div className={styles.grid} />
      </div>

      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.badge}>{heroContent.badge}</span>
            <h1 className={styles.title}>
              {heroContent.title.split(' ').map((word, i, arr) => (
                <span key={i} className={styles.word} style={{ animationDelay: `${i * 100}ms` }}>
                  {word}
                </span>
              )).reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, ' ', curr], [] as React.ReactNode[])}
            </h1>
            <p className={styles.subtitle}>{heroContent.subtitle}</p>

            <div className={styles.ctas}>
              <Button href="#apply" size="lg">
                {heroContent.ctaPrimary}
                <Icon name="arrow-right" size={20} />
              </Button>
              <Button href="#how-it-works" variant="ghost" size="lg">
                {heroContent.ctaSecondary}
              </Button>
            </div>

            <div className={styles.stats}>
              {heroContent.stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <Image
                  src="/images/visa-card/card.png"
                  alt="SocialCents Visa Card"
                  fill
                  className={styles.cardImage}
                  priority
                />
              </div>
              <div className={styles.cardGlow} />
            </div>

            <div className={styles.floatingElements}>
              <div className={styles.floatingIcon} style={{ top: '10%', left: '5%' }}>
                <Icon name="instagram" size={24} />
              </div>
              <div className={styles.floatingIcon} style={{ top: '20%', right: '10%' }}>
                <Icon name="gift" size={24} />
              </div>
              <div className={styles.floatingIcon} style={{ bottom: '30%', left: '0%' }}>
                <Icon name="star" size={24} />
              </div>
              <div className={styles.floatingIcon} style={{ bottom: '15%', right: '5%' }}>
                <Icon name="zap" size={24} />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
