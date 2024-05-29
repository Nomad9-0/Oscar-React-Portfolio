import Image from "next/image";
import styles from "../../styles.module.css";
import Head from "next/head";
import Header from "@/app/components/Header/index";
import Hero from "@/app/components/Hero/hero";
import Bio from "@/app/components/Bio/bio";
import Projects from "@/app/components/Projects/projects";
import Skills from "@/app/components/Skills/skills";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oscar Jimenez | Software Engineer</title>
        <meta name="description" content="Profile page of Oscar Jimenez, a software engineer with experience in full-stack development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Bio />
      <Projects />
      <Skills />

      <footer className={styles.footer}>
        <p>© 2024 Oscar Jimenez</p>
      </footer>
    </div>
  );
}
