"use client";
import styles from "@/app/components/Bio/bio.module.css";
import oscarImg from "@/app/images/Oscar.jpg";
import linkedinImg from "@/app/images/LI-In-Bug.png";
import githubImg from "@/app/images/github-mark.png";

export default function Bio() {
    return (
        <div className={styles.section}>
            <div className={styles.picture}>
                <img src={oscarImg.src} alt="Oscar Jimenez" className={styles.oscarImg} />
                <p className={styles.name}>Oscar Jimenez</p>
                <div className={styles.links}>
                    <a href="https://www.linkedin.com/in/oscar-jimenez-b2a58a55/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImg.src} alt="Oscar LinkedIn" className={styles.icon} />
                    </a>
                    <a href="https://github.com/Nomad9-0" target="_blank" rel="noopener noreferrer">
                        <img src={githubImg.src} alt="Oscar GitHub" className={styles.icon} />
                    </a>
                </div>
            </div>
            <div className={styles.about}>
                <h3>Who am I?</h3>
                <p>Hi! My name is Oscar and I'm a Software Engineer based in California. I have experience in building full-stack projects from concept to production with a strong focus on front-end technologies.</p>
                <p>I have a Business degree from California State University, Northridge and a Full-stack Web Development Certificate from UCLA Extension Program.</p>
                <p>My experience as an analyst and software developer has equipped me with a unique approach to addressing challenges.</p>
            </div>
        </div>
    );
}
