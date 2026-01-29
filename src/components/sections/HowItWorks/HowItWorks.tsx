'use client';

import React from 'react';
import { Container, SectionTitle, Icon, AnimatedElement } from '@/components/common';
import { howItWorksContent } from '@/data/content';
import styles from './HowItWorks.module.scss';

function AnimatedBackground() {
  return (
    <div className={styles.animatedBackground}>
      {/* Gradient Orbs */}
      <div className={styles.bgGradientOrb} />
      <div className={styles.bgGradientOrb} />
      <div className={styles.bgGradientOrb} />

      {/* Grid Pattern */}
      <div className={styles.bgGrid} />

      {/* Floating Particles */}
      <div className={styles.bgFloatingShapes}>
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
      </div>
    </div>
  );
}

function ArrowConnector({ index }: { index: number }) {
  const gradientId = `arrowGradient-${index}`;

  return (
    <div className={styles.arrowConnector}>
      <svg
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrowSvg}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6C5CE7" />
            <stop offset="50%" stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#6C5CE7" />
          </linearGradient>
        </defs>

        {/* Glow effect */}
        <path
          d="M0 30 C20 30, 25 20, 40 20 C55 20, 60 30, 80 30"
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className={styles.arrowGlow}
        />

        {/* Main flowing line */}
        <path
          d="M0 30 C20 30, 25 20, 40 20 C55 20, 60 30, 80 30"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className={styles.arrowPath}
        />

        {/* Arrow head */}
        <path
          d="M68 24 L78 30 L68 36"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={styles.arrowHead}
        />

        {/* Pulse dot at end */}
        <circle
          cx="78"
          cy="30"
          r="4"
          fill={`url(#${gradientId})`}
          className={styles.arrowPulse}
        />
      </svg>
    </div>
  );
}

function MobileArrow() {
  return (
    <div className={styles.mobileArrow}>
      <svg
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.mobileArrowSvg}
      >
        <defs>
          <linearGradient id="mobileArrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6C5CE7" />
            <stop offset="100%" stopColor="#00D9FF" />
          </linearGradient>
        </defs>

        {/* Vertical line */}
        <path
          d="M20 0 L20 40"
          stroke="url(#mobileArrowGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          className={styles.mobileArrowPath}
        />

        {/* Arrow head */}
        <path
          d="M12 34 L20 44 L28 34"
          stroke="url(#mobileArrowGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <AnimatedBackground />

      <div className={styles.sectionDivider + ' ' + styles.top} />
      <div className={styles.sectionDivider + ' ' + styles.bottom} />

      <div className={styles.contentWrapper}>
        <Container>
          <SectionTitle
            badge={howItWorksContent.badge}
            title={howItWorksContent.title}
            description={howItWorksContent.description}
            light
          />

          <div className={styles.stepsContainer}>
            <div className={styles.steps}>
              {howItWorksContent.steps.map((step, index) => (
                <React.Fragment key={index}>
                  <AnimatedElement
                    animation="fadeInUp"
                    delay={index * 200}
                    className={styles.stepWrapper}
                  >
                    <div className={styles.step}>
                      <div className={styles.stepNumber}>{step.number}</div>
                      <div className={styles.stepIconWrapper}>
                        <Icon name={step.icon} size={36} />
                      </div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepSubtitle}>{step.subtitle}</p>
                      <p className={styles.stepDescription}>{step.description}</p>
                    </div>
                  </AnimatedElement>
                  {index < howItWorksContent.steps.length - 1 && (
                    <>
                      <ArrowConnector index={index} />
                      <MobileArrow />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HowItWorks;
