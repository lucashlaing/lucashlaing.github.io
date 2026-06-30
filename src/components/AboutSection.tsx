import { motion } from "motion/react";
import { styles, animations, viewport } from "../styles";

export default function AboutSection() {
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
