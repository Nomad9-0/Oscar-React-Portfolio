"use client";
import styles from "@/app/components/Skills/skills.module.css";

export default function Skills() {
    return (
        <div id="skills" className={styles.skillsSection}>
            <div className={styles.skill}>
                <h3>Designer Tools</h3>
                <ul>
                    <li>Figma</li>
                    <li>Webflow</li>
                    <li>Shopify</li>
                    <li>GitHub</li>
                    <li>Jira</li>
                    <li>SEO</li>
                </ul>
            </div>
            <div className={styles.skill}>
                <h3>Frontend Development</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>jQuery</li>
                </ul>
            </div>
            <div className={styles.skill}>
                <h3>Backend Development</h3>
                <ul>
                    <li>C#</li>
                    <li>NodeJS</li>
                    <li>SQL</li>
                    <li>API</li>
                </ul>
            </div>
        </div>
    );
}
