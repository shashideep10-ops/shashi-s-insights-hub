import { motion } from "framer-motion";
import { Download } from "lucide-react";

const ResumeSection = () => (
  <section id="resume" className="section-padding bg-surface">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-6"
      >
        Resume
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-8"
      >
        Download my resume to learn more about my experience and skills.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        href="/files/resume.pdf"
        download
        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-lg"
      >
        <Download className="w-5 h-5" /> Download Resume
      </motion.a>
    </div>
  </section>
);

export default ResumeSection;
