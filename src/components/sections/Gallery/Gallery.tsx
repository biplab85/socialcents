'use client';

import React, { useEffect, useRef } from 'react';
import { Container, SectionTitle } from '@/components/common';
import { galleryContent } from '@/data/content';
import styles from './Gallery.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Gallery() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initSwiper = async () => {
      const { Swiper } = await import('swiper');
      const { Navigation, Pagination, Autoplay } = await import('swiper/modules');

      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 24,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          },
        });
      }
    };

    initSwiper();
  }, []);

  return (
    <section className={styles.gallery}>
      <Container>
        <SectionTitle
          badge={galleryContent.badge}
          title={galleryContent.title}
          description={galleryContent.description}
          light
        />

        <div ref={swiperRef} className={`swiper ${styles.swiper}`}>
          <div className="swiper-wrapper">
            {galleryContent.images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div className={styles.slide}>
                  <div className={styles.phoneFrame}>
                    <div className={styles.phoneNotch} />
                    <div className={styles.phoneScreen}>
                      <div className={styles.placeholder}>
                        <span>{image.alt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className={`swiper-button-prev ${styles.navButton}`}></div>
          <div className={`swiper-button-next ${styles.navButton}`}></div>
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
