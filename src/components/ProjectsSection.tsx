import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import hrDashboard from "@/assets/hr_dashboard_preview.jpg";
import churnAnalysis from "@/assets/churn_analysis_preview.jpg";
import supermarket1 from "@/assets/supermarket1.png";
import pizzaSales from "@/assets/pizza_sales_preview.jpg";

const featuredProjects = [
  {
    title: "HR Analytics Dashboard",
    problem: "Organizations need to understand employee attrition patterns to improve retention strategies.",
    analysis: "Created an HR analytics dashboard to examine attrition by salary, job role, education, age group, and job satisfaction.",
    insights: [
      "Overall attrition rate identified across departments",
      "Attrition trends across different job roles and salary bands",
      "Employee demographics affecting attrition patterns",
    ],
    tools: ["Power BI"],
    image: hrDashboard,
    powerBILink: "https://app.powerbi.com/groups/me/reports/efd90892-f3cf-49bc-ae62-107c2fd2aa78/a34efe5069548ed44848?experience=power-bi",
  },
  {
    title: "Customer Churn Analysis",
    problem: "Telecom companies need to identify why customers leave their services.",
    analysis: "Performed exploratory data analysis using Python to examine churn patterns based on customer tenure, contract type, and payment methods.",
    insights: [
      "Month-to-month contracts show the highest churn rate",
      "Long-term contracts significantly reduce churn",
      "Payment method patterns influence churn risk",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: churnAnalysis,
    pdfLink: "/files/code_graphs_python_callchurn.pdf",
    colabLink: "https://colab.research.google.com/drive/1d5Oy2DXhd2GFP2E9sqttTCpCKnfEkWQm?usp=sharing",
  },
  {
    title: "Super Market Sales Dashboard",
    problem: "Retail businesses need insights into sales performance and customer behavior.",
    analysis: "Built an interactive dashboard analyzing sales, profit, product categories, and regional trends across multiple years.",
    insights: [
      "Monthly revenue trends and seasonal patterns",
      "Top performing product categories identified",
      "Customer segment performance analysis",
    ],
    tools: ["Power BI", "Excel"],
    image: supermarket1,
    videoLink: "/files/hr_analytics_video.mp4",
    embedVideo: true,
    powerBILink: "https://app.powerbi.com/groups/me/reports/4f7d0f58-4800-4238-beb3-52673e4138aa/b432522a9bf389c5cc2b?experience=power-bi",
  },
];

const additionalProjects = [
  {
    title: "Pizza Sales SQL Analysis",
    problem: "Understanding sales performance and product demand for a pizza business.",
    analysis: "Used SQL queries to analyze pizza sales data including revenue, order frequency, and product popularity.",
    insights: [
      "Most ordered pizza types identified",
      "Revenue contribution by product category",
      "Order patterns throughout the day",
    ],
    tools: ["SQL", "MySQL"],
    image: pizzaSales,
    pdfLink: "/files/SQL_pizza_project.pdf",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-12 max-w-xl"
      >
        Real-world data projects showcasing analytical thinking, insights, and technical execution.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.title} {...p} featured />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
      >
        More Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-12 max-w-xl"
      >
        Additional projects exploring different tools and datasets.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
