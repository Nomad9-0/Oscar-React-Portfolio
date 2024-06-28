"use client";
import Image from "next/image";
import styles from "@/app/components/Projects/projects.module.css";

export default function Projects() {
    const projectList = [
        {
            title: "Lost Dungeon",
            description: "A video game using procedurally generated dungeons and enemies that the player must navigate and fight through to complete. This game was built using C# and the Unity game engine. Website was created with Webflow.",
            image: "/lostDungeon.gif",
            link: "https://lost-dungeons.webflow.io/"
        },
        {
            title: "Nomad Travel App",
            description: "A web app designed for travelers who wish to get their destinations weather, news, and events all in one place. Technologies used were HTML, CSS, JavaScript, jQuery, Firebase, OpenWeather API, New York Time API, and TicketMaster API.",
            image: "/nomad.jpg",
            link: "https://nomad9-0.github.io/Nomad/"
        },
        {
            title: "The Roots Dispensary",
            description: "Freelance website for a local dispensary to improve design, SEO, and webstore traffic.",
            image: "/rootsPage.png",
            link: "https://www.visittheroots.com/"
        },
        {
            title: "Rime of the Frostmaiden Secret Generator",
            description: "A web app for the Dungeons & Dragons rpg campaign Icewinddale: Rime of the Frostmaiden. This web app generates a secret at random for players backstories.",
            image: "/Frostmaiden.jpg",
            link: "https://nomad9-0.github.io/frostmaiden-character-secrets/"
        },
        {
            title: "React To Do List",
            description: "A simple to do list created in React to practice react hooks. Users can create, edit, and delete tasks.",
            image: "/todo-list.jpg",
            link: "https://nomad9-0.github.io/react-to-do-list/"
        },
        {
            title: "Allegiant Jiu-Jitsu",
            description: "A website for my local Jiu-Jitsu gym to help them increase their online presence and recruit more members.",
            image: "/jiujitsu.PNG",
            link: "https://www.allegiantjiujitsu.com/"
        }
    ];

    return (
        <div id="projects" className={styles.projectsSection}>
            <h2 className={styles.title}>My Recent Work</h2>
            <div className={styles.projectsGrid}>
                {projectList.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            className={styles.projectImage}
                            width={500}
                            height={500}
                        />
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <a href={project.link} className={styles.projectLink}>View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
