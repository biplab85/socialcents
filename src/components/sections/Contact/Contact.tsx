'use client';

import React, { useState } from 'react';
import { Container, SectionTitle, Button, Icon } from '@/components/common';
import { contactContent, siteConfig } from '@/data/content';
import styles from './Contact.module.scss';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <SectionTitle
          badge={contactContent.badge}
          title={contactContent.title}
          description={contactContent.description}
        />

        <div className={styles.grid}>
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={contactContent.form.namePlaceholder}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={contactContent.form.emailPlaceholder}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={contactContent.form.messagePlaceholder}
                  required
                  rows={5}
                  className={styles.textarea}
                />
              </div>
              <Button type="submit" fullWidth>
                {contactContent.form.submitButton}
                <Icon name="arrow-right" size={18} />
              </Button>
            </form>
          </div>

          <div className={styles.infoWrapper}>
            <div className={styles.infoCards}>
              {contactContent.info.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={styles.infoCard}
                >
                  <div className={styles.infoIcon}>
                    <Icon name={item.icon} size={24} />
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.social}>
              <h4 className={styles.socialTitle}>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Icon name="instagram" size={22} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Icon name="twitter" size={22} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Icon name="facebook" size={22} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" size={22} />
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <Icon name="tiktok" size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
