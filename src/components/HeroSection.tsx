import { motion } from "motion/react";
import { styles, animations } from "../styles";
import headshot from "../images/headshot.jpeg";

export default function HeroSection() {
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
