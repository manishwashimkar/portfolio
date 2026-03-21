import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
    <h2 className="section-title">{title}</h2>
    <p className="section-subtitle">{description}</p>
  </motion.div>
);

export default SectionHeading;

