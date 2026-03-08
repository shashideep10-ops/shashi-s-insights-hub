import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, FileText, Play, X, BarChart3, BookOpen } from "lucide-react";

interface ProjectCardProps {
  title: string;
  problem: string;
  analysis: string;
  insights: string[];
  tools: string[];
  image: string;
  pdfLink?: string;
  videoLink?: string;
  embedVideo?: boolean;
  powerBILink?: string;
  colabLink?: string;
  featured?: boolean;
}

const ProjectCard = ({ title, problem, analysis, insights, tools, image, pdfLink, videoLink, embedVideo, powerBILink, colabLink, featured }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`glass-card overflow-hidden group cursor-pointer`}
        onClick={() => setShowModal(true)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <span className="text-sm font-medium text-foreground">Click to view details</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{problem}</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-highlight text-highlight-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={image} alt={title} className="w-full aspect-video object-cover rounded-t-xl" />
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>

              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Problem</h4>
                <p className="text-muted-foreground">{problem}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Analysis</h4>
                <p className="text-muted-foreground">{analysis}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Key Insights</h4>
                <ul className="space-y-2">
                  {insights.map((ins, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {ins}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-sm font-medium rounded-md bg-highlight text-highlight-foreground">{t}</span>
                  ))}
                </div>
              </div>

              {embedVideo && videoLink && (
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Demo Video</h4>
                  <video
                    src={videoLink}
                    controls
                    className="w-full rounded-lg border border-border"
                    preload="metadata"
                  />
                </div>
              )}

              {(pdfLink || powerBILink || colabLink || (videoLink && !embedVideo)) && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {powerBILink && (
                    <a href={powerBILink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                      <BarChart3 className="w-4 h-4" /> View Power BI Dashboard
                    </a>
                  )}
                  {colabLink && (
                    <a href={colabLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                      <BookOpen className="w-4 h-4" /> View Google Colab Notebook
                    </a>
                  )}
                  {pdfLink && (
                    <a href={pdfLink} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-muted transition-colors">
                      <FileText className="w-4 h-4" /> View Report
                    </a>
                  )}
                  {videoLink && !embedVideo && (
                    <a href={videoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-muted transition-colors">
                      <Play className="w-4 h-4" /> Watch Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
