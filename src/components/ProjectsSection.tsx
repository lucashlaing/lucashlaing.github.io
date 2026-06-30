import imgCSES from "../images/CSES_Website.png";
import imgLingoLab from "../images/Lingo_Lab.png";
import imgGameDev from "../images/Unity_Game.png";
import imgDiscordBot from "../images/Discord_Bot.png";
import { motion } from "motion/react";
import { styles, animations, viewport } from "../styles";

const projects = [
  {
    title: "LingoLab",
    category: "Full Stack Development",
    description: "Interactive front-end application that enhances paper readability with real-time word classification and definitions. Features collaborative correction system and automated PDF processing pipeline.",
    tech: ["React", "Python", "OpenAI API", "Firebase"],
    image: imgLingoLab,
    link: "https://github.com/SithuSoe04/lingolab",
    linkText: "View on GitHub"
  },
  {
    title: "CSES Website Development",
    category: "Web Development & Leadership",
    description: "Led product strategy and feature development for Computer Science Engineering Society website. Boosted user engagement and streamlined development processes through agile project management.",
    tech: ["MERN Stack", "Figma", "Agile", "Notion"],
    image: imgCSES,
    link: "https://csesucsd.com",
    linkText: "View Website"
  },
  {
    title: "Game Development Projects",
    category: "Unity Game Development",
    description: "Recreated Flappy Bird with intuitive tap-based controls and obstacle generation, plus implemented Tetris with classic block manipulation mechanics. Both games feature progressively increasing difficulty levels.",
    tech: ["Unity", "C#", "Game Physics", "Game Design"],
    image: imgGameDev,
    link: "https://drive.google.com/drive/folders/15uw_dLvyTIW19QHZEKHXAsUeN1cVz8py?dmr=1&ec=wgc-drive-globalnav-goto",
    linkText: "Download Game"
  },
  {
    title: "Discord Bot",
    category: "Bot Development",
    description: "Developed Discord bot with message repetition, deletion functionality, and music playback system. Enhanced user engagement and community entertainment within Discord servers.",
    tech: ["Discord.js", "Node.js", "JavaScript", "API Integration"],
    image: imgDiscordBot,
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects.container}>
      <div className={styles.projects.inner}>
        <motion.div
          {...animations.fadeInUp}
          viewport={viewport}
          className={styles.projects.header}
        >
          <h2 className={styles.projects.headerTitle}>
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={viewport}
              className={styles.projects.projectCard}
            >
              <div className={styles.projects.projectContainer}>
                {/* Project Image */}
                <div className={styles.projects.projectImage}>
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                </div>

                {/* Project Info */}
                <div className={styles.projects.projectInfo}>
                  <div className={styles.projects.projectMeta}>
                    <span className={styles.projects.projectCategory}>
                      {project.category}
                    </span>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projects.projectBadge}
                      >
                        {project.linkText}
                      </a>
                    ) : (
                      <div className={styles.projects.projectBadge}>
                        Project
                      </div>
                    )}
                  </div>

                  <h3 className={styles.projects.projectTitle}>
                    {project.title}
                  </h3>

                  <p className={styles.projects.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.projects.projectTech}>
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={styles.projects.projectTechItem}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
