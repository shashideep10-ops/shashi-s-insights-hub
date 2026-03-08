import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python"],
  },
  {
    title: "Data Analysis",
    skills: ["SQL", "Excel", "Power BI"],
  },
  {
    title: "Python Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Cloud",
    skills: ["AWS"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-surface">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="px-3 py-1.5 text-sm font-medium rounded-md bg-highlight text-highlight-foreground">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
