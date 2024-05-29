"use client";
import styles from "@/app/components/Projects/projects.module.css";
import lostDungonImg from "@/app/images/lostDungeon.gif";
import nomadImg from "@/app/images/nomad.JPG";
import rootsImg from "@/app/images/rootsPage.png";
import frostmaidenImg from "@/app/images/Frostmaiden.JPG";
import toDoImg from "@/app/images/todo-list.jpg";
import sawyerImg from "@/app/images/WebsiteHeroFaceDR.png";

export default function Projects() {
    const projectList = [
        {
            title: "Lost Dungeon",
            description: "A video game using procedurally generated dungeons and enemies that the player must navigate and fight through to complete. This game was built using C# and the Unity game engine. Website was created with Webflow.",
            image: lostDungonImg.src,
            link: "https://lost-dungeons.webflow.io/"
        },
        {
            title: "Nomad Travel App",
            description: "A web app designed for travelers who wish to get their destinations weather, news, and events all in one place. Technologies used were HTML, CSS, JavaScript, jQuery, Firebase, OpenWeather API, New York Time API, and TicketMaster API.",
            image: nomadImg.src,
            link: "https://nomad9-0.github.io/Nomad/"
        },
        {
            title: "The Roots Dispensary",
            description: "Freelance website for a local dispensary to improve design, SEO, and webstore traffic.",
            image: rootsImg.src,
            link: "https://www.visittheroots.com/"
        },
        {
            title: "Rime of the Frostmaiden Secret Generator",
            description: "A web app for the Dungeons & Dragons rpg campaign Icewinddale: Rime of the Frostmaiden. This web app generates a secret at random for players backstories.",
            image: frostmaidenImg.src,
            link: "https://nomad9-0.github.io/frostmaiden-character-secrets/"
        },
        {
            title: "React To Do List",
            description: "A simple to do list created in React to practice react hooks. Users can create, edit, and delete tasks.",
            image: toDoImg.src,
            link: "https://nomad9-0.github.io/react-to-do-list/"
        },
        {
            title: "Dr Sawyer Medical Office",
            description: "IN PROGRESS, A simple website for a local doctors office.",
            image: sawyerImg.src,
            link: "#"
        }
    ];

    return (
        <div id="projects" className={styles.projectsSection}>
            <h2 className={styles.title}>My Recent Work</h2>
            <div className={styles.projectsGrid}>
                {projectList.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <img src={project.image} alt={project.title} className={styles.projectImage} />
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <a href={project.link} className={styles.projectLink}>View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
