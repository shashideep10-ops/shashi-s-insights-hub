import { motion } from "framer-motion";
import { Download, Eye, X } from "lucide-react";
import { useState } from "react";

const ResumeSection = () => {
  const [showViewer, setShowViewer] = useState(false);
  const resumeUrl = "/files/resume.pdf";

  return (
    <>
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
            Download my resume or view it directly to learn more about my experience and skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setShowViewer(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-lg"
            >
              <Eye className="w-5 h-5" /> View Resume
            </button>
            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors text-lg"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {showViewer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setShowViewer(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Resume</h3>
              <div className="flex items-center gap-3">
                <a
                  href="/files/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" /> Download
                </a>
                <button onClick={() => setShowViewer(false)} className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 p-2 space-y-3">
              <object
                data={`${resumeUrl}#view=FitH`}
                type="application/pdf"
                className="w-full h-full min-h-[65vh] rounded-lg bg-muted"
                aria-label="Resume PDF preview"
              >
                <div className="h-full min-h-[65vh] rounded-lg border border-border bg-muted/40 flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Preview is blocked by your browser. Open the resume in a new tab.
                  </p>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                  >
                    <Eye className="w-4 h-4" /> Open Resume
                  </a>
                </div>
              </object>
              <div className="flex items-center justify-end">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Open in new tab if preview doesn't load
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ResumeSection;
