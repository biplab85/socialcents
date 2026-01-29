'use client';

import React from 'react';
import Image from 'next/image';
import { SectionTitle, Icon, AnimatedElement } from '@/components/common';
import { teamContent } from '@/data/content';
import styles from './Team.module.scss';

export function Team() {
  return (
    <section id="team" className={styles.team}>
      {/* Unique Background - Mesh Gradient with Patterns */}
      <div className={styles.background}>
        <div className={styles.diagonalPattern} />
        <div className={styles.cornerGlow1} />
        <div className={styles.cornerGlow2} />
        <div className={styles.dotPattern} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <SectionTitle
            badge={teamContent.badge}
            title={teamContent.title}
            description={teamContent.description}
            light
          />
        </div>

        <div className={styles.gridContainer}>
          {teamContent.members.map((member, index) => (
            <AnimatedElement
              key={index}
              animation="fadeInUp"
              delay={index * 100}
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.social}>
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Icon name="linkedin" size={20} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={`${member.name} Twitter`}
                        >
                          <Icon name="twitter" size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
