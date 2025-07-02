import React from 'react';
import styles from './ProjectSection.module.css';

export default function ProjectSection() {
  return (
    <section className={styles.projectSection}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2>About the project</h2>
          <p>
           The goal of this project is to create a robot platform that can be easily repeated and assembled independently. 
           Having a ready-made platform should lower the threshold for entering the exciting world of robotics. <br />The complexity of the first steps can scare off many interested parties, 
           but if a person has a platform that can work in just a few days, it will definitely attract more interested parties.<br />
           Imagine: in a few days you assemble a robot that, like a robot vacuum cleaner, can map your house and move around it from point A to point B, avoiding obstacles.<br />
           Interesting, right?
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img src="/img/project.jpg" alt="Про проєкт" />
        </div>
      </div>
    </section>
  );
}
