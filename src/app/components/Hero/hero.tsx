"use client";
import styles from "@/app/components/Hero/hero.module.css";

export default function Hero() {
    return (
        <div id="hero" className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Hi. I'm Oscar Jimenez
            </h1>
            <p className={styles.description}>
              I'm a Software Engineer that welcomes challenges and growth.
            </p>
          </div>
        </div>
    );
}
