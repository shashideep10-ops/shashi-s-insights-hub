import { motion } from "framer-motion";
import { Download, Eye, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import resumePdf from "@/assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const ResumeSection = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(860);
  const resumeUrl = resumePdf;

  useEffect(() => {
    const updatePageWidth = () => {
      const viewportPadding = window.innerWidth < 640 ? 56 : 180;
      setPageWidth(Math.max(280, Math.min(860, window.innerWidth - viewportPadding)));
    };

    updatePageWidth();
    window.addEventListener("resize", updatePageWidth);
    return () => window.removeEventListener("resize", updatePageWidth);
  }, []);

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
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors text-lg"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {showViewer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setShowViewer(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Resume</h3>
              <div className="flex items-center gap-3">
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" /> Download
                </a>
                <button
                  onClick={() => setShowViewer(false)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-2 overflow-y-auto">
              <div className="rounded-lg border border-border bg-muted/30 p-2 sm:p-4 min-h-full">
                <Document
                  file={resumeUrl}
                  onLoadSuccess={({ numPages: loadedPages }) => setNumPages(loadedPages)}
                  loading={<p className="text-sm text-muted-foreground text-center py-10">Loading resume...</p>}
                  error={<p className="text-sm text-destructive text-center py-10">Unable to render resume preview.</p>}
                >
                  <div className="space-y-4">
                    {Array.from({ length: numPages }, (_, index) => (
                      <div key={index} className="border border-border rounded-md bg-background overflow-hidden flex justify-center">
                        <Page
                          pageNumber={index + 1}
                          width={pageWidth}
                          renderAnnotationLayer
                          renderTextLayer
                        />
                      </div>
                    ))}
                  </div>
                </Document>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ResumeSection;
