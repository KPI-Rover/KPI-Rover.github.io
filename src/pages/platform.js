import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function PlatformPage() {
  return (
    <Layout title="Platform" description="System Overview of KPI Rover">
      <section id="diagram" className={clsx(styles.platformSection)}>
        <div className={styles.centeredContent}>
          <h1>System Overview</h1>
          <h2>Functional Scheme</h2>
          <img src="/img/functional_diagram.png" alt="Functional Scheme" className={styles.centeredImage} />
        </div>
      </section>

      <section id="components" className={clsx(styles.componentsSection)}>
        <h2 className={styles.sectionTitle}>Main Components</h2>
        <div className={styles.componentsContent}>
          <div className={styles.textBlock}>
            <h3>Motors</h3>
            <p>
              The robot chassis is equipped with four DC motors, each connected to an encoder for precise wheel rotation measurement. 
              The motor controller is built on STM32 and communicates with the main system via a serial interface, allowing accurate speed control and movement coordination.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img src="/img/motor.png" alt="Motors" className={styles.componentImage} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
