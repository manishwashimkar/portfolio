import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-accent/60 sm:w-14" />
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm sm:tracking-[0.3em]">
        {eyebrow}
      </p>
    </div>
    <h2 className="section-title">{title}</h2>
    <p className="section-subtitle">{description}</p>
  </motion.div>
);

export default SectionHeading;
