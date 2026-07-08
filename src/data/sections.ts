import type { ComponentType } from "react";
import AboutPanel from "../components/panels/AboutPanel";
import SkillsPanel from "../components/panels/SkillsPanel";
import ProjectsPanel from "../components/panels/ProjectsPanel";
import ExperiencePanel from "../components/panels/ExperiencePanel";
import EducationPanel from "../components/panels/EducationPanel";
import ContactPanel from "../components/panels/ContactPanel";

export type Section = {
  id: string;
  /** Section name shown on hover and in the fallback nav. */
  label: string;
  /** Musical note this string is tuned to (shown on hover). */
  note: string;
  /** Fundamental frequency in Hz, fed to the Web Audio pluck synth. */
  frequency: number;
  /** Relative string thickness — low strings are drawn thicker. */
  gauge: number;
  /** The full-screen panel rendered when the string is plucked. */
  panel: ComponentType;
};

/**
 * The six guitar strings, ordered top → bottom as drawn (low E / thickest at
 * the top, high E / thinnest at the bottom) — standard guitar tuning.
 */
export const sections: Section[] = [
  { id: "about", label: "About", note: "E", frequency: 82.41, gauge: 5.0, panel: AboutPanel },
  { id: "skills", label: "Skills", note: "A", frequency: 110.0, gauge: 4.4, panel: SkillsPanel },
  { id: "projects", label: "Projects", note: "D", frequency: 146.83, gauge: 3.8, panel: ProjectsPanel },
  { id: "experience", label: "Experience", note: "G", frequency: 196.0, gauge: 3.2, panel: ExperiencePanel },
  { id: "education", label: "Education", note: "B", frequency: 246.94, gauge: 2.6, panel: EducationPanel },
  { id: "contact", label: "Contact", note: "e", frequency: 329.63, gauge: 2.0, panel: ContactPanel },
];
