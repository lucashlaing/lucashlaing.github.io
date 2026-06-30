import svgPaths from "../imports/svg-u2dm5opmgk";
import { motion } from "motion/react";
import { styles, animations, viewport } from "../styles";

const skills = [
  {
    icon: (
      <svg className={styles.common.svgIcon} fill="none" viewBox="0 0 64 64">
        <path d={svgPaths.p269747f0} stroke="white" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    title: "Software Engineering",
    description: "Built full-stack applications using React, Node.js, and Firebase. Coded a AI-powered research assistant that disects research papers and provides context-aware definitions."
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
    title: "Product Management",
    description: "Led product strategy and feature development for Computer Science Engineering Society website. Boosted user engagement and streamlined development processes through agile project management."
  },
  {
    icon: (
      <svg className={styles.common.svgIcon} fill="none" viewBox="0 0 64 64">
        <path d={svgPaths.p461d280} fill="white" />
      </svg>
    ),
    title: "Leadership",
    description: "Generated $2,000+ through fundraising initiatives and reduced coordination time by 36% as VP Internal of CSES. Organized events with 100+ attendees."
  }
];

export default function SkillsSection() {
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
