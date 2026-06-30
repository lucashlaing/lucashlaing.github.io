import { motion } from "motion/react";
import { animations, viewport } from "../styles";

const coursework = [
  "Advanced Data Structures",
  "Machine Learning",
  "Analysis of Algorithms",
  "Software Engineering",
  "Database Systems",
  "Computer Architecture"
];

const technicalSkills = [
  "JavaScript, TypeScript, Python, C++",
  "React, Node.js, Firebase",
  "PyTorch, TensorFlow, NumPy",
  "Docker, Kubernetes, Git",
  "Figma, Agile Development"
];

export default function EducationSection() {
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
                {coursework.map((course, index) => (
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
                {technicalSkills.map((skill, index) => (
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
