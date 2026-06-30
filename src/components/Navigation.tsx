import { styles } from "../styles";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

export default function Navigation() {
  return (
    <nav className={styles.nav.container}>
      <div className={styles.nav.inner}>
        <div className={styles.nav.brand}>
          Min Zin Hlaing.
        </div>

        <div className={styles.nav.links}>
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={styles.nav.link}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
