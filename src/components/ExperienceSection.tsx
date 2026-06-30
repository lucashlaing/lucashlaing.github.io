import { motion } from "motion/react";
import { styles, animations, viewport } from "../styles";

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

export default function ExperienceSection() {
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
