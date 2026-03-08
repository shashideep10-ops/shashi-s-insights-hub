import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-5 text-muted-foreground leading-relaxed text-lg"
      >
        <p>
          Hi, I'm <span className="text-foreground font-semibold">Shashi Deep</span>, a technology enthusiast based in Hyderabad, India.
        </p>
        <p>
          I enjoy working with data to uncover patterns, generate insights, and solve real-world problems. My projects focus on data analysis, dashboard development, and business insights using tools like Python, SQL, Power BI, and Excel.
        </p>
        <p>
          I also explore cloud technologies and programming to expand my technical skills. Through hands-on projects, I aim to transform raw data into clear and meaningful information that supports better decision-making.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
