import svgPaths from "./imports/svg-u2dm5opmgk";
import imgCSES from "./images/CSES_Website.png";
import imgLingoLab from "./images/Lingo_Lab.png";
import imgGameDev from "./images/Unity_Game.png";
import imgDiscordBot from "./images/Discord_Bot.png";
import headshot from "./images/headshot.jpeg";
import { motion } from "motion/react";
import { styles, animations, viewport } from "./styles";

// Navigation Component
function Navigation() {
  return (
    <nav className={styles.nav.container}>
      <div className={styles.nav.inner}>
        <div className={styles.nav.brand}>
          Min Zin Hlaing.
        </div>
        
        <div className={styles.nav.links}>
          <a 
            href="#home" 
            className={styles.nav.link}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Home
          </a>
          <a 
            href="#skills" 
            className={styles.nav.link}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className={styles.nav.link}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className={styles.nav.link}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Experience
          </a>
          <a 
            href="#education" 
            className={styles.nav.link}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Education
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className={styles.hero.container}>

      {/* Single floating image */}
      <motion.div 
        className={styles.hero.floatingImage}
        {...animations.rotateFloat}
      >
        <div className={styles.hero.imageContainer}>
          <div 
            className={styles.hero.imageInner}
            style={{ backgroundImage: `url('${headshot}')` }}
          />
        </div>
      </motion.div>

      {/* Three skill decorative elements */}
      <motion.div 
        className={styles.hero.skillElement}
        {...animations.rotateFloat2}
      >
        <div className={styles.hero.skillBox}>
          <div className={styles.hero.skillLabel}>
            <span className={styles.hero.skillTextRotated}>Software Developer</span>
          </div>
          {/* Decorative dots */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.hero.skillDot} />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className={styles.hero.skillElement2}
        {...animations.rotateFloat3}
      >
        <div className={styles.hero.skillBox}>
          <div className={styles.hero.skillLabel2}>
            <span className={styles.hero.skillTextRotated2}>Product Manager</span>
          </div>
          {/* Decorative dots */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.hero.skillDot} />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className={styles.hero.skillElement3}
        {...animations.rotateFloat4}
      >
        <div className={styles.hero.skillBox}>
          <div className={styles.hero.skillLabel3}>
            <span className={styles.hero.skillTextRotated3}>Researcher</span>
          </div>
          {/* Decorative dots */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.hero.skillDot} />
          ))}
        </div>
      </motion.div>

      {/* Main content */}
      <div className={styles.hero.mainContent}>
        <motion.div {...animations.fadeInUp}>
          <h1 className={styles.hero.title}>
            I'm Min Zin Hlaing, a Software Developer
          </h1>
          <button 
            className={styles.hero.button}
            onClick={() => {
              document.getElementById('skills')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.hero.scrollIndicator}>
        <div className={styles.hero.scrollContainer}>
          <motion.div
            className={styles.hero.scrollDot}
            {...animations.scrollBounce}
          />
        </div>
      </div>
    </section>
  );
}

// About Section  
function AboutSection() {
  return (
    <section id="about" className={styles.about.container}>
      <div className={styles.about.inner}>
        <motion.div
          {...animations.fadeInUp}
          viewport={viewport}
          className={styles.about.textContainer}
        >
          <div className="text-[#ffffff] text-3xl md:text-5xl lg:text-6xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight">
            Computer Science student at UC San Diego with experience in software engineering, machine learning research, and full-stack development.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skills = [
    {
      icon: (
        <svg className={styles.common.svgIcon} fill="none" viewBox="0 0 64 64">
          <path d={svgPaths.p269747f0} stroke="white" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      title: "Web Development",
      description: "Built full-stack applications using React, Node.js, and Firebase. Led CSES website development that boosted user engagement by 20% and cut development time by 50%."
    },
    {
      icon: (
        <svg className={styles.common.svgIcon} fill="none" viewBox="0 0 64 64">
          <g clipPath="url(#clip0_2_145)">
            <path d={svgPaths.p377c000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p36682a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p19e74100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <clipPath id="clip0_2_145">
              <rect fill="white" height="64" width="64" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Machine Learning Research",
      description: "Developed neural network models for plasma simulation using PyTorch and TensorFlow. Reduced data requirements from 6M to 35% using Bayesian Active Learning."
    },
    {
      icon: (
        <svg className={styles.common.svgIcon} fill="none" viewBox="0 0 64 64">
          <g clipPath="url(#clip0_2_141)">
            <path d={svgPaths.p1b0d9400} stroke="white" strokeWidth="2" />
            <path d={svgPaths.p24e69900} stroke="white" strokeWidth="2" />
          </g>
          <defs>
            <clipPath id="clip0_2_141">
              <rect fill="white" height="64" width="64" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Software Engineering",
      description: "Improved client report readability by 30% and achieved 100% PDF download success rate at Revicid. Engineered robust systems with intelligent automation."
    },
    {
      icon: (
        <svg className={styles.common.svgIcon} fill="none" viewBox="0 0 64 64">
          <path d={svgPaths.p461d280} fill="white" />
        </svg>
      ),
      title: "Leadership & Management",
      description: "Generated $2,000+ through fundraising initiatives and reduced coordination time by 36% as VP Internal of CSES. Organized events with 100+ attendees."
    }
  ];

  return (
    <section id="skills" className={styles.services.container}>
      <div className={styles.services.inner}>
        <div className={styles.services.grid}>
          {/* Left column */}
          <div className={styles.services.leftColumn}>
            <motion.div
              {...animations.fadeInLeft}
              viewport={viewport}
            >
              <div className={styles.services.sectionHeader}>
                <svg className={styles.common.svgIconSmall} fill="white" viewBox="0 0 17 17">
                  <path d={svgPaths.p2608d400} />
                </svg>
                <span className={styles.services.sectionLabel}>My Expertise</span>
              </div>
              <h2 className={styles.services.sectionTitle}>
                Technical Skills & Achievements
              </h2>
            </motion.div>

            <motion.div
              {...animations.scaleIn}
              viewport={viewport}
              className={styles.services.circularElement}
            >
              <div className={styles.services.circleContainer}>
                <div className={styles.services.circleOuter}>
                  <div className={styles.services.circleInner}>
                    <svg className={styles.common.svgIconLarge} transform="rotate(45)" fill="none" viewBox="0 0 59 59">
                      <path d={svgPaths.p19811a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.05556" />
                      <path d="M8.57115 29.3873H49.7869" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.05556" />
                    </svg>
                  </div>
                </div>
                
                {/* Circular text around the circle */}
                <div className={styles.services.circleText}>
                  <svg className={styles.services.circleSvg} viewBox="0 0 185 185">
                    <defs>
                      <path id="circle" d="M 92.5,92.5 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"/>
                    </defs>
                    <text className="text-xs fill-white font-['Clash_Grotesk:Semibold',_sans-serif]">
                      <textPath href="#circle">
                        Explore My Work • Explore My Work • 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Services grid */}
          <div className={styles.services.rightColumn}>
            <div className={styles.services.servicesGrid}>
              {skills.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={viewport}
                  className={styles.services.serviceCard}
                >
                  <div className={styles.services.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3 className={styles.services.serviceTitle}>
                    {service.title}
                  </h3>
                  <p className={styles.services.serviceDescription}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// New Projects Section
function ProjectsSection() {
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

// New Experience Section
function ExperienceSection() {
  const experiences = [
    {
      period: "March - June 2025",
      company: "Revicid Inc.",
      role: "Software Engineering Intern",
      description: "Redesigned client reports and engineered robust PDF download systems, improving client satisfaction and achieving near 100% success rates.",
      achievements: [
        "Improved client report readability by 30%",
        "Achieved near 100% PDF download success rate",
        "Reduced manual verification by 40%"
      ]
    },
    {
      period: "Sept 2024 - Present",
      company: "UC San Diego",
      role: "Undergraduate Researcher",
      description: "Conducting cutting-edge research in plasma physics simulation using neural networks and Bayesian Active Learning techniques.",
      achievements: [
        "Reduced data requirements from 6M to 35% using Bayesian Active Learning",
        "Reduced model error by 57% through ablation studies",
        "Established scalable online training for MoE models"
      ]
    },
    {
      period: "Sept 2023 - Present",
      company: "Computer Science and Engineering Society",
      role: "VP Internal",
      description: "Leading organizational operations, fundraising, and event coordination for UCSD's largest CS student organization.",
      achievements: [
        "Generated $2,000+ through CS stole fundraising",
        "Reduced coordination time by 36%",
        "Organized events with 100+ attendees"
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience.container}>
      <div className={styles.experience.inner}>
        <motion.div
          {...animations.fadeInUp}
          viewport={viewport}
          className={styles.experience.header}
        >

          <h2 className={styles.experience.headerTitle}>
            Professional Experiences
          </h2>
        </motion.div>

        <div className={styles.experience.timeline}>
          {/* Timeline line */}
          <div className={styles.experience.timelineLine}></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={viewport}
              className={`${styles.experience.experienceItem} ${
                index % 2 === 0 ? styles.experience.experienceItemEven : styles.experience.experienceItemOdd
              }`}
            >
              {/* Timeline dot */}
              <div className={styles.experience.timelineDot}></div>

              {/* Content */}
              <div className={`${styles.experience.experienceContent} ${
                index % 2 === 0 ? styles.experience.experienceContentEven : styles.experience.experienceContentOdd
              }`}>
                <div className={styles.experience.experienceCard}>
                  <div className={styles.experience.experiencePeriod}>
                    {exp.period}
                  </div>
                  
                  <h3 className={styles.experience.experienceRole}>
                    {exp.role}
                  </h3>
                  
                  <div className={styles.experience.experienceCompany}>
                    {exp.company}
                  </div>
                  
                  <p className={styles.experience.experienceDescription}>
                    {exp.description}
                  </p>
                  
                  <div className={styles.experience.achievements}>
                    <div className={styles.experience.achievementsTitle}>
                      Key Achievements:
                    </div>
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className={styles.experience.achievementItem}>
                        <div className={styles.experience.achievementDot}></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for timeline */}
              <div className={styles.experience.spacer}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Education Section
function EducationSection() {
  return (
    <section id="education" className="py-20 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...animations.fadeInUp}
          viewport={viewport}
          className="text-center mb-16"
        >
          <h2 className="text-[#ffffff] text-4xl md:text-5xl lg:text-6xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight max-w-4xl mx-auto">
            Education
          </h2>
        </motion.div>

        <motion.div
          {...animations.fadeInUp}
          viewport={viewport}
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
        >
          <div className="flex flex-col md:flex-row items-start justify-between mb-6">
            <div>
              <h3 className="text-[#ffffff] text-2xl font-['Clash_Grotesk:Medium',_sans-serif] mb-2">
                University of California, San Diego
              </h3>
              <div className="text-[#ebff57] text-lg font-['Clash_Grotesk:Regular',_sans-serif] mb-2">
                Bachelor of Science in Computer Science
              </div>
              <div className="text-[#ffffff]/80 text-base">
                Expected Graduation: June 2027
              </div>
            </div>
            <div className="text-right">
              <div className="text-[#ebff57] text-xl font-['Clash_Grotesk:Medium',_sans-serif]">
                GPA: 4.0/4.0
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#ffffff] text-lg font-['Clash_Grotesk:Medium',_sans-serif] mb-4">
                Relevant Coursework
              </h4>
              <div className="space-y-2">
                {[
                  "Advanced Data Structures",
                  "Machine Learning",
                  "Analysis of Algorithms",
                  "Software Engineering",
                  "Database Systems",
                  "Computer Architecture"
                ].map((course, index) => (
                  <div key={index} className="flex items-center gap-2 text-[#ffffff]/80 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#ebff57] rounded-full"></div>
                    {course}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[#ffffff] text-lg font-['Clash_Grotesk:Medium',_sans-serif] mb-4">
                Technical Skills
              </h4>
              <div className="space-y-2">
                {[
                  "JavaScript, TypeScript, Python, C++",
                  "React, Node.js, Firebase",
                  "PyTorch, TensorFlow, NumPy",
                  "Docker, Kubernetes, Git",
                  "Figma, Agile Development"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-[#ffffff]/80 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#ebff57] rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Simple Footer Section
function FooterSection() {
  return (
    <footer className={styles.footer.container}>
      <div className={styles.footer.inner}>
        {/* Main footer content */}
        <div className={styles.footer.mainContent}>
          {/* Brand section */}
          <div className={styles.footer.brandSection}>
            <div className={styles.footer.brandTitle}>
              Min Zin Hlaing.
            </div>
            <p className={styles.footer.brandDescription}>
              Computer Science student at UC San Diego with experience in software engineering, machine learning research, and full-stack development.
            </p>
          </div>

          {/* Contact & Social */}
          <div className={styles.footer.contactSection}>
            <h4 className={styles.footer.contactTitle}>
              Let's Connect
            </h4>
            <div className={styles.footer.contactLinks}>
              <a href="mailto:mhlaing@ucsd.edu" className={styles.footer.contactLink}>
                mhlaing@ucsd.edu
              </a>
              <a href="tel:+18582050942" className={styles.footer.contactLink}>
                (858) 205-0942
              </a>
            </div>
            
            {/* Social links */}
            <div className={styles.footer.socialLinks}>
              <a href="https://linkedin.com/in/min-zin-hlaing" className={styles.footer.socialLink}>
                <svg className={styles.footer.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/lucashlaing" className={styles.footer.socialLink}>
                <svg className={styles.footer.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className={styles.common.appContainer}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <FooterSection />
    </div>
  );
}