import React from 'react';
import styles from './VacanciesSection.module.css';

export default function VacanciesSection() {
  return (
    <section className={styles.vacanciesSection}>
      <div className="container">
        <h2 className={styles.title}>Vacancies</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/img/vacancy1.jpg" alt="Vacancy 1" className={styles.cardImage} />
              <div className={styles.overlayTitle}>Frontend</div>
            </div>
            <a
              href="https://github.com/orgs/KPI-Rover/discussions/11#discussion-733622"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.applyButton}
            >
              Apply
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/img/vacancy2.jpg" alt="Vacancy 2" className={styles.cardImage} />
              <div className={styles.overlayTitle}>UI/UX Designer</div>
            </div>
            <a
              href="https://github.com/orgs/KPI-Rover/discussions/11#discussion-733622"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.applyButton}
            >
              Apply
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/img/vacancy3.jpg" alt="Vacancy 3" className={styles.cardImage} />
              <div className={styles.overlayTitle}>Project Manager</div>
            </div>
            <a
              href="https://github.com/orgs/KPI-Rover/discussions/11#discussion-733622"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.applyButton}
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
