'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionTitle, Container } from '@/components/common';
import { appPreviewContent } from '@/data/content';
import styles from './AppPreview.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

export function AppPreview() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let swiperInstance: any = null;

    const initSwiper = async () => {
      try {
        const { Swiper } = await import('swiper');
        const { FreeMode, Autoplay } = await import('swiper/modules');

        if (swiperRef.current && !swiperInstance) {
          swiperInstance = new Swiper(swiperRef.current, {
            modules: [FreeMode, Autoplay],
            slidesPerView: 1.2,
            spaceBetween: 12,
            loop: true,
            loopAdditionalSlides: 4,
            freeMode: {
              enabled: true,
              momentum: false,
            },
            speed: 8000,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
            },
            allowTouchMove: true,
            breakpoints: {
              480: {
                slidesPerView: 1.5,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 22,
              },
              1536: {
                slidesPerView: 5.2,
                spaceBetween: 24,
              },
            },
          });
        }
      } catch (error) {
        console.error('Swiper initialization error:', error);
      }
    };

    initSwiper();

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <section id="app-preview" className={styles.appPreview}>
      <Container>
        <SectionTitle
          badge={appPreviewContent.badge}
          title={appPreviewContent.title}
          description={appPreviewContent.description}
          light
        />
      </Container>

      <div className={styles.sliderWrapper}>
        {/* Decorative elements */}
        <div className={styles.glowOrb1} />
        <div className={styles.glowOrb2} />
        <div className={styles.glowOrb3} />

        <div ref={swiperRef} className={`swiper ${styles.swiper}`}>
          <div className="swiper-wrapper">
            {appPreviewContent.images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div className={styles.phoneFrame}>
                  {/* Phone frame outer shell */}
                  <div className={styles.phoneOuter}>
                    {/* Side buttons */}
                    <div className={styles.volumeUp} />
                    <div className={styles.volumeDown} />
                    <div className={styles.powerButton} />

                    {/* Phone inner bezel */}
                    <div className={styles.phoneInner}>
                      {/* Dynamic Island / Notch */}
                      <div className={styles.dynamicIsland}>
                        <div className={styles.camera} />
                        <div className={styles.speaker} />
                      </div>

                      {/* Screen */}
                      <div className={styles.phoneScreen}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 300px, (max-width: 1024px) 320px, 340px"
                          className={styles.screenImage}
                          priority={index < 5}
                        />

                        {/* Screen reflection overlay */}
                        <div className={styles.screenReflection} />
                      </div>

                      {/* Home indicator */}
                      <div className={styles.homeIndicator} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPreview;
