'use client';

import React, { useState } from 'react';
import { Container, SectionTitle, Icon, AnimatedElement } from '@/components/common';
import { faqContent } from '@/data/content';
import styles from './FAQ.module.scss';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.backgroundElements}>
        <div className={styles.glowOrb1} />
        <div className={styles.glowOrb2} />
      </div>

      <Container>
        <SectionTitle
          badge={faqContent.badge}
          title={faqContent.title}
        />

        <div className={styles.content}>
          <div className={styles.accordion}>
            {faqContent.questions.map((item, index) => (
              <AnimatedElement
                key={index}
                animation="fadeInUp"
                delay={index * 80}
              >
                <div
                  className={`${styles.accordionItem} ${openIndex === index ? styles.open : ''}`}
                >
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleItem(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className={styles.questionNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={styles.accordionIcon}>
                      <Icon name="chevron-down" size={20} />
                    </span>
                  </button>
                  <div className={styles.accordionBody}>
                    <div className={styles.answerContent}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement animation="fadeInUp" delay={500}>
            <div className={styles.stillQuestions}>
              <div className={styles.stillQuestionsContent}>
                <h3>Still have questions?</h3>
                <p>Can't find the answer you're looking for? Our team is here to help.</p>
              </div>
              <a href="#contact" className={styles.contactBtn}>
                Contact Support
                <Icon name="arrow-right" size={18} />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
