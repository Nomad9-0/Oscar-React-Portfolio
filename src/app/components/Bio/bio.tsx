"use client";
import Image from "next/image";
import styles from "@/app/components/Bio/bio.module.css";

export default function Bio() {
    return (
        <div className={styles.section}>
            <div className={styles.picture}>
                <Image src="/Oscar.jpg" alt="Oscar Jimenez" className={styles.oscarImg} width={200} height={200} />
                <p className={styles.name}>Oscar Jimenez</p>
                <div className={styles.links}>
                    <a href="https://www.linkedin.com/in/oscar-jimenez-b2a58a55/" target="_blank" rel="noopener noreferrer">
                        <Image src="/LI-In-Bug.png" alt="Oscar LinkedIn" className={styles.icon} width={100} height={100}/>
                    </a>
                    <a href="https://github.com/Nomad9-0" target="_blank" rel="noopener noreferrer">
                        <Image src="/github-mark.png" alt="Oscar GitHub" className={styles.icon} width={100} height={100}/>
                    </a>
                </div>
            </div>
            <div className={styles.about}>
                <h3>Who am I?</h3>
                <p>Hi! My name is Oscar and Im a Software Engineer based in California. I have experience in building full-stack projects from concept to production with a strong focus on front-end technologies.</p>
                <p>I have a Business degree from California State University, Northridge and a Full-stack Web Development Certificate from UCLA Extension Program.</p>
                <p>My experience as an analyst and software developer has equipped me with a unique approach to addressing challenges.</p>
            </div>
        </div>
    );
}
